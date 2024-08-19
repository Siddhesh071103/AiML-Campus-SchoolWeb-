import React from 'react';
import leftImage from '../assets/MGB-Class-Profile.png';
import rightImage from '../assets/MGB-Class-Profile.png';
import toprec from '../assets/accordin-bg.jpg'

function Career() {
    const recruiters = [
        ['Amazon', 'Apparel Group', 'Aramex', 'Arvind Fashions'],
        ['Asian Paints', 'Aster DM Healthcare', 'AurionPro', 'Bosch Global'],
        ['Brand Folio LLC', 'Christian Dior', 'Comviva Technologies', 'Corporate Group'],
        ['Danzas DHL', 'Dabur', 'Dell Malaysia', 'Deloitte'],
        ['Ecofy', 'Emami', 'Empact Consulting', 'Enhance Group'],
        ['Ernst & Young', 'Gallega Global Logistics', 'Grant Thornton', 'GroupM'],
        ['HCL Technologies', 'Himalaya Wellness', 'Hilti', 'ICC Loyalty'],
        ['IIFL Wealth', 'Incisiv', 'Incisiv Analytics', 'Kuehne+Nagel'],
        ['Landmark Group', 'Lets Transport', 'Louis Vuitton', 'Magnati'],
        ['Philips Health', 'Philips', 'Protiviti India', 'QualityKiosk Technologies'],
        ['Schneider Electric', 'Siemens', 'Thomson Digital', 'TrackIT Solutions'],
    ];

    return (
        <div id='Careers' className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
            <h2 className="text-2xl font-bold text-center text-black-800 mb-6">
                CAREER OUTCOMES
            </h2>
            <p className="text-justify lg:text-center text-gray-600 text-sm">
                Equipped with new skills and experiences, SP Jain Global's Master of Global Business graduates are building successful careers with leading global companies across diverse sectors.
            </p>
            <h1 className="text-justify lg:text-center font-bold text-md text-black-600 mb-20">
                Here are the key employment highlights of our Class of 2023:
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="relative w-full max-w-[300px] h-[150px] mx-auto flex flex-col items-center justify-center">
                    <img src={leftImage} alt="Left Column" className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-black font-bold text-3xl">48%</span>
                        <span className="text-black font-semibold text-md mt-2">International Placements</span>
                    </div>
                </div>

                {/* Right Column */}
                <div className="relative w-full max-w-[300px] h-[150px] mx-auto flex flex-col items-center justify-center">
                    <img src={rightImage} alt="Right Column" className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-black font-bold text-3xl">91%</span>
                        <span className="text-black font-semibold text-md mt-2">International Internships</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center py-10">
                <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    GRADUATE SALARIES
                </h2>
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <label htmlFor="currency" className="text-black-800 font-bold text-sm sm:text-base flex-shrink-0">
                        Select Currency:
                    </label>
                    <select
                        id="currency"
                        className="border border-gray-300 p-1 text-gray-800 text-sm sm:text-base w-full sm:w-[150px]"
                    >
                        <option value="INR">INR</option>
                        {/* Add other currency options here */}
                    </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border w-[300px]">
                        <p className="text-gray-800 font-bold">INR</p>
                        <p className="text-3xl font-bold text-yellow-500 mt-1">53,87,400</p>
                        <p className="text-gray-800 font-bold">HIGHEST SALARY</p>
                    </div>
                    <div className="p-6 border w-[300px]">
                        <p className="text-gray-800 font-bold">INR</p>
                        <p className="text-3xl font-bold text-yellow-500 mt-1">19,43,577</p>
                        <p className="text-gray-800 font-bold">AVERAGE SALARY</p>
                    </div>
                    <div className="p-6 border w-[300px]">
                        <p className="text-xl font-bold text-yellow-500">
                            7-FOLD INCREASE
                        </p>
                        <p className="text-gray-800 mt-1 font-bold">
                            OVER PRE-PROGRAM
                        </p>
                        <p className="text-gray-800 font-bold">
                            SALARIES*
                        </p>
                    </div>
                </div>
                <div className="mt-10 w-full px-6 text-center">
                    <p className="text-sm text-gray-600 mx-auto max-w-prose">
                        *This does not include graduates with no prior work experience.
                    </p>
                </div>
            </div>

            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-2xl font-bold text-center text-black-800 mb-6">
                    EMPLOYMENT BY INDUSTRY
                </h2>
                <div className="flex justify-center">
                    <img
                        src="https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/horizontal-bar-graph-1622649366.png"
                        alt="Employment by Industry Graph"
                        className="mt-4"
                    />
                </div>
            </div>

            <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="relative w-full mx-auto">
                    {/* Background Image */}
                    <img src={toprec} alt="Background Image" className="w-full h-[60px] object-cover sm:w-[1400px]" />
                    <h2 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-center text-black">
                        TOP GLOBAL RECRUITERS
                    </h2>
                    <span className="block absolute bottom-0 left-0 w-full sm:w-[1400px] h-1 bg-yellow-500"></span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {recruiters.map((row, index) => (
                        <div key={index} className="flex justify-center items-center">
                            <ul className="list-none p-0 m-0 w-full">
                                {row.map((recruiter, i) => (
                                    <React.Fragment key={i}>
                                        <li className="py-2 text-center text-black-800">
                                            {recruiter}
                                        </li>
                                        {i !== row.length - 1 && <hr className="border-gray-300 w-full" />}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Career;
