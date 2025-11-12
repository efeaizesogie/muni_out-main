import Image from 'next/image';

import check from "@/public/icons/Checkmark.png";
import arrow from "@/public/icons/arrow-narrow-right.png";
import star from "@/public/icons/star-06.png";
import footerlogo from "@/public/icons/footer-logo1.png";
import phones from "@/public/icons/Phones.png";
import image1 from "@/public/images/device5muni_1.png";
import image2 from "@/public/images/device5muni_2.png";
import heroNotif from "@/public/images/hero-notif.webp";
import muniPremium from "@/public/muni_premium.png";

const LandingPage = () => {
  return (
    <div className='flex flex-col w-full h-full 2xl:h-screen items-center relative overflow-hidden'>
      <Image
        src={muniPremium}
        alt="Muni Premium Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        priority
      />
      <div className="w-full px-[20px] md:px-0 md:pt-[200px] pt-[125px] gap-2 relative z-10">
        <div className="flex lg:flex-row flex-col max-w-[1440px] md:mx-[100px] 2xl:mx-auto">
          <div className='lg:min-w-[600px]'>
            <div className='flex flex-col items-start'>
              <p className='flex items-center gap-2 font-semibold text-white text-[14px] bg-[#000000] bg-opacity-40 rounded-full py-[5px] px-[15px] mb-[34px]'>
                <Image src={star} /> AI-Powered Solutions for Municipalities
              </p>
              <h1 className='font-semibold text-white md:text-[70px] text-[42px] leading-tight'>Get Muni, <br />Your Residential<br /> AI Agent</h1>
              <p className='font-medium text-white py-[24px] text-lg'>The intelligent AI agent built to streamline municipal services, reduce administrative workloads, and deliver accurate information 24/7.</p>
              <div className='w-full flex flex-col md:flex-row gap-4 items-center justify-start'>
                <a href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank" className='group bg-[#47816F] flex items-center justify-center rounded-md lg:w-auto w-full cursor-pointer'>
                  <p className='text-[16px] pr-[5px] flex gap-2 items-center py-[10px] px-[15px] text-white font-semibold'>Request a Demo <Image src={arrow} /></p>
                </a>
                <a href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank" className=' flex items-center justify-center text-[16px] group bg-white py-[10px] px-[15px] rounded-md text-[#414651] font-semibold lg:w-auto w-full cursor-pointer'>
                  How It Works
                </a>
              </div>
            </div>
          </div>
          <div className='w-full flex items-center justify-center px-[15px] pt-8 md:pt-0'>
            <Image src={image1} className='w-full z-[6] ml-[280px] md:ml-[300px] lg:min-w-[472px] lg:mt-[100px] lg:ml-[100px]' />
            <div className='relative w-full min-w-[500px] lg:min-w-[899px]'>
              <div className='absolute hidden md:block left-[-150px] lg:left-[-180px] md:left-[-160px] bottom-[60px] lg:bottom-[120px] w-[80px] lg:w-[100px] h-[2px] border-t-2 border-dashed border-[#D5D7DA] z-[5] animate-fadeInDelayed'></div>
              <Image
                src={heroNotif}
                className='absolute hidden md:block left-[-100px] lg:left-[-80px] md:left-[-82px] bottom-8 lg:bottom-20 z-10 max-w-[200px] lg:max-w-[252px] animate-fadeInDelayed'
              />
              <Image
                src={image2}
                className='w-full z-[1] lg:min-w-[899px] ml-[-80px] md:ml-[-100px] lg:ml-[-100px] lg:mt-[-50px] lg:animate-slideLeft200 animate-slideLeft100'
              />
            </div>

          </div>
        </div>
        <section className='border-t-[1px] border-white border-opacity-[10%] mt-[4px] pt-[44px] pb-[54px] flex flex-col md:flex-row justify-between items-center w-full px-[20px] md:px-0 gap-[27px] max-w-[1440px] md:mx-[100px] 2xl:mx-auto'>
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


