import Image from 'next/image'
import React from 'react'
import Button from '../Button'
import muniPremium from "@/public/muni_premium.png";

const Header = ({ heading, para }) => {
    return (
        <div className='flex flex-col w-full items-center relative overflow-hidden '
            style={{
                background:
                    `url(${muniPremium.src}) #006A4A -0.225px -42.782px / 138.486% 228.596% no-repeat`,
            }}>


            <div className='flex flex-col items-center z-10 py-10 md:pb-20 md:pt-[150px] w-full lg:w-[80%] mx-[20px] lg:mx-auto h-full'>
                <h1 className='font-semibold text-white md:text-[70px] text-[42px] leading-tight'>{heading}</h1>
                <p className='font-medium text-white py-[24px] text-lg text-center'>{para}</p>
                <div className='mb-[85px]'>
                    <Button />
                </div>
            </div>

        </div>
    )
}

export default Header