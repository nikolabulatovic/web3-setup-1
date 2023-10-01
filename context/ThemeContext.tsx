import { ReactNode, createContext } from 'react';

import { useStickyState } from '@/hooks/useStickyState';

type Theme = 'light' | 'dark';

interface ThemeProviderValue {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const defaultValue: ThemeProviderValue = {
  theme: 'light',
  toggleTheme: () => void 0,
};

const ThemeContext = createContext<ThemeProviderValue>(defaultValue);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Check if the user's preferred color scheme is dark
  const colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkMode = colorSchemeQuery.matches;

  // Define the initial theme based on whether the user prefers dark mode or not
  const [theme, setTheme] = useStickyState<Theme>(
    'swarm-theme',
    prefersDarkMode ? 'dark' : 'light',
  );
  // Set the data-theme attribute on the <html> element to reflect the current theme
  document.documentElement.setAttribute('data-theme', theme!);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme: theme!, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}

export default ThemeContext;
