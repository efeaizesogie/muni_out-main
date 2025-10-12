import Image from "next/image"
import callVolume from "../public/images/callVolume.png"
import TitleHead from "@/constants/TitleHead";
import LineGradient from "@/utils/LineGradient";

const Problem = () => {
    return (
        <div id="problem" className='flex flex-col w-full max-h-screen items-center text-center bg-white overflow-hidden tracking-wider py-10 md:py-32 lg:py-[152px] px-4'>
            <TitleHead title="Slow Response &" titleBreak="High Call Volume" tag="The Problem" />
            <p className="max-w-xl w-full text-sm  font-medium py-6 md:py-8 leading-relaxed">Municipalities across North America are struggling to keep pace with resident needs—response times are slow and call centres are overburdened with requests. Outdated manual processes and staffing shortages leave administrators overwhelmed, resulting in a frustrating experience for residents seeking information or submitting service tickets.</p>
            <div className="flex justify-center pt-8 md:pt-12 relative w-full">
                <div className="relative">
                    <Image src={callVolume} alt={"call volume"} className="w-full max-w-[324px] h-auto shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                    <LineGradient />
                </div>
            </div>
        </div>
    )
}

export default Problem
