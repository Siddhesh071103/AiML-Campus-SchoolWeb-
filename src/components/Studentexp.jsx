import React from 'react';
import quote from '../assets/Quote-icon.webp';
import star from '../assets/high-quality.webp';
import bgImage from '../assets/accordin-bg.jpg';
import FeaturesSection from './FeaturesSection';

const testimonials = [
    {
        name: 'BICH LE NGOC',
        intake: 'MGB Intake of 2022',
        role: 'Student',
        quote: '“I chose SP Jain because it meets all that I needed. I wanted to study abroad, and the school has a tri-city program. The school’s high ranking proves this program’s quality. My course started in Dubai, and the Dubai campus is beautiful. The well-designed curriculum helps me build skills in new areas like marketing, finance, and operations.”',
        imageUrl: 'https://www.spjain.org/hs-fs/hubfs/Le%20Bich%20Ngoc.png?width=228&height=227&name=Le%20Bich%20Ngoc.png',
    },
    {
        name: 'KUNAL GOENKA',
        intake: 'MGB 2021',
        role: 'Manager, PwC Australia',
        quote: '“Over the past 16 months, this course helped me grow personally and professionally. I was able to train under reputed international faculty and benefit from their expertise. Critical thinking, reasoning, and presenting are a few more skills I built during this period. I credit SP Jain Global\'s MGB program for where I am today.”',
        imageUrl: 'https://www.spjain.org/hs-fs/hubfs/PG%20Testimonials/Kunal-Goenka.png?width=228&height=227&name=Kunal-Goenka.png',
    },
    {
        name: 'MAHDA SHANGRILA',
        intake: 'MGB Intake of 2022',
        role: 'Student',
        quote: '“The MGB program at SP Jain challenges me to go through a lot of rigorous activities that will help me grow and suit my career goals and aspirations. I’m looking forward to the industry-related activities and the cultural experience in each city.”',
        imageUrl: 'https://www.spjain.org/hs-fs/hubfs/Mahda-Shangrila.png?width=228&height=227&name=Mahda-Shangrila.png',
    }
];

function Studentexp() {
    return (
        <div id='Studentexp' className="flex flex-col items-center py-10">
            <div className="text-center mb-10">
                <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                    DISCOVER OUR STUDENT EXPERIENCES
                </h2>
                <h1 className="text-center font-bold text-sm text-black-600">
                    Hear from our students and alumni as they share their SP Jain Global experience and career impact
                </h1>
            </div>

            {/* Testimonials */}
            <div className="flex justify-center items-center py-5 bg-black-50">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative bg-white shadow-lg p-8 rounded-lg text-center max-w-[700px] h-[550px] mx-auto">
                            <img
                                src={testimonial.imageUrl}
                                alt={testimonial.name}
                                className="w-40 h-40 rounded-full mx-auto mb-4"
                            />
                            <h3 className="text-lg font-bold text-yellow-500">{testimonial.name}</h3>
                            <p className="text-xs font-semibold text-gray-600">{testimonial.intake}</p>
                            <p className="text-xs text-gray-500 mb-4">{testimonial.role}</p>
                            <p className="text-gray-700 italic mb-4 text-sm">{testimonial.quote}</p>
                            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                                <img src={quote} alt="quote icon" className="w-4 h-4" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-[2px] bg-yellow-500"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Australia Ranking Section */}
            <div className="flex flex-col-reverse md:flex-row items-center justify-center bg-white py-12 px-6">
                <div className="flex-[70%] md:ml-[150px] text-center md:text-left">
                    <div className="mb-4">
                        <div className="h-1 w-[80px] bg-yellow-400 mb-2 lg:ml-0 mx-auto"></div>
                        <h2 className="text-xl md:text-3xl font-bold">RANKED #1 IN AUSTRALIA</h2>
                        <p className="lg:text-base text-justify font-semibold  md:text-lg text-gray-700 mt-2">
                            for skills development for postgraduate students
                        </p>
                    </div>
                    <p className="text-gray-600 text-sm lg:text-base text-justify md:text-base mb-4">
                        SP Jain School of Global Management has achieved remarkable results at
                        the postgraduate level in the Quality Indicators for Learning and
                        Teaching (QILT) 2022 student survey, solidifying its position among
                        Australia's top higher education institutions.
                    </p>
                    <div className="flex flex-col items-center space-y-4 md:space-y-0 md:items-start">
                        <div className="flex items-center">
                            <img src={star} alt='star' className='w-5 h-4' />
                            <p className="ml-2 lg:text-sm text-md md:text-base font-semibold text-gray-800">
                                #1 In Skills Development
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img src={star} alt='star' className='w-5 h-4' />
                            <p className="ml-2 lg:text-sm text-md md:text-base font-semibold text-gray-800">
                                #2 In Learner Engagement
                            </p>
                        </div>
                        <div className="flex items-center">
                            <img src={star} alt='star' className='w-5 h-4' />
                            <p className="ml-2 lg:text-sm text-md md:text-base font-semibold text-gray-800">
                                In The Top 20% For All Indicators
                            </p>
                        </div>
                    </div>
                    <p className="text-gray-600 lg:text-base text-justify text-sm md:text-base mb-6">
                        This recognition is a testament to our exceptional faculty,
                        industry-relevant curriculum, student-centric approach, and practical
                        learning experience that fosters career growth.
                    </p>
                    <button className="custom-school mb-5">
                        <span>START YOUR JOURNEY WITH SP JAIN GLOBAL</span>
                    </button>
                </div>
                <div className="flex-[30%] md:mr-[50px] mb-6 md:mb-0 flex items-center justify-center">
                    <img
                        src='https://www.spjain.org/hubfs/2021/pdf/mgb/514300341-4-mgb-latest-news-section.jpg'
                        alt="Students walking"
                        className="max-w-[350px] h-auto"
                    />
                </div>
            </div>
            <FeaturesSection />
        </div>
    );
}

export default Studentexp;
