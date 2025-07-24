import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <main id="home" className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-16 text-center z-10">
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500 animate-gradient-text">
          AI-Powered Tech Social Network
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Connecting Skilled Engineers with Verified Jobs, Freelance Projects & Knowledge Sharing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Changed button to an anchor tag for redirection */}
          <a
            href="https://chat.whatsapp.com/IwSsBpSTH6T8WdxSa8upQ1"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Recommended for security when using target="_blank"
            className="animate-gradient-text flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-4 focus:ring-purple-400"
          >
            Join Our Community
            <ArrowRight className="ml-2" size={20} />
          </a>
          <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-500 dark:text-blue-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-400">
            Explore Opportunities
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;