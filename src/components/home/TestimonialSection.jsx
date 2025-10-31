// import town from "@/public/icons/town-of-paradize.svg";
import town from "@/public/images/paradize.png";
import dotbg from "@/public/images/dotbg.png";
import Image from "next/image";

export default function TestimonialSection() {
    return (
        <div className="relative md:min-h-screen flex flex-col items-center justify-center bg-white py-16 md:py-24 px-[20px] overflow-hidden">

            {/* Main Content */}
            <div className="relative max-w-4xl mx-auto">
                <div className="flex flex-col items-center gap-8">

                    {/* Testimonial Quote */}
                    <blockquote className="text-2xl md:text-[34px] font-semibold md:leading-[44px] tracking-tight text-[#006A4A] text-center max-w-[637px]">
                        "When we first discovered Muni, We instantly got the feeling this was the next generation of municipal customer service experience."
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex flex-col items-center gap-3.5">
                        {/* Avatar */}
                        <div className="w-[75px] h-[75px] rounded-full overflow-hiddenflex items-center justify-center">
                            <Image
                                src={town}
                                alt="Jessica Smith"
                                className="w-full h-full object-cover rounded-full"
                            />
                        </div>

                        {/* Name and Title */}
                        <div className="flex flex-col items-center gap-1">
                            <h4 className="text-base font-semibold leading-[22px] tracking-tight text-black">
                                Town of Paradise
                            </h4>
                            <p className="text-xs font-medium leading-6 text-black">
                                Jessica Smith - Head of Operations
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <Image src={dotbg} alt={"headphone"} className='absolute bottom-[-160px] z-100 left-0 right-0 w-full h-[500px]' />
        </div>
    );
}

