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
    const [isBarVisible, setIsBarVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    setTimeout(() => {
                        setIsBarVisible(true);
                    }, 100);
                }
            },
            {
                threshold: 0.4,
                rootMargin: '-20px'
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
            className="relative flex flex-col w-full ,d:min-h-screen items-center text-center overflow-visible py-20 lg:py-32 px-4"

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
                        <div>
                            {/* <Image src={callVolumeAnim} alt={"call volume"} className="w-full object-fit-contain  h-[200px] shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" /> */}
                            <svg width="324" height="189" viewBox="18 8 324 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_9343_582)">
                                    <g clip-path="url(#clip0_9343_582)">
                                        <rect x="18" y="8" width="324" height="189" rx="14.5946" fill="white" />
                                        <path d="M63.4954 39.4241C61.0714 39.4241 59.1754 37.4561 59.1754 34.9241C59.1754 32.4041 61.0714 30.4481 63.4954 30.4481C65.7634 30.4481 67.5394 31.9601 67.8394 34.1681H65.9074C65.7034 32.9321 64.7434 32.0801 63.5194 32.0801C62.0434 32.0801 61.0474 33.2441 61.0474 34.9241C61.0474 36.6161 62.0434 37.7921 63.5194 37.7921C64.7434 37.7921 65.6914 36.9281 65.9074 35.6921H67.8394C67.5394 37.9241 65.7634 39.4241 63.4954 39.4241ZM72.665 39.2441V38.4521C72.245 39.0521 71.609 39.3641 70.733 39.3641C69.401 39.3641 68.513 38.5841 68.513 37.3841C68.513 36.1361 69.521 35.4641 71.393 35.4641C71.753 35.4641 72.065 35.4881 72.461 35.5361V35.1521C72.461 34.4321 72.053 34.0121 71.357 34.0121C70.637 34.0121 70.205 34.4321 70.145 35.1521H68.645C68.741 33.6761 69.809 32.7161 71.357 32.7161C73.037 32.7161 74.021 33.6401 74.021 35.2121V39.2441H72.665ZM70.085 37.3361C70.085 37.8761 70.469 38.2121 71.093 38.2121C71.945 38.2121 72.461 37.7441 72.461 37.0001V36.5441C72.065 36.4841 71.789 36.4601 71.501 36.4601C70.553 36.4601 70.085 36.7601 70.085 37.3361ZM77.0184 39.2441H75.3384V30.6281H77.0184V39.2441ZM80.0742 39.2441H78.3942V30.6281H80.0742V39.2441ZM91.3977 30.6281L88.2777 39.2441H86.2857L83.1897 30.6281H85.1577L87.3417 37.1201L89.5737 30.6281H91.3977ZM94.0849 39.3641C92.2249 39.3641 90.8329 37.9001 90.8329 36.0401C90.8329 34.1681 92.2249 32.7161 94.0849 32.7161C95.9449 32.7161 97.3369 34.1681 97.3369 36.0401C97.3369 37.9001 95.9449 39.3641 94.0849 39.3641ZM94.0849 37.8881C94.9129 37.8881 95.6209 37.2281 95.6209 36.0401C95.6209 34.8521 94.9129 34.2041 94.0849 34.2041C93.2569 34.2041 92.5489 34.8521 92.5489 36.0401C92.5489 37.2281 93.2569 37.8881 94.0849 37.8881ZM99.9613 39.2441H98.2813V30.6281H99.9613V39.2441ZM105.237 36.5441V32.8361H106.893V39.2441H105.369V38.4041C105.021 38.9681 104.313 39.3641 103.497 39.3641C102.213 39.3641 101.277 38.5841 101.277 36.9161V32.8361H102.945V36.5921C102.945 37.4921 103.389 37.8881 104.061 37.8881C104.661 37.8881 105.237 37.4081 105.237 36.5441ZM109.94 39.2441H108.272V32.8361H109.808V33.7481C110.276 33.1001 110.876 32.7161 111.728 32.7161C112.604 32.7161 113.276 33.1241 113.6 33.8561C114.104 33.1481 114.752 32.7161 115.712 32.7161C117.008 32.7161 117.884 33.5681 117.884 35.1041V39.2441H116.228V35.6321C116.228 34.7321 115.844 34.1921 115.112 34.1921C114.452 34.1921 113.912 34.7081 113.912 35.6681V39.2441H112.256V35.6321C112.256 34.7321 111.872 34.1921 111.14 34.1921C110.468 34.1921 109.94 34.7081 109.94 35.6681V39.2441ZM121.975 39.3521C120.055 39.3521 118.771 38.0201 118.771 36.0161C118.771 34.1081 120.103 32.7161 121.951 32.7161C123.979 32.7161 125.323 34.3601 125.023 36.4481H120.475C120.583 37.4921 121.087 38.0681 121.939 38.0681C122.671 38.0681 123.163 37.7081 123.355 37.0721H125.011C124.651 38.5241 123.535 39.3521 121.975 39.3521ZM121.915 33.9401C121.135 33.9401 120.643 34.4441 120.499 35.3921H123.259C123.211 34.5041 122.707 33.9401 121.915 33.9401Z" fill="black" />
                                        <path d="M297.309 38.2441H295.789V31.0641H297.309V33.8941H300.419V31.0641H301.939V38.2441H300.419V35.2041H297.309V38.2441ZM304.836 38.2441H303.316V31.0641H304.836V38.2441ZM309.485 38.3941C307.405 38.3941 305.785 36.8441 305.785 34.6241C305.785 32.5041 307.325 30.9141 309.425 30.9141C311.245 30.9141 312.545 31.9941 313.015 33.5541H311.225C311.005 32.8241 310.345 32.2741 309.385 32.2741C308.225 32.2741 307.345 33.1241 307.345 34.6641C307.345 36.0441 308.115 37.1041 309.555 37.1041C310.615 37.1041 311.285 36.4741 311.485 35.5841H309.405V34.3741H313.105C313.195 36.7141 311.775 38.3941 309.485 38.3941ZM315.584 38.2441H314.064V31.0641H315.584V33.8941H318.694V31.0641H320.214V38.2441H318.694V35.2041H315.584V38.2441Z" fill="#EC6B5E" />

                                        {/* Animated Bars */}
                                        <g>
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "100.703" : "0"}
                                                rx="8.39189"
                                                x="307.7"
                                                y={isBarVisible ? "88" : "188"}
                                                fill="#EC6B5E"
                                                style={{ transition: "all 1.0s ease-out 1.2s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "81" : "0"}
                                                rx="8.39189"
                                                x="283"
                                                y={isBarVisible ? "107" : "188"}
                                                fill="#EC6B5E"
                                                style={{ transition: "all 0.5s ease-out 1.1s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "93.4054" : "0"}
                                                rx="8.39189"
                                                x="258"
                                                y={isBarVisible ? "95" : "188"}
                                                fill="#EC6B5E"
                                                style={{ transition: "all 0.55s ease-out 1.0s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "81" : "0"}
                                                rx="8.39189"
                                                x="233"
                                                y={isBarVisible ? "107" : "188"}
                                                fill="#EC6B5E"
                                                style={{ transition: "all 0.60s ease-out 0.9s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "71.5135" : "0"}
                                                rx="8.39189"
                                                x="208"
                                                y={isBarVisible ? "117" : "188"}
                                                fill="#F4BF4F"
                                                style={{ transition: "all 0.65s ease-out 0.8s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "59.1081" : "0"}
                                                rx="8.39189"
                                                x="183"
                                                y={isBarVisible ? "129" : "188"}
                                                fill="#F4BF4F"
                                                style={{ transition: "all 0.70s ease-out 0.7s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "67.8649" : "0"}
                                                rx="8.39189"
                                                x="158"
                                                y={isBarVisible ? "121" : "188"}
                                                fill="#F4BF4F"
                                                style={{ transition: "all 0.75s ease-out 0.6s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "59.1081" : "0"}
                                                rx="8.39189"
                                                x="133"
                                                y={isBarVisible ? "129" : "188"}
                                                fill="#F4BF4F"
                                                style={{ transition: "all 0.80s ease-out 0.5s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "45.2432" : "0"}
                                                rx="8.39189"
                                                x="108"
                                                y={isBarVisible ? "143" : "188"}
                                                fill="#F4BF4F"
                                                style={{ transition: "all 0.85s ease-out 0.4s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "27" : "0"}
                                                rx="8.39189"
                                                x="83"
                                                y={isBarVisible ? "161" : "188"}
                                                fill="#006A4A"
                                                style={{ transition: "all 0.9s ease-out 0.3s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "38.6757" : "0"}
                                                rx="8.39189"
                                                x="58"
                                                y={isBarVisible ? "150" : "188"}
                                                fill="#006A4A"
                                                style={{ transition: "all 0.95s ease-out 0.2s" }}
                                            />
                                            <rect
                                                width="16.7838"
                                                height={isBarVisible ? "19.7027" : "0"}
                                                rx="8.39189"
                                                x="33"
                                                y={isBarVisible ? "169" : "188"}
                                                fill="#006A4A"
                                                style={{ transition: "all 1s ease-out 0.1s" }}
                                            />
                                        </g>


                                        <path d="M44.3488 30.7457C44.963 30.8656 45.5275 31.166 45.97 31.6085C46.4125 32.051 46.7129 32.6155 46.8327 33.2297M44.3488 28.2303C45.6249 28.3721 46.8148 28.9436 47.7233 29.8509C48.6318 30.7582 49.2047 31.9475 49.3481 33.2234M41.9447 35.6904C41.1891 34.9348 40.5924 34.0804 40.1548 33.1688C40.1171 33.0904 40.0983 33.0512 40.0838 33.0016C40.0324 32.8253 40.0693 32.6088 40.1763 32.4595C40.2063 32.4175 40.2423 32.3815 40.3142 32.3097C40.534 32.0898 40.6439 31.9799 40.7158 31.8693C40.9868 31.4525 40.9868 30.9151 40.7158 30.4982C40.6439 30.3877 40.534 30.2778 40.3142 30.0579L40.1916 29.9354C39.8574 29.6012 39.6903 29.4341 39.5109 29.3433C39.154 29.1628 38.7325 29.1628 38.3756 29.3433C38.1961 29.4341 38.029 29.6012 37.6948 29.9354L37.5957 30.0345C37.2626 30.3676 37.0961 30.5341 36.9689 30.7605C36.8278 31.0117 36.7263 31.4019 36.7272 31.6901C36.728 31.9497 36.7783 32.1272 36.8791 32.4822C37.4205 34.3897 38.442 36.1897 39.9437 37.6914C41.4454 39.193 43.2454 40.2146 45.1529 40.756C45.5078 40.8567 45.6853 40.9071 45.945 40.9079C46.2331 40.9087 46.6233 40.8073 46.8746 40.6661C47.101 40.539 47.2675 40.3724 47.6005 40.0394L47.6997 39.9403C48.0339 39.6061 48.201 39.439 48.2917 39.2595C48.4723 38.9026 48.4723 38.4811 48.2917 38.1242C48.201 37.9447 48.0339 37.7776 47.6997 37.4434L47.5771 37.3209C47.3573 37.101 47.2474 36.9911 47.1368 36.9193C46.72 36.6482 46.1826 36.6482 45.7657 36.9193C45.6552 36.9911 45.5453 37.101 45.3254 37.3209C45.2535 37.3928 45.2176 37.4287 45.1756 37.4588C45.0263 37.5657 44.8098 37.6026 44.6335 37.5512C44.5839 37.5368 44.5447 37.518 44.4662 37.4803C43.5547 37.0426 42.7003 36.446 41.9447 35.6904Z" stroke="#006A4A" stroke-width="1.25769" stroke-linecap="round" stroke-linejoin="round" />
                                        <line x1="18" y1="58.7172" x2="342.73" y2="58.7172" stroke="#E9EAEB" stroke-width="0.72973" />
                                    </g>
                                    <rect x="18.3649" y="8.36486" width="323.27" height="188.27" rx="14.2297" stroke="#006A4A" stroke-width="0.72973" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_9343_582" x="0.486486" y="0.702703" width="359.027" height="224.027" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="10.2162" />
                                        <feGaussianBlur stdDeviation="8.75676" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9343_582" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9343_582" result="shape" />
                                    </filter>
                                    <filter id="filter1_d_9343_582" x="303.703" y="78.7852" width="24.7838" height="108.703" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9343_582" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9343_582" result="shape" />
                                    </filter>
                                    <clipPath id="clip0_9343_582">
                                        <rect x="18" y="8" width="324" height="189" rx="14.5946" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div> : <Image src={callVolume} alt={"call volume"} className="w-full  h-[200px] shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
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

