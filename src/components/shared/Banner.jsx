"use client"
import Close from "@/public/icons/Close.svg"
import Image from "next/image"
import { useState } from "react"

const Banner = () => {
    const [isOpen, setIsOpen] = useState(true);

    const closeBanner = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={`w-full h-[40px] bg-[#1B312A] justify-between items-center px-[25px] ${isOpen ? "flex" : "hidden"}`}>
            <div></div>
            <div className="text-white text-[14px] font-[500]">311AI is now <span className="text-[#C4E76A] font-[700]">Muni</span>!</div>
            <Image src={Close} onClick={closeBanner} className="cursor-pointer" />
        </div>
    )
}

export default Banner


