import { createContext, useState, useContext, useEffect } from 'react';

// Define highly unique and harmonious legal themes with distinct personalities
export const legalThemes = [
  // Midnight Justice - Deep blue professional
  { 
    name: 'شب‌عدالت', 
    primary: '#1E40AF', 
    secondary: '#0F1419',
    gradient: 'linear-gradient(135deg, #1E40AF, #3B82F6, #1D4ED8)',
    accent: '#60A5FA',
    textPrimary: '#FFFFFF',
    textSecondary: '#E0E7FF',
    textMuted: '#A5B4FC',
    textAccent: '#C7D2FE',
    muted: 'rgba(30, 64, 175, 0.12)',
    border: 'rgba(30, 64, 175, 0.20)',
    shadow: '0 4px 25px rgba(30, 64, 175, 0.15)',
    hoverGlow: '0 0 25px rgba(30, 64, 175, 0.4)',
    surfaceDark: '#0A0E1A',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #1E40AF, #3B82F6, #1D4ED8)',
  },
  // Platinum Authority - Sophisticated silver-gray
  { 
    name: 'اقتدار پلاتین', 
    primary: '#52525B', 
    secondary: '#18181B',
    gradient: 'linear-gradient(135deg, #52525B, #71717A, #6B7280)',
    accent: '#9CA3AF',
    textPrimary: '#FAFAFA',
    textSecondary: '#F4F4F5',
    textMuted: '#D4D4D8',
    textAccent: '#E4E4E7',
    muted: 'rgba(82, 82, 91, 0.12)',
    border: 'rgba(82, 82, 91, 0.20)',
    shadow: '0 4px 25px rgba(82, 82, 91, 0.15)',
    hoverGlow: '0 0 25px rgba(82, 82, 91, 0.4)',
    surfaceDark: '#0F0F0F',
    surfaceLight: '#27272A',
    badgeGradient: 'linear-gradient(to right, #52525B, #71717A, #6B7280)',
  },
  // Crimson Law - Bold burgundy red
  { 
    name: 'قانون سرخ', 
    primary: '#B91C1C', 
    secondary: '#1A0A0A',
    gradient: 'linear-gradient(135deg, #B91C1C, #DC2626, #EF4444)',
    accent: '#F87171',
    textPrimary: '#FFFFFF',
    textSecondary: '#FEF2F2',
    textMuted: '#FECACA',
    textAccent: '#FCA5A5',
    muted: 'rgba(185, 28, 28, 0.12)',
    border: 'rgba(185, 28, 28, 0.20)',
    shadow: '0 4px 25px rgba(185, 28, 28, 0.15)',
    hoverGlow: '0 0 25px rgba(185, 28, 28, 0.4)',
    surfaceDark: '#0F0505',
    surfaceLight: '#2D1B1B',
    badgeGradient: 'linear-gradient(to right, #B91C1C, #DC2626, #EF4444)',
  },
  // Emerald Justice - Rich emerald green
  { 
    name: 'عدالت زمردی', 
    primary: '#059669', 
    secondary: '#0A1F19',
    gradient: 'linear-gradient(135deg, #059669, #10B981, #34D399)',
    accent: '#6EE7B7',
    textPrimary: '#FFFFFF',
    textSecondary: '#ECFDF5',
    textMuted: '#A7F3D0',
    textAccent: '#D1FAE5',
    muted: 'rgba(5, 150, 105, 0.12)',
    border: 'rgba(5, 150, 105, 0.20)',
    shadow: '0 4px 25px rgba(5, 150, 105, 0.15)',
    hoverGlow: '0 0 25px rgba(5, 150, 105, 0.4)',
    surfaceDark: '#051F14',
    surfaceLight: '#1B2E26',
    badgeGradient: 'linear-gradient(to right, #059669, #10B981, #34D399)',
  },
  // Obsidian Power - Ultimate black authority
  { 
    name: 'قدرت سیاه', 
    primary: '#374151', 
    secondary: '#000000',
    gradient: 'linear-gradient(135deg, #374151, #4B5563, #6B7280)',
    accent: '#9CA3AF',
    textPrimary: '#FFFFFF',
    textSecondary: '#F9FAFB',
    textMuted: '#E5E7EB',
    textAccent: '#F3F4F6',
    muted: 'rgba(55, 65, 81, 0.12)',
    border: 'rgba(55, 65, 81, 0.20)',
    shadow: '0 4px 25px rgba(55, 65, 81, 0.15)',
    hoverGlow: '0 0 25px rgba(55, 65, 81, 0.4)',
    surfaceDark: '#000000',
    surfaceLight: '#1F2937',
    badgeGradient: 'linear-gradient(to right, #374151, #4B5563, #6B7280)',
  },
  // Royal Violet - Majestic purple
  { 
    name: 'بنفش شاهانه', 
    primary: '#7C3AED', 
    secondary: '#1E1B4B',
    gradient: 'linear-gradient(135deg, #7C3AED, #8B5CF6, #A78BFA)',
    accent: '#C4B5FD',
    textPrimary: '#FFFFFF',
    textSecondary: '#F5F3FF',
    textMuted: '#E0E7FF',
    textAccent: '#DDD6FE',
    muted: 'rgba(124, 58, 237, 0.12)',
    border: 'rgba(124, 58, 237, 0.20)',
    shadow: '0 4px 25px rgba(124, 58, 237, 0.15)',
    hoverGlow: '0 0 25px rgba(124, 58, 237, 0.4)',
    surfaceDark: '#0F0A1E',
    surfaceLight: '#312E81',
    badgeGradient: 'linear-gradient(to right, #7C3AED, #8B5CF6, #A78BFA)',
  },
  // Golden Prestige - Luxurious amber gold
  { 
    name: 'طلایی اعتبار', 
    primary: '#D97706', 
    secondary: '#1C1917',
    gradient: 'linear-gradient(135deg, #D97706, #F59E0B, #FCD34D)',
    accent: '#FDE68A',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFFBEB',
    textMuted: '#FEF3C7',
    textAccent: '#FDE68A',
    muted: 'rgba(217, 119, 6, 0.12)',
    border: 'rgba(217, 119, 6, 0.20)',
    shadow: '0 4px 25px rgba(217, 119, 6, 0.15)',
    hoverGlow: '0 0 25px rgba(217, 119, 6, 0.4)',
    surfaceDark: '#1C1917',
    surfaceLight: '#292524',
    badgeGradient: 'linear-gradient(to right, #D97706, #F59E0B, #FCD34D)',
  },
  // Ocean Counsel - Professional teal
  { 
    name: 'مشاور اقیانوس', 
    primary: '#0891B2', 
    secondary: '#164E63',
    gradient: 'linear-gradient(135deg, #0891B2, #06B6D4, #67E8F9)',
    accent: '#A5F3FC',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0FDFA',
    textMuted: '#CCFBF1',
    textAccent: '#99F6E4',
    muted: 'rgba(8, 145, 178, 0.12)',
    border: 'rgba(8, 145, 178, 0.20)',
    shadow: '0 4px 25px rgba(8, 145, 178, 0.15)',
    hoverGlow: '0 0 25px rgba(8, 145, 178, 0.4)',
    surfaceDark: '#0C4A6E',
    surfaceLight: '#0E7490',
    badgeGradient: 'linear-gradient(to right, #0891B2, #06B6D4, #67E8F9)',
  },
  // Azure Authority - Professional sky blue
  { 
    name: 'اقتدار آسمانی', 
    primary: '#0284C7', 
    secondary: '#082F49',
    gradient: 'linear-gradient(135deg, #0284C7, #0EA5E9, #38BDF8)',
    accent: '#7DD3FC',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0F9FF',
    textMuted: '#BAE6FD',
    textAccent: '#93C5FD',
    muted: 'rgba(2, 132, 199, 0.12)',
    border: 'rgba(2, 132, 199, 0.20)',
    shadow: '0 4px 25px rgba(2, 132, 199, 0.15)',
    hoverGlow: '0 0 25px rgba(2, 132, 199, 0.4)',
    surfaceDark: '#0C2340',
    surfaceLight: '#1E3A8A',
    badgeGradient: 'linear-gradient(to right, #0284C7, #0EA5E9, #38BDF8)',
  },
  // Steel Advocate - Modern charcoal
  { 
    name: 'مدافع فولادی', 
    primary: '#475569', 
    secondary: '#0F172A',
    gradient: 'linear-gradient(135deg, #475569, #64748B, #94A3B8)',
    accent: '#CBD5E1',
    textPrimary: '#FFFFFF',
    textSecondary: '#F8FAFC',
    textMuted: '#E2E8F0',
    textAccent: '#F1F5F9',
    muted: 'rgba(71, 85, 105, 0.12)',
    border: 'rgba(71, 85, 105, 0.20)',
    shadow: '0 4px 25px rgba(71, 85, 105, 0.15)',
    hoverGlow: '0 0 25px rgba(71, 85, 105, 0.4)',
    surfaceDark: '#020617',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #475569, #64748B, #94A3B8)',
  },
  // Indigo Magistrate - Deep indigo authority
  { 
    name: 'قاضی نیلی', 
    primary: '#4338CA', 
    secondary: '#1E1B4B',
    gradient: 'linear-gradient(135deg, #4338CA, #6366F1, #818CF8)',
    accent: '#A5B4FC',
    textPrimary: '#FFFFFF',
    textSecondary: '#EEF2FF',
    textMuted: '#C7D2FE',
    textAccent: '#E0E7FF',
    muted: 'rgba(67, 56, 202, 0.12)',
    border: 'rgba(67, 56, 202, 0.20)',
    shadow: '0 4px 25px rgba(67, 56, 202, 0.15)',
    hoverGlow: '0 0 25px rgba(67, 56, 202, 0.4)',
    surfaceDark: '#1E1B4B',
    surfaceLight: '#312E81',
    badgeGradient: 'linear-gradient(to right, #4338CA, #6366F1, #818CF8)',
  },
  // Rose Defender - Sophisticated rose
  { 
    name: 'مدافع گلی', 
    primary: '#E11D48', 
    secondary: '#1F1419',
    gradient: 'linear-gradient(135deg, #E11D48, #F43F5E, #FB7185)',
    accent: '#FBBF24',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFF1F2',
    textMuted: '#FECDD3',
    textAccent: '#FCE7E6',
    muted: 'rgba(225, 29, 72, 0.12)',
    border: 'rgba(225, 29, 72, 0.20)',
    shadow: '0 4px 25px rgba(225, 29, 72, 0.15)',
    hoverGlow: '0 0 25px rgba(225, 29, 72, 0.4)',
    surfaceDark: '#0F0A0D',
    surfaceLight: '#2D1B3E',
    badgeGradient: 'linear-gradient(to right, #E11D48, #F43F5E, #FB7185)',
  },
];

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedTheme = localStorage.getItem('vakilim-theme-index');
    return savedTheme !== null ? parseInt(savedTheme, 10) : 0; // Default to Midnight Justice theme
  });

  const currentTheme = legalThemes[themeIndex];

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
      themes: legalThemes, 
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