import React from 'react';

const DirectorMessage = () => {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">

                {/* Section Title */}
                <div className="mb-8 flex items-center">
                    <div className="w-1 h-8 bg-black mr-3"></div>
                    <div className="w-1 h-8 bg-iitm-maroon mr-3"></div>
                    <h2 className="text-3xl font-sans text-gray-900">Message from the Director</h2>
                </div>

                {/* Content Area */}
                <div className="text-gray-700 leading-relaxed text-base font-light text-justify">
                    {/* Image floated left for text wrap */}
                    <div className="float-left mr-8 mb-4">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/e/e6/V_Kamakoti.jpg"
                            alt="Prof. V. Kamakoti"
                            className="w-64 h-auto rounded shadow-sm"
                            onError={(e) => {
                                e.target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"; // Fallback professional portrait
                            }}
                        />
                    </div>

                    <p className="mb-4">
                        <strong className="text-gray-900">Greetings to all!</strong>
                    </p>

                    <p className="mb-4">
                        It is with great pleasure that I write this in the capacity of the Director of this prestigious institute. I thank all the faculty members, students, and staff of IIT Madras for their continuing efforts every day in keeping this distinguished institute of national importance at the top of the ranking scales, year after year.
                    </p>

                    <p className="mb-4">
                        The role of a campus in ensuring quality learning is of great significance and IIT Madras, which already has a world-class campus, will now ensure it is further infused with the spirit of inclusivity, by celebrating the pluralism of cultures, nationalities, and personalities in a global world. We envision our campus to reflect the ethos of innovation, entrepreneurship, and dynamism of spirit. Each IITian should foster an endless, restless quest to look for solutions to real-world problems thereby contributing to the society we live in and helping our nation truly be "atma-nirbhar" (self-reliant). I envisage the good presence of IIT Madras to be perceptibly felt far beyond the walls of our campus, wherein every corner of our country and thereby the world, is able to tangibly feel the difference we intend to make to society with our leading innovations combined with our determined efforts to make the world a better place to live in.
                    </p>

                    <p className="mb-4">
                        Industry should be able to sit up and take notice of the impact we make and we should strive to ensure that our students continue to become part of global corporations and governments alike. As is said - change should be from within the system by being part of it and not exclusive to the system itself. It is also very important to bear in mind that consistency is key to maintaining excellence. The fact that we are #1 in National ranking is indeed a time to rejoice but not to relax.
                    </p>

                    <p className="mb-4">
                        A parallel area of focus should also be the micro-issues that impact the immediate society around us. These could be at a local level, or perhaps even at a community level. We must invest time to work on those problems and come up with feasible solutions. Giving back to society we operate in is a crucial guiding principle we must all bear in mind at all times. I re-affirm my commitment which I've made to ensure enhanced focus on local issues of relevance.
                    </p>

                    <p className="mb-8">
                        To conclude, I once again welcome you to this great centre of learning where the world amalgamates. Let us all continue to hold the torch high of IIT Madras as we look in to the future.
                    </p>

                    <p className="text-iitm-maroon font-bold text-lg">
                        Prof. V. Kamakoti
                    </p>
                </div>
            </div>
        </section>
    );
};

export default DirectorMessage;
