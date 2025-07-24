import React from 'react';
import { X } from 'lucide-react';

const MobileMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-50 dark:bg-black z-40 transform ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out md:hidden`}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-full bg-gray-200 dark:bg-neutral-700 text-gray-700 dark:text-gray-200 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      <nav className="flex flex-col items-center space-y-8 text-2xl font-bold">
        <a onClick={toggleMenu} href="#home" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">Home</a>
        <a onClick={toggleMenu} href="#about" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">About</a>
        <a onClick={toggleMenu} href="#features" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">Features</a>
        <a onClick={toggleMenu} href="#how-it-works" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">How It Works</a>
        <a onClick={toggleMenu} href="#faq" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">FAQ</a>
        <a onClick={toggleMenu} href="#uniqueness" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">Uniqueness</a>
        <a onClick={toggleMenu} href="#comparison" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">Comparison</a>
        <a onClick={toggleMenu} href="#market" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">Market</a>
        <a onClick={toggleMenu} href="#founder" className="hover:text-purple-500 dark:hover:text-blue-400 transition-colors duration-200">Founder</a>
      </nav>
    </div>
  );
};

export default MobileMenu;