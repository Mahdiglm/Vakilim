import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { themes, currentTheme, themeIndex, setThemeIndex } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'خانه', href: '#home', id: 'home' },
    { name: 'خدمات', href: '#services', id: 'services' },
    { name: 'تجربه', href: '#experience', id: 'experience' },
    { name: 'تماس', href: '#contact', id: 'contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/80 backdrop-blur-md py-2' 
        : 'bg-transparent py-3'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo - Minimal on mobile */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">⚖</span>
            </div>
            <span className="text-lg font-bold text-white hidden sm:block">
              وکیلیم
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Theme Selector & Mobile Menu */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {/* Theme Selector - Minimal on mobile */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center hover:border-white/40 transition-all duration-200"
                style={{ backgroundColor: currentTheme.primary }}
              >
                <span className="text-white text-xs">🎨</span>
              </button>
              
              {/* Theme Dropdown - Optimized for mobile */}
              {themeDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-black/90 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 overflow-hidden">
                  <div className="p-2 max-h-64 overflow-y-auto">
                    {themes.map((theme, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setThemeIndex(index);
                          setThemeDropdownOpen(false);
                        }}
                        className={`w-full flex items-center space-x-3 rtl:space-x-reverse p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 ${
                          themeIndex === index ? 'bg-white/10' : ''
                        }`}
                      >
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: theme.primary }}
                        />
                        <span className="text-white text-sm font-medium">
                          {theme.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button - Minimal */}
            <button
              className="md:hidden w-8 h-8 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}></span>
                <span className={`w-full h-0.5 bg-white transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Minimal overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-white/10">
            <div className="p-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left text-white/80 hover:text-white py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 