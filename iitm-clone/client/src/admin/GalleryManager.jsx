import React, { useState, useEffect } from 'react';
import { FaTrash, FaUpload } from 'react-icons/fa';

const GalleryManager = () => {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [file, setFile] = useState(null);
    const [altText, setAltText] = useState('');

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
            const data = await res.json();
            if (Array.isArray(data)) {
                setPhotos(data);
            } else {
                console.error("Gallery data is not an array:", data);
            }
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file");

        const formData = new FormData();
        formData.append('image', file);

        try {
            // 1. Upload Image
            const uploadRes = await fetch(`${import.meta.env.VITE_API_URL}/api/upload`, {
                method: 'POST',
                body: formData
            });
            const uploadData = await uploadRes.json();

            if (uploadData.imageUrl) {
                // 2. Save to Gallery DB
                const galleryRes = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        src: uploadData.imageUrl,
                        alt: altText || 'Gallery Image'
                    })
                });

                if (galleryRes.ok) {
                    setFile(null);
                    setAltText('');
                    fetchPhotos();
                }
            }
        } catch (err) {
            console.error(err);
            alert("Upload failed");
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Delete this photo?")) {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery/${id}`, {
                    method: 'DELETE'
                });
                if (res.ok) fetchPhotos();
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Gallery Manager</h2>

            {/* Upload Form */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center"><FaUpload className="mr-2" /> Upload Photo</h3>
                <form onSubmit={handleUpload} className="flex flex-col md:flex-row gap-4 items-end">
                    <div className="flex-1 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Select Image</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            accept="image/*"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                    <div className="flex-1 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-1">Description (Alt Text)</label>
                        <input
                            type="text"
                            value={altText}
                            onChange={(e) => setAltText(e.target.value)}
                            className="p-2 border rounded w-full"
                            placeholder="e.g. Students at workshop"
                        />
                    </div>
                    <button type="submit" className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 font-bold h-10 w-full md:w-auto">
                        Upload
                    </button>
                </form>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map(photo => (
                    <div key={photo._id} className="relative group bg-gray-200 rounded overflow-hidden h-40">
                        <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                            <button onClick={() => handleDelete(photo._id)} className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700">
                                <FaTrash />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {photos.length === 0 && !loading && <p className="text-gray-500 text-center py-8">No photos in gallery yet.</p>}
        </div>
    );
};

export default GalleryManager;
