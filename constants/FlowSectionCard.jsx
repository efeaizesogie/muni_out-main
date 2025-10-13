import ConsequenceCard from '@/utils/ConsequenceCard'
import React from 'react'
import Image from 'next/image'



const FlowSectionCard = ({ consequences, title, titleBreak, desc, flow }) => {
    return (
        <div className="bg-[#FFFFFF] md:w-[80%] border-[1px] border-[#E9EAEB] rounded-[20px] mt-20 mx-4 md:mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-0 items-start">
                {/* Left Column - Challenges Flow */}
                <div className='lg:border-r border-[#E9EAEB]'>
                    <div className='p-4 sm:p-6 lg:p-11'>
                        <h2 className="text-2xl lg:text-[34px]  lg:leading-[44px] text-[#006A4A] font-semibold mb-4">
                            {title}
                            <br />
                            <span className="text-[#000000]">{titleBreak}</span>
                        </h2>
                        <p className="text-sm md:text-base text-[#000000] mb-6 md:mb-8 font-medium leading-relaxed">
                            {desc}
                        </p>

                        <div className="flex justify-center">
                            <Image src={flow} alt={"solution flow"} className="w-full max-w-[523px] h-auto max-h-[476px] shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                        </div>
                    </div>
                </div>


                {/* Right Column - Consequences */}
                <div className=" border-[#E9EAEB] border-t lg:border-t-0">
                    <div className="">
                        {consequences.map((consequence, index) => (
                            <ConsequenceCard key={index} {...consequence} index={index} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FlowSectionCard