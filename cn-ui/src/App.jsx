// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Feed from "./pages/Feed";
import JobFeedPage from "./pages/JobFeedPage";
import Home from "./pages/Home";
import ChatPage from "./pages/ChatPage";
import VideoFeed from "./pages/VideoFeedPage";

const App = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved || "dark";
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));
  const toggleMenu = () => setIsMenuOpen((m) => !m);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100 font-inter transition-colors duration-300 relative overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              theme={theme}
              toggleTheme={toggleTheme}
              isMenuOpen={isMenuOpen}
              toggleMenu={toggleMenu}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/jobs" element={<JobFeedPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/videos" element={<VideoFeed />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
