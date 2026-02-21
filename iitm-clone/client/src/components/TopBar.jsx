import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const TopBar = () => {
    return (
        <div className="bg-gcem-maroon text-white text-xs py-2 hidden md:block">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gcem-gold transition">Faculty</a>
                    <a href="#" className="hover:text-gcem-gold transition">Staff</a>
                    <a href="#" className="hover:text-gcem-gold transition">Students</a>
                    <a href="#" className="hover:text-gcem-gold transition">Alumni</a>
                    <a href="#" className="hover:text-gcem-gold transition">Parents</a>
                    <a href="#" className="hover:text-gcem-gold transition">Media</a>
                    <a href="#" className="hover:text-gcem-gold transition">Contact</a>
                </div>
                <div className="flex space-x-3 items-center">
                    <div className="flex space-x-3 pr-4 border-r border-white/30">
                        <a href="#" className="hover:text-gcem-gold transition"><FaFacebookF /></a>
                        <a href="#" className="hover:text-gcem-gold transition"><FaTwitter /></a>
                        <a href="#" className="hover:text-gcem-gold transition"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-gcem-gold transition"><FaInstagram /></a>
                        <a href="#" className="hover:text-gcem-gold transition"><FaYoutube /></a>
                    </div>
                    <a href="#" className="hover:text-gcem-gold transition font-semibold pl-2">Login</a>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
