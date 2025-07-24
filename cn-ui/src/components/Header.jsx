import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

const Header = ({ theme, toggleTheme, isMenuOpen, toggleMenu }) => {
  return (
    <header className="py-4 px-6 md:px-12 flex justify-between items-center relative z-10">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo} // Your provided logo image
          alt="Company Logo"
          className="w-12 h-12 "
        />
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          Code Naman
        </span>
      </div>

      {/* Desktop Navigation and Universal Controls */}
      <div className="flex items-center space-x-8">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {/* Apply gradient on hover using bg-clip-text and text-transparent */}
          <a
            href="#home"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            About
          </a>
          <a
            href="#features"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            FAQ
          </a>
          <a
            href="#uniqueness"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            Uniqueness
          </a>
          <a
            href="#comparison"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            Comparison
          </a>
          <a
            href="#market"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            Market
          </a>
          <a
            href="#founder"
            className="text-lg font-medium transition-colors duration-200
                       hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:bg-clip-text hover:text-transparent"
          >
            Founder
          </a>
        </nav>

        {/* Theme Toggle Button (always visible) */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Mobile Menu Button (only visible on mobile) */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 md:hidden"
          aria-label="Open menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;