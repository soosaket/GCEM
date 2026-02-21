import React from 'react';

const DirectorMessage = () => {
    const [content, setContent] = React.useState({
        title: "Message from the Director",
        body: "Greetings to all! It is with great pleasure that I write this in the capacity of the Director of this prestigious institute. I thank all the faculty members, students, and staff of GCEM for their continuing efforts every day in keeping this distinguished institute of national importance at the top of the ranking scales, year after year.",
        subtitle: "Prof. V. Kamakoti",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/V_Kamakoti.jpg"
    });

    React.useEffect(() => {
        const fetchContent = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/content/director`);
                const data = await res.json();
                if (data && (data.title || data.body || (data.images && data.images.length > 0))) {
                    setContent({
                        title: data.title || "Message from the Director",
                        body: data.body || "",
                        subtitle: data.subtitle || "Prof. V. Kamakoti",
                        image: (data.images && data.images.length > 0) ? data.images[0] : "https://upload.wikimedia.org/wikipedia/commons/e/e6/V_Kamakoti.jpg"
                    });
                }
            } catch (err) {
                console.error("Failed to fetch director message", err);
            }
        };
        fetchContent();
    }, []);

    return (
        <section className="py-20 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <div className="mb-12 flex items-center">
                    <div className="w-1.5 h-10 bg-black dark:bg-gray-400 mr-3"></div>
                    <div className="w-1.5 h-10 bg-gcem-maroon dark:bg-gcem-gold mr-3"></div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">{content.title}</h2>
                </div>

                {/* Content Area - Responsive Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Image Column */}
                    <div className="lg:col-span-4 xl:col-span-3">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gcem-maroon dark:bg-gcem-gold rounded-lg blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                            <img
                                src={content.image}
                                alt={content.subtitle}
                                className="relative w-full h-auto rounded-lg shadow-xl dark:shadow-none dark:border-2 dark:border-gray-800 transition-all duration-300"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
                                }}
                            />
                            <div className="mt-6 p-4 border-l-4 border-gcem-maroon dark:border-gcem-gold bg-gray-50 dark:bg-gray-900 transition-colors">
                                <p className="text-gcem-maroon dark:text-gcem-gold font-extrabold text-xl tracking-wide">
                                    {content.subtitle}
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mt-1 uppercase tracking-widest">Director, GCEM</p>
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light text-justify transition-colors">
                            <div className="mb-8 whitespace-pre-line last:mb-0">
                                {content.body}
                                {!content.body && (
                                    <p className="italic text-gray-400 dark:text-gray-500">Loading message content...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DirectorMessage;
