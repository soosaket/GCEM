import React from 'react';
import HeroSection from './HeroSection';
import NewsSection from './NewsSection';
import StudyAtGCEM from './StudyAtGCEM';
import Departments from './Departments';
import DirectorMessage from './DirectorMessage';
import Gallery from './Gallery';

const Home = () => {
    return (
        <>
            <HeroSection />
            <NewsSection />
            <StudyAtGCEM />
            <Departments />
            <DirectorMessage />
            <Gallery />

            {/* Additional Stats Section */}
            <section className="bg-gcem-maroon py-16 text-white text-center">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-4xl font-bold mb-2">16</h3>
                        <p className="text-gcem-gold uppercase text-sm tracking-widest">Departments</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">600+</h3>
                        <p className="text-gcem-gold uppercase text-sm tracking-widest">Faculty</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">10,000+</h3>
                        <p className="text-gcem-gold uppercase text-sm tracking-widest">Students</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold mb-2">100+</h3>
                        <p className="text-gcem-gold uppercase text-sm tracking-widest">Patents/Year</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
