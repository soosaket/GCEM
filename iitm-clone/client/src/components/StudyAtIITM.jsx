import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StudyAtIITM = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300; // Adjusted for narrower card width
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    const cards = [
        {
            id: 1,
            title: "Postgraduate Programmes",
            image: "https://images.unsplash.com/photo-1581092921461-eab62e97a783?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            description: "Specialized programmes aimed at engaging students in learning, teaching and research.",
            category: "Masters & PhD"
        },
        {
            id: 2,
            title: "Research Programmes",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            description: "Internationally renowned for quality research and opportunities in frontier areas.",
            category: "Research"
        },
        {
            id: 3,
            title: "International Masters' Program",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            description: "Bringing students with diverse interests to the IIT Madras campus for a rich environment.",
            category: "International"
        },
        {
            id: 4,
            title: "Undergraduate Programmes",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            description: "Building a strong foundation in engineering and sciences while encouraging innovation.",
            category: "B.Tech / Dual"
        },
        {
            id: 5,
            title: "Interdisciplinary Dual Degree",
            image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
            description: "Unique programs that combine multiple disciplines to solve complex real-world problems.",
            category: "Interdisciplinary"
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 relative">

                {/* Section Title - Matching NewsSection Style */}
                <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
                    <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
                        <span className="border-b-4 border-iitm-maroon pb-4">Study</span> @ IITM
                    </h2>
                    <a href="#" className="text-iitm-maroon font-semibold hover:underline">View All Programs</a>
                </div>

                {/* Carousel Container */}
                <div className="relative group">
                    {/* Cards Wrapper */}
                    <div
                        ref={scrollRef}
                        className="flex overflow-x-auto gap-6 pb-8 hide-scrollbar scroll-smooth snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {cards.map((card) => (
                            <div key={card.id} className="min-w-[260px] md:min-w-[280px] flex-shrink-0 snap-start bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group border border-gray-100 flex flex-col h-full">
                                <div className="relative overflow-hidden h-72">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-0 right-0 bg-iitm-gold text-gray-900 text-xs font-bold px-3 py-1 uppercase">
                                        {card.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-iitm-maroon transition-colors uppercase">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                                        {card.description}
                                    </p>
                                    <a href="#" className="inline-block text-iitm-maroon font-semibold text-sm hover:underline">
                                        Explore Program &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-iitm-maroon hover:shadow-lg transition z-10"
                    >
                        <FaChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-iitm-maroon hover:shadow-lg transition z-10"
                    >
                        <FaChevronRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default StudyAtIITM;
