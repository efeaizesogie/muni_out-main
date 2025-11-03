import FlowSectionCard from '@/src/constants/FlowSectionCard';
import { solution } from '@/src/constants/solutions';
import TextSection from '@/src/constants/TextSection';
import TitleHead from '@/src/constants/TitleHead'
import phoneGroup from "@/public/images/phone-group.png";
import Image from 'next/image'
import React from 'react'
import solutionFlow from "@/public/icons/solution-flow.svg";
import mobilePhoneGroup from "@/public/icons/mobile-handphone.png";
import dotbg from "@/public/images/dotbg.png";

const Solution = () => {
    return (
        <div className='md:pb-16 max-w-[1440px] md:mx-[100px] 2xl:mx-auto'>
            <div className="flex justify-center items-center mx-auto mt-16 md:mt-32 lg:mt-52 px-4 relative">

                <div className="flex justify-center">
                    <Image src={phoneGroup} alt={"headphone"} className="w-full hidden md:flex max-w-[324px] h-auto  rounded-b-[50%]" />
                    <Image src={mobilePhoneGroup} alt={"headphone"} className="w-full md:hidden h-auto rounded-b-[35%] md:rounded-b-[50%]" />
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
        </div>

    )
}

export default Solution

