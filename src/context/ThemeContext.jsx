import { createContext, useState, useContext, useEffect } from 'react';

// Define professional legal themes with sophisticated color schemes
export const legalThemes = [
  // Corporate Navy - Professional dark blue
  { 
    name: 'شرکتی', 
    primary: '#1E3A8A', 
    secondary: '#0F172A',
    gradient: 'linear-gradient(135deg, #1E3A8A, #3B82F6, #1E40AF)',
    accent: '#3B82F6',
    textPrimary: '#FFFFFF',
    textSecondary: '#E2E8F0',
    textMuted: '#94A3B8',
    textAccent: '#BFDBFE',
    muted: 'rgba(30, 58, 138, 0.15)',
    border: 'rgba(30, 58, 138, 0.25)',
    shadow: '0 4px 25px rgba(30, 58, 138, 0.12)',
    hoverGlow: '0 0 20px rgba(30, 58, 138, 0.4)',
    surfaceDark: '#020617',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #1E3A8A, #3B82F6, #1E40AF)',
  },
  // Executive Gray - Sophisticated gray palette
  { 
    name: 'اجرایی', 
    primary: '#374151', 
    secondary: '#111827',
    gradient: 'linear-gradient(135deg, #374151, #6B7280, #4B5563)',
    accent: '#6B7280',
    textPrimary: '#FFFFFF',
    textSecondary: '#F3F4F6',
    textMuted: '#9CA3AF',
    textAccent: '#E5E7EB',
    muted: 'rgba(55, 65, 81, 0.15)',
    border: 'rgba(55, 65, 81, 0.25)',
    shadow: '0 4px 25px rgba(55, 65, 81, 0.12)',
    hoverGlow: '0 0 20px rgba(55, 65, 81, 0.4)',
    surfaceDark: '#030712',
    surfaceLight: '#1F2937',
    badgeGradient: 'linear-gradient(to right, #374151, #6B7280, #4B5563)',
  },
  // Legal Burgundy - Professional burgundy
  { 
    name: 'قانونی', 
    primary: '#7C2D12', 
    secondary: '#1C1917',
    gradient: 'linear-gradient(135deg, #7C2D12, #DC2626, #991B1B)',
    accent: '#DC2626',
    textPrimary: '#FFFFFF',
    textSecondary: '#FEF2F2',
    textMuted: '#FCA5A5',
    textAccent: '#FECACA',
    muted: 'rgba(124, 45, 18, 0.15)',
    border: 'rgba(124, 45, 18, 0.25)',
    shadow: '0 4px 25px rgba(124, 45, 18, 0.12)',
    hoverGlow: '0 0 20px rgba(124, 45, 18, 0.4)',
    surfaceDark: '#0C0A09',
    surfaceLight: '#292524',
    badgeGradient: 'linear-gradient(to right, #7C2D12, #DC2626, #991B1B)',
  },
  // Judicial Green - Professional deep green
  { 
    name: 'قضایی', 
    primary: '#14532D', 
    secondary: '#0F1419',
    gradient: 'linear-gradient(135deg, #14532D, #16A34A, #15803D)',
    accent: '#16A34A',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0FDF4',
    textMuted: '#86EFAC',
    textAccent: '#BBF7D0',
    muted: 'rgba(20, 83, 45, 0.15)',
    border: 'rgba(20, 83, 45, 0.25)',
    shadow: '0 4px 25px rgba(20, 83, 45, 0.12)',
    hoverGlow: '0 0 20px rgba(20, 83, 45, 0.4)',
    surfaceDark: '#021108',
    surfaceLight: '#1A202C',
    badgeGradient: 'linear-gradient(to right, #14532D, #16A34A, #15803D)',
  },
  // Barrister Black - Ultimate professional black
  { 
    name: 'وکیلی', 
    primary: '#1F2937', 
    secondary: '#000000',
    gradient: 'linear-gradient(135deg, #1F2937, #4B5563, #374151)',
    accent: '#4B5563',
    textPrimary: '#FFFFFF',
    textSecondary: '#F9FAFB',
    textMuted: '#D1D5DB',
    textAccent: '#F3F4F6',
    muted: 'rgba(31, 41, 55, 0.15)',
    border: 'rgba(31, 41, 55, 0.25)',
    shadow: '0 4px 25px rgba(31, 41, 55, 0.12)',
    hoverGlow: '0 0 20px rgba(31, 41, 55, 0.4)',
    surfaceDark: '#000000',
    surfaceLight: '#0F172A',
    badgeGradient: 'linear-gradient(to right, #1F2937, #4B5563, #374151)',
  },
  // Magistrate Purple - Professional purple
  { 
    name: 'قاضی', 
    primary: '#581C87', 
    secondary: '#1A0B2E',
    gradient: 'linear-gradient(135deg, #581C87, #7C3AED, #6D28D9)',
    accent: '#7C3AED',
    textPrimary: '#FFFFFF',
    textSecondary: '#FAF5FF',
    textMuted: '#C4B5FD',
    textAccent: '#DDD6FE',
    muted: 'rgba(88, 28, 135, 0.15)',
    border: 'rgba(88, 28, 135, 0.25)',
    shadow: '0 4px 25px rgba(88, 28, 135, 0.12)',
    hoverGlow: '0 0 20px rgba(88, 28, 135, 0.4)',
    surfaceDark: '#0F0518',
    surfaceLight: '#2D1B69',
    badgeGradient: 'linear-gradient(to right, #581C87, #7C3AED, #6D28D9)',
  },
  // Constitutional Gold - Professional gold
  { 
    name: 'قانون اساسی', 
    primary: '#B45309', 
    secondary: '#1C1917',
    gradient: 'linear-gradient(135deg, #B45309, #F59E0B, #D97706)',
    accent: '#F59E0B',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFFBEB',
    textMuted: '#FDE68A',
    textAccent: '#FEF3C7',
    muted: 'rgba(180, 83, 9, 0.15)',
    border: 'rgba(180, 83, 9, 0.25)',
    shadow: '0 4px 25px rgba(180, 83, 9, 0.12)',
    hoverGlow: '0 0 20px rgba(180, 83, 9, 0.4)',
    surfaceDark: '#0C0A09',
    surfaceLight: '#292524',
    badgeGradient: 'linear-gradient(to right, #B45309, #F59E0B, #D97706)',
  },
  // Advocate Teal - Professional teal
  { 
    name: 'مدافع', 
    primary: '#0F766E', 
    secondary: '#134E4A',
    gradient: 'linear-gradient(135deg, #0F766E, #14B8A6, #0D9488)',
    accent: '#14B8A6',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0FDFA',
    textMuted: '#5EEAD4',
    textAccent: '#99F6E4',
    muted: 'rgba(15, 118, 110, 0.15)',
    border: 'rgba(15, 118, 110, 0.25)',
    shadow: '0 4px 25px rgba(15, 118, 110, 0.12)',
    hoverGlow: '0 0 20px rgba(15, 118, 110, 0.4)',
    surfaceDark: '#042F2E',
    surfaceLight: '#1E40AF',
    badgeGradient: 'linear-gradient(to right, #0F766E, #14B8A6, #0D9488)',
  },
  // Counsel Blue - Professional light blue
  { 
    name: 'مشاور', 
    primary: '#0369A1', 
    secondary: '#0C4A6E',
    gradient: 'linear-gradient(135deg, #0369A1, #0EA5E9, #0284C7)',
    accent: '#0EA5E9',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0F9FF',
    textMuted: '#7DD3FC',
    textAccent: '#BAE6FD',
    muted: 'rgba(3, 105, 161, 0.15)',
    border: 'rgba(3, 105, 161, 0.25)',
    shadow: '0 4px 25px rgba(3, 105, 161, 0.12)',
    hoverGlow: '0 0 20px rgba(3, 105, 161, 0.4)',
    surfaceDark: '#082F49',
    surfaceLight: '#0F172A',
    badgeGradient: 'linear-gradient(to right, #0369A1, #0EA5E9, #0284C7)',
  },
  // Solicitor Silver - Professional silver
  { 
    name: 'وکیل مدافع', 
    primary: '#475569', 
    secondary: '#0F172A',
    gradient: 'linear-gradient(135deg, #475569, #64748B, #52525B)',
    accent: '#64748B',
    textPrimary: '#FFFFFF',
    textSecondary: '#F8FAFC',
    textMuted: '#CBD5E1',
    textAccent: '#E2E8F0',
    muted: 'rgba(71, 85, 105, 0.15)',
    border: 'rgba(71, 85, 105, 0.25)',
    shadow: '0 4px 25px rgba(71, 85, 105, 0.12)',
    hoverGlow: '0 0 20px rgba(71, 85, 105, 0.4)',
    surfaceDark: '#020617',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #475569, #64748B, #52525B)',
  },
  // Attorney Indigo - Professional indigo
  { 
    name: 'دادرس', 
    primary: '#4338CA', 
    secondary: '#1E1B4B',
    gradient: 'linear-gradient(135deg, #4338CA, #6366F1, #5B21B6)',
    accent: '#6366F1',
    textPrimary: '#FFFFFF',
    textSecondary: '#EEF2FF',
    textMuted: '#C7D2FE',
    textAccent: '#E0E7FF',
    muted: 'rgba(67, 56, 202, 0.15)',
    border: 'rgba(67, 56, 202, 0.25)',
    shadow: '0 4px 25px rgba(67, 56, 202, 0.12)',
    hoverGlow: '0 0 20px rgba(67, 56, 202, 0.4)',
    surfaceDark: '#1E1B4B',
    surfaceLight: '#312E81',
    badgeGradient: 'linear-gradient(to right, #4338CA, #6366F1, #5B21B6)',
  },
  // Prosecutor Rose - Professional rose
  { 
    name: 'دادستان', 
    primary: '#9F1239', 
    secondary: '#1F1019',
    gradient: 'linear-gradient(135deg, #9F1239, #E11D48, #BE123C)',
    accent: '#E11D48',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFF1F2',
    textMuted: '#FECDD3',
    textAccent: '#FCE7E6',
    muted: 'rgba(159, 18, 57, 0.15)',
    border: 'rgba(159, 18, 57, 0.25)',
    shadow: '0 4px 25px rgba(159, 18, 57, 0.12)',
    hoverGlow: '0 0 20px rgba(159, 18, 57, 0.4)',
    surfaceDark: '#0F0A0C',
    surfaceLight: '#2D1B3E',
    badgeGradient: 'linear-gradient(to right, #9F1239, #E11D48, #BE123C)',
  },
];

// Create context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState(() => {
    const savedTheme = localStorage.getItem('vakilim-theme-index');
    return savedTheme !== null ? parseInt(savedTheme, 10) : 0; // Default to Corporate Navy theme
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