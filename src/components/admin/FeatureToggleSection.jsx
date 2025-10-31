'use client'

import React, { useState } from 'react';
import dotbg from "@/public/images/dotbg.png";
import Image from 'next/image';

const FeatureToggleSection = ({ backgroundColor, accentColor, toggleColor, tagline, heading, description }) => {
    const [isToggled, setIsToggled] = useState(true);

    return (
        <section
            className="relative pt-[80px] md:pt-[100px] overflow-hidden "
            style={{ backgroundColor }}
        >
            <div className="relative w-full h-full">
                <Image src={dotbg} alt={"gradient background"} className='absolute object-fill bottom-[-180px] z-1000 left-0 right-0 w-full h-[500px]' />

            </div>

            {/* Main Content */}
            <div className="relative z-10 w-full md:w-[80%] px-[20px] md:px-0 md:mx-auto">
                <div className="flex flex-col items-center gap-[20px] md:gap-[24px] max-w-[1240px] mx-auto">
                    {/* Tagline */}
                    <div
                        className="font-semibold text-[14px] md:text-[16px] leading-[26px] text-center"
                        style={{ color: accentColor }}
                    >
                        {tagline}
                    </div>

                    {/* Heading */}
                    <h2 className="font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] text-center tracking-[-0.01em] text-black max-w-[1240px]">
                        {heading}
                    </h2>

                    {/* Description */}
                    <p className="font-semibold text-[14px] md:text-[16px] leading-[26px] text-center text-black max-w-[690px]">
                        {description}
                    </p>

                    {/* Toggle Switch */}
                    {
                        toggleColor && <button
                            onClick={() => setIsToggled(!isToggled)}
                            className="relative flex items-center justify-end p-[2px] w-[44px] h-[24px] rounded-full transition-all duration-300 focus:outline-none"
                            style={{
                                backgroundColor: isToggled ? toggleColor : '#D1D5DB',
                                boxShadow: '0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px rgba(82, 149, 128, 0.3)'
                            }}
                            aria-label="Toggle feature"
                            role="switch"
                            aria-checked={isToggled}
                        >
                            <div
                                className={`w-[20px] h-[20px] bg-white rounded-full shadow-[0px_1px_3px_rgba(10,13,18,0.1),0px_1px_2px_-1px_rgba(10,13,18,0.1)] transition-transform duration-300 ${isToggled ? 'translate-x-0' : '-translate-x-[20px]'
                                    }`}
                            />
                        </button>

                    }


                    {/* Vertical Line */}
                    <div className="w-[1px] h-[100px] md:h-[155px] mt-[10px]" style={{
                        background: 'linear-gradient(to bottom, rgba(0, 106, 74, 0) 0%, #006A4A 30%, rgba(0, 106, 74, 0.2) 80%, rgba(0, 106, 74, 0) 100%)',
                    }} />
                </div>
            </div>
        </section>
    );
};

export default FeatureToggleSection;