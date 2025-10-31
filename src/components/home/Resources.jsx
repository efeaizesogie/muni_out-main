import TitleHead from '@/src/constants/TitleHead'
import React from 'react'
import resourceImg1 from "@/public/images/resource-img1.png"
import resourceImg2 from "@/public/images/resource-img2.png"
import resourceImg3 from "@/public/images/resourceimg3.png"
import Image from 'next/image'

const cards = [
    {
        image: resourceImg1,
        title: "Title goes here",
        description: "Lorem ipsum dolor sit amet consectetur. Magnis nisl quis vel in aliquet. Aenean vitae vulputate pellentesque sed.",
        date: "Posted yesterday"
    },
    {
        image: resourceImg2,
        title: "Title goes here",
        description: "Lorem ipsum dolor sit amet consectetur. Magnis nisl quis vel in aliquet. Aenean vitae vulputate pellentesque sed.",
        date: "Posted yesterday"
    },
    {
        image: resourceImg3,
        title: "Title goes here",
        description: "Lorem ipsum dolor sit amet consectetur. Magnis nisl quis vel in aliquet. Aenean vitae vulputate pellentesque sed.",
        date: "Posted yesterday"
    }
];

const Resources = () => {
    return (
        <div id="resources" className='flex flex-col w-full min-h-screen items-center text-center bg-[#F9F9F9] overflow-hidden tracking-wider py-16 md:py-32 '>
            <TitleHead title="Resources & Insights" />
            <p className="max-w-4xl w-full text-sm md:text-base font-medium mt-5 px-[20px] md:px-0 pb-8 md:py-8 ">Stay informed about the latest trends in municipal technology, best practices for digital transformation, and insights into building better communities through technology.</p>

            <div className="md:w-[80%] mx-[20px] lg:mx-auto relative z-10 md:mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="bg-white rounded-xl border border-[#EBEBEB] overflow-hidden flex flex-col">
                            <div className="relative h-48">
                                <Image
                                    src={card.image}
                                    alt="Technology"
                                    className="w-full h-full object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-[#87938F] text-white text-xs font-semibold px-3 py-1 rounded-full">
                                    Technology
                                </span>
                            </div>

                            <div className="p-6 flex flex-col flex-grow items-start">
                                <h3 className="text-base font-semibold text-[#131416] mb-3">
                                    {card.title}
                                </h3>

                                <p className="text-[#000] text-xs font-medium mb-4 flex-grow text-start">
                                    {card.description}
                                </p>

                                <p className="text-{#000} text-xs font-medium mb-4">
                                    {card.date}
                                </p>

                                <button className="flex items-center justify-between w-full text-[#006A4A] font-semibold text-sm hover:text-teal-700 transition-colors group pt-4 border-t border-[#EBEBEB]">
                                    Read more
                                    <svg
                                        className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center">
                    <button className="px-6 py-3 bg-white border border-[#D5D7DA] rounded-lg text-[#414651] font-semibold hover:text-white hover:bg-[#2F443D] transition duration-300 shadow-[0_-2px_0px_rgb(0_0_0_0_/_4)]">
                        View More Articles
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Resources

