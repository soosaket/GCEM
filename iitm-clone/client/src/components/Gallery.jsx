import React, { useState, useEffect } from 'react';
import { FaCamera, FaExpand, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
                    { id: 6, src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80", alt: "Auditorium", title: "Open Air Theatre" }
                ];

                if (Array.isArray(data) && data.length > 0) {
                    setImages(data);
                } else {
                    setImages(fallbackImages);
                }
            } catch (err) {
                console.error("Failed to fetch gallery", err);
                const fallbackImages = [
                    { id: 1, src: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=800&q=80", alt: "Campus Building", title: "Main Academic Block" },
                    { id: 2, src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80", alt: "Library", title: "Central Library" },
                    { id: 3, src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", alt: "Convocation", title: "Annual Convocation" },
                    { id: 4, src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80", alt: "Students", title: "Campus Life" },
                    { id: 5, src: "https://images.unsplash.com/photo-1606761560479-6dc46aa94014?auto=format&fit=crop&w=800&q=80", alt: "Lab", title: "Advanced Research Lab" },
                    { id: 6, src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80", alt: "Auditorium", title: "Open Air Theatre" }
                ];
                setImages(fallbackImages);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, []);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 transition-colors duration-300">
                    <div className="max-w-2xl">
                        <div className="flex items-center mb-4">
                            <span className="w-12 h-1 bg-gcem-maroon dark:bg-gcem-gold mr-4"></span>
                            <span className="text-gcem-maroon dark:text-gcem-gold font-bold tracking-widest uppercase text-sm">Visual Journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                            Glimpses of <span className="text-gcem-maroon dark:text-gcem-gold">GCEM</span> campus
                        </h2>
                    </div>
                    <Link to="/gallery" className="group flex items-center bg-white dark:bg-gray-900 border-2 border-gcem-maroon dark:border-gcem-gold text-gcem-maroon dark:text-gcem-gold px-8 py-3 rounded-full font-bold hover:bg-gcem-maroon dark:hover:bg-gcem-gold hover:text-white dark:hover:text-gray-900 transition-all duration-300 shadow-lg text-lg">
                        View Full Gallery
                        <FaArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                {/* Aesthetic Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">

                    {/* Large Featured Image */}
                    <div className="md:col-span-12 lg:col-span-6 h-[400px] md:h-full relative overflow-hidden rounded-2xl group shadow-xl">
                        <img
                            src={images[0]?.src}
                            alt={images[0]?.alt}
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <div className="flex items-center text-gcem-gold mb-2">
                                <FaCamera className="mr-2" />
                                <span className="text-xs font-bold uppercase tracking-widest">Featured</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-2">{images[0]?.title || "Campus Life"}</h3>
                            <button className="flex items-center text-white/80 hover:text-white transition-colors text-sm">
                                <FaExpand className="mr-2" /> Click to enlarge
                            </button>
                        </div>
                    </div>

                    {/* Side Grid */}
                    <div className="md:col-span-12 lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-6 h-full font-medium">
                        {images.slice(1, 5).map((img, idx) => (
                            <div key={img._id || img.id || idx} className="relative overflow-hidden rounded-2xl group shadow-lg h-[250px] md:h-auto border border-transparent dark:border-gray-800">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center p-4">
                                        <h4 className="text-white font-bold text-lg mb-1">{img.title}</h4>
                                        <p className="text-gcem-gold text-xs uppercase tracking-wider">GCEM Gallery</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom decorative text/stats if needed, or just padding */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 dark:text-gray-400 italic text-sm">
                        "Bringing you closer to our vibrant campus environment"
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Gallery;
