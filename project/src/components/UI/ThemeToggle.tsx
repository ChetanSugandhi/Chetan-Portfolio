import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for user preference in localStorage or system preference
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setDarkMode(isDarkMode);
    
    // Apply theme class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className={`relative rounded-full w-12 h-6 flex items-center transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 ${
        darkMode ? 'bg-primary-600' : 'bg-gray-200'
      }`}
      aria-label="Toggle dark mode"
    >
      <motion.span
        className="inline-block w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300"
        animate={{ x: darkMode ? 26 : 2 }}
      />
      
      <span className="absolute left-0 ml-1 text-yellow-400 dark:text-transparent">
        <Sun size={12} />
      </span>
      
      <span className="absolute right-0 mr-1 text-transparent dark:text-blue-300">
        <Moon size={12} />
      </span>
    </motion.button>
  );
};

export default ThemeToggle;