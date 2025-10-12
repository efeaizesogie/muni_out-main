import Image from "next/image"
import TitleHead from "@/constants/TitleHead"

import footerIcon from "../public/icons/notif-icon.svg"
import MuniFeatures from "@/constants/MuniFeatures"
import TextSection from "@/constants/TextSection"


const Features = () => {
    return (
        <>
            <div id="features" className='flex flex-col w-full h-full items-center pb-[85px] pt-[40px]'>

                <div className="text-center flex flex-col items-center relative my-16">
                    <TitleHead title="All-in-One Features " titleBreak="Tailored for Municipalities" tag="Features" />

                    <div className="relative">
                        <div className="rounded-[20px] w-[74px] h-[74px] bg-gradient-to-b from-[#C4E76A] to-[#1B312A] p-[2px] items-center flex justify-center mt-9 relative">
                            <div className="relative w-full h-full items-center flex justify-center rounded-[20px] bg-[#1B312A]">
                                <Image src={footerIcon} alt={"call volume"} className=" w-[54px] h-[54px] shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                            </div>

                            <div
                                className="absolute left-1/2 -translate-x-1/2 top-full w-[2px] h-[120px] rounded-full z-10"
                                style={{
                                    background: 'linear-gradient(to bottom, #006A4A 30%, rgba(0, 106, 74, 0.2) 80%, rgba(0, 106, 74, 0) 100%)',
                                }}
                            />

                        </div>

                    </div>

                </div>

                <div className="z-20">
                    <MuniFeatures />
                </div>
            </div>
            <TextSection boxTitle="There’s more on the way!" boxDesc="We’re constantly developing new features to enhance the experience. Explore the full list of current and upcoming capabilities below." buttonText1="View All Features" buttonText2="See How It Works" />
        </>

    )
}

export default Features