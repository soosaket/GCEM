import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const StudyAtGCEM = () => {
    const scrollRef = useRef(null);
    const [content, setContent] = React.useState({
        title: "Study",
        subtitle: "@ GCEM"
    });

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/content/study`);
                const data = await res.json();
                if (data.title) {
                    setContent({
                        title: data.title,
                        subtitle: data.subtitle || "@ GCEM"
                    });
                }
            } catch (err) {
                console.error("Failed to fetch study section content", err);
            }
        };
        fetchContent();
    }, []);

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
            image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=600&q=80",
            description: "Specialized programmes aimed at engaging students in learning, teaching and research.",
            category: "Masters & PhD"
        },
        {
            id: 2,
            title: "Research Programmes",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            description: "Internationally renowned for quality research and opportunities in frontier areas.",
            category: "Research"
        },
        {
            id: 3,
            title: "International Masters' Program",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
            description: "Bringing students with diverse interests to the GCEM campus for a rich environment.",
            category: "International"
        },
        {
            id: 4,
            title: "Undergraduate Programmes",
            image: "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?auto=format&fit=crop&w=600&q=80",
            description: "Building a strong foundation in engineering and sciences while encouraging innovation.",
            category: "B.Tech / Dual"
        },
        {
            id: 5,
            title: "Interdisciplinary Dual Degree",
            image: "https://images.unsplash.com/photo-1504817343863-5092a3238007?auto=format&fit=crop&w=600&q=80",
            description: "Unique programs that combine multiple disciplines to solve complex real-world problems.",
            category: "Interdisciplinary"
        }
    ];

    return (
        <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4 relative">

                {/* Section Title - Matching NewsSection Style */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4 gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white uppercase tracking-wide leading-tight">
                        <span className="relative inline-block pb-2">
                            {content.title} {content.subtitle}
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gcem-maroon dark:bg-gcem-gold"></span>
                        </span>
                    </h2>
                    <a href="#" className="text-gcem-maroon dark:text-gcem-gold font-semibold hover:underline text-sm md:text-base">
                        View All Programs
                    </a>
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
                            <div key={card.id} className="min-w-[260px] md:min-w-[280px] shrink-0 snap-start bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 dark:border-gray-800 flex flex-col h-full">
                                <div className="relative overflow-hidden h-72">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80";
                                        }}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-0 right-0 bg-gcem-gold text-gray-900 text-xs font-bold px-3 py-1 uppercase">
                                        {card.category}
                                    </span>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-gcem-maroon dark:group-hover:text-gcem-gold transition-colors uppercase">
                                        {card.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                                        {card.description}
                                    </p>
                                    <a href="#" className="inline-block text-gcem-maroon dark:text-gcem-gold font-semibold text-sm hover:underline">
                                        Explore Program &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 w-10 h-10 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gcem-maroon dark:hover:text-gcem-gold hover:shadow-lg transition z-10 border border-gray-100 dark:border-gray-700"
                    >
                        <FaChevronLeft size={18} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 w-10 h-10 bg-white dark:bg-gray-800 shadow-md rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-gcem-maroon dark:hover:text-gcem-gold hover:shadow-lg transition z-10 border border-gray-100 dark:border-gray-700"
                    >
                        <FaChevronRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    );
};

export default StudyAtGCEM;
