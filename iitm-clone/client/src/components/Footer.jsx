import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1a1a1a] dark:bg-black text-white pt-16 pb-8 border-t-4 border-gcem-maroon dark:border-gcem-gold transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

                    {/* Column 1: Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gcem-gold uppercase tracking-wider">Contact Us</h3>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="mt-1 text-gcem-maroon" />
                                <p>Government Engineering College Madhubani,<br />Madhubani, Bihar,<br />INDIA</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaPhone className="text-gcem-maroon" />
                                <p>+91 (6276) 2XXXXX</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                <FaEnvelope className="text-gcem-maroon" />
                                <p>principal@gecmadhubani.org</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gcem-gold uppercase tracking-wider">Quick Links</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">Campus Map</a></li>
                            <li><a href="#" className="hover:text-white transition">Telephone Directory</a></li>
                            <li><a href="#" className="hover:text-white transition">Guest Houses</a></li>
                            <li><a href="#" className="hover:text-white transition">Central Library</a></li>
                            <li><a href="#" className="hover:text-white transition">Tenders</a></li>
                            <li><a href="#" className="hover:text-white transition">Webmail</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Academics */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gcem-gold uppercase tracking-wider">Academics</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-white transition">Programs</a></li>
                            <li><a href="#" className="hover:text-white transition">Departments</a></li>
                            <li><a href="#" className="hover:text-white transition">Centres of Excellence</a></li>
                            <li><a href="#" className="hover:text-white transition">Academic Calendar</a></li>
                            <li><a href="#" className="hover:text-white transition">Rule Book</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Connect */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-gcem-gold uppercase tracking-wider">Connect</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gcem-maroon transition"><FaFacebookF /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gcem-maroon transition"><FaTwitter /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gcem-maroon transition"><FaLinkedinIn /></a>
                            <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gcem-maroon transition"><FaInstagram /></a>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Subscribe to our newsletter for latest updates and news.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 text-center md:text-left">
                    <div>
                        <p>&copy; {new Date().getFullYear()} Government Engineering College Madhubani. All rights reserved.</p>
                        <p className="mt-1 text-xs opacity-60 italic">
                            made with 💗 by <a href="https://www.instagram.com/soosaket" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors underline decoration-dotted">soosaket</a>
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
