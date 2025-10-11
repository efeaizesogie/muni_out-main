import Image from 'next/image';
import productSuiteImg from "../public/images/productsuite.png";
import dashboardImg from "../public/images/psdashboard.png";

import image1 from "../public/images/device5muni_1.png";
import image2 from "../public/images/device5muni_2.png";


import TownOfParadise from "../public/serving-logos/townOfParadise.jsx";
import TitleHead from '@/constants/TitleHead';

const ProductSuite = () => {
    return (
        <div className='flex flex-col w-full min-h-screen items-center relative overflow-hidden'>
            <Image
                src={productSuiteImg}
                alt="Muni Premium Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
            />
            <div className="w-full max-w-7xl pt-20 md:pt-32 lg:pt-48 pb-16 px-4 md:px-6 lg:px-8 relative z-10">

                {/* <div className="mt-12 md:mt-16 lg:mt-20 text-center flex flex-col items-center relative">
                    <TitleHead title="Unified Access to Muni’s" titleBreak="Full Suite Experience" tag="Product Suite" />
                </div> */}

                <div className="flex lg:flex-row flex-col w-full items-center justify-center">
                    <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                            {/* Add content here if needed */}
                        </div>
                    </div>

                    <div className='w-full lg:w-1/2 flex items-center justify-center'>
                        {/* <Image
                            src={dashboardImg}
                            alt="Dashboard"
                            className='w-full max-w-2xl h-auto z-[1] lg:animate-slideLeft200 animate-slideLeft100'
                        /> */}
                    </div>
                </div>
                {/* <section className='border-t-[1px] border-white border-opacity-[10%] mt-[50px] py-[40px] flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-0 gap-[27px]'>
                    <div className='flex items-end gap-2 flex-shrink-0'>
                        <p className='font-medium text-white text-[12px] md:text-[12px] text-center md:text-left whitespace-nowrap'>
                            Proudly showcasted at:
                        </p>
                        <Image src={footerlogo} />
                    </div>

                    <div className='flex flex-wrap text-white justify-center md:justify-end items-center gap-4 md:gap-6 flex-1 min-w-0'>
                        <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
                            <Image src={check} />
                            <p>Process service requests</p>
                        </div>
                        <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
                            <Image src={check} />
                            <p>Query all public municipal data</p>
                        </div>
                        <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
                            <Image src={check} />
                            <p>Receive alerts and notifications</p>
                        </div>
                        <div className='flex items-center gap-2 py-[5px] text-[14px] font-medium'>
                            <Image src={check} />
                            <p>And much more!</p>
                        </div>
                    </div>
                </section> */}
            </div>
        </div >
    )
}

export default ProductSuite;
