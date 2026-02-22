import React, { useRef, useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Departments = () => {
    const scrollRef = useRef(null);
    const [departments, setDepartments] = useState([]);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const apiUrl = import.meta.env.VITE_API_URL || '';
                const res = await fetch(`${apiUrl}/api/departments`).catch(() => null);

                if (res && res.ok) {
                    const data = await res.json().catch(() => null);
                    if (Array.isArray(data) && data.length > 0) {
                        setDepartments(data);
                        return;
                    }
                }

                // If we reach here, either fetch failed, response was !ok, or data was empty
                throw new Error("API unavailable or empty");

            } catch (err) {
                console.error("Failed to fetch departments, using fallbacks", err);
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
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 border-b border-gray-200 dark:border-gray-800 pb-4 gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white uppercase tracking-wide leading-tight">
                        <span className="relative inline-block pb-2">
                            Our Departments
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gcem-maroon dark:bg-gcem-gold"></span>
                        </span>
                    </h2>
                    <a href="#" className="text-gcem-maroon dark:text-gcem-gold font-semibold hover:underline text-sm md:text-base">
                        View All Departments
                    </a>
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
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-gcem-maroon dark:group-hover:text-gcem-gold transition-colors uppercase">
                                        {dept.name}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                                        {dept.description}
                                    </p>
                                    <a href="#" className="inline-block mt-2 text-gcem-maroon dark:text-gcem-gold font-semibold text-sm hover:underline">
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
