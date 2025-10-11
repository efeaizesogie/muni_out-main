import Image from "next/image"
import icon1 from "../public/icons/Icon1.svg"
import icon2 from "../public/icons/Icon2.svg"
import arrow from "../public/icons/RightArrow.svg"
import Onboarding from "../public/images/onboarding.png"

const OnBoarding = () => {
  return (
    <div id="onboarding" className='w-full h-full flex md:flex-row flex-col justify-center items-center bg-white md:pt-[150px] md:py-0 py-[100px]'>
      <div className="w-[80%] flex flex-col lg:flex-row justify-center lg:gap-[100px] gap-[70px] items-center">
        <div className="w-full lg:w-1/2 max-w-[405px] flex flex-col justify-start items-center">
          <div className="overflow-hidden flex flex-col justify-end items-center min-w-[350px] md:w-[405px] md:h-[482px] h-[400px] bg-gradient-to-b from-[#87938F]/35 from-0% to-[#87938F]/20 rounded-3xl px-[50px]">
            <Image src={Onboarding} />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center max-w-[498px]">
          <div className="md:min-w-[300px] md:w-[500px] flex flex-col gap-7">
            <div className="flex justify-start items-center md:flex ml-[-20px]">
              <Image src={icon1} />
              <Image src={arrow} className="mb-[40px]" />
              <Image src={icon2} />
            </div>
            <p className="font-semibold text-[#1B312A] md:text-[35px] text-[25px]">Quick and Easy Onboarding</p>
            <p className="font-medium text-[14px]">Our team will work hand-in-hand with yours through our quick and easy Onboarding Phase, which includes the following.</p>
            <div className="flex md:gap-6 gap-3 font-medium text-[14px]">
              <p className="rounded-full border-[#EBEFE4] border-[2px] px-[10px]">1</p>
              <p className="truncate">All required third party systems integrations.</p>
            </div>
            <div className="flex md:gap-6 gap-3 font-medium text-[14px]">
              <p className="rounded-full border-[#EBEFE4] border-[2px] px-[8px]">2</p>
              <p className="truncate">Model training on all relevant municipal data.</p>
            </div>
            <div className="flex md:gap-6 gap-3 font-medium text-[14px]">
              <p className="rounded-full border-[#EBEFE4] border-[2px] px-[8px]">3</p>
              <p className="truncate">Staff training and handoff.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnBoarding
