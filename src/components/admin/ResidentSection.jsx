import Image from 'next/image';
import React from 'react';

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

const ResidentSection = ({ category, title, description, features, imageSrc, imageAlt }) => {
    return (
        <section className="flex flex-col bg-white w-full py-4 sm:py-6 md:py-[60px] lg:py-[100px]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-[60px] lg:gap-[100px] md:w-[80%] px-[20px] md:px-0 md:mx-auto max-w-[1440px]">
                <div className="w-full md:min-w-[670px] lg:w-[50%] ml-0 lg:ml-[-18%] relative ">
                    {/* Dashboard Content */}
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={720}
                        height={400}
                        className="w-full h-full object-cover"
                    />

                </div>

                {/* Content Section */}
                <div className="flex flex-col items-start gap-[12px] sm:gap-[16px] md:gap-[24px] w-full lg:w-[50%] md:max-w-[520px]">
                    <span className="font-semibold text-[12px] sm:text-[14px] md:text-[16px] leading-[20px] sm:leading-[24px] md:leading-[26px] text-[#006A4A] self-stretch">
                        {category}
                    </span>

                    <h2 className="font-semibold text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[54px] leading-[1.1] sm:leading-[1.2] tracking-[-0.01em] text-black max-w-[474px]">
                        {title}
                    </h2>

                    <p className="font-semibold text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] leading-[18px] sm:leading-[20px] md:leading-[24px] lg:leading-[26px] text-black max-w-[474px]">
                        {description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-col items-start gap-[6px] sm:gap-[8px] md:gap-[10px] self-stretch">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[16px]"
                            >
                                <CheckIcon />
                                <span className="font-medium text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px] leading-[16px] sm:leading-[18px] md:leading-[20px] lg:leading-[22px] xl:leading-[26px] text-black">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ResidentSection;