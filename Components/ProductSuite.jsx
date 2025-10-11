import Image from 'next/image';
import productSuiteImg from "../public/images/productsuite.png";
import dashboardImg from "../public/images/psdashboard.png";

import TitleHead from '@/constants/TitleHead';
import { productSuiteData } from '@/constants/productSuiteData';

const SuiteCard = ({ icon, title, description, index }) => {
    return (
        <div className={`'border-l border-white ' ${index === 0 ? " " : ""
            }`}>
            <div
                className={`flex flex-col gap-[14px] p-4 lg:p-6 text-white items-start text-start`}
            >   <div className='flex gap-2 items-center'>
                    {icon}
                    <h3 className="font-semibold text-lg text-balance">{title}</h3>
                </div>
                <p className="text-sm font-medium text-white text-pretty">{description}</p>
            </div>
        </div>

    );
}

const ProductSuite = () => {
    return (
        <div className='flex flex-col w-full h-full 2xl:h-screen items-center relative overflow-hidden bg-[#14241F]'>
            <Image
                src={productSuiteImg}
                alt="Muni Premium Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
            />
            <div className="w-full max-w-7xl pt-20 md:pt-32 lg:pt-48 pb-16 px-4 md:px-6 lg:px-8 relative z-10">
                <div className=" text-center flex flex-col items-center relative">
                    <TitleHead title="Unified Access to Muni’s" titleBreak="Full Suite Experience" tag="Product Suite" textWhite />
                </div>

                <div className="flex lg:flex-row flex-col w-full items-center justify-center">
                    <div className='w-full lg:w-1/2 mb-8 lg:mb-0'>
                        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
                            {/* Add content here if needed */}
                            {productSuiteData.map((consequence, index) => (
                                <SuiteCard key={index} {...consequence} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className=' w-full lg:w-1/2 flex items-center justify-center'>
                        <Image src={dashboardImg} className='w-full z-[2] ml-[120px] lg:min-w-[472px] lg:mt-[100px] lg:ml-[100px]' />
                        {/* <Image
                            src={dashboardImg}
                            alt="Dashboard"
                            className='w-full max-w-2xl h-auto z-[1] lg:animate-slideLeft200 animate-slideLeft100'
                        /> */}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ProductSuite;
