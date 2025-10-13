import Image from 'next/image';
import productSuiteImg from "../public/images/productsuite.png";
import dashboardImg from "../public/images/psdashboard.png";

import TitleHead from '@/constants/TitleHead';
import { productSuiteData } from '@/constants/productSuiteData';
import multiplayer from '@/public/icons/multiplayer.svg';
import productDash from "../public/icons/product-dash.png"
import safari from "../public/icons/safari-toobar.svg"


const SuiteCard = ({ icon, title, description, index }) => {
    return (
        <div className={`border-l-4  ${index === 0 ? "border-l-[#C4E76A] " : "border-[#ffffff3a]"
            }`}>
            <div
                className={`flex flex-col gap-[14px] p-4 md:p-6 px-6 md:px-11 text-white items-start text-start`}
            >   <div className='flex gap-2 items-center'>
                    {icon}
                    <h3 className="font-semibold text-lg text-balance">{title}</h3>
                </div>
                <p className="text-sm font-medium text-[#ffffffa4] text-pretty">{description}</p>
            </div>
        </div>

    );
}

const ProductSuite = () => {
    return (
        <div id='product' className='flex flex-col w-full h-full  items-center relative overflow-hidden bg-[#14241F] pb-24 '>
            <Image
                src={productSuiteImg}
                alt="Muni Premium Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
            />
            <div className="mx-4 lg:mx-auto md:w-[80%] pt-20 md:pt-32 lg:pt-48 pb-16 relative z-10">
                <div className=" text-center flex flex-col items-center relative">
                    <TitleHead title="Unified Access to Muni’s" titleBreak="Full Suite Experience" tag="Product Suite" textWhite />
                </div>

                <div className="flex lg:flex-row flex-col w-full items-center justify-center relative mt-20">
                    <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                            {/* Add content here if needed */}
                            {productSuiteData.map((consequence, index) => (
                                <SuiteCard key={index} {...consequence} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className='absolute -top-20 -right-20'>
                        <Image src={multiplayer} alt='multiplayer icon' />
                    </div>

                    <div className='w-full lg:w-1/2 flex justify-end relative ml-120'>
                        <div className='relative w-full max-w-2xl lg:mt-[20px]'>
                            <Image
                                src={productDash}
                                alt="Product Dashboard"
                                className='w-full h-auto  mt-[20px] rounded-b-xl'
                            />
                            <Image
                                src={safari}
                                alt="Safari Toolbar"
                                className='absolute top-0 left-0 w-full h-auto z-10  rounded-t-xl'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C4E76A] to-[#006A4A]'></div>
        </div >
    )
}

export default ProductSuite;

