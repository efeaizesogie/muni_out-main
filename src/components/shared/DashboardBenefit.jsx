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
        <section className="py-[80px] md:py-[100px] bg-[#F9F9F9]">
            <div className="px-[20px] max-w-[1440px] md:mx-[100px] 2xl:mx-auto md:px-0">
                {/* Main Content Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-[40px] sm:gap-[50px] md:gap-[60px] lg:gap-[100px] mb-[50px] md:mb-[80px] lg:mb-[120px]">
                    {/* Left Content */}
                    <div className="flex flex-col text-center md:text-start justify-between gap-[24px] w-full md:w-[50%] lg:max-w-[484px] md:flex-shrink-0 ">

                        <div className="flex flex-col gap-[12px] md:gap-[24px]">
                            {/* Tag */}
                            <div className="text-[#006A4A] font-semibold text-[16px] leading-[26px] ">
                                {tag}
                            </div>

                            {/* Heading */}
                            <h2 className="font-semibold text-[34px] md:text-[40px] lg:text-[48px] xl:text-[54px] leading-[1.1] sm:leading-[1.15] md:leading-[1.2] tracking-[-0.01em] text-black break-words">
                                {heading}
                            </h2>
                        </div>


                        {/* Description */}
                        <div className="flex flex-col gap-[8px] md:gap-[10px]">
                            <p className="text-sm leading-[24px] font-medium text-black  break-words">
                                {description}
                            </p>
                        </div>

                        {/* Testimonial */}
                        <div className="flex flex-col gap-[24px] pt-[16px] sm:pt-[18px] md:pt-[20px] lg:pt-[24px] border-t border-[#E9EAEB]">
                            <p className="text-sm leading-[24px] font-semibold tracking-[-0.01em] text-[#006A4A] break-words">
                                "{testimonialText}"
                            </p>

                            {/* Author */}
                            <div className="flex flex-row items-center justify-center md:justify-start gap-[12px] md:gap-[14px]">
                                <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] rounded-full bg-[#006A4A] overflow-hidden flex-shrink-0">
                                    <Image src={testimonialImg} alt={testimonialAuthor} width={44} height={44} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col items-start gap-[4px]">
                                    <div className="font-semibold text-[13px] md:text-[14px] leading-[19px] tracking-[-0.01em] text-black">
                                        {testimonialCompany}
                                    </div>
                                    <div className="font-medium text-[11px] md:text-[12px] leading-[16px] text-black">
                                        {testimonialAuthor && (<>{testimonialAuthor} - </>)}  {testimonialRole}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Dashboard Preview */}
                    <div className="relative w-full md:w-1/2 lg:w-[45%] min-w-[320px] md:flex-shrink-0 ">
                        <div className=' w-[135%] h-full md:right-[-1%] lg:right-[-4%]'>
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

                </div>

                {/* Benefits Section */}
                <BenefitGrid benefitsFor={benefitsFor} benefits={benefits} />
            </div>
        </section>
    );
};

export default DashboardBenefit;