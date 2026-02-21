import React, { useState, useEffect } from 'react';

const ContentManager = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [formData, setFormData] = useState({ title: '', subtitle: '', body: '', images: [] });
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchContent(activeSection);
    }, [activeSection]);

    const fetchContent = async (section) => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/content/${section}`);
            const data = await res.json();
            setFormData({
                title: data.title || '',
                subtitle: data.subtitle || '',
                body: data.body || '',
                images: data.images || []
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) return;
        setUploading(true);
        const uploadData = new FormData();
        uploadData.append('image', file);

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
                method: 'POST',
                body: uploadData
            });
            const data = await res.json();
            if (data.imageUrl) {
                setFormData(prev => ({ ...prev, images: [data.imageUrl] }));
                setFile(null);
                setMessage('Image uploaded successfully!');
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (err) {
            console.error("Upload failed", err);
            setMessage('Upload failed.');
        } finally {
            setUploading(false);
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/content`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ section: activeSection, ...formData })
            });
            if (res.ok) {
                setMessage('Content saved successfully!');
                setTimeout(() => setMessage(''), 3000);
            }
        } catch (err) {
            setMessage('Error saving content.');
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Page Content Manager</h2>

            <div className="flex flex-wrap gap-4 mb-8">
                {['hero', 'about', 'director', 'study'].map(sec => (
                    <button
                        key={sec}
                        onClick={() => setActiveSection(sec)}
                        className={`px-4 py-2 rounded capitalize font-medium transition-all ${activeSection === sec ? 'bg-gcem-maroon text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
                    >
                        {sec.replace('-', ' ')}
                    </button>
                ))}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
                <h3 className="text-xl font-semibold mb-4 capitalize">Edit {activeSection} Section</h3>
                {message && <p className="mb-4 text-green-600 font-semibold">{message}</p>}

                <form onSubmit={handleSave} className="space-y-4">
                    {/* Image Preview and Upload Section */}
                    <div className="border-b pb-4 mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Section Image</label>
                        {formData.images && formData.images.length > 0 && (
                            <div className="mb-3">
                                <img src={formData.images[0]} alt="Section preview" className="h-40 w-auto rounded shadow-sm border" />
                                <p className="text-xs text-gray-500 mt-1 truncate">{formData.images[0]}</p>
                            </div>
                        )}
                        <div className="flex gap-2">
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*"
                                className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 grow"
                            />
                            <button
                                type="button"
                                onClick={handleUpload}
                                disabled={!file || uploading}
                                className={`px-4 py-2 rounded font-bold text-sm transition-colors ${!file || uploading ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                            >
                                {uploading ? 'Uploading...' : 'Upload Image'}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-1">Title</label>
                        <input
                            type="text"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-1">Subtitle</label>
                        <input
                            type="text"
                            value={formData.subtitle}
                            onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-1">Body Text</label>
                        <textarea
                            value={formData.body}
                            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                            className="w-full p-2 border rounded h-32"
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-bold shadow-lg transition-transform hover:scale-105">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContentManager;
