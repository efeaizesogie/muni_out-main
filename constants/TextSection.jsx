import LineGradient from '@/utils/LineGradient'
import React from 'react'

const TextSection = ({ headText, boxTitle, boxDesc, buttonText1, buttonText2, gradient }) => {
    return (
        <div id="problem" className=''>
            <p className="max-w-3xl w-full px-4 text-sm md:text-base font-medium py-12 md:py-20 text-center mx-auto leading-relaxed">
                {headText}
            </p>

            <div className="relative max-w-7xl mx-auto px-4">
                <div
                    className="relative rounded-2xl md:rounded-3xl p-6 md:p-12 mb-16 shadow-xl"
                    style={{
                        background:
                            'radial-gradient(ellipse at center, #006A4A 0%, #004d35 50%, #002d1f 100%)',
                    }}
                >
                    <h2 className="text-white text-xl md:text-2xl lg:text-[34px] lg:leading-[44px] font-semibold text-center mb-4 md:mb-6">
                        {boxTitle}
                    </h2>
                    <p className="text-white text-center text-sm md:text-base mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed">
                        {boxDesc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
                        <button className="bg-white text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-[#D5D7DA] shadow-sm w-full sm:w-auto">
                            {buttonText1}
                        </button>
                        {buttonText2 && <button className="bg-white text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-[#D5D7DA] shadow-sm w-full sm:w-auto">
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