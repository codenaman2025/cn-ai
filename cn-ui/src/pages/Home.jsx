// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import CosmicBackground from "../components/CosmicBackground";
import Header from "../components/Header";
import MobileMenu from "../components/MobileMenu";
import Hero from "../components/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";
import FAQ from "../components/sections/FAQ";
import Uniqueness from "../components/sections/Uniqueness";
import Comparison from "../components/sections/Comparison";
import Market from "../components/sections/Market";
import Founder from "../components/sections/Founder";
import NamanChatWidget from "../components/feed/Right/NamanBotCard";
import CandidateInterestMCodal from "../components/CandidateInterestModal";
export default function Home({theme,toggleTheme,isMenuOpen,toggleMenu}) {
  return (
    <>
      <CosmicBackground theme={theme} />
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />
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
      <NamanChatWidget />
    </>
  );
}
