import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-transparent dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          🧠 What Are We Building?
        </h2>
        <div className="max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
          <p className="mb-4">
            Code Naman is not just another freelancing or job-hunting site — it’s a bold step toward building India’s first AI-powered tech social network where developers, recruiters, freelancers, and tech learners can connect, collaborate, hire, and grow together in a single unified platform.
          </p>
          <p>
            We're combining the best parts of platforms like LinkedIn, Upwork, and GitHub, but with a unique AI-first approach. Here’s what makes Code Naman different:
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;