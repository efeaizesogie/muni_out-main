import LineGradient from '@/utils/LineGradient'
import React from 'react'
import bgFill from "@/public/images/green-bg-fill.png"

const TextSection = ({ headText, boxTitle, boxDesc, buttonText1, buttonText2, gradient }) => {
    return (
        <div id="problem" className=''>
            {headText && <p className="max-w-4xl w-full px-4 text-sm md:text-base font-medium py-12 md:py-20 text-center mx-auto leading-relaxed">
                {headText}
            </p>}


            <div className="relative md:w-[80%] mx-4 lg:mx-auto">
                <div
                    className="relative rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl "
                    style={{
                        background:
                            `radial-gradient(ellipse 120% 80% at 30% 20%, rgba(0, 180, 130, 0.5) 0%, transparent 50%), 
                             radial-gradient(ellipse 80% 60% at center, #006A4A 0%, #004d35 40%, #003025 70%, #001810 100%), 
                             url(${bgFill.src})`,
                        backgroundBlendMode: 'normal, multiply, normal',
                    }}
                >
                    <h2 className="text-white text-xl md:text-2xl lg:text-[34px] lg:leading-[44px] font-semibold text-center mb-4 md:mb-6">
                        {boxTitle}
                    </h2>
                    <p className="text-white text-center text-sm md:text-base mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                        {boxDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                        <button className="bg-white text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] border border-[#D5D7DA] shadow-sm w-full sm:w-auto">
                            {buttonText1}
                        </button>
                        {buttonText2 && <button className="bg-white text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] border border-[#D5D7DA] shadow-sm w-full sm:w-auto">
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