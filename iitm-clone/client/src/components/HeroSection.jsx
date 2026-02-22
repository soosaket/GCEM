import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const HeroSection = () => {
    const slides = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            title: "Welcome to Government Engineering College Madhubani",
            subtitle: "Excellence in Technical Education",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            title: "Innovating for a Sustainable Future",
            subtitle: "Join our distinct engineering programs.",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1592280771800-45cb4a48fd30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
            title: "Empowering Next-Gen Leaders",
            subtitle: "Applications open for 2025 Academic Year.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [heroContent, setHeroContent] = useState(null);

    // Fetch dynamic content
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/api/content/hero`)
            .then(res => res.json())
            .then(data => {
                if (data && (data.title || data.subtitle)) {
                    setHeroContent(data);
                }
            })
            .catch(err => console.error("Failed to fetch hero content", err));
    }, []);

    // Merge dynamic content into slides
    const displaySlides = slides.map(slide => {
        if (heroContent) {
            return {
                ...slide,
                title: heroContent.title || slide.title, // Override title if exists
                subtitle: heroContent.subtitle || slide.subtitle // Override subtitle if exists
            };
        }
        return slide;
    });

    // Auto-scroll effect
    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === displaySlides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? displaySlides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-black">
            {displaySlides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                >
                    {/* Background Image with Overlay */}
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black/40"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg transform transition duration-700 translate-y-0 opacity-100 animate-fade-in-up">
                            {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                            {slide.subtitle}
                        </p>
                        <button className="bg-gcem-maroon hover:bg-red-900 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg border border-white/20">
                            Read More
                        </button>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition duration-300"
            >
                <FaChevronLeft size={24} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition duration-300"
            >
                <FaChevronRight size={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-gcem-gold w-8' : 'bg-white/50 hover:bg-white'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
