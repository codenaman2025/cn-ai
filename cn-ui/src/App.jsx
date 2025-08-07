// App.js
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import MobileMenu from './components/MobileMenu';
import CosmicBackground from './components/CosmicBackground';
import Hero from './components/Hero';
import About from './components/sections/About';
import Features from './components/sections/Features';
import HowItWorks from './components/sections/HowItWorks';
import FAQ from './components/sections/FAQ';
import Uniqueness from './components/sections/Uniqueness';
import Comparison from './components/sections/Comparison';
import Market from './components/sections/Market';
import Founder from './components/sections/Founder';
import Footer from './components/Footer';
import Profile from './components/pages/Profile';


const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
    return () => document.body.classList.remove('overflow-hidden');
  }, [isMenuOpen]);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));
  const toggleMenu = () => setIsMenuOpen(m => !m);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300 relative overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CosmicBackground theme={theme} />
              <Header theme={theme} toggleTheme={toggleTheme} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <MobileMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
              <Hero />
              <About />
              <Features />
              <HowItWorks />
              <FAQ />
              <Uniqueness />
              <Comparison />
              <Market />
              <Founder />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
