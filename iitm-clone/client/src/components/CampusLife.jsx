import React from 'react';
import { FaCamera } from 'react-icons/fa';

const CampusLife = () => {
    const images = [
        {
            id: 1,
            src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", // Auditorium/Event
            alt: "Campus Event",
            large: true
        },
        {
            id: 2,
            src: "https://images.unsplash.com/photo-1546749876-246e7f8272f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // Sports height
            alt: "Sports",
            credits: true
        },
        {
            id: 3,
            src: "https://images.unsplash.com/photo-1511735111819-9a3f77ebd90d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // Music/Band
            alt: "Cultural Performance",
            credits: true
        },
        {
            id: 4,
            src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // Nature/Campus
            alt: "Green Campus",
            credits: true
        },
        {
            id: 5,
            src: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", // Building Night
            alt: "Department Building",
            credits: true
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
                    <div className="flex items-center">
                        <div className="w-1 h-8 bg-black mr-3"></div>
                        <div className="w-1 h-8 bg-iitm-maroon mr-3"></div>
                        <h2 className="text-3xl font-sans text-gray-900">Campus Life</h2>
                    </div>
                    <a href="#" className="text-iitm-maroon font-semibold text-sm hover:underline mb-1">
                        About Life on Campus &gt;
                    </a>
                </div>

                {/* Photo Gallery Collage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-8">
                    {/* Large Image (Left Side) */}
                    <div className="relative h-64 md:h-96 overflow-hidden group">
                        <img
                            src={images[0].src}
                            alt={images[0].alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    {/* Small Images Grid (Right Side) */}
                    <div className="grid grid-cols-2 gap-1 h-64 md:h-96">
                        {images.slice(1).map((img) => (
                            <div key={img.id} className="relative overflow-hidden group">
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {img.credits && (
                                    <div className="absolute bottom-2 right-2 flex items-center text-white text-xs opacity-80 bg-black/30 px-2 py-1 rounded">
                                        <FaCamera className="mr-1" /> Credits
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Description Text */}
                <div className="text-gray-700 text-justify leading-relaxed">
                    <p>
                        IIT Madras is a vibrant residential campus that allows students to flourish both personally and professionally. Campus life at IIT Madras is not just about classrooms, libraries and labs. There are several opportunities for students to pursue their favorite activities, refine their skills and discover new talents and interests. The campus is a constant buzz of varied activities and events - academic, co-curricular and extracurricular.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CampusLife;
