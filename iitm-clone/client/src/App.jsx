import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import StudyAtIITM from './components/StudyAtIITM';
import DirectorMessage from './components/DirectorMessage';
import CampusLife from './components/CampusLife';
import Announcements from './components/Announcements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <TopBar />
      <Navbar />
      <Announcements />

      <main className="flex-grow">
        <HeroSection />
        <NewsSection />
        <StudyAtIITM />
        <DirectorMessage />
        <CampusLife />

        {/* Additional Stats Section Placeholder */}
        <section className="bg-iitm-maroon py-16 text-white text-center">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-4xl font-bold mb-2">16</h3>
              <p className="text-iitm-gold uppercase text-sm tracking-widest">Departments</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">600+</h3>
              <p className="text-iitm-gold uppercase text-sm tracking-widest">Faculty</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p className="text-iitm-gold uppercase text-sm tracking-widest">Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">100+</h3>
              <p className="text-iitm-gold uppercase text-sm tracking-widest">Patents/Year</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
