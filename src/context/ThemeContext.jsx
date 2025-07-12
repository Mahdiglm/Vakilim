import { createContext, useState, useContext, useEffect } from 'react';

// Define professional legal themes with enhanced unique color schemes
export const legalThemes = [
  // Corporate Navy - Enhanced deep blue corporate
  { 
    name: 'شرکتی', 
    primary: '#1E3A8A', 
    secondary: '#0F1629',
    gradient: 'linear-gradient(135deg, #1E3A8A, #3B82F6, #2563EB)',
    accent: '#60A5FA',
    textPrimary: '#FFFFFF',
    textSecondary: '#E2E8F0',
    textMuted: '#94A3B8',
    textAccent: '#DBEAFE',
    muted: 'rgba(30, 58, 138, 0.12)',
    border: 'rgba(30, 58, 138, 0.20)',
    shadow: '0 4px 25px rgba(30, 58, 138, 0.15)',
    hoverGlow: '0 0 20px rgba(30, 58, 138, 0.4)',
    surfaceDark: '#020617',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #1E3A8A, #3B82F6, #2563EB)',
  },
  // Executive Charcoal - Sophisticated dark gray
  { 
    name: 'اجرایی', 
    primary: '#1F2937', 
    secondary: '#0F0F0F',
    gradient: 'linear-gradient(135deg, #1F2937, #374151, #4B5563)',
    accent: '#6B7280',
    textPrimary: '#FFFFFF',
    textSecondary: '#F9FAFB',
    textMuted: '#D1D5DB',
    textAccent: '#F3F4F6',
    muted: 'rgba(31, 41, 55, 0.12)',
    border: 'rgba(31, 41, 55, 0.20)',
    shadow: '0 4px 25px rgba(31, 41, 55, 0.15)',
    hoverGlow: '0 0 20px rgba(31, 41, 55, 0.4)',
    surfaceDark: '#030712',
    surfaceLight: '#111827',
    badgeGradient: 'linear-gradient(to right, #1F2937, #374151, #4B5563)',
  },
  // Legal Crimson - Rich burgundy legal
  { 
    name: 'قانونی', 
    primary: '#991B1B', 
    secondary: '#1A0808',
    gradient: 'linear-gradient(135deg, #991B1B, #DC2626, #EF4444)',
    accent: '#F87171',
    textPrimary: '#FFFFFF',
    textSecondary: '#FEF2F2',
    textMuted: '#FECACA',
    textAccent: '#FEE2E2',
    muted: 'rgba(153, 27, 27, 0.12)',
    border: 'rgba(153, 27, 27, 0.20)',
    shadow: '0 4px 25px rgba(153, 27, 27, 0.15)',
    hoverGlow: '0 0 20px rgba(153, 27, 27, 0.4)',
    surfaceDark: '#0C0A09',
    surfaceLight: '#1C1917',
    badgeGradient: 'linear-gradient(to right, #991B1B, #DC2626, #EF4444)',
  },
  // Judicial Emerald - Deep forest green
  { 
    name: 'قضایی', 
    primary: '#065F46', 
    secondary: '#0A0F0C',
    gradient: 'linear-gradient(135deg, #065F46, #059669, #10B981)',
    accent: '#34D399',
    textPrimary: '#FFFFFF',
    textSecondary: '#ECFDF5',
    textMuted: '#A7F3D0',
    textAccent: '#D1FAE5',
    muted: 'rgba(6, 95, 70, 0.12)',
    border: 'rgba(6, 95, 70, 0.20)',
    shadow: '0 4px 25px rgba(6, 95, 70, 0.15)',
    hoverGlow: '0 0 20px rgba(6, 95, 70, 0.4)',
    surfaceDark: '#021108',
    surfaceLight: '#14532D',
    badgeGradient: 'linear-gradient(to right, #065F46, #059669, #10B981)',
  },
  // Barrister Obsidian - Ultimate professional black
  { 
    name: 'وکیلی', 
    primary: '#0F172A', 
    secondary: '#000000',
    gradient: 'linear-gradient(135deg, #0F172A, #1E293B, #334155)',
    accent: '#475569',
    textPrimary: '#FFFFFF',
    textSecondary: '#F8FAFC',
    textMuted: '#E2E8F0',
    textAccent: '#F1F5F9',
    muted: 'rgba(15, 23, 42, 0.12)',
    border: 'rgba(15, 23, 42, 0.20)',
    shadow: '0 4px 25px rgba(15, 23, 42, 0.15)',
    hoverGlow: '0 0 20px rgba(15, 23, 42, 0.4)',
    surfaceDark: '#000000',
    surfaceLight: '#020617',
    badgeGradient: 'linear-gradient(to right, #0F172A, #1E293B, #334155)',
  },
  // Magistrate Violet - Royal purple authority
  { 
    name: 'قاضی', 
    primary: '#6B21A8', 
    secondary: '#1E0A2E',
    gradient: 'linear-gradient(135deg, #6B21A8, #8B5CF6, #A855F7)',
    accent: '#C084FC',
    textPrimary: '#FFFFFF',
    textSecondary: '#FAF5FF',
    textMuted: '#DDD6FE',
    textAccent: '#EDE9FE',
    muted: 'rgba(107, 33, 168, 0.12)',
    border: 'rgba(107, 33, 168, 0.20)',
    shadow: '0 4px 25px rgba(107, 33, 168, 0.15)',
    hoverGlow: '0 0 20px rgba(107, 33, 168, 0.4)',
    surfaceDark: '#0F0518',
    surfaceLight: '#2D1B69',
    badgeGradient: 'linear-gradient(to right, #6B21A8, #8B5CF6, #A855F7)',
  },
  // Constitutional Amber - Prestigious gold
  { 
    name: 'قانون اساسی', 
    primary: '#D97706', 
    secondary: '#1C1408',
    gradient: 'linear-gradient(135deg, #D97706, #F59E0B, #FBBF24)',
    accent: '#FCD34D',
    textPrimary: '#FFFFFF',
    textSecondary: '#FFFBEB',
    textMuted: '#FED7AA',
    textAccent: '#FEF3C7',
    muted: 'rgba(217, 119, 6, 0.12)',
    border: 'rgba(217, 119, 6, 0.20)',
    shadow: '0 4px 25px rgba(217, 119, 6, 0.15)',
    hoverGlow: '0 0 20px rgba(217, 119, 6, 0.4)',
    surfaceDark: '#0C0A09',
    surfaceLight: '#1C1917',
    badgeGradient: 'linear-gradient(to right, #D97706, #F59E0B, #FBBF24)',
  },
  // Advocate Teal - Modern professional teal
  { 
    name: 'مدافع', 
    primary: '#0F766E', 
    secondary: '#0A1414',
    gradient: 'linear-gradient(135deg, #0F766E, #14B8A6, #2DD4BF)',
    accent: '#5EEAD4',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0FDFA',
    textMuted: '#99F6E4',
    textAccent: '#CCFBF1',
    muted: 'rgba(15, 118, 110, 0.12)',
    border: 'rgba(15, 118, 110, 0.20)',
    shadow: '0 4px 25px rgba(15, 118, 110, 0.15)',
    hoverGlow: '0 0 20px rgba(15, 118, 110, 0.4)',
    surfaceDark: '#042F2E',
    surfaceLight: '#134E4A',
    badgeGradient: 'linear-gradient(to right, #0F766E, #14B8A6, #2DD4BF)',
  },
  // Counsel Azure - Professional sky blue
  { 
    name: 'مشاور', 
    primary: '#0284C7', 
    secondary: '#0C1E2E',
    gradient: 'linear-gradient(135deg, #0284C7, #0EA5E9, #38BDF8)',
    accent: '#7DD3FC',
    textPrimary: '#FFFFFF',
    textSecondary: '#F0F9FF',
    textMuted: '#BAE6FD',
    textAccent: '#E0F2FE',
    muted: 'rgba(2, 132, 199, 0.12)',
    border: 'rgba(2, 132, 199, 0.20)',
    shadow: '0 4px 25px rgba(2, 132, 199, 0.15)',
    hoverGlow: '0 0 20px rgba(2, 132, 199, 0.4)',
    surfaceDark: '#082F49',
    surfaceLight: '#0C4A6E',
    badgeGradient: 'linear-gradient(to right, #0284C7, #0EA5E9, #38BDF8)',
  },
  // Solicitor Slate - Premium silver-gray
  { 
    name: 'وکیل مدافع', 
    primary: '#475569', 
    secondary: '#0F0F14',
    gradient: 'linear-gradient(135deg, #475569, #64748B, #94A3B8)',
    accent: '#CBD5E1',
    textPrimary: '#FFFFFF',
    textSecondary: '#F8FAFC',
    textMuted: '#E2E8F0',
    textAccent: '#F1F5F9',
    muted: 'rgba(71, 85, 105, 0.12)',
    border: 'rgba(71, 85, 105, 0.20)',
    shadow: '0 4px 25px rgba(71, 85, 105, 0.15)',
    hoverGlow: '0 0 20px rgba(71, 85, 105, 0.4)',
    surfaceDark: '#020617',
    surfaceLight: '#1E293B',
    badgeGradient: 'linear-gradient(to right, #475569, #64748B, #94A3B8)',
  },
  // Attorney Indigo - Deep professional indigo
  { 
    name: 'دادرس', 
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
    hoverGlow: '0 0 20px rgba(67, 56, 202, 0.4)',
    surfaceDark: '#1E1B4B',
    surfaceLight: '#312E81',
    badgeGradient: 'linear-gradient(to right, #4338CA, #6366F1, #818CF8)',
  },
  // Prosecutor Rose - Authoritative rose
  { 
    name: 'دادستان', 
    primary: '#BE185D', 
    secondary: '#1F0A14',
    gradient: 'linear-gradient(135deg, #BE185D, #E91E63, #EC4899)',
    accent: '#F472B6',
    textPrimary: '#FFFFFF',
    textSecondary: '#FDF2F8',
    textMuted: '#FBCFE8',
    textAccent: '#FCE7F3',
    muted: 'rgba(190, 24, 93, 0.12)',
    border: 'rgba(190, 24, 93, 0.20)',
    shadow: '0 4px 25px rgba(190, 24, 93, 0.15)',
    hoverGlow: '0 0 20px rgba(190, 24, 93, 0.4)',
    surfaceDark: '#0F0A0C',
    surfaceLight: '#2D1B3E',
    badgeGradient: 'linear-gradient(to right, #BE185D, #E91E63, #EC4899)',
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