import Image from 'next/image';
import React from 'react'

const IntegrationItem = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col gap-[10px] py-[20px] md:py-[24px] border-b border-[rgba(135,147,143,0.4)] last:border-b-0">
            <div className="flex flex-col gap-[12px] md:gap-[14px] w-full">
                <div className="flex flex-col md:flex-row md:items-center gap-[12px] md:gap-[14px]">
                    <div className="w-[22px] h-[22px] md:w-[24px] md:h-[24px] flex-shrink-0">
                        <Image src={icon} alt={title} width={22} height={22} className='w-full h-full' />

                    </div>
                    <h4 className="font-semibold text-[16px] leading-[20px] md:leading-[22px] tracking-[-0.01em] text-black">
                        {title}
                    </h4>
                </div>
                <p className="text-[14px] leading-[26px] font-medium text-black w-full">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default IntegrationItem