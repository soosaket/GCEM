import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Academics', href: '#', hasDropdown: true },
        { name: 'Research', href: '#', hasDropdown: true },
        { name: 'Innovation', href: '#', hasDropdown: true },
        { name: 'Research Park', href: '#', hasDropdown: true },
        { name: 'Happenings', href: '#', hasDropdown: true },
        { name: 'Recognitions', href: '#', hasDropdown: true },
        { name: 'Campus Life', href: '#', hasDropdown: true },
        { name: 'Careers', href: '#', hasDropdown: true },
        { name: 'The Institute', href: '#', hasDropdown: true },
    ];

    return (
        <div className="bg-white dark:bg-gray-950 w-full z-40 relative transition-colors duration-300">
            {/* Branding Section (Middle Bar) */}
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                {/* Left: GEC Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img
                        src="/gcemlogo.png"
                        alt="Government Engineering College Madhubani Logo"
                        className="h-24 mr-4 dark:brightness-110"
                    />
                    <div className="text-gray-800 dark:text-gray-100">
                        <h1 className="text-2xl font-bold leading-none text-gray-900 dark:text-white">Government Engineering College Madhubani</h1>
                        <h2 className="text-sm font-medium text-blue-600 dark:text-gcem-gold mt-1">( Dept. of Science, Technology & Technical Education, Govt. Of Bihar )</h2>
                    </div>
                </div>

                {/* Right: G20, IoE, Actions */}
                <div className="flex items-center space-x-6">
                    <img
                        src="/G20.jpg?v=1"
                        alt="G20 Logo"
                        className="h-20 dark:grayscale dark:invert dark:opacity-80"
                    />
                    <div className="hidden xl:flex border border-red-600 dark:border-gcem-gold text-red-600 dark:text-gcem-gold px-3 py-1 rounded text-sm font-semibold items-center">
                        An Institute of Eminence
                        <span className="ml-2 text-xs">⭐</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="hidden sm:flex font-bold text-gray-800 dark:text-gray-300 hover:text-gcem-maroon dark:hover:text-gcem-gold items-center text-sm">
                            Give to GCEM <span className="ml-1 text-red-500">↻</span>
                        </a>
                        <a href="#" className="hidden sm:flex font-bold text-gray-800 dark:text-gray-300 hover:text-gcem-maroon dark:hover:text-gcem-gold items-center text-sm">
                            Search on GCEM <FaSearch className="ml-2 text-red-600 dark:text-gcem-gold" />
                        </a>
                        <div className="pl-2 border-l border-gray-200 dark:border-gray-700 hidden lg:block">
                            {/* Theme toggle moved to bottom nav */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Bar (Bottom Bar) */}
            <nav className={`w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 transition-all duration-300 ${isScrolled ? 'fixed top-0 shadow-md z-50' : 'relative'}`}>
                <div className="container mx-auto px-4">
                    <div className="hidden lg:flex justify-center items-center py-3 space-x-8">
                        <div className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <div key={link.name} className="relative group">
                                    <a
                                        href={link.href}
                                        className="text-gray-800 dark:text-gray-200 font-medium hover:text-gcem-maroon dark:hover:text-gcem-gold transition text-base flex items-center whitespace-nowrap"
                                    >
                                        {link.name}
                                        {link.hasDropdown && <FaChevronDown size={10} className="ml-1 text-gray-500 group-hover:text-gcem-maroon dark:group-hover:text-gcem-gold" />}
                                    </a>

                                    {/* Dropdown Menu (Hover) */}
                                    {link.hasDropdown && (
                                        <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-48 bg-white dark:bg-gray-900 shadow-xl rounded-b-md border-t-2 border-gcem-maroon dark:border-gcem-gold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-300">
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gcem-maroon dark:hover:text-gcem-gold">Overview</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gcem-maroon dark:hover:text-gcem-gold">Departments</a></li>
                                                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gcem-maroon dark:hover:text-gcem-gold">Faculty</a></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Desktop Theme Toggle */}
                        <div className="ml-8 pl-8 border-l border-gray-200 dark:border-gray-800">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex justify-between items-center py-3">
                        <div className="flex items-center">
                            <span className="font-bold text-gray-800 dark:text-gray-200 mr-4">Menu</span>
                            <ThemeToggle />
                        </div>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 dark:text-gray-200">
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gcem-maroon dark:hover:text-gcem-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;
