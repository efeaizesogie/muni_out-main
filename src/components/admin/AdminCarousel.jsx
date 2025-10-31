import React from 'react'
const carouselContent = [
    '🚗  Report an abandoned vehicle',
    '🚧  Report a building code violation',
    '🎨  Report graffiti',
    '🔥  Report illegal burning',
    '💡  Report a non-working streetlamp',
    '📅  Lookup municipal recreation programs'
];

const AdminCarousel = () => {
    return (
        < div className='w-full py-[20px] md:py-[55px] bg-white' >
            <div className="w-full overflow-hidden">
                <div className="flex justify-start animate-slide gap-[10px] md:gap-[15px] w-full whitespace-nowrap font-semibold">
                    {carouselContent.map((_, index) => (
                        <div className="flex justify-center items-center">
                            <p className="truncate bg-white text-black p-[10px] border-[#E9EAEB] border-[1px] text-[14px] rounded-[10px] px-[24px] py-[14px]">{carouselContent[index]}</p>
                        </div>
                    ))}
                    {carouselContent.map((_, index) => (
                        <div className="flex justify-center items-center">
                            <p className="truncate bg-white text-black p-[10px] border-[#E9EAEB] border-[1px] text-[14px] rounded-[10px] px-[24px] py-[14px]">{carouselContent[index]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default AdminCarousel