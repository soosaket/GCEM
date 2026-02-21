import React, { useState, useEffect } from 'react';
import { FaCamera, FaArrowLeft, FaExpand } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchImages = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
                const data = await res.json();

                const fallbackImages = [
                    { id: 1, src: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=800&q=80", alt: "Campus Building", title: "Main Academic Block" },
                    { id: 2, src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80", alt: "Library", title: "Central Library" },
                    { id: 3, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", alt: "Convocation", title: "Annual Convocation" },
                    { id: 4, src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80", alt: "Students", title: "Campus Life" },
                    { id: 5, src: "https://images.unsplash.com/photo-1606761560479-6dc46aa94014?auto=format&fit=crop&w=800&q=80", alt: "Lab", title: "Advanced Research Lab" },
                    { id: 6, src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80", alt: "Auditorium", title: "Open Air Theatre" },
                    { id: 7, src: "https://images.unsplash.com/photo-1574169208507-84376144848b?auto=format&fit=crop&w=800&q=80", alt: "Science", title: "Chemistry Block" },
                    { id: 8, src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80", alt: "Engineering", title: "Mechanical Workshop" }
                ];

                if (Array.isArray(data) && data.length > 0) {
                    setImages(data);
                } else {
                    setImages(fallbackImages);
                }
            } catch (err) {
                console.error("Failed to fetch gallery", err);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-32 pb-20 transition-colors duration-300">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <div>
                        <Link to="/" className="inline-flex items-center text-gcem-maroon dark:text-gcem-gold font-bold hover:underline mb-4">
                            <FaArrowLeft className="mr-2" /> Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                            Photo <span className="text-gcem-maroon dark:text-gcem-gold">Gallery</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Explore the life and infrastructure at GCEM</p>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <FaCamera size={24} />
                        <span className="font-semibold text-xl">{images.length} Photos</span>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gcem-maroon dark:border-gcem-gold"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {images.map((img, idx) => (
                            <div key={img._id || img.id || idx} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 transition-all duration-300 hover:scale-[1.02]">
                                <div className="aspect-4/3 overflow-hidden">
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-white font-bold text-lg">{img.title || img.alt}</h3>
                                    <p className="text-gcem-gold text-xs uppercase tracking-widest mt-1">Campus View</p>
                                    <button className="mt-4 flex items-center text-white/80 hover:text-white transition-colors text-xs font-semibold">
                                        <FaExpand className="mr-2" /> VIEW FULL SIZE
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {!loading && images.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 dark:text-gray-400 italic">No photos available in the gallery yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GalleryPage;
