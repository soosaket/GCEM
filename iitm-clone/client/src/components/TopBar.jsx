import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="bg-iitm-maroon text-white text-xs py-2 hidden md:block">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-iitm-gold transition">Faculty</a>
                    <a href="#" className="hover:text-iitm-gold transition">Staff</a>
                    <a href="#" className="hover:text-iitm-gold transition">Students</a>
                    <a href="#" className="hover:text-iitm-gold transition">Alumni</a>
                    <a href="#" className="hover:text-iitm-gold transition">Parents</a>
                    <a href="#" className="hover:text-iitm-gold transition">Media</a>
                    <a href="#" className="hover:text-iitm-gold transition">Contact</a>
                </div>
                <div className="flex space-x-3 items-center">
                    <div className="flex space-x-3 pr-4 border-r border-white/30">
                        <a href="#" className="hover:text-iitm-gold transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-iitm-gold transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-iitm-gold transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-iitm-gold transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-iitm-gold transition"><FaYoutube /></a>
                    </div>
                    <a href="#" className="hover:text-iitm-gold transition font-semibold pl-2">Login</a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
