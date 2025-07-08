import { createContext, useState, useContext, useEffect } from 'react';

// Define luxurious themes
export const luxuryThemes = [
  // Classic Gold (unchanged)
  { 
    name: 'کلاسیک', 
    primary: '#D4AF37', 
    secondary: '#000000',
    gradient: 'linear-gradient(90deg, #D4AF37, #FFE062, #D4AF37)',
    accent: '#FFD700',
    muted: 'rgba(212, 175, 55, 0.2)',
    border: 'rgba(212, 175, 55, 0.3)',
    shadow: '0 4px 20px rgba(212, 175, 55, 0.15)',
    hoverGlow: '0 0 15px rgba(212, 175, 55, 0.5)',
    surfaceDark: '#0A0A0A',
    surfaceLight: '#1A1A1A',
  },
  // Platinum Silver
  { 
    name: 'پلاتینیوم', 
    primary: '#E5E4E2', 
    secondary: '#1A1A1A',
    gradient: 'linear-gradient(90deg, #C0C0C0, #E5E4E2, #C0C0C0)',
    accent: '#F5F5F5',
    muted: 'rgba(229, 228, 226, 0.2)',
    border: 'rgba(229, 228, 226, 0.3)',
    shadow: '0 4px 20px rgba(229, 228, 226, 0.15)',
    hoverGlow: '0 0 15px rgba(229, 228, 226, 0.5)',
    surfaceDark: '#0F0F0F',
    surfaceLight: '#222222',
  },
  // Coral Luxury
  { 
    name: 'مرجانی', 
    primary: '#FF7F50', 
    secondary: '#0C3547',
    gradient: 'linear-gradient(90deg, #FF7F50, #FF9F7D, #FF7F50)',
    accent: '#FFB399',
    muted: 'rgba(255, 127, 80, 0.2)',
    border: 'rgba(255, 127, 80, 0.3)',
    shadow: '0 4px 20px rgba(255, 127, 80, 0.15)',
    hoverGlow: '0 0 15px rgba(255, 127, 80, 0.5)',
    surfaceDark: '#05192A',
    surfaceLight: '#0C3547',
  },
  // Royal Blue
  { 
    name: 'آبی', 
    primary: '#0096FF', 
    secondary: '#001E3C',
    gradient: 'linear-gradient(90deg, #0074CC, #0096FF, #0074CC)',
    accent: '#5EB8FF',
    muted: 'rgba(0, 150, 255, 0.2)',
    border: 'rgba(0, 150, 255, 0.3)',
    shadow: '0 4px 20px rgba(0, 150, 255, 0.15)',
    hoverGlow: '0 0 15px rgba(0, 150, 255, 0.5)',
    surfaceDark: '#001428',
    surfaceLight: '#002A4E',
  },
  // Emerald Elegance
  { 
    name: 'زمرد', 
    primary: '#50C878', 
    secondary: '#004B23',
    gradient: 'linear-gradient(90deg, #3AAA5E, #50C878, #3AAA5E)',
    accent: '#84E8A9',
    muted: 'rgba(80, 200, 120, 0.2)',
    border: 'rgba(80, 200, 120, 0.3)',
    shadow: '0 4px 20px rgba(80, 200, 120, 0.15)',
    hoverGlow: '0 0 15px rgba(80, 200, 120, 0.5)',
    surfaceDark: '#00301A',
    surfaceLight: '#004B23',
  },
  // Ruby Radiance
  { 
    name: 'یاقوتی', 
    primary: '#E0115F', 
    secondary: '#1A0110',
    gradient: 'linear-gradient(90deg, #BA0D4E, #E0115F, #BA0D4E)',
    accent: '#FF5B8D',
    muted: 'rgba(224, 17, 95, 0.2)',
    border: 'rgba(224, 17, 95, 0.3)',
    shadow: '0 4px 20px rgba(224, 17, 95, 0.15)',
    hoverGlow: '0 0 15px rgba(224, 17, 95, 0.5)',
    surfaceDark: '#0E0108',
    surfaceLight: '#260119',
  },
  // Royal Purple
  { 
    name: 'ارغوانی', 
    primary: '#800080', 
    secondary: '#180028',
    gradient: 'linear-gradient(90deg, #660066, #800080, #660066)',
    accent: '#B366B3',
    muted: 'rgba(128, 0, 128, 0.2)',
    border: 'rgba(128, 0, 128, 0.3)',
    shadow: '0 4px 20px rgba(128, 0, 128, 0.15)',
    hoverGlow: '0 0 15px rgba(128, 0, 128, 0.5)',
    surfaceDark: '#0E0014',
    surfaceLight: '#280028',
  },
  // Bronze Age
  { 
    name: 'برنزی', 
    primary: '#CD7F32', 
    secondary: '#2C1503',
    gradient: 'linear-gradient(90deg, #A66628, #CD7F32, #A66628)',
    accent: '#E9A264',
    muted: 'rgba(205, 127, 50, 0.2)',
    border: 'rgba(205, 127, 50, 0.3)',
    shadow: '0 4px 20px rgba(205, 127, 50, 0.15)',
    hoverGlow: '0 0 15px rgba(205, 127, 50, 0.5)',
    surfaceDark: '#1A0C01',
    surfaceLight: '#2C1503',
  },
  // Cyan Glow
  { 
    name: 'شبرنگ', 
    primary: '#7DF9FF', 
    secondary: '#111827',
    gradient: 'linear-gradient(90deg, #5EEAEF, #7DF9FF, #5EEAEF)',
    accent: '#A0FBFF',
    muted: 'rgba(125, 249, 255, 0.2)',
    border: 'rgba(125, 249, 255, 0.3)',
    shadow: '0 4px 20px rgba(125, 249, 255, 0.15)',
    hoverGlow: '0 0 15px rgba(125, 249, 255, 0.5)',
    surfaceDark: '#0B101B',
    surfaceLight: '#1E293B',
  },
  // Amethyst Violet
  { 
    name: 'بنفش', 
    primary: '#9B59B6', 
    secondary: '#1C0C29',
    gradient: 'linear-gradient(90deg, #8E44AD, #9B59B6, #8E44AD)',
    accent: '#C39BD3',
    muted: 'rgba(155, 89, 182, 0.2)',
    border: 'rgba(155, 89, 182, 0.3)',
    shadow: '0 4px 20px rgba(155, 89, 182, 0.15)',
    hoverGlow: '0 0 15px rgba(155, 89, 182, 0.5)',
    surfaceDark: '#110619',
    surfaceLight: '#2D1343',
  },
  // Turquoise Luxury
  { 
    name: 'فیروزه‌ای', 
    primary: '#30D5C8', 
    secondary: '#00332B',
    gradient: 'linear-gradient(90deg, #28B4A9, #30D5C8, #28B4A9)',
    accent: '#7EEAE1',
    muted: 'rgba(48, 213, 200, 0.2)',
    border: 'rgba(48, 213, 200, 0.3)',
    shadow: '0 4px 20px rgba(48, 213, 200, 0.15)',
    hoverGlow: '0 0 15px rgba(48, 213, 200, 0.5)',
    surfaceDark: '#001A16',
    surfaceLight: '#004D40',
  },
  // Amber Glow
  { 
    name: 'نارنجی', 
    primary: '#FF8C00', 
    secondary: '#331C00',
    gradient: 'linear-gradient(90deg, #E67E00, #FF8C00, #E67E00)',
    accent: '#FFAD4C',
    muted: 'rgba(255, 140, 0, 0.2)',
    border: 'rgba(255, 140, 0, 0.3)',
    shadow: '0 4px 20px rgba(255, 140, 0, 0.15)',
    hoverGlow: '0 0 15px rgba(255, 140, 0, 0.5)',
    surfaceDark: '#1F1100',
    surfaceLight: '#4D2A00',
  },
];

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedTheme = localStorage.getItem('vakilim-theme-index');
    return savedTheme !== null ? parseInt(savedTheme, 10) : 0; // Default to Classic theme
  });

  const currentTheme = luxuryThemes[themeIndex];

  // Apply theme to document root
  useEffect(() => {
    const root = document.documentElement;
    
    // Store theme selection in localStorage
    localStorage.setItem('vakilim-theme-index', themeIndex);
    
    // Apply CSS variables
    root.style.setProperty('--primary', currentTheme.primary);
    root.style.setProperty('--secondary', currentTheme.secondary);
    root.style.setProperty('--gradient', currentTheme.gradient);
    root.style.setProperty('--accent', currentTheme.accent);
    root.style.setProperty('--muted', currentTheme.muted);
    root.style.setProperty('--border', currentTheme.border);
    root.style.setProperty('--shadow', currentTheme.shadow);
    root.style.setProperty('--hover-glow', currentTheme.hoverGlow);
    root.style.setProperty('--surface-dark', currentTheme.surfaceDark);
    root.style.setProperty('--surface-light', currentTheme.surfaceLight);
    
    // Update scrollbar colors
    document.body.style.setProperty('--scrollbar-thumb', currentTheme.muted);
    document.body.style.setProperty('--scrollbar-thumb-hover', currentTheme.primary);
    
  }, [themeIndex, currentTheme]);

  return (
    <ThemeContext.Provider value={{ 
      themes: luxuryThemes, 
      currentTheme, 
      themeIndex, 
      setThemeIndex 
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 