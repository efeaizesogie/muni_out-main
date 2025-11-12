import LineGradient from '../utils/LineGradient'
import React from 'react'
import bgFill from "@/public/images/green-bg-fill.png"

const TextSection = ({ headText, boxTitle, boxDesc, buttonText1, buttonText2, gradient, bg }) => {
    return (
        <div id="problem" className={` ${bg && "bg-white"}`}>
            {headText && <p className="max-w-4xl w-full px-[20px] text-sm md:text-base font-medium py-12 md:py-20 text-center mx-auto leading-relaxed">
                {headText}
            </p>}


            <div className={`relative w-full max-w-[1440px] `}>
                <div
                    className="relative md:rounded-3xl p-8 md:p-12 shadow-xl "
                    style={{
                        background:
                            `url(${bgFill.src}) #006A4A -0.225px -42.782px / 138.486% 228.596% no-repeat`,
                        backgroundBlendMode: 'overlay',
                    }}
                >
                    <h2 className="text-white text-2xl lg:text-[34px] lg:leading-[44px] font-semibold text-center mb-[14px] md:mb-6">
                        {boxTitle}
                    </h2>
                    <p className="text-white text-center font-medium text-sm md:text-base mb-6 md:mb-8 max-w-3xl mx-auto leading-[24px]">
                        {boxDesc}
                    </p>
                    <div className="flex gap-3 md:gap-4 justify-center items-center">
                        <button className="bg-white text-sm md:text-base text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] border border-[#D5D7DA] shadow-sm w-auto">
                            {buttonText1}
                        </button>
                        {buttonText2 && <button className="bg-white text-sm md:text-base text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] border border-[#D5D7DA] shadow-sm w-auto">
                            {buttonText2}
                        </button>}
                    </div>
                    {/* Line positioned exactly at the bottom edge of the green box */}
                    {gradient && <LineGradient />}

                </div>
            </div>


        </div>
    )
}

export default TextSection

