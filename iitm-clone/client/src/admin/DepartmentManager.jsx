import React, { useState, useEffect } from 'react';
import { FaTrash, FaPlus, FaBuilding } from 'react-icons/fa';

const DepartmentManager = () => {
    const [departments, setDepartments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ name: '', description: '', image: '' });
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            setLoading(true);
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/departments`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setDepartments(data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/departments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) {
                setMessage('Department added successfully!');
                setFormData({ name: '', description: '', image: '' });
                fetchDepartments();
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (err) {
            setMessage('Error adding department.');
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this department?')) return;
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/departments/${id}`, {
                method: 'DELETE'
            });
            if (res.ok) {
                fetchDepartments();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="p-2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                <FaBuilding className="mr-3 text-gcem-maroon" /> Department Manager
            </h2>

            {/* Add Department Form */}
            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mb-12">
                <h3 className="text-xl font-semibold mb-4">Add New Department</h3>
                {message && <p className="mb-4 text-green-600 font-semibold">{message}</p>}
                <form onSubmit={handleSave} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-bold mb-1">Department Name</label>
                        <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-gcem-maroon outline-none"
                            placeholder="e.g. Computer Science"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-1">Description</label>
                        <textarea
                            required
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                            className="w-full p-2 border rounded h-24 focus:ring-2 focus:ring-gcem-maroon outline-none"
                            placeholder="Briefly describe the department..."
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-1">Image URL</label>
                        <input
                            type="text"
                            required
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="w-full p-2 border rounded focus:ring-2 focus:ring-gcem-maroon outline-none"
                            placeholder="Paste image URL here..."
                        />
                    </div>
                    <button type="submit" className="bg-gcem-maroon text-white px-6 py-2 rounded-lg hover:bg-red-900 font-bold flex items-center shadow-lg transition-all">
                        <FaPlus className="mr-2" /> Add Department
                    </button>
                </form>
            </div>

            {/* Departments List */}
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Existing Departments</h3>
            {loading ? (
                <p>Loading departments...</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {departments.map((dept) => (
                        <div key={dept._id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row border border-gray-100 italic transition-transform hover:scale-[1.01]">
                            <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                                <img src={dept.image} alt={dept.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-5 flex-1 flex flex-col justify-between">
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 mb-2 underline decoration-gcem-gold decoration-4">{dept.name}</h4>
                                    <p className="text-gray-600 text-sm line-clamp-3">{dept.description}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(dept._id)}
                                    className="mt-4 text-red-600 hover:text-red-800 flex items-center self-end font-semibold text-xs"
                                >
                                    <FaTrash className="mr-1" /> Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    {departments.length === 0 && <p className="text-gray-500 italic">No departments added yet.</p>}
                </div>
            )}
        </div>
    );
};

export default DepartmentManager;
