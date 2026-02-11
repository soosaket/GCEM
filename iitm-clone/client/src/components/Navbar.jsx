import React, { useState, useEffect } from 'react';
import { FaSearch, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

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
        <div className="bg-white w-full z-40 relative">
            {/* Branding Section (Middle Bar) */}
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center bg-white border-b border-gray-200">
                {/* Left: IITM Logo */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png"
                        alt="IIT Madras Logo"
                        className="h-16 mr-4"
                    />
                    <div className="text-gray-800">
                        <h1 className="text-xl font-bold leading-none">भारतीय प्रौद्योगिकी संस्थान मद्रास</h1>
                        <h2 className="text-lg font-semibold">Indian Institute of Technology Madras</h2>
                    </div>
                </div>

                {/* Right: G20, IoE, Actions */}
                <div className="flex items-center space-x-6">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/G20_India_2023_logo.svg/2560px-G20_India_2023_logo.svg.png"
                        alt="G20 Logo"
                        className="h-12"
                    />
                    <div className="border border-red-600 text-red-600 px-3 py-1 rounded text-sm font-semibold flex items-center">
                        An Institute of Eminence
                        <span className="ml-2 text-xs">⭐</span>
                    </div>
                    <a href="#" className="font-bold text-gray-800 hover:text-iitm-maroon flex items-center">
                        Give to IITM <span className="ml-1 text-red-500">↻</span>
                    </a>
                    <a href="#" className="font-bold text-gray-800 hover:text-iitm-maroon flex items-center">
                        Search on IITM <FaSearch className="ml-2 text-red-600" />
                    </a>
                </div>
            </div>

            {/* Navigation Bar (Bottom Bar) */}
            <nav className={`w-full bg-white border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'fixed top-0 shadow-md z-50' : 'relative'}`}>
                <div className="container mx-auto px-4">
                    <div className="hidden lg:flex justify-center items-center py-3 space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                <a
                                    href={link.href}
                                    className="text-gray-800 font-medium hover:text-iitm-maroon transition text-base flex items-center whitespace-nowrap"
                                >
                                    {link.name}
                                    {link.hasDropdown && <FaChevronDown size={10} className="ml-1 text-gray-500 group-hover:text-iitm-maroon" />}
                                </a>

                                {/* Dropdown Menu (Hover) */}
                                {link.hasDropdown && (
                                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0 w-48 bg-white shadow-xl rounded-b-md border-t-2 border-iitm-maroon opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                        <ul className="py-2 text-sm text-gray-700">
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-iitm-maroon">Overview</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-iitm-maroon">Departments</a></li>
                                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-iitm-maroon">Faculty</a></li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="lg:hidden flex justify-between items-center py-3">
                        <span className="font-bold text-gray-800">Menu</span>
                        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800">
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 border-b border-gray-100 text-gray-800 font-medium hover:bg-gray-50 hover:text-iitm-maroon"
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
