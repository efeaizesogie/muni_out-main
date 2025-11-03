

import Image from 'next/image';
import React from 'react';
import star from "@/public/icons/star-06.png";

const CheckIcon = () => (
    <div className="relative w-[18px] h-[18px] bg-[#47816F] rounded-full flex items-center justify-center shrink-0">

        <svg
            className="w-[16px] h-[16px]"
            viewBox="0 0 18 18"
            fill="none"
        >
            <path
                d="M4.8 9L7.8 12L13.2 6"
                stroke="#FFFFFF"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    </div>
);

// Service Ticket Section Component
const ServiceTicketSection = ({ tagline, heading, description, imagePosition, img, backgroundColor, imgCut, hasFeatures, features, imgCutRight, hasStar, imgCutLeft, imgWidth, imgHeight, imgBottom }) => {
    return (
        <section
            className="py-[30px] md:py-[60px] lg:py-[100px]"
            style={{ backgroundColor }}
        >
            <div className="w-full px-5 md:px-0">
                <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-[30px] max-w-[1440px] md:mx-[100px] 2xl:mx-auto">
                    {/* Tickets Preview Card */}
                    <div className={`w-full mx-auto md:mx-0  lg:flex-shrink-0 ${imagePosition === "right" ? "md:order-2 md:w-1/2 lg:w-[45%]" : "md:order-1 md:w-1/2 lg:w-[45%]"}`}>
                        <div
                            className="w-full min-h-[300px] md:w-[500] sm:h-[320px] md:h-[380px] lg:h-[432px] rounded-[16px] md:rounded-[20px] p-[20px] sm:p-[30px] md:p-[40px] lg:p-[50px] border border-[#e9eaebc3] overflow-hidden relative max-w-[400px] sm:max-w-[450px] lg:max-w-[450px] xl:max-w-[500px]"
                            style={{
                                background: 'radial-gradient(96.62% 66.13% at 49.95% 91.44%, #EBEFE4 25%, #Ffffff 100%)'
                            }}
                        >
                            <div className={`${imgCut ? 'absolute bottom-[-10%] left-[-10%] w-[100%] h-[100%]'
                                : imgCutRight ? 'absolute top-1/2 right-[-10%] transform -translate-y-1/2  w-[100%] h-[100%]'
                                    : imgCutLeft ? 'absolute right-[-10%] bottom-[-10%] w-[100%] h-[100%]'
                                        : imgBottom ? "absolute bottom-[-10%] left-1/2 transform -translate-x-1/2  w-[100%] h-[100%]" :
                                            `absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%]`} flex items-center justify-center`}>
                                <Image src={img} alt="Service Ticket 1" fill className="w-full h-full object-fill rounded-[8px] md:rounded-[10px]" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className={`flex flex-col gap-[16px] md:gap-[20px] lg:gap-[24px] w-full  ${imagePosition === "right" ? "md:order-1 md:w-1/2 lg:w-[45%]" : "md:order-2 md:w-1/2 lg:w-[45%]"}`}>

                        {hasStar && <p className='flex items-center w-fit gap-2 font-semibold text-[#1B312A] text-[12px] sm:text-[14px] bg-[#f9f9f9] border border-[#E9EAEB] bg-opacity-40 rounded-full py-[4px] sm:py-[5px] px-[12px] sm:px-[15px]'>
                            <Image src={star} width={16} height={16} alt="Star" /> AI-Powered
                        </p>}

                        {/* Tagline */}
                        {tagline && <div
                            className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] leading-[22px] md:leading-[26px]"
                            style={{ color: "#006A4A" }}
                        >
                            {tagline}
                        </div>}

                        {/* Heading */}
                        <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[34px] leading-[1.2] sm:leading-[1.3] tracking-[-0.01em] text-black lg:max-w-[450px] xl:max-w-[484px] ">
                            {heading}
                        </h2>

                        {/* Description */}
                        <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[22px] md:leading-[24px] font-medium text-black opacity-70 lg:max-w-[450px] xl:max-w-[484px] ">
                            {description}
                        </p>

                        {hasFeatures && features && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[6px] sm:gap-[8px] md:gap-[10px] self-stretch   ">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row items-center gap-[10px] sm:gap-[12px] md:gap-[16px] shrink-0"
                                    >
                                        <CheckIcon className="shrink-0   mt-1" />
                                        <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[26px] text-black">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceTicketSection;