import React, { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { FaTachometerAlt, FaNewspaper, FaImages, FaPen, FaSignOutAlt, FaBuilding } from 'react-icons/fa';

const AdminLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/admin/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
    };

    if (!isAuthenticated) return null;

    const navItems = [
        { path: '/admin', icon: <FaTachometerAlt />, label: 'Dashboard' },
        { path: '/admin/news', icon: <FaNewspaper />, label: 'News & Events' },
        { path: '/admin/gallery', icon: <FaImages />, label: 'Gallery' },
        { path: '/admin/departments', icon: <FaBuilding className="text-sm" />, label: 'Departments' },
        { path: '/admin/content', icon: <FaPen />, label: 'Page Content' },
    ];

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-gray-900 text-white flex flex-col shadow-2xl">
                <div className="p-6 border-b border-gray-800 bg-black/20">
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center">
                        <span className="text-gcem-gold mr-2 text-3xl italic">/</span>GEC Admin
                    </h1>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-semibold">Content Management System</p>
                </div>
                <nav className="flex-1 p-4">
                    <ul className="space-y-1.5">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 group ${location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path))
                                        ? 'bg-gcem-maroon text-white shadow-lg'
                                        : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                                        }`}
                                >
                                    <span className={`transition-transform duration-300 ${location.pathname === item.path ? 'scale-110' : 'group-hover:scale-110'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium tracking-wide">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 px-4 py-2 text-red-400 hover:text-red-300 w-full hover:bg-gray-800 rounded transition"
                    >
                        <FaSignOutAlt />
                        <span>Logout</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AdminLayout;
