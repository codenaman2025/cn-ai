import { Search, Bell, Menu, X, Sun, Moon, LogOut, User, Settings } from "lucide-react";
import { useState } from "react";
import logo from '../../assets/logo.png';
import { useTheme } from "../../hooks/useTheme";
import { Link, useLocation,useNavigate  } from "react-router-dom";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const navLinks = [
    { label: "Home", path: "/feed" },
    { label: "Videos", path: "/videos" },
    { label: "Jobs", path: "/jobs" },
    { label: "Network", path: "/network" },
    { label: "Messages", path: "/messages" },
    { label: "Chat", path: "/chat" },
    { label: "Profile", path: "/profile" },
  ];
  const handleLogout = () => {
    console.log("Logged out");
    navigate("/");
  };

  return (
    <nav className="h-16 bg-logo-dark border-b border-white/10 flex items-center px-4 justify-between relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="Code Naman" className="w-10 h-10" />
        {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Find your desired job"
            className="pl-10 pr-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-logo-mid text-sm w-64"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        </div>
      </div>
      </div>
      <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm ${
                location.pathname === link.path
                  ? "text-white font-semibold border-b-2 border-logo-mid"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      {/* Right: Icons */}
      <div className="flex items-center gap-4">
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
        <Bell className="text-gray-400 w-5 h-5 cursor-pointer" />
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={()=>setProfileMenuOpen(!profileMenuOpen)}
            className="bg-logo-mid w-8 h-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-white"
          >
            CN
          </button>
          {profileMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-lg shadow-lg py-1 z-50">
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10"
                onClick={() => setProfileMenuOpen(false)}
              >
                <User className="w-4 h-4" /> View Profile
              </Link>
              <Link
                to="/settings"
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10"
                onClick={() => setProfileMenuOpen(false)}
              >
                <Settings className="w-4 h-4" /> Settings
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-white/10 w-full text-left"
              >
                <LogOut className="w-4 h-4" /> Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-400 hover:text-white"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-16 left-0 w-full bg-logo-dark border-t border-white/10 flex flex-col p-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={`py-2 text-sm ${
                location.pathname === link.path
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
