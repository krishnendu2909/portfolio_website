// contexts/ThemeContext.tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Theme = 'lava' | 'ocean' | 'forest' | 'cosmic';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themes: {
    [key in Theme]: {
      name: string;
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
      border: string;
    };
  };
}

const themes = {
  lava: {
    name: 'Lava',
    primary: '#ff6b35',
    secondary: '#ff8e53',
    accent: '#ffab73',
    background: '#0a0a0a',
    text: '#ffffff',
    border: '#ff6b35'
  },
  ocean: {
    name: 'Ocean',
    primary: '#0ea5e9',
    secondary: '#38bdf8',
    accent: '#7dd3fc',
    background: '#0f172a',
    text: '#f8fafc',
    border: '#0ea5e9'
  },
  forest: {
    name: 'Forest',
    primary: '#22c55e',
    secondary: '#4ade80',
    accent: '#86efac',
    background: '#0f1419',
    text: '#f0fdf4',
    border: '#22c55e'
  },
  cosmic: {
    name: 'Cosmic',
    primary: '#8b5cf6',
    secondary: '#a78bfa',
    accent: '#c4b5fd',
    background: '#1e1b4b',
    text: '#f3f4f6',
    border: '#8b5cf6'
  }
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('lava');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    } else {
      // Set default theme to 'lava' if no saved theme exists
      setTheme('lava');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    
    // Update CSS custom properties
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      const currentTheme = themes[theme];
    
      root.style.setProperty('--theme-primary', currentTheme.primary);
      root.style.setProperty('--theme-secondary', currentTheme.secondary);
      root.style.setProperty('--theme-accent', currentTheme.accent);
      root.style.setProperty('--theme-background', currentTheme.background);
      root.style.setProperty('--theme-text', currentTheme.text);
      root.style.setProperty('--theme-border', currentTheme.border);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
