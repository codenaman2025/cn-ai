import React, { useEffect, useRef } from 'react';

const CosmicBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Determine particle color based on theme
    const particleBaseColor = theme === 'dark' ? '200, 200, 200' : '50, 50, 50'; // Lighter for dark, darker for light

    // Adjust canvas size to fit parent
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight || window.innerHeight;
    };

    // Particle properties
    const particles = [];
    const numParticles = 400; // Number of particles
    const maxDistance = 120; // Max distance for lines between particles

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1; // Random size between 1 and 3
        this.speedX = Math.random() * 0.5 - 0.25; // Random speed between -0.25 and 0.25
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `rgba(${particleBaseColor}, 0.8)`; // Dynamic color for particles
      }

      // Update particle position
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      // Draw particle
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    const init = () => {
      particles.length = 0; // Clear existing particles
      for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    };

    // Connect particles with lines
    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const p1 = particles[a];
          const p2 = particles[b];
          const distance = Math.sqrt(
            (p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y)
          );

          if (distance < maxDistance) {
            // Dynamic line color based on theme
            ctx.strokeStyle = `rgba(${particleBaseColor}, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      // Connect particles
      connect();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Event listeners
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial resize
    init(); // Initialize particles
    animate(); // Start animation

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]); // Re-run effect if theme changes to update particle colors

  return (
    <canvas ref={canvasRef} className="absolute inset-0 z-0"></canvas>
  );
};

export default CosmicBackground;