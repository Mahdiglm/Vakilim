import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ activeSection = 'hero' }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
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

        {/* CTA Button - only on desktop */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 15px rgba(212,175,55,0.3)' }}
            whileTap={{ scale: 0.98 }}
            className="text-sm px-5 py-2 rounded-full border border-gold/30 text-gold hover:border-gold/70 transition-all duration-300 bg-black/30 backdrop-blur-sm"
          >
            درخواست مشاوره
          </motion.button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
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

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gold/10"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className={`py-2 text-center transition-colors border-b border-gray-800 last:border-0 ${
                      activeSection === link.section 
                        ? 'text-gold' 
                        : 'text-gray-300 hover:text-gold'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-2 pb-3"
                >
                  <button className="w-full py-2.5 rounded-full border border-gold/30 text-gold hover:border-gold/70 transition-all duration-300 bg-black/30">
                    درخواست مشاوره
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar; 