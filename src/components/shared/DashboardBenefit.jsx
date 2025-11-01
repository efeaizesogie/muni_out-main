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
        <section className="py-[40px] sm:py-[60px] md:py-[80px] lg:py-[100px] bg-[#F9F9F9]">
            <div className="w-full md:w-[80%] px-[20px] md:mx-auto md:px-0">
                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row items-start md:items-stretch gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[100px] mb-[60px] sm:mb-[70px] md:mb-[80px] lg:mb-[120px]">
                    {/* Left Content */}
                    <div className="flex flex-col justify-between gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[24px] w-full md:w-[50%] lg:max-w-[484px] md:flex-shrink-0 md:self-stretch">
                        {/* Tag */}
                        <div className="text-[#006A4A] font-semibold text-[14px] md:text-[16px] leading-[26px]">
                            {tag}
                        </div>

                        {/* Heading */}
                        <h2 className="font-semibold text-[28px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[54px] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] tracking-[-0.01em] text-black break-words">
                            {heading}
                        </h2>

                        {/* Description */}
                        <div className="flex flex-col gap-[8px] md:gap-[10px]">
                            <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[24px] font-medium text-black opacity-70 break-words">
                                {description}
                            </p>
                        </div>

                        {/* Testimonial */}
                        <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[24px] pt-[16px] sm:pt-[18px] md:pt-[20px] lg:pt-[24px] border-t border-[#E9EAEB]">
                            <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[20px] sm:leading-[21px] md:leading-[22px] lg:leading-[24px] font-semibold tracking-[-0.01em] text-[#006A4A] break-words">
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
                    <div className="relative w-full md:min-w-[800px] lg:w-[65%] h-[250px] sm:h-[300px] md:h-[520px] md:flex-shrink-0 md:right-[-1%] lg:right-[-5%] xl:right-[-8%] 2xl:right-[-18%] overflow-visible">
                        <Image
                            src={dashboardImage}
                            alt="Dashboard Preview"
                            width={800}
                            height={400}
                            className="h-full w-full object-fill object-left-top max-w-none"
                            priority
                        />
                    </div>

                </div>

                {/* Benefits Section */}
                <BenefitGrid benefitsFor={benefitsFor} benefits={benefits} />
            </div>
        </section>
    );
};

export default DashboardBenefit;