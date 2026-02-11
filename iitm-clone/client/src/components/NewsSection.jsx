import React, { useState, useEffect } from 'react';

const NewsSection = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/api/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching news:", err);
                // Fallback data if API fails (for demo purposes)
                setNews([
                    {
                        id: 1,
                        title: "IIT Madras tops NIRF Rankings 2024",
                        date: "July 15, 2024",
                        category: "Awards",
                        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        summary: "IIT Madras retains the top spot in the overall category..."
                    },
                    {
                        id: 2,
                        title: "New Centre for Quantum Information",
                        date: "July 12, 2024",
                        category: "Research",
                        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        summary: "State-of-the-art facility to advance research..."
                    },
                    {
                        id: 3,
                        title: "Convocation 2024 held with grandeur",
                        date: "July 10, 2024",
                        category: "Events",
                        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                        summary: "Over 2500 students graduated in the 61st convocation..."
                    }
                ]);
                setLoading(false);
            });
    }, []);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-4">
                    <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
                        <span className="border-b-4 border-iitm-maroon pb-4">News &</span> Updates
                    </h2>
                    <a href="#" className="text-iitm-maroon font-semibold hover:underline">View All News</a>
                </div>

                {loading ? (
                    <div className="text-center py-10">Loading news...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {news.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                                <div className="relative overflow-hidden h-48">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-0 right-0 bg-iitm-gold text-gray-900 text-xs font-bold px-3 py-1 uppercase">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="p-6">
                                    <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-iitm-maroon transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-3">
                                        {item.summary}
                                    </p>
                                    <a href="#" className="inline-block mt-4 text-iitm-maroon font-semibold text-sm hover:underline">
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
