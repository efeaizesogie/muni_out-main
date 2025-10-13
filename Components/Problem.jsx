

// const Problem = () => {
//     return (
//         <div id="introduction" className='flex flex-col w-full max-h-screen items-center text-center bg-white tracking-wider py-10 md:py-32 lg:py-[152px] px-4'>
//             <TitleHead title="Slow Response &" titleBreak="High Call Volume" tag="The Problem" />
//             <p className="max-w-xl w-full text-sm  font-medium py-6 md:py-8 leading-relaxed">Municipalities across North America are struggling to keep pace with resident needs—response times are slow and call centres are overburdened with requests. Outdated manual processes and staffing shortages leave administrators overwhelmed, resulting in a frustrating experience for residents seeking information or submitting service tickets.</p>
//             <div className="flex justify-center pt-8 md:pt-12 relative w-full">
//                 <div className="relative">
//                     <Image src={callVolume} alt={"call volume"} className="w-full max-w-[324px] h-auto shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
//                     <LineGradient />
//                 </div>
//             </div>

//                 <svg width="742" height="742" viewBox="0 0 742 742" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <g filter="url(#filter0_f_791_477)">
//                         <circle cx="371" cy="371" r="310" fill="#006A4A" />
//                         <circle cx="371" cy="371" r="301.819" stroke="url(#paint0_linear_791_477)" stroke-width="16.3611" stroke-dasharray="0.86 17.22" />
//                     </g>
//                     <defs>
//                         <filter id="filter0_f_791_477" x="0.878788" y="0.878788" width="740.242" height="740.242" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                             <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                             <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
//                             <feGaussianBlur stdDeviation="30.0606" result="effect1_foregroundBlur_791_477" />
//                         </filter>
//                         <linearGradient id="paint0_linear_791_477" x1="371" y1="61" x2="371" y2="681" gradientUnits="userSpaceOnUse">
//                             <stop offset="0.24811" stop-color="#006A4A" />
//                             <stop offset="0.600936" stop-color="#C4E76A" />
//                             <stop offset="1" stop-color="#F9F9F9" />
//                         </linearGradient>
//                     </defs>
//                 </svg>


//         </div>
//     )
// }

// export default Problem
"use client"
import Image from "next/image"
import callVolume from "../public/images/callVolume.png"
import TitleHead from "@/constants/TitleHead";
import LineGradient from "@/utils/LineGradient";

import { useEffect, useRef, useState, } from 'react';

const Problem = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '-50px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const badges = [
        { text: 'Report Issue', position: 'top-8 left-28' },
        { text: 'Track Request', position: 'top-8 right-28' },
        { text: 'City Information', position: 'top-1/2 -translate-y-1/2 left-16' },
        { text: 'News & Events', position: 'top-1/2 -translate-y-1/2 right-16' },
        { text: 'Pay Ticket', position: 'bottom-24 left-36' },
        { text: 'Collection Schedule', position: 'bottom-24 right-28' },
    ];

    return (
        <div
            ref={sectionRef}
            id="introduction"
            className="relative flex flex-col w-full min-h-screen items-center text-center overflow-visible py-20 lg:py-32 px-4"

        >
            {/* Circular Dashed Line with Badges */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[80%] h-[590px] hidden mt-20 lg:block pointer-events-none z-10 overflow-visible ">
                {/* SVG Circle */}
                <svg
                    className="absolute inset-0 w-full h-[90%] overflow-visible"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 1s ease-out'
                    }}
                >
                    <circle
                        cx="50%"
                        cy="50%"
                        r="420"
                        fill="none"
                        stroke="url(#circleGradient1)"
                        strokeWidth="20"
                        strokeDasharray="1 24"
                    />

                    <defs>
                        <filter id="filter0_f_791_477" x="0.878788" y="0.878788" width="740.242" height="740.242" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                            <feGaussianBlur stdDeviation="30.0606" result="effect1_foregroundBlur_791_477" />
                        </filter>
                        <linearGradient id="circleGradient1" x1="371" y1="61" x2="371" y2="681" gradientUnits="userSpaceOnUse">
                            <stop offset="0.24811" stop-color="#006A4A" />
                            <stop offset="0.600936" stop-color="#C4E76A" />
                            <stop offset="1" stop-color="#F9F9F9" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Badges */}
                {badges.map((badge, index) => (
                    <div
                        key={index}
                        className={`absolute ${badge.position} pointer-events-auto`}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0px)' : 'translateY(20px)',
                            transition: `all 0.6s ease-out ${index * 0.1 + 0.5}s`
                        }}
                    >
                        <div className="px-3 py-1 bg-white border border-[#E9EAEB] rounded-full shadow-sm text-sm font-medium text-gray-700 whitespace-nowrap">
                            {badge.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 md:w-[80%] mx-auto overflow-visible ">
                {/* Tag */}
                <div
                    className="text-base font-semibold text-[#006A4A] mb-6 tracking-tight lg:mt-24"

                >
                    The Problem
                </div>

                {/* Title */}
                <h2
                    className="text-4xl md:text-5xl lg:text-[54px] font-semibold leading-tight lg:leading-[64px] tracking-tight text-black mb-8 capitalize max-w-[512px] mx-auto"

                >
                    Slow Response & High Call Volume
                </h2>

                {/* Description */}
                <p
                    className="text-sm font-medium leading-6 text-black opacity-70 max-w-[495px] mx-auto mb-12"
                >
                    Municipalities across North America are struggling to keep pace with resident needs—response times are slow and call centres are overburdened with requests. Outdated manual processes and staffing shortages leave administrators overwhelmed, resulting in a frustrating experience for residents seeking information or submitting service tickets.
                </p>

                {/* Call Volume Card */}
                <div className="relative w-[324px] mx-auto ">
                    {isVisible ?
                        <>
                            <div
                                className="inline-block"
                                style={{
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                                    transition: 'all 0.8s ease-out 0.6s'
                                }}
                            >
                                <div className="bg-white border border-[#006A4A] rounded-[14.6px] p-6 shadow-lg max-w-[324px] w-full">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-4 h-4 text-[#006A4A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                            <span className="text-xs font-semibold text-black tracking-tight">Call Volume</span>
                                        </div>
                                        <span className="text-[10px] font-semibold text-[#006A4A] tracking-tight">LOW</span>
                                    </div>

                                    {/* Bar Chart */}
                                    <div className="flex items-end justify-between gap-2 h-[100px]">
                                        {[19, 38, 27, 38, 30, 35, 30, 27, 22, 25, 22, 17].map((height, index) => (
                                            <div
                                                key={index}
                                                className="w-4 rounded-full transition-all duration-500 ease-out"
                                                style={{
                                                    height: isVisible ? `${height}px` : '0px',
                                                    backgroundColor: '#006A4A',
                                                    transitionDelay: `${0.8 + index * 0.05}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </> : <Image src={callVolume} alt={"call volume"} className="w-full max-w-full h-auto shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                    }

                    <LineGradient />
                </div>
            </div>
        </div>
    );
};

export default Problem;

