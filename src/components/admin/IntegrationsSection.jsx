import React from 'react';
import IntegrationItem from './IntegrationItem';

const IntegrationsSection = ({ tagline, backgroundColor = "#EBEFE4", heading, description, buttonText, buttonLink, integrations }) => {
    return (
        <section
            className="py-[60px] md:py-[80px] lg:py-[100px] "
            style={{ backgroundColor }}
        >
            <div className="w-full md:w-[80%] px-[20px] md:px-0 md:mx-auto">
                <div className="flex flex-col md:flex-row items-start gap-[50px] md:gap-[80px] lg:gap-[120px] xl:gap-[140px]">
                    {/* Left Content */}
                    <div className="flex flex-col gap-[20px] md:gap-[24px] w-full lg:w-[450px]  flex-1">
                        {/* Tag */}
                        <div className="text-[#006A4A] font-semibold text-[14px] md:text-[16px] leading-[26px]">
                            {tagline}
                        </div>

                        {/* Heading */}
                        <h2 className="font-semibold text-[32px] sm:text-[40px] md:text-[48px] lg:text-[54px] leading-[1.2] tracking-[-0.01em] text-black">
                            {heading}
                        </h2>

                        {/* Description */}
                        <p className="text-[13px] md:text-[14px] leading-[22px] md:leading-[24px] font-medium text-black opacity-70 max-w-[390px]">
                            {description}
                        </p>

                        {/* CTA Button */}
                        <a
                            href={buttonLink}
                            className="inline-flex flex-row justify-center items-center px-[16px] py-[10px] gap-[6px] bg-[#47816F] shadow-[0px_1px_2px_rgba(10,13,18,0.05),inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_rgba(10,13,18,0.05)] rounded-[8px] transition-all hover:bg-[#3d6f60] w-full sm:w-auto max-w-[280px]"
                        >
                            <span className="font-semibold text-[14px] md:text-[16px] leading-[24px] text-white whitespace-nowrap">
                                {buttonText}
                            </span>
                        </a>
                    </div>

                    {/* Right - Integration List */}
                    <div className="flex flex-col w-full lg:w-[550px] xl:w-[607px] flex-1">
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