

import React from "react";
import LineGradient from "../utils/LineGradient";
import bgFill from "@/public/images/green-bg-fill.png";

const TextSection = ({
    headText,
    boxTitle,
    boxDesc,
    buttonText1,
    buttonText2,
    gradient,
    bg,
}) => {
    return (
        <div id="problem" className={`${bg ? "bg-white" : ""}`}>
            {/* Optional header text */}
            {headText && (
                <p className="max-w-4xl w-full px-[20px] text-sm md:text-base font-medium py-12 md:py-20 text-center mx-auto leading-relaxed">
                    {headText}
                </p>
            )}

            <div className="relative w-full max-w-[1440px] mx-auto">
                {/* Main content box */}
                <div className="relative md:rounded-3xl p-8 md:p-12 shadow-xl overflow-visible bg-[#006A4A]">
                    {/* Overlay image layer */}
                    <div
                        className="absolute inset-0 bg-cover bg-bottom md:bg-center md:rounded-3xl mix-blend-overlay opacity-90"
                        style={{
                            backgroundImage: `url(${bgFill.src})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                        }}
                    />

                    {/* Bottom dark fade */}
                    <div className="absolute md:rounded-3xl bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Content */}
                    <div className="relative z-10 text-white text-center">
                        <h2 className="text-2xl lg:text-[34px] lg:leading-[44px] font-semibold mb-[14px] md:mb-6">
                            {boxTitle}
                        </h2>

                        <p className="text-white font-medium text-sm md:text-base mb-6 md:mb-8 max-w-3xl mx-auto leading-[24px] opacity-80">
                            {boxDesc}
                        </p>

                        <div className="flex gap-3 md:gap-4 justify-center items-center">
                            <button className="bg-white text-sm md:text-base text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] border border-[#D5D7DA] shadow-sm">
                                {buttonText1}
                            </button>

                            {buttonText2 && (
                                <button className="bg-white text-sm md:text-base text-[#414651] py-2.5 md:py-3 px-4 md:px-6 rounded-lg font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] border border-[#D5D7DA] shadow-sm">
                                    {buttonText2}
                                </button>
                            )}
                        </div>


                    </div>

                    {/* Gradient line below box */}
                    {gradient && <LineGradient />}
                </div>
            </div>
        </div>
    );
};

export default TextSection;
