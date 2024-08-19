import React from 'react';
import './App.css';

function ProgramOverview() {
    return (
        <div id="Overview" className="relative bg-white flex flex-col lg:flex-row mt-20">
            {/* Left Side: Image */}
            <div className="w-full lg:w-[30%] flex justify-center items-center">
                <img
                    src="https://www.spjain.org/hs-fs/hubfs/MGB%20Placement%20Data%20-%20India%20-%20LPs/PROGRAM-OVERVIEW.jpg?width=383&name=PROGRAM-OVERVIEW.jpg"
                    alt="Program Overview"
                    className="w-[70%] sm:w-[90%] md:w-[50%] lg:w-[300px] lg:h-[375px] object-cover"
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="w-full lg:w-[70%] flex flex-col justify-start p-4 lg:p-6 mt-4 lg:mt-0">
                <div className="h-1 w-[80px] bg-yellow-400 mb-2 lg:ml-0 mx-auto"></div>
                <h2 className="text-xl lg:text-3xl font-bold mb-2 lg:mb-3 text-center lg:text-left">
                    PROGRAM OVERVIEW
                </h2>
                <p className="text-sm lg:text-lg font-semibold text-gray-600 mb-2 lg:mb-3 text-center lg:text-left">
                    Admissions open for the October 2024 Intake
                </p>
                <p className="text-xs lg:text-base text-justify text-gray-700 mb-2 lg:mb-3">
                    SP Jain Global's Master of Global Business (MGB) program trains you to adapt to different business cultures and markets, preparing you for a lifetime of decision-making and leadership. Our twin city study format offers many opportunities to experience diverse cultures, study international business practices, network with business leaders, conduct real-time industry projects, and explore internships and full-time job opportunities.
                </p>
                <ul className="space-y-1 mb-2 lg:mb-3">
                    <li className="flex items-start text-md lg:text-base">
                        <span className="text-yellow-500 font-bold mr-1 lg:mr-2">•</span>
                        <span>
                            <span className="font-bold">Program Duration:</span> 16-month full-time program (includes a 4-month internship)
                        </span>
                    </li>
                    <li className="flex items-start text-md lg:text-base">
                        <span className="text-yellow-500 font-bold mr-1 lg:mr-2">•</span>
                        <span>
                            <span className="font-bold">Study Location:</span> Study on-campus in Singapore and Dubai (with an option to study in London at SPJ London)
                        </span>
                    </li>
                    <li className="flex items-start text-md lg:text-base">
                        <span className="text-yellow-500 font-bold mr-1 lg:mr-2">•</span>
                        <span>
                            <span className="font-bold">Degree Type:</span> Australian postgraduate degree (accredited by TEQSA)
                        </span>
                    </li>
                    <li className="flex items-start text-md lg:text-base">
                        <span className="text-yellow-500 font-bold mr-1 lg:mr-2">•</span>
                        <span>
                            <span className="font-bold">Eligibility:</span> Undergraduate degree
                        </span>
                    </li>
                </ul>
                <p className="text-xs lg:text-base text-justify text-gray-700 mb-2 lg:mb-4">
                    You must have a valid GMAT / GRE / CAT score that meets our minimum test score criteria to be considered for admission. You can take the SP Jain Aptitude Test (SPJAT) if you do not have a valid test score.
                </p>
                <button className="custom-button text-xs lg:text-base">
                    <span>DOWNLOAD A BROCHURE</span>
                </button>
            </div>
        </div>
    );
}

export default ProgramOverview;
