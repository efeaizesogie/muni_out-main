import Image from 'next/image';
import React from 'react';

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

const ResidentSection = ({ category, title, description, features, imageSrc, imageAlt }) => {
    return (
        <section className="flex flex-col bg-white w-full py-6 md:py-[60px] lg:py-[100px]">
            <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-[60px] lg:gap-[100px] w-full md:w-[80%] mx-[20px] md:mx-auto">
                <div className="w-full lg:w-[50%] relative">
                    {/* Browser Frame */}
                    <div className="w-full max-w-[500px] md:max-w-[600px] lg:max-w-[720px] ml-0 lg:ml-[-30%] rounded-[8px] md:rounded-[10px]">
                        {/* Dashboard Content */}
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={720}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-start gap-[16px] md:gap-[24px] w-full lg:w-[50%] flex-grow order-1">
                    <span className="font-semibold text-[14px] md:text-[16px] leading-[26px] text-[#006A4A] self-stretch">
                        {category}
                    </span>

                    <h2 className="font-semibold text-[32px] md:text-[42px] lg:text-[54px] leading-[1.2] tracking-[-0.01em] text-black">
                        {title}
                    </h2>

                    <p className="font-semibold text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] text-black">
                        {description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-col items-start gap-[8px] md:gap-[10px] self-stretch">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center gap-[12px] md:gap-[16px]"
                            >
                                <CheckIcon />
                                <span className="font-medium text-[13px] md:text-[14px] leading-[22px] md:leading-[26px] text-black">
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