import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import logoImg from "../../assets/images/logo-icon.png";

interface NavbarProps {
  openLogin: () => void;
}

export default function Navbar({ openLogin }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Uniqueness", href: "#uniqueness" },
    { label: "Comparison", href: "#comparison" },
    { label: "Market", href: "#market" },
    { label: "Founder", href: "#founder" },
  ];

  return (
    <header className="fixed w-full z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-8xl mx-auto px-4 flex justify-between items-center h-16">
        
        {/* Logo */}
        <div className="flex flex-row items-center gap-2">
          <img className="h-14" src={logoImg} alt="Code Naman" />
          <span className="text-md text-primary text-2xl md:text-4xl font-bold bg-logo-gradient text-transparent bg-clip-text">
            Code Naman
          </span>
        </div>

        {/* Nav Menu */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-primary transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Controls */}
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
            onClick={openLogin}
            className="ml-2 px-5 py-2 bg-gradient-to-r from-logo-start via-logo-mid to-logo-end text-white rounded-lg shadow hover:shadow-[0_0_20px_#7078F9] transition-all duration-300"
          >
            Connect
          </button>
        </div>
      </div>
    </header>
  );
}
