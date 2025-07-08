import { createContext, useState, useContext, useEffect } from 'react';

// Define enhanced luxurious themes with improved text color variations
export const luxuryThemes = [
  // Classic Gold (enhanced)
  { 
    name: 'کلاسیک', 
    primary: '#D4AF37', 
    secondary: '#000000',
    gradient: 'linear-gradient(45deg, #D4AF37, #FFE062, #D4AF37)',
    accent: '#FFD700',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    textMuted: '#9E9E9E',
    textAccent: '#FFE699',
    muted: 'rgba(212, 175, 55, 0.2)',
    border: 'rgba(212, 175, 55, 0.3)',
    shadow: '0 4px 20px rgba(212, 175, 55, 0.15)',
    hoverGlow: '0 0 15px rgba(212, 175, 55, 0.5)',
    surfaceDark: '#0A0A0A',
    surfaceLight: '#1A1A1A',
    badgeGradient: 'linear-gradient(to right, #D4AF37, #FFE999, #D4AF37)',
  },
  // Platinum Silver (enhanced)
  { 
    name: 'پلاتینیوم', 
    primary: '#E5E4E2', 
    secondary: '#1A1A1A',
    gradient: 'linear-gradient(45deg, #C0C0C0, #E5E4E2, #C0C0C0)',
    accent: '#F5F5F5',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    textMuted: '#A0A0A0',
    textAccent: '#FFFFFF',
    muted: 'rgba(229, 228, 226, 0.2)',
    border: 'rgba(229, 228, 226, 0.3)',
    shadow: '0 4px 20px rgba(229, 228, 226, 0.15)',
    hoverGlow: '0 0 15px rgba(229, 228, 226, 0.5)',
    surfaceDark: '#0F0F0F',
    surfaceLight: '#222222',
    badgeGradient: 'linear-gradient(to right, #C0C0C0, #FFFFFF, #C0C0C0)',
  },
  // Coral Luxury (enhanced)
  { 
    name: 'مرجانی', 
    primary: '#FF7F50', 
    secondary: '#0C3547',
    gradient: 'linear-gradient(45deg, #FF7F50, #FF9F7D, #FF7F50)',
    accent: '#FFB399',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6E6E6',
    textMuted: '#A9B2B8',
    textAccent: '#FFD0C2',
    muted: 'rgba(255, 127, 80, 0.2)',
    border: 'rgba(255, 127, 80, 0.3)',
    shadow: '0 4px 20px rgba(255, 127, 80, 0.15)',
    hoverGlow: '0 0 15px rgba(255, 127, 80, 0.5)',
    surfaceDark: '#05192A',
    surfaceLight: '#0C3547',
    badgeGradient: 'linear-gradient(to right, #FF7F50, #FFBC9E, #FF7F50)',
  },
  // Royal Blue (enhanced)
  { 
    name: 'آبی', 
    primary: '#0096FF', 
    secondary: '#001E3C',
    gradient: 'linear-gradient(45deg, #0074CC, #0096FF, #0074CC)',
    accent: '#5EB8FF',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6F0FF',
    textMuted: '#9DB5CD',
    textAccent: '#B8DFFF',
    muted: 'rgba(0, 150, 255, 0.2)',
    border: 'rgba(0, 150, 255, 0.3)',
    shadow: '0 4px 20px rgba(0, 150, 255, 0.15)',
    hoverGlow: '0 0 15px rgba(0, 150, 255, 0.5)',
    surfaceDark: '#001428',
    surfaceLight: '#002A4E',
    badgeGradient: 'linear-gradient(to right, #0074CC, #59C1FF, #0074CC)',
  },
  // Emerald Elegance (enhanced)
  { 
    name: 'زمرد', 
    primary: '#50C878', 
    secondary: '#004B23',
    gradient: 'linear-gradient(45deg, #3AAA5E, #50C878, #3AAA5E)',
    accent: '#84E8A9',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6F5EB',
    textMuted: '#A0BEA9',
    textAccent: '#C0F2D2',
    muted: 'rgba(80, 200, 120, 0.2)',
    border: 'rgba(80, 200, 120, 0.3)',
    shadow: '0 4px 20px rgba(80, 200, 120, 0.15)',
    hoverGlow: '0 0 15px rgba(80, 200, 120, 0.5)',
    surfaceDark: '#00301A',
    surfaceLight: '#004B23',
    badgeGradient: 'linear-gradient(to right, #3AAA5E, #7DF5A5, #3AAA5E)',
  },
  // Ruby Radiance (enhanced)
  { 
    name: 'یاقوتی', 
    primary: '#E0115F', 
    secondary: '#1A0110',
    gradient: 'linear-gradient(45deg, #BA0D4E, #E0115F, #BA0D4E)',
    accent: '#FF5B8D',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFE6EE',
    textMuted: '#BD90A0',
    textAccent: '#FFBFD2',
    muted: 'rgba(224, 17, 95, 0.2)',
    border: 'rgba(224, 17, 95, 0.3)',
    shadow: '0 4px 20px rgba(224, 17, 95, 0.15)',
    hoverGlow: '0 0 15px rgba(224, 17, 95, 0.5)',
    surfaceDark: '#0E0108',
    surfaceLight: '#260119',
    badgeGradient: 'linear-gradient(to right, #BA0D4E, #FF5B8D, #BA0D4E)',
  },
  // Royal Purple (enhanced)
  { 
    name: 'ارغوانی', 
    primary: '#800080', 
    secondary: '#180028',
    gradient: 'linear-gradient(45deg, #660066, #800080, #660066)',
    accent: '#B366B3',
    textPrimary: '#FFFFFF',
    textSecondary: '#F2E6F2',
    textMuted: '#A98CB1',
    textAccent: '#E0B0E0',
    muted: 'rgba(128, 0, 128, 0.2)',
    border: 'rgba(128, 0, 128, 0.3)',
    shadow: '0 4px 20px rgba(128, 0, 128, 0.15)',
    hoverGlow: '0 0 15px rgba(128, 0, 128, 0.5)',
    surfaceDark: '#0E0014',
    surfaceLight: '#280028',
    badgeGradient: 'linear-gradient(to right, #660066, #CC66CC, #660066)',
  },
  // Bronze Age (enhanced)
  { 
    name: 'برنزی', 
    primary: '#CD7F32', 
    secondary: '#2C1503',
    gradient: 'linear-gradient(45deg, #A66628, #CD7F32, #A66628)',
    accent: '#E9A264',
    textPrimary: '#FFFFFF',
    textSecondary: '#F5EDE6',
    textMuted: '#BEA99A',
    textAccent: '#F2D0B0',
    muted: 'rgba(205, 127, 50, 0.2)',
    border: 'rgba(205, 127, 50, 0.3)',
    shadow: '0 4px 20px rgba(205, 127, 50, 0.15)',
    hoverGlow: '0 0 15px rgba(205, 127, 50, 0.5)',
    surfaceDark: '#1A0C01',
    surfaceLight: '#2C1503',
    badgeGradient: 'linear-gradient(to right, #A66628, #F7BE81, #A66628)',
  },
  // Cyan Glow (enhanced)
  { 
    name: 'شبرنگ', 
    primary: '#7DF9FF', 
    secondary: '#111827',
    gradient: 'linear-gradient(45deg, #5EEAEF, #7DF9FF, #5EEAEF)',
    accent: '#A0FBFF',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6F9FA',
    textMuted: '#8DA5B6',
    textAccent: '#C2FEFF',
    muted: 'rgba(125, 249, 255, 0.2)',
    border: 'rgba(125, 249, 255, 0.3)',
    shadow: '0 4px 20px rgba(125, 249, 255, 0.15)',
    hoverGlow: '0 0 15px rgba(125, 249, 255, 0.5)',
    surfaceDark: '#0B101B',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #5EEAEF, #A0FBFF, #5EEAEF)',
  },
  // Amethyst Violet (enhanced)
  { 
    name: 'بنفش', 
    primary: '#9B59B6', 
    secondary: '#1C0C29',
    gradient: 'linear-gradient(45deg, #8E44AD, #9B59B6, #8E44AD)',
    accent: '#C39BD3',
    textPrimary: '#FFFFFF',
    textSecondary: '#F2E9F5',
    textMuted: '#A99AAD',
    textAccent: '#E3C8EF',
    muted: 'rgba(155, 89, 182, 0.2)',
    border: 'rgba(155, 89, 182, 0.3)',
    shadow: '0 4px 20px rgba(155, 89, 182, 0.15)',
    hoverGlow: '0 0 15px rgba(155, 89, 182, 0.5)',
    surfaceDark: '#110619',
    surfaceLight: '#2D1343',
    badgeGradient: 'linear-gradient(to right, #8E44AD, #D2A5EC, #8E44AD)',
  },
  // Turquoise Luxury (enhanced)
  { 
    name: 'فیروزه‌ای', 
    primary: '#30D5C8', 
    secondary: '#00332B',
    gradient: 'linear-gradient(45deg, #28B4A9, #30D5C8, #28B4A9)',
    accent: '#7EEAE1',
    textPrimary: '#FFFFFF',
    textSecondary: '#E6F5F4',
    textMuted: '#95B8B5',
    textAccent: '#B3F4EE',
    muted: 'rgba(48, 213, 200, 0.2)',
    border: 'rgba(48, 213, 200, 0.3)',
    shadow: '0 4px 20px rgba(48, 213, 200, 0.15)',
    hoverGlow: '0 0 15px rgba(48, 213, 200, 0.5)',
    surfaceDark: '#001A16',
    surfaceLight: '#004D40',
    badgeGradient: 'linear-gradient(to right, #28B4A9, #7EEAE1, #28B4A9)',
  },
  // Amber Glow (enhanced)
  { 
    name: 'نارنجی', 
    primary: '#FF8C00', 
    secondary: '#331C00',
    gradient: 'linear-gradient(45deg, #E67E00, #FF8C00, #E67E00)',
    accent: '#FFAD4C',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFF1E6',
    textMuted: '#C1A88A',
    textAccent: '#FFD9B3',
    muted: 'rgba(255, 140, 0, 0.2)',
    border: 'rgba(255, 140, 0, 0.3)',
    shadow: '0 4px 20px rgba(255, 140, 0, 0.15)',
    hoverGlow: '0 0 15px rgba(255, 140, 0, 0.5)',
    surfaceDark: '#1F1100',
    surfaceLight: '#4D2A00',
    badgeGradient: 'linear-gradient(to right, #E67E00, #FFBD66, #E67E00)',
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
    root.style.setProperty('--text-primary', currentTheme.textPrimary);
    root.style.setProperty('--text-secondary', currentTheme.textSecondary);
    root.style.setProperty('--text-muted', currentTheme.textMuted);
    root.style.setProperty('--text-accent', currentTheme.textAccent);
    root.style.setProperty('--muted', currentTheme.muted);
    root.style.setProperty('--border', currentTheme.border);
    root.style.setProperty('--shadow', currentTheme.shadow);
    root.style.setProperty('--hover-glow', currentTheme.hoverGlow);
    root.style.setProperty('--surface-dark', currentTheme.surfaceDark);
    root.style.setProperty('--surface-light', currentTheme.surfaceLight);
    root.style.setProperty('--badge-gradient', currentTheme.badgeGradient);
    
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