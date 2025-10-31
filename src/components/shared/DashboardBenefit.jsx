import React from 'react';
import Image from 'next/image';
import BenefitGrid from '../admin/BenefitGrid';

const DashboardBenefit = ({
    tag,
    heading,
    description,
    testimonialText,
    testimonialAuthor,
    testimonialRole,
    testimonialCompany,
    dashboardImage,
    benefits,
    testimonialImg,
    benefitsFor
}) => {
    return (
        <section className="py-[60px] md:py-[80px] lg:py-[100px] bg-[#F9F9F9] overflow-hidden">
            <div className="w-full md:w-[80%] px-[20px] md:px-0 md:mx-auto">
                {/* Main Content Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-[60px] lg:gap-[100px] xl:gap-[136px] mb-[80px] lg:mb-[120px]">
                    {/* Left Content */}
                    <div className="flex flex-col gap-[20px] md:gap-[24px] w-full lg:w-[484px] lg:flex-shrink-0">
                        {/* Tag */}
                        <div className="text-[#006A4A] font-semibold text-[14px] md:text-[16px] leading-[26px]">
                            {tag}
                        </div>

                        {/* Heading */}
                        <h2 className="font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] tracking-[-0.01em] text-black">
                            {heading}
                        </h2>

                        {/* Description */}
                        <div className="flex flex-col gap-[10px]">
                            <p className="text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] font-medium text-black opacity-70">
                                {description}
                            </p>
                        </div>

                        {/* Testimonial */}
                        <div className="flex flex-col gap-[20px] md:gap-[24px] pt-[20px] md:pt-[24px] border-t border-[#E9EAEB]">
                            <p className="text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] font-semibold tracking-[-0.01em] text-[#006A4A]">
                                "{testimonialText}"
                            </p>

                            {/* Author */}
                            <div className="flex flex-row items-center gap-[12px] md:gap-[14px]">
                                <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#006A4A] overflow-hidden flex-shrink-0">
                                    <Image src={testimonialImg} alt={testimonialAuthor} width={44} height={44} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-[4px]">
                                    <div className="font-semibold text-[13px] md:text-[14px] leading-[19px] tracking-[-0.01em] text-black">
                                        {testimonialCompany}
                                    </div>
                                    <div className="font-medium text-[11px] md:text-[12px] leading-[16px] text-black">
                                        {testimonialAuthor} - {testimonialRole}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Dashboard Preview */}
                    <div className="relative w-full lg:w-[600px] xl:w-[720px] h-[300px] sm:h-[400px] lg:h-[512px] ">
                        {/* Main Dashboard Frame */}
                        <div className="absolute w-full lg:w-[600px] xl:w-[720px] h-full right-0 md:right-[-30px] bg-[#F9F9F9] lg:right-[-55%] top-0 rounded-[8px] lg:rounded-[10px] shadow-[0px_20px_40px_rgba(0,0,0,0.04)] lg:shadow-[0px_44px_52px_rgba(0,0,0,0.04)]">
                            <Image src={dashboardImage} alt="Dashboard Preview" fill className="object-contain" />
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <BenefitGrid benefitsFor={benefitsFor} benefits={benefits} />
            </div>
        </section>
    );
};

export default DashboardBenefit;