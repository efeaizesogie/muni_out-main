import React from 'react'

const BenefitGrid = ({ benefits, benefitsFor }) => {
    return (
        <div className="flex flex-col gap-[20px] md:gap-[24px]">
            <h3 className="font-semibold text-[20px] md:text-[22px] lg:text-[24px] leading-[32px] md:leading-[38px] lg:leading-[44px] tracking-[-0.01em] text-black">
                Benefits for {benefitsFor}
            </h3>

            {/* Benefits Grid */}
            <div className="border border-[#E9EAEB] rounded-[16px] lg:rounded-[20px] overflow-hidden">
                {/* Desktop/Tablet: 3x2 Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-[12px] lg:gap-[14px] p-[20px] lg:p-[24px] bg-white border-r border-b border-[#E9EAEB] last:border-r-0 lg:[&:nth-child(3)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-last-child(-n+3)]:border-b-0"
                        >
                            <div className="w-[22px] h-[22px] lg:w-[24px] lg:h-[24px]">
                                <img src={benefit.icon} alt={benefit.title} className="w-full h-full" />
                            </div>
                            <h4 className="font-semibold text-[14px] lg:text-[16px] leading-[20px] lg:leading-[22px] tracking-[-0.01em] text-black">
                                {benefit.title}
                            </h4>
                            <p className="text-[11px] lg:text-[12px] leading-[18px] lg:leading-[20px] font-medium text-black opacity-70">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile: Single Column */}
                <div className="md:hidden flex flex-col">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-[12px] p-[20px] bg-white border-b border-[#E9EAEB] last:border-b-0"
                        >
                            <div className="w-[22px] h-[22px]">
                                {benefit.icon}
                            </div>
                            <h4 className="font-semibold text-[14px] leading-[20px] tracking-[-0.01em] text-black">
                                {benefit.title}
                            </h4>
                            <p className="text-[12px] leading-[18px] font-medium text-black opacity-70">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

        </div>

    )
}

export default BenefitGrid