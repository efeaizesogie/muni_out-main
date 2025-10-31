import React from 'react'
import arrow from "@/public/icons/arrow-narrow-right.png";
import Image from 'next/image';

const Button = () => {
    return (
        <a href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank" className='group bg-[#47816F] flex items-center justify-center rounded-md lg:w-auto w-full cursor-pointer'>
            <p className='text-[12px] md:text-[16px] pr-[5px] flex gap-2 items-center py-[10px] px-[15px] text-white font-semibold'>Request a Demo <Image src={arrow} /></p>
        </a>
    )
}

export default Button