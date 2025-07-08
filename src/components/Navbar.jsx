import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection = 'hero' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true); // Default to dark theme

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

  // Toggle theme function
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    // In a real implementation, this would update global theme state
    // For development purposes, just toggle the state
  };

  // Navigation links
  const navLinks = [
    { name: 'خانه', href: '#', section: 'hero' },
    { name: 'خدمات', href: '#services', section: 'services' },
    { name: 'نظرات', href: '#testimonials', section: 'testimonials' },
    { name: 'تماس با ما', href: '#contact', section: 'contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-black/80 backdrop-blur-md border-b border-gold/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)]' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">وکیلیم</span>
          {scrolled && (
            <motion.span 
              initial={{ width: 0 }} 
              animate={{ width: '100%' }} 
              transition={{ duration: 0.3 }}
              className="absolute -bottom-1 right-0 h-px bg-gradient-to-r from-gold/30 via-gold to-gold/30"
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
                className={`text-sm tracking-wide py-1 relative group transition-all duration-300 ${
                  activeSection === link.section 
                    ? 'text-gold' 
                    : 'text-gray-300 hover:text-gold'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute -bottom-px right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent transition-all duration-300 ease-out ${
                    activeSection === link.section 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Theme Toggle Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={toggleTheme}
          className="relative p-2 rounded-full bg-black/30 border border-gold/30 backdrop-blur-sm group"
          aria-label="Toggle theme"
        >
          {darkTheme ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold group-hover:text-yellow-300 transition-colors">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gold group-hover:text-yellow-300 transition-colors">
              <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
            </svg>
          )}
          <span className="absolute inset-0 rounded-full bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </motion.button>

        {/* Mobile menu button */}
        <div className="md:hidden ml-4 rtl:ml-0 rtl:mr-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gold hover:text-gold/80 transition-colors"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            <div className="w-6 h-6 flex flex-col justify-center items-center relative">
              <span 
                className={`w-5 h-0.5 bg-gold absolute transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}
              />
              <span 
                className={`w-5 h-0.5 bg-gold absolute transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`w-5 h-0.5 bg-gold absolute transform transition-all duration-300 ease-in-out ${mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}
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
              className="fixed top-0 bottom-0 right-0 w-64 bg-black/90 backdrop-blur-md border-l border-gold/10 shadow-[-5px_0_30px_rgba(0,0,0,0.5)] z-50"
            >
              <div className="flex flex-col h-full">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b border-gold/10">
                  <span className="text-lg font-medium text-gold">منو</span>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full bg-black/40 border border-gold/20"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gold">
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
                          className={`block py-2.5 px-3 rounded-lg transition-all duration-200 ${
                            activeSection === link.section 
                              ? 'bg-gold/10 text-gold' 
                              : 'text-gray-300 hover:bg-black/40 hover:text-gold'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Theme toggle */}
                <div className="p-4 border-t border-gold/10">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">تغییر تم</span>
                    <button 
                      onClick={toggleTheme}
                      className="flex items-center space-x-2 rtl:space-x-reverse"
                    >
                      <span className="text-xs text-gold">{darkTheme ? 'روشن' : 'تیره'}</span>
                      <div className="w-8 h-4 bg-black/50 rounded-full border border-gold/20 relative">
                        <div 
                          className={`absolute top-0.5 w-3 h-3 rounded-full bg-gold transition-all duration-300 ${
                            darkTheme ? 'right-0.5' : 'right-[calc(100%-0.875rem)]'
                          }`}
                        />
                      </div>
                    </button>
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