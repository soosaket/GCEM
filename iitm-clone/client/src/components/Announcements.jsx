import React from 'react';

const Announcements = () => {
    return (
        <div className="bg-gray-100 border-b border-gray-300 flex items-center h-10 overflow-hidden relative">
            <div className="bg-black text-white px-4 h-full flex items-center font-bold text-sm z-10 relative">
                Announcements
                <div className="absolute right-[-10px] top-0 border-t-[40px] border-t-transparent border-l-[10px] border-l-black border-b-[0px] border-b-transparent h-full"></div>
                {/* CSS Triangle hack for the arrow shape if needed, or just simple rectangular block */}
                <svg className="absolute right-[-20px] top-0 h-full w-6 text-black" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L0 100 L100 50 Z" fill="currentColor" />
                </svg>
            </div>
            <div className="flex-grow overflow-hidden relative">
                <div className="animate-marquee whitespace-nowrap flex items-center h-full">
                    <span className="mx-8 text-sm text-gray-700">Admission Open for 2025 Batch</span>
                    <span className="text-red-600 mx-2">|</span>
                    <span className="mx-8 text-sm text-gray-700">Vigilance Awareness Week - 27th October to 2nd November, 2025</span>
                    <span className="text-red-600 mx-2">|</span>
                    <span className="mx-8 text-sm text-gray-700">79th Independence Day Celebrations</span>
                    <span className="text-red-600 mx-2">|</span>
                    <span className="mx-8 text-sm text-gray-700">Convocation Ceremony Updates</span>
                </div>
            </div>
        </div>
    );
};

export default Announcements;
