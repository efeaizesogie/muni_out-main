export default function FeaturesCarousel() {
  const carouselContent = [
    '🚗  Report an abandoned vehicle',
    '🚧  Report a building code violation',
    '🎨  Report graffiti',
    '🔥  Report illegal burning',
    '💡  Report a non-working streetlamp',
    '📅  Lookup municipal recreation programs'
  ];

  return (
    <div className="w-full mx-auto flex flex-col justify-center items-center bg-[#F9F9F9]] relative">
      <div className='absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C4E76A] to-[#006A4A]'></div>
      <section className='flex flex-col justify-start items-center text-center w-full h-full py-[58px] gap-[36px] tracking-wider'>
        <h2 className=" text-black text-[24px] font-semibold md:pt-[5px] pt-[75px] px-[50px]">Over 100+ services to integrate</h2>
        <div className='w-full'>
          <div className="overflow-hidden">
            <div className="flex justify-start animate-slide gap-[15px] w-full whitespace-nowrap font-semibold">
              {carouselContent.map((_, index) => (
                <div className="flex justify-center items-center">
                  <p className="truncate bg-white p-[10px] border-[#E9EAEB] border-[1px] text-[14px] rounded-[10px] px-[24px] py-[14px]">{carouselContent[index]}</p>
                </div>
              ))}
              {carouselContent.map((_, index) => (
                <div className="flex justify-center items-center">
                  <p className="truncate bg-white p-[10px] border-[#E9EAEB] border-[1px] text-[14px] rounded-[10px] px-[24px] py-[14px]">{carouselContent[index]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
