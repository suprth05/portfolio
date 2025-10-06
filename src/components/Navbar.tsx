import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-gray-900/90 backdrop-blur-xl shadow-lg'
            : 'bg-white/90 backdrop-blur-xl shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center space-x-2 group">
            <span className="text-xl font-bold bg-brand-gradient bg-clip-text text-transparent">
              suprth05
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-brand-500/15'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-brand-500/10'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`ml-4 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-brand-500 to-accent-600 text-white shadow-md hover:shadow-lg hover:brightness-105'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                darkMode
                  ? 'bg-gradient-to-r from-brand-500 to-accent-600 text-white'
                  : 'bg-gray-900 text-white'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? 'bg-gray-900/95' : 'bg-white/95'
          } backdrop-blur-xl`}
        >
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                  darkMode
                    ? 'text-gray-300 hover:bg-brand-500/15 hover:text-white'
                    : 'text-gray-700 hover:bg-brand-500/10 hover:text-gray-900'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
