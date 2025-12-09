import { createContext, useContext, useState, useMemo, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import '@emotion/react';
import { defaultConfig, generateTheme } from './themeData';
import type { ThemeConfig, AppTheme } from './themeData';

// Re-export types for convenience
export type { ThemeConfig, AppTheme } from './themeData';

// ============================================================================
// EMOTION TYPE DECLARATION
// ============================================================================

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}

// ============================================================================
// CONTEXT
// ============================================================================

interface ThemeContextType {
  config: ThemeConfig;
  theme: AppTheme;
  updateConfig: (updates: Partial<ThemeConfig>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'starterpack-theme-config';

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Load from localStorage on initial mount
  const [config, setConfig] = useState<ThemeConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error('Failed to load theme from localStorage:', error);
    }
    return defaultConfig;
  });
  
  const theme = useMemo(() => generateTheme(config), [config]);
  
  // Debounced save to localStorage
  const saveTimeoutRef = useRef<number | undefined>(undefined);
  
  useEffect(() => {
    // Clear any pending save
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }
    
    // Schedule save for 500ms after last change
    saveTimeoutRef.current = window.setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
        console.log('Theme saved to localStorage');
      } catch (error) {
        console.error('Failed to save theme to localStorage:', error);
      }
    }, 500);
    
    // Cleanup on unmount
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [config]);
  
  const updateConfig = (updates: Partial<ThemeConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };
  
  return (
    <ThemeContext.Provider value={{ config, theme, updateConfig }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}

// ============================================================================
// EMOTION BRIDGE (connects your context to Emotion's styled())
// ============================================================================

function EmotionBridge({ children }: { children: ReactNode }) {
  const { theme } = useTheme();
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  );
}

// ============================================================================
// ALL-IN-ONE WRAPPER (this is what you use in main.tsx)
// ============================================================================

export function ThemeProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <EmotionBridge>
        {children}
      </EmotionBridge>
    </ThemeProvider>
  );
}
