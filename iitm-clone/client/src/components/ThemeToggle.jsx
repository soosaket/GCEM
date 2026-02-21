import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gcem-gold hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center w-10 h-10 group"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        >
            {theme === 'light' ? (
                <FaMoon className="text-gray-600 transition-transform group-hover:rotate-12" />
            ) : (
                <FaSun className="text-gcem-gold transition-transform group-hover:rotate-90" />
            )}
        </button>
    );
};

export default ThemeToggle;
