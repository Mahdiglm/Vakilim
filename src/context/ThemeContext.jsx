import { createContext, useContext, useState, useEffect } from 'react';

// Define available themes
export const themes = [
  { 
    name: 'کلاسیک', 
    primary: '#D4AF37', 
    secondary: '#000000',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#FFC700',
    gradient: 'linear-gradient(135deg, #D4AF37 0%, #FFC700 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #000000, #121212)',
    shadow: '0 4px 30px rgba(212, 175, 55, 0.3)'
  },
  { 
    name: 'پلاتینیوم', 
    primary: '#E5E4E2', 
    secondary: '#222222',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#B3B3B3',
    gradient: 'linear-gradient(135deg, #E5E4E2 0%, #C0C0C0 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #222222, #333333)',
    shadow: '0 4px 30px rgba(229, 228, 226, 0.3)'
  },
  { 
    name: 'مرجانی', 
    primary: '#FF7F50', 
    secondary: '#0C3547',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#FF6347',
    gradient: 'linear-gradient(135deg, #FF7F50 0%, #FF6347 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #0C3547, #0A2A36)',
    shadow: '0 4px 30px rgba(255, 127, 80, 0.3)'
  },
  { 
    name: 'آبی', 
    primary: '#0096FF', 
    secondary: '#001E3C',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#00BFFF',
    gradient: 'linear-gradient(135deg, #0096FF 0%, #00BFFF 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #001E3C, #00142A)',
    shadow: '0 4px 30px rgba(0, 150, 255, 0.3)'
  },
  { 
    name: 'زمرد', 
    primary: '#50C878', 
    secondary: '#004B23',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#4ADE80',
    gradient: 'linear-gradient(135deg, #50C878 0%, #4ADE80 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #004B23, #003919)',
    shadow: '0 4px 30px rgba(80, 200, 120, 0.3)'
  },
  { 
    name: 'یاقوتی', 
    primary: '#E0115F', 
    secondary: '#1A0110',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#FF0F60',
    gradient: 'linear-gradient(135deg, #E0115F 0%, #FF0F60 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #1A0110, #27011A)',
    shadow: '0 4px 30px rgba(224, 17, 95, 0.3)'
  },
  { 
    name: 'ارغوانی', 
    primary: '#800080', 
    secondary: '#180028',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#9900CC',
    gradient: 'linear-gradient(135deg, #800080 0%, #9900CC 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #180028, #24003D)',
    shadow: '0 4px 30px rgba(128, 0, 128, 0.3)'
  },
  { 
    name: 'برنزی', 
    primary: '#CD7F32', 
    secondary: '#2C1503',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#D2691E',
    gradient: 'linear-gradient(135deg, #CD7F32 0%, #D2691E 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #2C1503, #3A1C03)',
    shadow: '0 4px 30px rgba(205, 127, 50, 0.3)'
  },
  { 
    name: 'شبرنگ', 
    primary: '#7DF9FF', 
    secondary: '#111827',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#00FFFF',
    gradient: 'linear-gradient(135deg, #7DF9FF 0%, #00FFFF 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #111827, #0B101B)',
    shadow: '0 4px 30px rgba(125, 249, 255, 0.3)'
  },
  { 
    name: 'بنفش', 
    primary: '#9B59B6', 
    secondary: '#1C0C29',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#8E44AD',
    gradient: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #1C0C29, #28113D)',
    shadow: '0 4px 30px rgba(155, 89, 182, 0.3)'
  },
  { 
    name: 'فیروزه‌ای', 
    primary: '#30D5C8', 
    secondary: '#00332B',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#40E0D0',
    gradient: 'linear-gradient(135deg, #30D5C8 0%, #40E0D0 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #00332B, #005048)',
    shadow: '0 4px 30px rgba(48, 213, 200, 0.3)'
  },
  { 
    name: 'نارنجی', 
    primary: '#FF8C00', 
    secondary: '#331C00',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E0E0',
    accent: '#FFA500',
    gradient: 'linear-gradient(135deg, #FF8C00 0%, #FFA500 100%)',
    backgroundGradient: 'linear-gradient(to bottom, #331C00, #442500)',
    shadow: '0 4px 30px rgba(255, 140, 0, 0.3)'
  },
];

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(0); // Default to the first theme (Classic)
  const currentTheme = themes[themeIndex];

  // Apply theme to document root
  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', currentTheme.primary);
    document.documentElement.style.setProperty('--color-secondary', currentTheme.secondary);
    document.documentElement.style.setProperty('--color-text-primary', currentTheme.textPrimary);
    document.documentElement.style.setProperty('--color-text-secondary', currentTheme.textSecondary);
    document.documentElement.style.setProperty('--color-accent', currentTheme.accent);
    document.documentElement.style.setProperty('--gradient-primary', currentTheme.gradient);
    document.documentElement.style.setProperty('--gradient-background', currentTheme.backgroundGradient);
    document.documentElement.style.setProperty('--shadow-primary', currentTheme.shadow);
    
    // Update body background
    document.body.style.background = currentTheme.backgroundGradient;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, themeIndex, setThemeIndex, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext; 