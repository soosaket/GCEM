import React from 'react';
import { Link } from 'react-router-dom';
import { FaNewspaper, FaImages, FaPen, FaArrowRight } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* News Card */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500 hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-4">
                        <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                            <FaNewspaper size={24} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">News & Events</h3>
                    <p className="text-gray-600 mb-4">Manage homepage news cards, announcements, and events.</p>
                    <Link to="/admin/news" className="text-blue-600 font-semibold hover:text-blue-800 flex items-center">
                        Manage News <FaArrowRight className="ml-2" />
                    </Link>
                </div>

                {/* Gallery Card */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-4">
                        <div className="p-3 bg-green-100 rounded-full text-green-600">
                            <FaImages size={24} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Photo Gallery</h3>
                    <p className="text-gray-600 mb-4">Upload and manage photos for the Campus Life section.</p>
                    <Link to="/admin/gallery" className="text-green-600 font-semibold hover:text-green-800 flex items-center">
                        Manage Gallery <FaArrowRight className="ml-2" />
                    </Link>
                </div>

                {/* Content Card */}
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-4">
                        <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                            <FaPen size={24} />
                        </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Page Content</h3>
                    <p className="text-gray-600 mb-4">Edit titles, subtitles, and other generic text on the site.</p>
                    <Link to="/admin/content" className="text-purple-600 font-semibold hover:text-purple-800 flex items-center">
                        Edit Content <FaArrowRight className="ml-2" />
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
