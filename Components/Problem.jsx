"use client"
import Image from "next/image"
import callVolume from "../public/images/callVolume.png"
import callVolumeAnim from "../public/icons/call-volume-anim.svg"
import city from "../public/icons/city.svg"
import collection from "../public/icons/collection.svg"
import report from "../public/icons/report.svg"
import track from "../public/icons/track.svg"
import news from "../public/icons/news.svg"
import pay from "../public/icons/pay.svg"
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
        { text: report, position: 'top-8 left-28' },
        { text: track, position: 'top-8 right-28' },
        { text: city, position: 'top-1/2 -translate-y-1/2 left-16' },
        { text: news, position: 'top-1/2 -translate-y-1/2 right-16' },
        { text: pay, position: 'bottom-24 left-36' },
        { text: collection, position: 'bottom-24 right-28' },
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
                        <div className="">
                            <Image src={badge.text} alt={"badge"} />
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
                            <Image src={callVolumeAnim} alt={"call volume"} className="w-full object-fit-contain  h-[200px] shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                        </> : <Image src={callVolume} alt={"call volume"} className="w-full  h-[200px] shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                    }
                    <div style={{
                        marginTop: isVisible ? "-40px" : "0px"
                    }}>
                        <LineGradient />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Problem;

