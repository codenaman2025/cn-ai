import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import Hero from './components/Hero';
import CosmicBackground from './components/CosmicBackground';
import About from './components/sections/About';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Uniqueness from './components/sections/Uniqueness';
import Comparison from './components/sections/Comparison';
import Market from './components/sections/Market';
import Founder from './components/sections/Founder';
import Footer from './components/Footer';

const App = () => {
  // State to manage the current theme (light or dark)
  const [theme, setTheme] = useState(() => {
    // Initialize theme from localStorage or default to 'dark'
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme : 'dark';
    }
    return 'dark';
  });

  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Effect to apply the theme class to the document element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      // Save the current theme to localStorage
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  // Effect to manage body overflow when mobile menu is open
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isMenuOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    }
    // Cleanup function to remove overflow-hidden when component unmounts
    return () => {
      if (typeof document !== 'undefined') {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, [isMenuOpen]);

  // Function to toggle between light and dark themes
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300 relative overflow-hidden">
     {/* <div className="min-h-screen bg-transparent dark:bg-transparent text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300 relative overflow-hidden"> */}
    
      {/* Cosmic Background */}
      <CosmicBackground theme={theme} />

      {/* Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      {/* Mobile Menu Overlay */}
      <MobileMenu
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      {/* Main Content Sections */}
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <FAQ />
      <Uniqueness />
      <Comparison />
      <Market />
      <Founder />

      
      <Footer />

      {/* Global CSS for font and general styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');

        html {
          font-family: 'Inter', sans-serif;
        }

        /* Keyframes for gradient text animation */
        @keyframes gradient-text {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-text {
          background-size: 200% auto;
          animation: gradient-text 5s ease infinite;
        }
      `}} />
    </div>
  );
};

export default App;