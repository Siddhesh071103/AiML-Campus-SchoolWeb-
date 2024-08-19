import React, { useState } from 'react';
import bgImage from '../assets/accordin-bg.jpg'; // Image for title background

const FeaturesSection = () => {
    // Manage expanded/collapsed state
    const [expandedIndex, setExpandedIndex] = useState(null);

    const features = [
        {
            title: 'GAIN A GLOBAL PERSPECTIVE THAT WILL HELP YOU STAND OUT',
            content: `Living and studying in some of the world’s leading business centres like Dubai and Singapore...`,
        },
        {
            title: 'EQUIP YOURSELF WITH THE SKILLS THAT RECRUITERS DEMAND',
            content: `Our enhanced curriculum imparts cutting-edge skills to help students fast-track their career growth...`,
        },
        {
            title: 'UNDERTAKE AN INDUSTRY PROJECT & INTERNSHIP',
            content: '',
        },
        {
            title: 'LEARN FROM HIGHLY EXPERIENCED FACULTY',
            content: '',
        },
        {
            title: 'BENEFIT FROM OUR MULTINATIONAL CAREER ADVANCEMENT SERVICES',
            content: '',
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-4"> {/* Reduced padding */}
            <div className="flex flex-col items-center py-5 px-4"> {/* Centered content */}
            <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl font-bold text-gray-900 mb-10 text-center">
                    EXPLORE THE SP JAIN GLOBAL ADVANTAGE
                </h2>
                <div className="w-full"> {/* Full-width */}
                    {features.map((feature, index) => (
                        <div key={index} className="mb-4"> {/* Reduced margin between elements */}
                            <div
                                className="cursor-pointer bg-cover bg-center text-black p-4 flex justify-between items-center" // Removed mx-auto
                                style={{
                                    backgroundImage: `url(${bgImage})`,
                                    backgroundSize: 'cover', // Ensures full background cover
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                    width: '90vw', // 90% viewport width
                                    height: '70px',// Max width to maintain consistency on larger screens
                                }}
                                onClick={() => toggleExpand(index)}
                            >
                                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold">{feature.title}</h2>
                                <span className="text-yellow-500 font-bold text-xl sm:text-2xl md:text-3xl">
                                    {expandedIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {expandedIndex === index && (
                                <div className="bg-white-100 p-4 text-black-700" style={{ width: '90%' }}>
                                    <p>{feature.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center py-5 mt-10 px-4"> {/* Centered alignment */}
                <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900 mb-4 text-center">
                    READY TO TAKE THE NEXT STEP?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"> {/* Centered grid content */}
                    <div className="p-4 border border-2 w-[90%] sm:w-[400px] mx-auto"> {/* Centered card */}
                        <p className="text-gray-800 font-semibold">SUBMIT YOUR APPLICATION</p>
                        <p className="text-black-800 text-sm leading-tight">
                            We are currently accepting applications for the October 2024 Intake
                        </p>
                        <button className="custom-apply mt-4">
                            <span>APPLY NOW</span>
                        </button>
                    </div>
                    <div className="p-4 border border-2 w-[90%] sm:w-[400px] mx-auto"> {/* Centered card */}
                        <p className="text-gray-800 font-semibold">MAKE AN ENQUIRY</p>
                        <p className="text-black-800 text-sm leading-tight">
                            If you would like to learn more about the fees, admission process and aptitude test, or if you have any questions before applying, please contact us.
                        </p>
                        <button className="custom-enquire mt-4">
                            <span>ENQUIRE NOW</span>
                        </button>
                    </div>
                    <div className="p-4 border border-2 w-[90%] sm:w-[400px] mx-auto"> {/* Centered card */}
                        <p className="text-gray-800 font-semibold">GET A BROCHURE</p>
                        <p className="text-black-800 text-sm leading-tight">
                            Download our brochure for more information on the program curriculum, learning outcomes and faculty expertise.
                        </p>
                        <button className="custom-button mt-4">
                            <span>DOWNLOAD A BROCHURE</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
