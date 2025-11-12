import React from 'react';
import IntegrationItem from './IntegrationItem';

const IntegrationsSection = ({ tagline, backgroundColor = "#EBEFE4", heading, description, buttonText, buttonLink, integrations }) => {
    return (
        <section
            className="py-[60px] md:py-[80px] lg:py-[100px] "
            style={{ backgroundColor }}
        >
            <div className="w-full px-[20px] md:px-0 ">
                <div className="flex flex-col md:flex-row items-start justify-between gap-[50px] max-w-[1440px] md:mx-[100px] 2xl:mx-auto">
                    {/* Left Content */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-start gap-[20px] md:gap-[24px] w-full md:w-1/2 lg:w-[45%] ">
                        {/* Tag */}
                        <div className="text-[#006A4A] font-semibold text-[14px] md:text-[16px] leading-[26px]">
                            {tagline}
                        </div>

                        {/* Heading */}
                        <h2 className="font-semibold text-[34px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] tracking-[-0.01em] text-black">
                            {heading}
                        </h2>

                        {/* Description */}
                        <p className="text-[14px] leading-[24px] font-medium text-black opacity-70 max-w-[390px]">
                            {description}
                        </p>

                        {/* CTA Button */}
                        <a
                            href={buttonLink}
                            className="inline-flex flex-row justify-center items-center px-[16px] py-[10px] gap-[6px] bg-[#47816F] shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] rounded-[8px] transition-all hover:bg-[#3d6f60] w-full sm:w-auto max-w-[280px]"
                        >
                            <span className="font-semibold text-[16px] md:text-[16px] leading-[24px] text-white whitespace-nowrap">
                                {buttonText}
                            </span>
                        </a>
                    </div>

                    {/* Right - Integration List */}
                    <div className="flex flex-col w-full md:w-1/2 lg:w-[45%]">
                        <div className="border-t border-[rgba(135,147,143,0.4)] ">
                            {integrations.map((integration, index) => (
                                <IntegrationItem
                                    key={index}
                                    icon={integration.icon}
                                    title={integration.title}
                                    description={integration.description}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default IntegrationsSection;