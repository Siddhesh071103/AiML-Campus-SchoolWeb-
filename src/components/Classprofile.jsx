import React from 'react';
import group from '../assets/group.png';
import women from '../assets/businesswoman.png';
import age from '../assets/age.png';
import bag from '../assets/suitcase.png';
import meter from '../assets/speedometer.png';
import world from '../assets/Group 3.png';
import tick from '../assets/circle-check.png'

function Classprofile() {
    return (
        <div id='Classprofiles' className="flex flex-col items-center py-10 px-4">
            {/* Class Profile Section */}
            <div className="text-center mb-16">
                <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-3xl sm:text-xl">
                    CLASS PROFILE
                </h2>
                <h1 className="text-center text-md text-black-600 mb-10 md:text-sm sm:text-xs">
                    Get to know our dynamic student community. Here’s a snapshot of the class profile data of the students who joined us in 2023:
                </h1>
                <div className="flex flex-wrap justify-center gap-4 text-center">
                    <div className="p-6 border flex-1 min-w-[270px] max-w-[200px] sm:min-w-[270px] sm:max-w-[150px]">
                        <img src={group} alt="Total Class Size" className="mx-auto mb-2" />
                        <p className="text-xl font-bold text-black-500 mt-1 sm:text-base">259 STUDENTS</p>
                        <p className="text-gray-800 sm:text-xs">TOTAL CLASS SIZE</p>
                    </div>
                    <div className="p-6 border flex-1 min-w-[270px] max-w-[200px] sm:min-w-[250px] sm:max-w-[150px]">
                        <img src={women} alt="Women Participation" className="mx-auto mb-2" />
                        <p className="text-2xl font-bold text-black-500 mt-1 sm:text-base">36%</p>
                        <p className="text-gray-800 sm:text-xs">WOMEN PARTICIPATION</p>
                    </div>
                    <div className="p-6 border flex-1 min-w-[270px] max-w-[200px] sm:min-w-[250px] sm:max-w-[150px]">
                        <img src={age} alt="Average Age" className="mx-auto mb-2" />
                        <p className="text-2xl font-bold text-black-500 mt-1 sm:text-base">23 YEARS</p>
                        <p className="text-gray-800 sm:text-xs">AVERAGE AGE</p>
                    </div>
                    <div className="p-6 border flex-1 min-w-[270px] max-w-[270px] sm:min-w-[270px] sm:max-w-[150px]">
                        <img src={bag} alt="Average Work Experience" className="mx-auto mb-2" />
                        <p className="text-2xl font-bold text-black-500 mt-1 sm:text-base">8 MONTHS</p>
                        <p className="text-gray-800 sm:text-xs">AVERAGE WORK EXPERIENCE</p>
                    </div>
                    <div className="p-6 border flex-1 min-w-[200px] max-w-[270px] sm:min-w-[200px] sm:max-w-[150px]">
                        <img src={meter} alt="GMAT Score" className="mx-auto mb-2" />
                        <p className="text-2xl font-bold text-black-500 mt-1 sm:text-base">680</p>
                        <p className="text-gray-800 sm:text-xs">GMAT SCORE</p>
                    </div>
                </div>
            </div>

            {/* World Image with Text Overlay */}
            <div className="relative w-screen h-[300px] sm:h-[200px]">
                <img
                    src={world}
                    alt="World"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center">
                    <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                    <h1 className="text-xl font-bold text-black sm:text-lg">
                        NATIONALITIES REPRESENTED
                    </h1>
                </div>
                <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                    <div className="flex flex-wrap justify-center items-center">
                        {[
                            "Indian",
                            "Ecuadorean",
                            "Indonesian",
                            "Uzbekistani",
                            "Singaporean",
                            "Filipino",
                            "Vietnamese"
                        ].map((nationality, index) => (
                            <div key={index} className="flex items-center mb-2 sm:mb-1">
                                <img src={tick} alt="Tick" className="h-4 w-4 mr-2" /> {/* Tick image */}
                                <p className="text-xl font-medium text-black sm:text-base">{nationality}</p>
                                {index < 6 && (
                                    <div className="h-8 border-l border-black mx-4 sm:mx-2"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Classprofile;
