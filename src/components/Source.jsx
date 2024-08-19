import React, { useState } from 'react';

const FeaturesSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const features = [
        {
            title: 'Sources',
            content: `Living and studying in some of the world’s leading business centres like Dubai and Singapore...`,
        },
    ];

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-white py-12">
            <div className="flex flex-col items-center">
                <div className="text-center w-full"> {/* Full-screen width */}
                    {features.map((feature, index) => (
                        <div key={index} className="mb-6 w-11/12 md:w-9/12 mx-auto"> {/* Responsive width */}
                            <div
                                className="cursor-pointer bg-gray-100 text-black p-4 flex justify-between items-center"
                                style={{
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center center',
                                    height: '50px',
                                }}
                                onClick={() => toggleExpand(index)}
                            >
                                <h2 className="text-xs font-semibold">{feature.title}</h2>
                                <span className="text-yellow-500 font-bold text-xl">
                                    {expandedIndex === index ? '-' : '+'}
                                </span>
                            </div>
                            {expandedIndex === index && (
                                <div className="bg-white p-4 text-black mx-auto" style={{ width: '90%' }}>
                                    <p>{feature.content}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-gray-200 text-gray-700 text-xs px-4 py-6 leading-tight space-y-2 mt-[75px] w-full">
                <p>© 2024 S P Jain School of Global Management</p>
                <p className='text-justify'>
                    SP Jain School of Global Management (SP Jain Global) is an Institute of Higher Education in Australia with campuses in Dubai, Singapore, and Sydney. SP Jain London School of Management (SPJ London) is a British business school registered with the Office for Students, UK. Both institutes are part of the SP Jain Group but function independently of each other. They have extensive exchange agreements that permit students to study across our locations.
                </p>
                <p className='text-justify'>
                    S P Jain School of Global Management Pty. Ltd. Provider Category: Institute of Higher Education. TEQSA Provider Identification: PRV12041. CRICOS Provider Code: 03335G. CRICOS Course (MGB) Code: 077572E.
                </p>
                <p className='text-justify' >
                    Name of PEI (Private Education Institution): S P Jain School of Global Management. Committee for Private Education (CPE) is part of SkillsFuture Singapore (SSG). Registration Number of PEI: 200516544Z | Period of Registration: 09 May 2023 to 08 May 2029.
                </p>
                <p className='text-justify'>
                    Note: The MGB program is not accredited or approved by the All India Council for Technical Education (AICTE) or any regulatory body in India. Additionally, it is not accredited by the Ministry of Education (MOE), UAE.
                </p>
            </div>
        </div>
    );
};

export default FeaturesSection;
