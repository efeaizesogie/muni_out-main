import Image from "next/image"
import calender from "../public/icons/Calender.svg"
import calender2 from "../public/icons/Calender2.svg"
import phones from "../public/icons/Phones2.png"

const Footer = () => {
    return (
        <div className="flex flex-col w-full h-full items-center bg-[#EBEFE4]">
            <div className="flex lg:flex-row flex-col px-[15px] md:px-0 md:w-[80%] items-end pt-[50px]">
                <div className="flex flex-col w-full h-full gap-4 md:pb-[100px]">
                    <p className="md:w-[450px] md:text-[34px] text-[24px] text-[#1B312A] font-semibold leading-tight">It's Time to Upgrade <br />Your City’s Service Experience</p>
                    <p className="font-medium md:w-[400px] text-[16px]">See how our AI-powered municipal CRM and service tools improve resident experience, reduce workload, and boost overal satisfaction.</p>
                    <a href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank">
                        <button className='group bg-[#1B312A] rounded-full my-[20px] lg:w-auto w-full cursor-pointer'>
                            <div className='flex justify-between items-center gap-4 p-[5px] text-white font-semibold'>
                                <div className='flex justify-center items-center w-[44px] h-[44px] bg-[#C4E76A] border-[#C4E76A] border-[1px] rounded-full transition duration-500 group-hover:bg-opacity-0'>
                                    <Image src={calender} className='group-hover:hidden' />
                                    <Image src={calender2} className='hidden group-hover:block' />
                                </div>
                                <p className='pr-[20px] text-[16px]'>Schedule a demo</p>
                                <div></div>
                            </div>
                        </button>
                    </a>
                </div>
                <div className="w-full flex items-center justify-center md:px-[50px] md:pt-0 pt-[50px] overflow-hidden">
                    <Image src={phones} className="min-w-[350px] md:min-w-[600px] w-full max-w-[600px]" />
                </div>
            </div>
        </div>

    )
}

export default Footer
