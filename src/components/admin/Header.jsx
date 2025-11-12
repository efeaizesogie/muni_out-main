import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import muniPremium from "@/public/muni_premium.png";
import hero from "@/public/icons/hero-img.svg";


const Header = ({ heading, para }) => {
    return (

        <div className='flex flex-col w-full h-full items-center relative overflow-hidden'>

            <Image
                src={hero}
                alt="Muni Premium Background"
                fill
                className="object-cover  absolute inset-0 w-full h-full z-0     object-[50%_60%] 
    sm:object-[50%_50%]   
    md:object-top
    lg:object-[50%_30%]  "
                priority
            />


            <div className='flex flex-col md:items-center md:text-center z-10  pt-[130px] md:pt-[150px] w-full lg:w-[80%] mx-[20px] lg:mx-auto h-full relative'>
                <h1 className='font-semibold text-white md:text-7xl text-5xl mx-5 leading-[45px] '>{heading}</h1>
                <p className='font-medium text-white py-[24px] text-base leading-[26px] mx-5'>{para}</p>
                <div className='mb-20 md:mb-[85px] mx-5'>
                    <Button />
                </div>
            </div>

        </div>
    )
}

export default Header