import React,{useState} from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import LoginModal from "./ui/LoginModal"; 
import RegistrationModal from "./ui/RegistrationModal"; 
const Header = ({ theme, toggleTheme, isMenuOpen, toggleMenu }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const openRegister = () => setIsRegisterOpen(true);
  const closeRegister = () => setIsRegisterOpen(false);
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
      </div>
      <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-gray-600" />
            )}
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => setIsLoginOpen(true)}
            className="ml-2 px-5 py-2 bg-gradient-to-r from-logo-start via-logo-mid to-logo-end text-white rounded-lg shadow hover:shadow-[0_0_20px_#7078F9] transition-all duration-300"
          >
            Connect
          </button>
        </div>
        <LoginModal
          isOpen={isLoginOpen}
          closeModal={closeLogin}
          openRegister={() => {
            closeLogin();
            openRegister();
          }}
        />

        <RegistrationModal
          isOpen={isRegisterOpen}
          closeModal={closeRegister}
          openLogin={() => {
            closeRegister();
            openLogin();
          }}
        />
    </header>
  );
};

export default Header;