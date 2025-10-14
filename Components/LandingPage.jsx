import Image from 'next/image';

import calender from "../public/icons/Calender.svg";
import calender2 from "../public/icons/Calender2.svg";
import check from "../public/icons/Checkmark.png";
import arrow from "../public/icons/arrow-narrow-right.png";
import star from "../public/icons/star-06.png";
import footerlogo from "../public/icons/footer-logo1.png";
import phones from "../public/icons/Phones.png";
import image1 from "../public/images/device5muni_1.png";
import image2 from "../public/images/device5muni_2.png";
import heroNotif from "../public/images/hero-notif.webp";
import muniPremium from "../public/muni_premium.png";
import TownOfParadise from "./TownOfParadise";



const LandingPage = () => {
  return (
    <div className='flex flex-col w-full h-full 2xl:h-screen items-center relative overflow-hidden'>
      <Image
        src={muniPremium}
        alt="Muni Premium Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="w-full max-w-none md:w-[80%] md:mx-auto px-4 md:px-0 md:pt-[200px] pt-[125px] gap-2 relative z-10">
        <div className="flex lg:flex-row flex-col w-full">
          <div className='lg:min-w-[600px]'>
            <div className='flex flex-col items-start'>
              <p className='flex items-center gap-2 font-medium text-white text-[14px] bg-[#000000] bg-opacity-40 rounded-full py-[5px] px-[15px] mb-[34px]'>
                <Image src={star} /> AI-Powered Solutions for Municipalities
              </p>
              <h1 className='font-semibold text-white md:text-[70px] text-[35px] leading-tight'>Get Muni, <br />Your Residential<br /> AI Agent</h1>
              <p className='font-normal text-white py-[20px] text-[16px]'>The intelligent AI agent built to streamline municipal services, reduce<br></br> administrative workloads, and deliver accurate information 24/7.</p>
              <div className='w-full flex gap-4 items-center justify-start'>
                <a className="" href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank">
                  <button className='group bg-[#47816F] rounded-md my-[20px] lg:w-auto w-full cursor-pointer'>
                    <div className='flex justify-between items-center gap-2 py-[10px] px-[15px] text-white font-semibold'>
                      <p className='text-[12px] md:text-[16px] pr-[5px]'>Request a Demo</p>
                      <Image src={arrow} />
                    </div>
                  </button>
                </a>
                <a className="" href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank">
                  <button className='text-[12px] md:text-[16px] group bg-white py-[10px] px-[15px] rounded-md my-[20px] text-[#414651] font-semibold lg:w-auto w-full cursor-pointer'>
                    How It Works
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center px-[15px]'>
            <Image src={image1} className='w-full z-[2] ml-[120px] md:ml-[300px] lg:min-w-[472px] lg:mt-[100px] lg:ml-[100px]' />
            <div className='relative w-full min-w-[500px] lg:min-w-[899px]'>
              <Image
                src={heroNotif}
                className='absolute left-[-100px] lg:left-[-80px] md:left-[-40px] bottom-8 lg:bottom-20 z-10 max-w-[200px] lg:max-w-[252px] animate-fadeInDelayed'
              />
              <Image
                src={image2}
                className='w-full z-[1] lg:min-w-[899px] ml-[-170px] md:ml-[-80px] lg:ml-[-100px] lg:mt-[-50px] lg:animate-slideLeft200 animate-slideLeft100'
              />
            </div>

          </div>
        </div>
        <section className='border-t-[1px] border-white border-opacity-[10%] mt-[50px] py-[40px] flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-0 gap-[27px]'>
          <div className='flex items-end gap-2 flex-shrink-0'>
            <p className='font-medium text-white text-[12px] md:text-[12px] text-center md:text-left whitespace-nowrap'>
              Proudly showcasted at:
            </p>
            <Image src={footerlogo} />
          </div>

          <div className='flex flex-wrap text-white justify-center md:justify-end items-center gap-4 md:gap-6 flex-1 min-w-0'>
            <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
              <Image src={check} />
              <p>Process service requests</p>
            </div>
            <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
              <Image src={check} />
              <p>Query all public municipal data</p>
            </div>
            <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
              <Image src={check} />
              <p>Receive alerts and notifications</p>
            </div>
            <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
              <Image src={check} />
              <p>And much more!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default LandingPage;
