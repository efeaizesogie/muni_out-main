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
        <section className="flex flex-col bg-white w-full py-[80px] md:py-[100px] ">
            <div className="flex flex-col md:flex-row items-center justify-between gap-[50px] md:gap-[80px] lg:gap-[115px] mx-5 max-w-[1440px] md:mx-[100px] 2xl:mx-auto">
                <div className="w-full min-w-[320px] md:w-1/2 lg:w-[45%] order-2 md:order-1">
                    <div className='w-[110%] md:w-[130%] h-full ml-[-40px] md:ml-[-120px] lg:ml-[-25%] xl:ml-[-38%] '>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            width={720}
                            height={400}
                            className="w-full h-full object-fill"
                        />
                    </div>


                </div>

                {/* Content Section */}
                <div className="flex flex-col items-start text-center md:text-start gap-[24px] w-full md:w-1/2 lg:w-[45%] order-1 md:order-2">
                    <div className="flex flex-col gap-[24px] w-full">
                        <span className="font-semibold text-base leading-[26px] text-[#006A4A] self-stretch">
                            {category}
                        </span>

                        <h2 className=" font-semibold text-[34px] md:text-[36px] lg:text-[42px] xl:text-[54px] leading-[1.1] sm:leading-[1.2] tracking-[-0.01em] text-black md:max-w-[485px]">
                            {title}
                        </h2>
                    </div>


                    <p className="font-semibold text-base leading-[26px] text-black md:max-w-[485px]">
                        {description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-col items-start justify-start gap-[16px] md:gap-[24px] self-stretch mt-[10px] md:mt-0">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-start justify-start gap-4 md:gap-[24px]"
                            >
                                <CheckIcon />
                                <span className="font-medium justify-start text-start text-[14px] leading-[26px] text-black">
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