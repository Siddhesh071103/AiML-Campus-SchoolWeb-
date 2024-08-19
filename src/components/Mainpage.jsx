import React, { useState, useEffect, useRef } from 'react';
import ProgramOverview from './Overview';
import Study from './Study';
import Career from './Career';
import Classprofile from './Classprofile';
import Studentexp from './Studentexp';
import Ranking from './Ranking';
import mobileImage from '../assets/Mobile (1).jpg';
import desktopImage from '../assets/Desktop (1)-1.jpg';
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';

function Mainpage() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [scrollingDown, setScrollingDown] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showEnquireButton, setShowEnquireButton] = useState(false); // New state for Enquire button
    const menuRef = useRef(null); // Ref for the mobile menu

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        if (!isMenuOpen && menuRef.current) {
            // Scroll to the top of the menu when it opens
            menuRef.current.scrollIntoView({ behavior: 'smooth' });
            // Prevent body scroll while the menu is open
            document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
        } else {
            document.body.style.overflow = 'auto'; // Allow body scroll when menu is closed
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setScrollingDown(true);
        } else {
            setScrollingDown(false);
        }

        // Show Enquire button when scrolled more than 100px
        setShowEnquireButton(currentScrollY > 100);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        // Clean up overflow style when component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="relative min-h-screen bg-white">
            <nav
                className={`bg-white transition-all duration-300 fixed top-0 left-0 right-0 z-10 ${scrollingDown ? 'h-[80px]' : 'h-[115px]'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                    {/* Move logo to the left more */}
                    <div className="flex-shrink-0 mr-auto">
                        <img
                            src="https://www.spjain.org/hubfs/home2017/logo.png"
                            alt="Logo"
                            className="h-20 w-50"
                        />
                    </div>
{/* desktop navbar */}
                    <div className="hidden md:flex space-x-4 mr-[-125px]">
                        <a href="#Overview" className="relative text-gray-700 mt-10 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:top-[-5px] hover:after:h-[2px] hover:after:bg-yellow-500 hover:after:mx-auto hover:after:w-[50px]">
                            OVERVIEW
                        </a>
                        <a href="#Studyinlondon" className="relative text-gray-700 mt-10 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:top-[-5px] hover:after:h-[2px] hover:after:bg-yellow-500 hover:after:mx-auto hover:after:w-[50px]">
                            STUDY IN LONDON
                        </a>
                        <a href="#Careers" className="relative text-gray-700 mt-10 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:top-[-5px] hover:after:h-[2px] hover:after:bg-yellow-500 hover:after:mx-auto hover:after:w-[50px]">
                            CAREERS
                        </a>
                        <a href="#Classprofiles" className="relative text-gray-700 mt-10 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:top-[-5px] hover:after:h-[2px] hover:after:bg-yellow-500 hover:after:mx-auto hover:after:w-[50px]">
                            CLASS PROFILES
                        </a>
                        <a href="#Studentexp" className="relative text-gray-700 mt-10 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:top-[-5px] hover:after:h-[2px] hover:after:bg-yellow-500 hover:after:mx-auto hover:after:w-[50px]">
                            STUDENT EXPERIENCES
                        </a>
                        <a href="#Ranking" className="relative text-gray-700 mt-10 hover:after:content-[''] hover:after:absolute hover:after:left-0 hover:after:right-0 hover:after:top-[-5px] hover:after:h-[2px] hover:after:bg-yellow-500 hover:after:mx-auto hover:after:w-[50px]">
                            RANKING
                        </a>
                        <div
                            className={`text-black bg-white px-3 py-2 hover:bg-gray-100 mt-8 cursor-pointer border border-yellow-500 transition-opacity duration-300`}
                        >
                            APPLY
                        </div>
                        <div
                            className={`text-black bg-white px-3 py-2 hover:bg-gray-100 mt-8 cursor-pointer bg-yellow-500 transition-opacity duration-300 ${scrollingDown ? 'opacity-100' : 'opacity-0'}`}
                            onClick={() => document.getElementById('enquiryForm').scrollIntoView({ behavior: 'smooth' })}
                        >
                            ENQUIRE NOW
                        </div>

                    </div>

                    {/* Hamburger Icon for Mobile */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700">
                            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Collapsible */}
                <div
                    ref={menuRef}
                    className={`${isMenuOpen ? 'max-h-[calc(100vh-115px)]' : 'max-h-0'
                        } overflow-auto transition-max-height duration-300 md:hidden fixed left-0 right-0 top-[115px] bg-white z-20`}
                >
                    <div className="flex flex-col items-left ml-4 space-y-4 py-4">
                        <a href="#Overview" className="text-gray-700 hover:text-blue-500 border-b border-gray-300 pb-2" onClick={toggleMenu}>
                            OVERVIEW
                        </a>
                        <a href="#Studyinlondon" className="text-gray-700 hover:text-blue-500 border-b border-gray-300 pb-2" onClick={toggleMenu}>
                            STUDY IN LONDON
                        </a>
                        <a href="#Careers" className="text-gray-700 hover:text-blue-500 border-b border-gray-300 pb-2" onClick={toggleMenu}>
                            CAREERS
                        </a>
                        <a href="#Classprofiles" className="text-gray-700 hover:text-blue-500 border-b border-gray-300 pb-2" onClick={toggleMenu}>
                            CLASS PROFILES
                        </a>
                        <a href="#Studentexp" className="text-gray-700 hover:text-blue-500 border-b border-gray-300 pb-2" onClick={toggleMenu}>
                            STUDENT EXPERIENCES
                        </a>
                        <a href="#Ranking" className="text-gray-700 hover:text-blue-500 border-b border-gray-300 pb-2" onClick={toggleMenu}>
                            RANKING
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="relative flex items-center mt-[155px]">
                {/* Desktop Image */}
                <div className="hidden md:block relative w-full h-[550px]">
                    <img
                        src={desktopImage}
                        alt="Group of students"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-[30%] bg-white bg-opacity-75 p-8 flex flex-col justify-center items-center">
                        <div className="text-left">
                            <p className="text-base">
                                Give your career a global edge with SP Jain Global.
                            </p>
                            <p className="text-sm mb-6">
                                Asia Pacific’s #7 Best B-School: Bloomberg Businessweek.
                            </p>
                            <h1 className="text-2xl font-bold mb-4">
                                MASTER OF GLOBAL BUSINESS
                            </h1>
                            <div className="border border-black p-1">
                                <p className="text-lg font-bold">
                                    Admissions open for October 2024 Intake
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id='enquiryForm' className="absolute right-[215px] top-1/2 transform -translate-y-1/2 w-[300px] bg-white border-2 border-yellow-500">
                        <div className="bg-yellow-500 h-[60px] flex items-center justify-center text-center">
                            <h2 className="text-xl font-bold text-black">ENQUIRE NOW</h2>
                        </div>
                        <form className="p-2">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="relative border-b border-gray-300">
                                    <input
                                        type="text"
                                        placeholder="First Name *"
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0 placeholder-gray-500"
                                    />
                                </div>
                                <div className="relative border-b border-gray-300">
                                    <input
                                        type="text"
                                        placeholder="Last Name *"
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0 placeholder-gray-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0 placeholder-gray-500"
                                />
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="India">India (+91)</option>
                                    <option value="US">US (+1)</option>
                                </select>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="" disabled selected>
                                        State *
                                    </option>
                                </select>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="" disabled selected>
                                        College Name *
                                    </option>
                                </select>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="" disabled selected>
                                        Bachelor's Degree in *
                                    </option>
                                </select>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="" disabled selected>
                                        Year of Graduation *
                                    </option>
                                </select>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="" disabled selected>
                                        Select the Entrance Test Taken *
                                    </option>
                                </select>
                            </div>

                            <div className="mt-1 relative border-b border-gray-300">
                                <select
                                    className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                >
                                    <option value="" disabled selected>
                                        Please select your preferred study option *
                                    </option>
                                </select>
                            </div>

                            <div className="mt-1 flex items-center">
                                <input
                                    type="checkbox"
                                    className="mr-1"
                                />
                                <label className="text-xs">
                                    I would like to receive more information about SP Jain Global School of Management.
                                </label>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-yellow-500 text-sm font-semibold w-[100px] text-black py-2 px-2"
                                >
                                    SUBMIT
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Mobile Image and Text */}
                <div className="md:hidden relative w-full">
                    <img
                        src={mobileImage}
                        alt="Group of students"
                        className="w-auto h-auto object-cover"
                    />
                    <div className="p-4 bg-white mt-4">
                        <div className="text-center mb-4">
                            <p className="text-xs mb-2">
                                Give your career a global edge with SP Jain Global.
                            </p>
                            <p className="text-xs mb-4">
                                Asia Pacific’s #7 Best B-School: Bloomberg Businessweek.
                            </p>
                            <h1 className="text-xl font-bold mb-3">
                                MASTER OF GLOBAL BUSINESS
                            </h1>
                            <div className="border border-black p-2 mb-4">
                                <p className="text-base font-bold text-center text-black">
                                    Admissions open for October 2024 Intake
                                </p>
                            </div>
                        </div>

                        <div className="bg-white border-2 border-yellow-500 mt-20">
                            <div className="bg-yellow-500 h-[60px] flex items-center justify-center text-center">
                                <h2 className="text-xl font-bold text-black">ENQUIRE NOW</h2>
                            </div>
                            <form className="p-4">
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="relative border-b border-gray-300">
                                        <input
                                            type="text"
                                            placeholder="First Name *"
                                            className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0 placeholder-gray-500"
                                        />
                                    </div>
                                    <div className="relative border-b border-gray-300">
                                        <input
                                            type="text"
                                            placeholder="Last Name *"
                                            className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0 placeholder-gray-500"
                                        />
                                    </div>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0 placeholder-gray-500"
                                    />
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="India">India (+91)</option>
                                        <option value="US">US (+1)</option>
                                    </select>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="" disabled selected>
                                            State *
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="" disabled selected>
                                            College Name *
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="" disabled selected>
                                            Bachelor's Degree in *
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="" disabled selected>
                                            Year of Graduation *
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="" disabled selected>
                                            Select the Entrance Test Taken *
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-1 relative border-b border-gray-300">
                                    <select
                                        className="w-full bg-transparent border-0 p-1 focus:outline-none focus:ring-0"
                                    >
                                        <option value="" disabled selected>
                                            Please select your preferred study option *
                                        </option>
                                    </select>
                                </div>

                                <div className="mt-1 flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-1"
                                    />
                                    <label className="text-xs">
                                        I would like to receive more information about SP Jain Global School of Management.
                                    </label>
                                </div>

                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-yellow-500 text-xl font-semibold text-black py-2 px-4"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <ProgramOverview />
            <Study />
            <Career />
            <Classprofile />
            <Studentexp />
            <Ranking />

            {/* Scroll-to-Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 bg-yellow-500 text-black rounded-md p-3 shadow-lg hover:bg-yellow-600 transition-colors duration-300"
                aria-label="Scroll to top"
            >
                <FaArrowUp size={20} />
            </button>

        </div>
    );
}

export default Mainpage;
