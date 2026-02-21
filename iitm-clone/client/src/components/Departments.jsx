import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Departments = () => {
    const scrollRef = useRef(null);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/departments`);
                const data = await res.json();
                if (Array.isArray(data) && data.length > 0) {
                    setDepartments(data);
                } else {
                    // Fallback departments if None exist in DB
                    setDepartments([
                        {
                            _id: 1,
                            name: "Chemistry",
                            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
                            description: "The Department of Chemistry is one of the key departments functioning since the inception of GCEM."
                        },
                        {
                            _id: 2,
                            name: "Civil Engineering",
                            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
                            description: "Since its inception, the Department of Civil Engineering has grown into a full-fledged department with..."
                        },
                        {
                            _id: 3,
                            name: "Computer Science & Engineering",
                            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
                            description: "Conceived in 1973 with the acquisition of an IBM System/370, one of the most powerful computers in India at that..."
                        },
                        {
                            _id: 4,
                            name: "Electrical Engineering",
                            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
                            description: "One of the largest departments, focusing on communications, power systems, and microelectronics."
                        }
                    ]);
                }
            } catch (err) {
                console.error("Failed to fetch departments", err);
            }
        };
        fetchDepartments();
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 350;
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="py-20 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-12 border-b border-gray-200 dark:border-gray-800 pb-4">
                    <div className="flex items-center">
                        <div className="w-1.5 h-10 bg-black dark:bg-gray-400 mr-3"></div>
                        <div className="w-1.5 h-10 bg-gcem-maroon dark:bg-gcem-gold mr-3"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Departments</h2>
                    </div>
                </div>

                <div className="relative group">
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {departments.map((dept) => (
                            <div key={dept._id || dept.id} className="min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-start bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full border border-gray-100 dark:border-gray-800">

                                {/* Image */}
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={dept.image}
                                        alt={dept.name}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80";
                                        }}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-0 right-0 bg-gcem-gold text-gray-900 text-xs font-bold px-3 py-1 uppercase">
                                        Academics
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gcem-maroon transition-colors uppercase">
                                        {dept.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {dept.description}
                                    </p>
                                    <a href="#" className="inline-block mt-2 text-gcem-maroon font-semibold text-sm hover:underline">
                                        Explore Department &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-2 w-10 h-10 bg-white/80 shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-gcem-maroon hover:shadow-lg transition z-10"
                    >
                        <FaChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-2 w-10 h-10 bg-white/80 shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-gcem-maroon hover:shadow-lg transition z-10"
                    >
                        <FaChevronRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Departments;
