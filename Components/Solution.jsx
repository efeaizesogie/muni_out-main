import FlowSectionCard from '@/constants/FlowSectionCard';
import { solution } from '@/constants/solutions';
import TextSection from '@/constants/TextSection';
import TitleHead from '@/constants/TitleHead'
import headphone2 from "@/public/images/handphone_2.png";
import handPhoneText from "@/public/icons/handphone-text.svg";
import Image from 'next/image'
import React from 'react'
import solutionFlow from "@/public/icons/solution-flow.svg";
import dotbg from "@/public/images/dotbg.png";

const Solution = () => {
    return (
        <>
            <div className="flex justify-center items-center mx-auto mt-16 md:mt-32 lg:mt-52 px-4 relative">
                {/* <div className="relative max-w-md mx-auto">
                    <Image src={headphone2} alt={"headphone"} className="w-full max-w-[409px] h-auto shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-b-[50%]" />

                    <div className='absolute top-0 left-full transform -translate-x-4 md:-translate-x-1/2 -translate-y-2 md:-translate-y-4 z-10'>
                        <div className="bg-[#1B312A] text-white px-2 md:px-3 py-1 md:py-1.5 text-center rounded-full text-[10px] md:text-[11px] font-medium mb-2 md:mb-3 shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] whitespace-nowrap">
                            Report pothole
                        </div>

                        <div className="bg-white shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-xl md:rounded-2xl p-3 md:p-4 w-48 md:w-[254px] border border-[#E9EAEB]">
                            <p className="text-[#131416] text-[11px] md:text-[12px] leading-relaxed">
                                Pothole successfully reported! You can keep track of report by using
                                the ticket{" "}
                                <a
                                    href="#"
                                    className="text-[#1B312A] font-semibold underline hover:text-[#004d35]"
                                >
                                    #425456
                                </a>
                            </p>
                        </div>
                    </div>
                </div> */}
                <div className="flex justify-center">
                    <Image src={handPhoneText} alt={"headphone"} className="w-full max-w-[324px] h-auto  rounded-b-[50%]" />
                </div>
            </div>

            <div className='relative w-full'>
                <div className="mt-16 md:mt-20 text-center flex flex-col items-center px-4">
                    <TitleHead title="How Muni Powers Digital" titleBreak="Transformation" tag="The AI-Powered Solution" />
                </div>
                <Image src={dotbg} alt={"headphone"} className='absolute bottom-[-160px] z-100 left-0 right-0 w-full h-[500px]' />
            </div>


            <FlowSectionCard consequences={solution} desc="Muni dramatically lowers call volumes, accelerating response times, and boosting resident satisfaction through effortless, automated service delivery and transparent digital engagement." title="Three Performance " titleBreak="Improvements" flow={solutionFlow} />

            <TextSection buttonText1="Request a Demo" boxTitle="See Muni in Action"
                boxDesc=" Ready to experience how Muni can transform your municipality’s service delivery? Request a personalized demo and discover the power of AI-driven efficiency, transparency, and citizen engagement firsthand." headText=" Muni’s AI-powered platform delivers dramatic improvements in call volume reduction, response speed, and resident satisfaction, empowering municipalities to provide faster, more efficient, and more transparent services."
            />
        </>

    )
}

export default Solution