import React, { useState, useEffect } from 'react';

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const fallbackNews = [
                {
                    id: 1,
                    title: "GCEM tops NIRF Rankings 2024",
                    date: "July 15, 2024",
                    category: "Awards",
                    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    summary: "GCEM retains the top spot in the overall category in NIRF Rankings, showcasing our commitment to excellence in education and research."
                },
                {
                    id: 2,
                    title: "New Centre for Quantum Information",
                    date: "July 12, 2024",
                    category: "Research",
                    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    summary: "A state-of-the-art facility dedicated to quantum information science was inaugurated today, positioning GCEM at the forefront of emerging technologies."
                },
                {
                    id: 3,
                    title: "Convocation 2024 held with grandeur",
                    date: "July 10, 2024",
                    category: "Events",
                    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    summary: "Over 2500 students graduated in the 61st convocation ceremony, celebrating their hard work and the beginning of new professional journeys."
                }
            ];

            try {
                setLoading(true);
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/news`);
                if (res.ok) {
                    const data = await res.json();
                    if (Array.isArray(data) && data.length > 0) {
                        setNews(data);
                    } else {
                        setNews(fallbackNews);
                    }
                } else {
                    setNews(fallbackNews);
                }
            } catch (err) {
                console.error("Error fetching news:", err);
                setNews(fallbackNews);
            } finally {
                setLoading(false);
            }
        };
        fetchNews();
    }, []);

    return (
        <section className="py-16 bg-white dark:bg-gray-950 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-gray-200 dark:border-gray-800 pb-4 gap-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white uppercase tracking-wide leading-tight">
                        <span className="relative inline-block pb-2">
                            News & Updates
                            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-gcem-maroon dark:bg-gcem-gold"></span>
                        </span>
                    </h2>
                    <a href="#" className="text-gcem-maroon dark:text-gcem-gold font-semibold hover:underline text-sm md:text-base">
                        View All News
                    </a>
                </div>

                {loading ? (
                    <div className="text-center py-10 dark:text-gray-400">Loading news...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <div key={item._id || item.id} className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-transparent dark:border-gray-800 hover:shadow-2xl transition-all duration-300 group">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-0 right-0 bg-gcem-gold text-gray-900 text-xs font-bold px-3 py-1 uppercase">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{item.date}</p>
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3 group-hover:text-gcem-maroon dark:group-hover:text-gcem-gold transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
                                        {item.summary}
                                    </p>
                                    <a href="#" className="inline-block mt-4 text-gcem-maroon dark:text-gcem-gold font-semibold text-sm hover:underline">
                                        Read Full Story &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default NewsSection;
