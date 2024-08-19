import React from 'react';

function Study() {
    return (
        <div id='Studyinlondon' className="relative flex flex-col justify-center items-center bg-white-100 mt-[50px]">
            <div className="relative w-full max-w-screen-xl">
                <div className="relative">
                    <img
                        src="https://www.freewebheaders.com/wp-content/gallery/business-buildings/commercial-tall-buildings-blue-web-header.jpg"
                        alt="Study in London"
                        className="w-[150%] h-[223px] object-cover"
                    />
                    <div className="absolute inset-0 flex justify-start items-start p-4">
                        <div className="relative border-2 border-yellow-500 p-6 w-[95%] md:w-[50%] lg:w-[40%] h-[100%] flex flex-col justify-start items-start text-left">
                            <p className="text-white text-sm font-semibold mb-2">
                                INTRODUCING THE OPPORTUNITY TO
                            </p>
                            <h1 className="text-white text-lg font-semibold mb-1">
                                STUDY IN ONE OF THE WORLD'S
                            </h1>
                            <h1 className="text-white text-lg font-bold mb-1">
                                GREATEST CITIES - LONDON
                            </h1>
                            <button className="custom-learn text-sm">
                                <span>LEARN MORE</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-xl sm:text-2xl font-bold text-center text-black-800 mb-6">
                    CHOOSE FROM CUTTING-EDGE SPECIALISATIONS
                </h2>
                <p className="text-xs sm:text-sm text-center text-gray-600 mb-12">
                    For the upcoming intake of October 2024, you can choose any one of the following specialist areas and align your Master’s degree with your career goals.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <ul className="space-y-6 list-none">
                            <li className="flex items-start">
                                <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-yellow-600 flex-shrink-0"></span>
                                <div>
                                    <h3 className="font-bold text-sm sm:text-md text-black-600">Global Marketing Management</h3>
                                    <p className="text-xs sm:text-sm text-black-600">Develop skills in areas like Research for Customer Insights, Omnichannel Buyer Behaviour, Brand Management & Integrated Marketing Communications, Digital Marketing, Customer Value Management, Sales & Channel Management and B2B Marketing.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-yellow-600 flex-shrink-0"></span>
                                <div>
                                    <h3 className="font-bold text-sm sm:text-md text-black-600">Global Finance</h3>
                                    <p className="text-xs sm:text-sm text-black-600">Understand important tools and techniques in areas like Corporate Valuation, International Finance, Equity Analysis, Portfolio Management, Financial Derivatives, Mergers & Acquisitions and Financial Technology.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Right Column */}
                    <div>
                        <ul className="space-y-6 list-none">
                            <li className="flex items-start">
                                <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-yellow-600 flex-shrink-0"></span>
                                <div>
                                    <h3 className="font-bold text-sm sm:text-md text-black-600">Global Logistics and Supply Chain Management</h3>
                                    <p className="text-xs sm:text-sm text-black-600">Learn a wide range of topics, including Transportation Management, Lean Supply Chain, Strategic Sourcing, Logistics Operations, Global Transportation Management, Technology & Digitisation of Supply Chains, Supply Chain Simulation, and Demand Management.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="h-2 w-2 mt-2 mr-2 rounded-full bg-yellow-600 flex-shrink-0"></span>
                                <div>
                                    <h3 className="font-bold text-sm sm:text-md text-black-600">Digital Business Management</h3>
                                    <p className="text-xs sm:text-sm text-black-600">Examine a broad spectrum of topics such as Enterprise Digital Business Applications, E-Commerce Technologies and Payments Models, E-Business Strategies, Customer Experience Design, Digital Marketing and Digital Governance.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-black-600">
                    <p className="text-xs sm:text-sm">Notes:</p>
                    <ul className="list-disc ml-8 text-xs sm:text-sm">
                        <li>The specialisations will be offered subject to a minimum of 10 students enrolling per specialisation.</li>
                        <li>Each intake may offer a few or all the specialisations.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Study;
