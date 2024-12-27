import { useState, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/storage';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => 
    loadFromLocalStorage('darkMode') ?? 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    saveToLocalStorage('darkMode', isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  return [isDark, setIsDark] as const;
};