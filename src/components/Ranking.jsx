import React from 'react';
import imagePath from '../assets/accordin-bg.jpg';
import Source from './Source';

function Ranking() {
    const rankings = [
        {
            title: "#7 IN THE ASIA–PACIFIC",
            source: "Bloomberg Businessweek",
            details: "Best B-Schools",
            year: "(2023-24)"
        },
        {
            title: "TOP 15 IN THE WORLD",
            source: "Forbes",
            details: "The Best International MBAs: 1-Year Programs",
            year: "(2019-21)"
        },
        {
            title: "#4 IN THE WORLD",
            source: "Times Higher Education–Wall Street Journal",
            details: "1-year MBAs",
            year: "(2018-19)"
        },
        {
            title: "TOP 100 IN THE WORLD",
            source: "The Economist",
            details: "Full-Time MBAs",
            year: "(2015)"
        },
        {
            title: "TOP 50 IN THE WORLD",
            source: "Poets & Quants",
            details: "Best International MBAs",
            year: "(2015)"
        },
        {
            title: "TOP 100 IN THE WORLD",
            source: "Financial Times",
            details: "Global MBA Rankings",
            year: "(2011 & 2012)"
        },
    ];

    return (
        <div id='Ranking' className="py-4 px-4 sm:px-6 lg:px-8 bg-white mt-[50px]">
        <div className="h-1 w-[80px] bg-yellow-400 mb-2 mx-auto"></div>
            <h2 className="text-2xl font-bold text-center text-black-800 mb-4">
                ABOUT SP JAIN GLOBAL
            </h2>
            <p className="text-black-800 text-sm text-justify mx-auto max-w-screen-md">
                SP Jain School of Global Management is an Australian business school with campuses in Dubai, Singapore, and Sydney. We relentlessly strive to reimagine business education and offer innovative courses in these dynamic and world-class cities. Year after year, our efforts have been recognised by highly regarded global rankings that include:
            </p>
            <div className="bg-white p-4 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center md:justify-start">
                {rankings.map((ranking, index) => (
                    <div
                        key={index}
                        className="relative bg-no-repeat bg-center bg-cover flex items-center justify-end mb-4 mx-auto" // Center horizontally on mobile
                        style={{
                            backgroundImage: `url(${imagePath})`,
                            height: '8rem',
                            width: '22rem',
                            backgroundSize: 'cover'
                        }}
                    >
                        <div className="absolute right-0 p-4 flex flex-col items-end">
                            <h2 className="text-lg font-bold text-right">{ranking.title}</h2>
                            <p className="text-sm text-right">{ranking.source}</p>
                            <p className="text-xs text-right">{ranking.details}</p>
                            <p className="text-xs text-right">{ranking.year}</p>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1 bg-yellow-500"></div>
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <Source />
            </div>
        </div>
    );
}

export default Ranking;
