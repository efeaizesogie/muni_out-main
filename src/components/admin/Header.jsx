import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import muniPremium from "@/public/muni_premium.png";

const Header = ({ heading, para }) => {
    return (
        <div className='flex flex-col w-full items-center relative overflow-hidden'>
            <Image
                src={muniPremium}
                alt="Muni Premium Background"
                className="absolute inset-0 w-full h-full object-cover object-top z-0"
                priority
                fill
            />
            <div className="absolute inset-0 bg-[#14241F] bg-opacity-20 z-1"></div>


            <div className='flex flex-col items-center text-center z-10  pt-[100px] md:pt-[150px] w-full lg:w-[80%] mx-[20px] lg:mx-auto h-full relative'>
                <h1 className='font-semibold text-white md:text-[70px] text-[42px] leading-tight '>{heading}</h1>
                <p className='font-medium text-white py-[12px] md:py-[24px] text-lg text-center mx-5'>{para}</p>
                <div className='mb-16 md:mb-[85px]'>
                    <Button />
                </div>
            </div>

        </div>
    )
}

export default Header