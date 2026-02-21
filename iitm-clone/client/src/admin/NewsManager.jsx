import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus } from 'react-icons/fa';

const NewsManager = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        date: '',
        category: 'Awards',
        summary: '',
        image: ''
    });

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setNews(data);
            } else {
                console.error("News data is not an array:", data);
            }
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setFormData({ title: '', date: '', category: 'Awards', summary: '', image: '' });
                fetchNews();
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news/${id}`, {
                    method: 'DELETE'
                });
                if (res.ok) fetchNews();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">News & Events Manager</h2>

            {/* Add New Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center"><FaPlus className="mr-2" /> Add New Item</h3>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        name="date"
                        placeholder="Date (e.g., July 15, 2024)"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        className="p-2 border rounded"
                    />
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="p-2 border rounded"
                    >
                        <option value="Awards">Awards</option>
                        <option value="Research">Research</option>
                        <option value="Events">Events</option>
                        <option value="Announcements">Announcements</option>
                    </select>
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL (http://...)"
                        value={formData.image}
                        onChange={handleInputChange}
                        required
                        className="p-2 border rounded"
                    />
                    <textarea
                        name="summary"
                        placeholder="Short Summary"
                        value={formData.summary}
                        onChange={handleInputChange}
                        required
                        className="p-2 border rounded md:col-span-2"
                        rows="3"
                    ></textarea>
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 md:col-span-2 font-bold">
                        Add News Item
                    </button>
                </form>
            </div>

            {/* List */}
            {loading ? <p>Loading...</p> : (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                    <table className="min-w-full">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 text-left">Title</th>
                                <th className="py-3 px-4 text-left">Date</th>
                                <th className="py-3 px-4 text-left">Category</th>
                                <th className="py-3 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {news.map(item => (
                                <tr key={item._id} className="border-t">
                                    <td className="py-3 px-4">{item.title}</td>
                                    <td className="py-3 px-4">{item.date}</td>
                                    <td className="py-3 px-4">
                                        <span className="bg-gray-200 text-gray-700 py-1 px-2 rounded text-xs">{item.category}</span>
                                    </td>
                                    <td className="py-3 px-4 text-center">
                                        <button onClick={() => handleDelete(item._id)} className="text-red-600 hover:text-red-800">
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default NewsManager;
