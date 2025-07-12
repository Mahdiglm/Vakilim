import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import './App.css';

// Separate component to use the theme context
const AppContent = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { currentTheme } = useTheme();

  // Set smooth scroll behavior and handle section transitions
  useEffect(() => {
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        if (!targetId) return; // Skip if empty href
        
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Update active section
          setActiveSection(targetId || 'hero');
          
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Offset for navbar
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll reveal effects with intersection observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // Get section id for active state
          const sectionId = entry.target.getAttribute('id');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    }, observerOptions);

    // Observe all sections and elements with reveal class
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('reveal-on-scroll');
      revealObserver.observe(section);
    });
    
    document.querySelectorAll('.reveal-on-scroll:not(section)').forEach(element => {
      revealObserver.observe(element);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div 
      className="min-h-screen font-vazirmatn" 
      dir="rtl"
      style={{ 
        backgroundColor: currentTheme.secondary,
        color: currentTheme.textPrimary
      }}
    >
      {/* Skip link for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        انتقال به محتوای اصلی
      </a>
      
      <Navbar activeSection={activeSection} />
      <main id="main-content" role="main">
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
