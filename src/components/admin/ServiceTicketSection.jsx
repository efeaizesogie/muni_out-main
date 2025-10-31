import Image from 'next/image';
import React from 'react';
import star from "@/public/icons/star-06.png";

const CheckIcon = () => (
    <div className="relative w-[18px] h-[18px]">
        <div className="absolute inset-0 bg-[#47816F] rounded-full" />
        <svg
            className="absolute inset-0 w-full h-full"
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
const ServiceTicketSection = ({ tagline, heading, description, imagePosition, img, backgroundColor, imgCut, hasFeatures, features, imgCutRight, hasStar, imgCutLeft }) => {
    const contentOrder = imagePosition === "right" ? "lg:flex-row-reverse" : "lg:flex-row";

    return (
        <section
            className="py-[40px] md:py-[100px]"
            style={{ backgroundColor }}
        >
            <div className="w-full w-full md:w-[80%] px-[20px] md:px-0 md:mx-auto">
                <div className={`flex flex-col ${contentOrder} items-center justify-between gap-[40px] md:gap-[80px] lg:gap-[120px] xl:gap-[140px]`}>
                    {/* Tickets Preview Card */}
                    <div className="w-full lg:w-[450px] xl:w-[500px] lg:flex-shrink-0">
                        <div
                            className="w-full h-auto md:h-[380px] lg:h-[432px] rounded-[20px] p-[30px] md:p-[40px] border border-[#e9eaeb2a] lg:p-[50px] overflow-hidden relative"
                            style={{
                                background: 'radial-gradient(96.62% 66.13% at 49.95% 91.44%, #EBEFE4 25%, #Ffffff 100%)'
                            }}
                        >
                            <div className={`flex gap-[6px] h-auto mx-auto items-center justify-center ${imgCut ? 'absolute bottom-0 left-0' : imgCutRight ? 'absolute -right-10 -mr-4' : imgCutLeft ? 'absolute right-0 bottom-0' : ''}`}>
                                <Image src={img} alt="Service Ticket 1" width={400} height={300} className="w-full object-cover rounded-[10px]" />
                            </div>
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col gap-[20px] md:gap-[24px] w-full lg:w-[450px] xl:w-[484px]">

                        {hasStar && <p className='flex items-center w-fit gap-2 font-semibold text-[#1B312A] text-[14px] bg-[#f9f9f9] border border-[#E9EAEB] bg-opacity-40 rounded-full py-[5px] px-[15px]'>
                            <Image src={star} /> AI-Powered
                        </p>}

                        {/* Tagline */}
                        {tagline && <div
                            className="font-semibold text-[14px] md:text-[16px] leading-[26px]"
                            style={{ color: "#006A4A" }}
                        >
                            {tagline}
                        </div>}


                        {/* Heading */}
                        <h2 className="font-semibold text-[28px] sm:text-[32px] md:text-[34px] leading-[1.3] tracking-[-0.01em] text-black w-[80%]">
                            {heading}
                        </h2>

                        {/* Description */}
                        <p className="text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] font-medium text-black opacity-70">
                            {description}
                        </p>

                        {hasFeatures && features && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-[8px] md:gap-[10px] self-stretch">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-row items-center gap-[12px] md:gap-[16px] shrink-0"
                                    >
                                        <CheckIcon className="shrink-0" />
                                        <span className="font-medium text-[13px] md:text-[14px] leading-[22px] md:leading-[26px] text-black">
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