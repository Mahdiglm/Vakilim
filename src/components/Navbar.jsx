import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, legalThemes } from '../context/ThemeContext';

const Navbar = ({ activeSection = 'hero' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showThemeOptions, setShowThemeOptions] = useState(false);
  const { currentTheme, themeIndex, setThemeIndex } = useTheme();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Toggle theme panel function
  const toggleThemePanel = () => {
    setShowThemeOptions(!showThemeOptions);
  };

  // Set specific theme
  const setTheme = (index) => {
    setThemeIndex(index);
    setShowThemeOptions(false);
  };

  // Navigation links
  const navLinks = [
    { name: 'خانه', href: '#hero', section: 'hero' },
    { name: 'خدمات', href: '#services', section: 'services' },
    { name: 'نظرات', href: '#testimonials', section: 'testimonials' },
    { name: 'تماس با ما', href: '#contact', section: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? `${currentTheme.secondary}CC` : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        borderBottom: scrolled ? `1px solid ${currentTheme.border}` : 'none',
        boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <span 
            className="text-2xl font-bold text-transparent bg-clip-text relative z-10"
            style={{ 
              backgroundImage: currentTheme.badgeGradient,
              textShadow: `0 1px 5px ${currentTheme.primary}20`,
              letterSpacing: '0.5px'
            }}
          >
            وکیلیم
          </span>
          <motion.span 
            className="absolute -inset-1 rounded-lg blur-sm opacity-15 bg-gradient-to-r"
            style={{ 
              backgroundImage: currentTheme.badgeGradient,
              filter: `blur(4px)`,
              opacity: 0.15
            }}
            animate={{ opacity: [0.1, 0.15, 0.1] }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {scrolled && (
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: '100%' }} 
              transition={{ duration: 0.3 }}
              className="absolute -bottom-1 right-0 h-px"
              style={{ 
                backgroundImage: `linear-gradient(to right, ${currentTheme.primary}30, ${currentTheme.primary}, ${currentTheme.primary}30)`
              }}
            />
          )}
        </motion.div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                className="text-sm tracking-wide py-1 relative group transition-all duration-300"
                style={{ 
                  color: activeSection === link.section 
                    ? currentTheme.primary 
                    : '#d1d5db'
                }}
              >
                {link.name}
                <span 
                  className="absolute -bottom-px right-0 h-[1px] transition-all duration-300 ease-out"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`,
                    width: activeSection === link.section ? '100%' : '0%'
                  }}
                ></span>
                <span 
                  className="absolute -bottom-px right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`,
                    width: '100%'
                  }}
                ></span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div className="relative">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={toggleThemePanel}
            className="relative p-2 rounded-full backdrop-blur-sm group"
            style={{ 
              backgroundColor: `${currentTheme.secondary}4D`,
              borderColor: currentTheme.border,
              borderWidth: '1px'
            }}
            aria-label="Toggle theme"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
              className="w-5 h-5 transition-colors"
              style={{ color: currentTheme.primary }}
            >
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
            <span 
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundColor: `${currentTheme.primary}1A` }}
            ></span>
          </motion.button>
          
          {/* Theme Selection Panel */}
          <AnimatePresence>
            {showThemeOptions && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 backdrop-blur-md rounded-lg shadow-xl py-2 z-50 w-48"
                style={{ 
                  backgroundColor: `${currentTheme.secondary}E6`,
                  borderColor: currentTheme.border,
                  borderWidth: '1px',
                  maxHeight: '300px',
                  overflowY: 'auto',
                  boxShadow: currentTheme.shadow
                }}
              >
                {legalThemes.map((theme, idx) => (
                  <div
                    key={theme.name}
                    className="px-3 py-2 flex items-center justify-between cursor-pointer transition-colors"
                    style={{ 
                      backgroundColor: themeIndex === idx ? `${theme.primary}1A` : 'transparent',
                      color: theme.primary
                    }}
                    onClick={() => setTheme(idx)}
                  >
                    <span 
                      className="text-sm"
                    >
                      {theme.name}
                    </span>
                    <div 
                      className="w-5 h-5 rounded-full"
                      style={{ 
                        background: `linear-gradient(45deg, ${theme.primary}, ${theme.accent})`,
                        border: themeIndex === idx ? `2px solid ${theme.accent}` : `1px solid ${theme.border}`,
                        boxShadow: themeIndex === idx ? theme.shadow : 'none'
                      }}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden ml-4 rtl:ml-0 rtl:mr-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="transition-colors"
            style={{ color: currentTheme.primary }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span 
                className="w-5 h-0.5 absolute transform transition-all duration-300 ease-in-out"
                style={{ 
                  backgroundColor: currentTheme.primary,
                  transform: mobileMenuOpen ? 'rotate(45deg)' : 'translateY(-6px)'
                }}
              />
              <span 
                className="w-5 h-0.5 absolute transform transition-all duration-300 ease-in-out"
                style={{ 
                  backgroundColor: currentTheme.primary,
                  opacity: mobileMenuOpen ? 0 : 1
                }}
              />
              <span 
                className="w-5 h-0.5 absolute transform transition-all duration-300 ease-in-out"
                style={{ 
                  backgroundColor: currentTheme.primary,
                  transform: mobileMenuOpen ? 'rotate(-45deg)' : 'translateY(6px)'
                }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Minimal Side Menu for Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />
            
            {/* Side Menu */}
            <motion.div
              initial={{ opacity: 1, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 1, x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 bottom-0 right-0 w-64 backdrop-blur-md shadow-[-5px_0_30px_rgba(0,0,0,0.5)] z-50"
              style={{
                backgroundColor: `${currentTheme.secondary}E6`,
                borderLeft: `1px solid ${currentTheme.border}`
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div 
                  className="flex items-center justify-between p-4"
                  style={{ borderBottom: `1px solid ${currentTheme.border}` }}
                >
                  <span 
                    className="text-lg font-medium"
                    style={{ color: currentTheme.primary }}
                  >
                    منو
                  </span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full"
                    style={{ 
                      backgroundColor: `${currentTheme.secondary}66`,
                      border: `1px solid ${currentTheme.border}`
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
                      className="w-4 h-4"
                      style={{ color: currentTheme.primary }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Navigation links */}
                <div className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-1">
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.3 }}
                      >
                        <a
                          href={link.href}
                          className="block py-2.5 px-3 rounded-lg transition-all duration-200"
                          style={{ 
                            backgroundColor: activeSection === link.section ? `${currentTheme.primary}1A` : 'transparent',
                            color: activeSection === link.section ? currentTheme.primary : '#d1d5db'
                          }}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 