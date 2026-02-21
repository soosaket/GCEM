import React from 'react';
import { FaCamera } from 'react-icons/fa';

const CampusLife = () => {
    const [images, setImages] = React.useState([]);
    const [content, setContent] = React.useState({
        body: "GCEM is a vibrant residential campus that allows students to flourish both personally and professionally. Campus life at GCEM is not just about classrooms, libraries and labs. There are several opportunities for students to pursue their favorite activities, refine their skills and discover new talents and interests. The campus is a constant buzz of varied activities and events - academic, co-curricular and extracurricular."
    });

    React.useEffect(() => {
        const fetchImages = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
                const data = await res.json();

                const fallbackImages = [
                    { src: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=800&q=80", alt: "Campus Building" },
                    { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80", alt: "Library" },
                    { src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80", alt: "Convocation" },
                    { src: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=800&q=80", alt: "Students" },
                    { src: "https://images.unsplash.com/photo-1606761560479-6dc46aa94014?auto=format&fit=crop&w=800&q=80", alt: "Lab" }
                ];

                if (Array.isArray(data) && data.length > 0) {
                    setImages(data);
                } else {
                    setImages(fallbackImages);
                }
            } catch (err) {
                console.error("Failed to fetch gallery", err);
                const fallbackImages = [
                    { src: "https://images.unsplash.com/photo-1541339907198-e08759dfc3ef?auto=format&fit=crop&w=800&q=80", alt: "Campus Building" },
                    { src: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80", alt: "Library" }
                ];
                setImages(fallbackImages);
            }
        };

        const fetchContent = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/content/campus-life`);
                const data = await res.json();
                if (data.body) {
                    setContent({ body: data.body });
                }
            } catch (err) {
                console.error("Failed to fetch campus life content", err);
            }
        };

        fetchImages();
        fetchContent();
    }, []);



    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">Life at <span className="text-gcem-maroon dark:text-gcem-gold">GCEM</span></h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {content.body}
                    </p>
                </div>

                {/* Aesthetic Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-[600px]">
                    {images.slice(0, 5).map((img, index) => (
                        <div
                            key={index}
                            className={`relative overflow-hidden group rounded-2xl shadow-lg border border-transparent dark:border-gray-800 transition-all duration-300 ${index === 0 ? 'md:col-span-2 md:row-span-2 min-h-[400px]' : 'min-h-[250px]'
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                            <div className="absolute bottom-6 left-6">
                                <span className="bg-gcem-maroon/90 dark:bg-gcem-gold/90 text-white dark:text-gray-900 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transition-colors">
                                    {img.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CampusLife;
