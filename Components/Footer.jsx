import Image from "next/image"
import calender from "../public/icons/Calender.svg"
import rightArrow from "../public/icons/arrow-narrow-right.png"
import footerIcon from "../public/icons/footer-icon.svg"
import phone from "../public/icons/phone.svg"
import email from "../public/icons/email.svg"
import footerbg from "../public/images/footerbg.png"
import Link from "next/link"
import TitleHead from "@/constants/TitleHead"

const Footer = () => {
    return (
        <div className='flex flex-col w-full items-center relative overflow-hidden hero-bg'>
            <Image
                src={footerbg}
                alt="Muni Premium Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
            />

            <div className="w-full max-w-7xl pt-[67px] md:pt-32 lg:pt-48 pb-10 px-4 md:px-6 lg:px-8 relative z-10 ">

                <div className="w-full flex flex-col items-center text-center justify-center mb-12">
                    <Image src={footerIcon} alt={"notification issue"} className=" shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                    <TitleHead title="It’s Time to Upgrade Your" titleBreak="Customer Experience" textWhite />
                    <p className="max-w-lg w-full text-base text-white font-medium px-8 md:px-0 py-6 md:py-8 ">Schedule a call today for a full product demonstration and for further information.</p>

                    <a href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank" className="px-6 py-3 bg-[#47816F] border border-[#FFFFFF1F] rounded-lg text-white group font-semibold hover:bg-[#3a6b5d] transition-colors shadow-[0_-2px_0px_rgb(0_0_0_0_/_4)]">
                        Request a Demo <Image src={rightArrow} className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </a>


                    <div className="flex justify-center items-center gap-5 pt-10 md:pt-12 relative w-full">
                        <div className="relative flex gap-4 items-center">
                            <div className="flex items-center justify-center rounded-full bg-[#006A4A] w-[34px] h-[34px] ">
                                <Image src={email} alt={"call volume"} className="w-4 h-4 shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                            </div>
                            <Link href="mailto:info@muni.com" className="text-[12px] text-[#ffffff] font-semibold underline cursor-pointer hover:text-[#87938F] transition-colors">
                                info@muni.com
                            </Link>
                        </div>
                        <div className="relative flex gap-4 items-center">
                            <div className="flex items-center justify-center rounded-full bg-[#006A4A] w-[34px] h-[34px] ">
                                <Image src={phone} alt={"call volume"} className="w-4 h-4 shadow-[0_10.22px_17.51px_rgb(0_0_0_0_/_4)] rounded-lg" />
                            </div>
                            <Link href="tel:+416-321-5000" className="text-[12px] text-[#ffffff] font-semibold underline cursor-pointer hover:text-[#87938F] transition-colors">
                                416-321-5000
                            </Link>
                        </div>

                    </div>
                </div>


                <div className="w-full flex flex-col md:flex-row gap-4 flex-wrap justify-between  items-center pt-7 border-t border-[#EBEBEB1A]">
                    <div className="flex gap-8 items-center">
                        <p className="text-[12px] font-medium text-[#ffffff] ">
                            Built by August:  <Link href="https://www.alwaysaugust.co" target="_blank" className="underline cursor-pointer font-semibold hover:text-[#87938F] transition-colors">alwaysaugust.co</Link>
                        </p>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Link href="/terms" className="text-[12px] text-[#ffffff] font-semibold underline cursor-pointer hover:text-[#87938F] transition-colors">
                            Terms of Use
                        </Link>
                        <Link href="/privacy" className="text-[12px] text-[#ffffff] underline font-semibold cursor-pointer hover:text-[#87938F] transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default Footer
