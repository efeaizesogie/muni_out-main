import Image from "next/image"
import Link from 'next/link'
import call from "../public/icons/Call.svg"
import logo from "../public/icons/Logo2.svg"
import mail from "../public/icons/Mail.svg"
import linkedin from "../public/icons/linkedin.png"

const Footerbar = ({ className = '', height = 'h-full' }) => {
    return (
        <div className={`${className} flex flex-col w-full ${height} items-center bg-white`}>
            <div className="w-[80%] items-center md:flex hidden font-medium">
                <div className="flex w-full justify-between">
                    <div className="flex flex-col py-[50px] gap-2">
                        <Image src={logo} />
                        <p className="text-[12px]">Built By <a href="https://alwaysaugust.co" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-[#87938F] transition-colors">August</a></p>
                    </div>
                    <div className="flex lg:gap-10 gap-4 flex-wrap justify-center items-center">
                        <div className="flex gap-4 items-center h-fit">
                            <a href="mailto:info@getmuni.co">
                                <Image src={mail} className="cursor-pointer hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                        <div className="flex gap-4 items-center h-fit">
                            <a href="tel:416-809-7789">
                                <Image src={call} className="cursor-pointer hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                        <div className="flex gap-4 items-center h-fit">
                            <a href="https://www.linkedin.com/company/get-muni/" target="_blank" rel="noopener noreferrer">
                                <Image src={linkedin} className="cursor-pointer hover:opacity-80 transition-opacity" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col items-center bg-white md:hidden pt-[50px] font-medium">
                <div className="flex gap-4 flex-wrap justify-center">
                    <div className="flex gap-4 items-center">
                        <a href="mailto:info@getmuni.co">
                            <Image src={mail} className="cursor-pointer hover:opacity-80 transition-opacity" />
                        </a>
                    </div>
                    <div className="flex gap-4 items-center h-fit">
                        <a href="tel:416-809-7789">
                            <Image src={call} className="cursor-pointer hover:opacity-80 transition-opacity" />
                        </a>
                    </div>
                    <div className="flex gap-4 items-center h-fit">
                        <a href="https://www.linkedin.com/company/get-muni/" target="_blank" rel="noopener noreferrer">
                            <Image src={linkedin} className="cursor-pointer hover:opacity-80 transition-opacity" />
                        </a>
                    </div>
                </div>
                <div className="flex flex-col py-[50px] items-center gap-3">
                    <Image src={logo} />
                    <p className="text-[12px]">Built By <a href="https://alwaysaugust.co" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-[#87938F] transition-colors">August</a></p>
                </div>
            </div>
            {/* Terms and Privacy links centered at bottom */}
            <div className="w-full flex justify-center items-center py-4 border-t border-gray-200">
                <div className="flex gap-8 items-center">
                    <Link href="/terms" className="text-[12px] text-[#1B312A] underline cursor-pointer hover:text-[#87938F] transition-colors">
                        Terms of Use
                    </Link>
                    <Link href="/privacy" className="text-[12px] text-[#1B312A] underline cursor-pointer hover:text-[#87938F] transition-colors">
                        Privacy Policy
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Footerbar
