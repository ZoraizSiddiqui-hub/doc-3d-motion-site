import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Set dark theme as default
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      html.classList.add('light');
    } else {
      html.classList.add('dark');
      html.classList.remove('light');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 hover:bg-primary/30 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary group-hover:rotate-180 transition-transform duration-300" />
      ) : (
        <Moon className="w-5 h-5 text-primary group-hover:rotate-180 transition-transform duration-300" />
      )}
    </button>
  );
};