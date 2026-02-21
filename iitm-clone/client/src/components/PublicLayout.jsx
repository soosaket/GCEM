import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import TopBar from './TopBar';
import Announcements from './Announcements';
import Footer from './Footer';

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col font-sans transition-colors duration-300">
            <TopBar />
            <Navbar />
            <Announcements />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
