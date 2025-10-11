import React from 'react'

const TitleHead = ({tag, title, titleBreak}) => {
    return (
        <>
            <p className="text-sm md:text-base text-[#006A4A] font-semibold px-4 md:px-8 max-w-lg mb-4 md:mb-6">{tag}</p>
            <h1 className="text-2xl md:text-4xl lg:text-[54px] text-[#000000] font-semibold px-4 md:px-8 md:leading-[64px] lg:leading-[64px] leading-tight max-w-4xl">{title} <br/> {titleBreak}</h1>
        </>
    )
}
export default TitleHead
