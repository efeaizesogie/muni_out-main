import React from 'react'
import TitleHead from "@/constants/TitleHead";
import Image from "next/image";
import headphone from "@/public/images/handphone_1.png";
import { consequences } from "@/constants/consequences";
import TextSection from '@/constants/TextSection';
import FlowSectionCard from '@/constants/FlowSectionCard';
import problemFlow from "@/public/icons/problem-flow.svg";
import dotbg from "@/public/images/dotbg.png";

const Consequences = () => {
    return (
        <div className='bg-[#F9F9F9] pb-16'>
            <div id="problem" className='flex flex-col w-full items-center text-center overflow-hidden pt-10 md:pt-32 lg:pt-[140px] px-4 bg-[#F9F9F9]'>
                <div className="flex justify-center">
                    <Image src={headphone} alt={"headphone"} className="w-full max-w-[324px] h-auto shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-b-[50%]" />
                </div>

                <div className='relative w-full mb-20'>
                    <div className="mt-12 md:mt-16 lg:mt-20 text-center flex flex-col items-center relative">
                        <TitleHead title="The High Cost of Inaction" titleBreak="From Municipalities" tag="The Consequences" />
                    </div>
                    <div className='z-1000'>
                    <Image src={dotbg} alt={"gradient background"} className='absolute object-contain bottom-[-180px] z-1000 left-0 right-0 w-full h-[500px]' />
                    </div>
                </div>

            </div>
            <div className='-mt-20'>
                 <FlowSectionCard consequences={consequences} desc="Municipalities face mounting pressures on key pain points (and workflows), threatening the very foundation
                            of public service and community well-being." title="Three Critical " titleBreak="Challenges" flow={problemFlow} />

            </div>
           
            <TextSection buttonText1="Get In Touch" buttonText2="FAQ" boxTitle="Have Questions?" gradient
                boxDesc=" Curious about how Muni can fit your municipality's unique needs? Reach out
                        to our team for personalized answers or explore our comprehensive FAQ
                        section to find quick solutions." headText=" Each of these challenges quietly amplifies operational strain and threatens to widen the gap between resident expectations and municipal capacity—making the cost of delay far greater than it seems."
            />
        </div>

    )
}
export default Consequences
