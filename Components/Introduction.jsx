import Image from "next/image"

import wave from "../public/bg/Wave.svg"
import admin from "../public/icons/Admin.svg"
import admin2 from "../public/icons/Admin2.svg"
import dashboard from "../public/icons/Dashboard.png"
import phone from "../public/icons/Phone.png"
import resident from "../public/icons/Resident.svg"
import resident2 from "../public/icons/Resident2.svg"
import roundArrow from "../public/icons/RoundArrow.svg"
import arrow from "../public/icons/StraightArrow.svg"

const Introduction = () => {
  return (
    <div id="introduction" className='flex flex-col w-full h-full items-center text-center bg-white overflow-hidden tracking-wider'>
        <h1 className="md:text-[40px] text-[#1B312A] text-[24px] font-semibold md:pt-[125px] pt-[75px] px-[50px]">Powerful Resident App & Admin Dashboard</h1>
        <p className="md:w-[450px] w-[80%] md:text-auto text-[14px] font-medium py-[20px]">Muni is a wholistic platform that includes our administrative dashboard, resident mobile app, and resident web app that can be seamlessly embedded in your website.</p>
        <div className="flex md:flex-row flex-col md:pt-[50px] pt-[25px] md:px-[50px]">
            <Image src={resident} className="md:block hidden mt-[-43%] mr-[-100px] z-[2]"/>
            <Image src={resident2} className="relative md:hidden block mb-[-12%] left-[15%] z-[2]"/>
            <div className="flex flex-col md:items-end z-[1] md:justify-start justify-center items-center">
                <Image src={phone} className="w-[225px]"/>
                <Image src={roundArrow} className="md:block hidden my-[-20px] mr-[10px] w-[50%]"/>
                <Image src={arrow} className="md:hidden block z-[2] py-[15px] mt-[-40px]" />
            </div>
            <Image src={dashboard} className="z-[1] min-w-[400px] md:w-[700px] md:px-0 px-[20px]"/>
            <Image src={admin} className="md:block hidden mt-[-125px] ml-[-110px] z-[2]"/>
            <Image src={admin2} className="md:hidden block z-[2] mt-[-220px] ml-[150px]"/>
        </div>
        <Image src={wave} className="w-full md:mt-[-75px] lg:mt-[-100px] mt-[125px] lg:mb-[-100px]"/>
    </div>
  )
}

export default Introduction
