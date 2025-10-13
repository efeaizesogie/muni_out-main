
import sidebarNavigationImg from '@/public/images/sidebar-navigation.png';
import yourLogoImg from '@/public/images/your-logo.png';
import Image from 'next/image';

export default function MuniBentoGrid() {
    const CheckIcon = () => (
        <div className="relative w-[18px] h-[18px] flex-shrink-0">
            <div className="absolute inset-0 bg-[#47816F] rounded-full"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 18 18">
                <path
                    d="M5 9L8 12L13 6"
                    stroke="white"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );

    const CheckIconWhite = () => (
        <div className="relative w-[18px] h-[18px] flex-shrink-0">
            <div className="absolute inset-0 bg-white rounded-full"></div>
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 18 18">
                <path
                    d="M5 9L8 12L13 6"
                    stroke="black"
                    strokeWidth="1.2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    );

    return (
        <div id="about" className="min-h-screen bg-gray-50 pt-12 px-4 pb-24">
            <div className="md:w-[80%] mx-auto">
                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[639px]">

                    <div
                        className="relative overflow-hidden rounded-[20px] border border-gray-200 p-11"
                        style={{
                            background: 'radial-gradient(48.86% 48.86% at 50% 50%, #2F443D 0%, #1B312A 100%)'
                        }}
                    >
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-[34px] font-semibold md:leading-[44px] tracking-tight text-white mb-6 capitalize">
                                Use One Or All Best Features Integrated
                            </h2>

                            <p className="text-sm font-medium leading-6 text-white opacity-70 mb-6 max-w-[435px]">
                                Choose a la carte features with ease—just toggle on what you need to unlock powerful municipal solutions.
                            </p>

                            <button className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D]">
                                Learn More
                            </button>
                        </div>

                        {/* Image wrapper - ensures image height contributes to parent */}
                        <div className="mt-10 relative w-full -mb-[45px] -ml-[45px]">
                            <Image
                                src={sidebarNavigationImg}
                                alt="Sidebar Navigation"
                                className="w-full h-auto object-cover "
                                priority
                            />
                        </div>
                    </div>

                    {/* Card 2: Seamless, Quick, and Easy Onboarding */}
                    <div
                        className="relative overflow-hidden rounded-[20px] border border-gray-200 p-11 "
                        style={{
                            background: 'radial-gradient(49.92% 47.5% at 59.95% 65.02%, #007F59 0%, #00593E 100%)'
                        }}
                    >
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-[34px] font-semibold md:leading-[44px] tracking-tight text-white mb-6">
                                Seamless, Quick, and Easy Onboarding
                            </h2>

                            <p className="text-sm font-medium leading-6 text-white opacity-70 mb-6 max-w-[520px]">
                                Our team will work hand-in-hand with yours through our quick and easy Onboarding Phase, which includes the following.
                            </p>

                            <button className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D] mb-10">
                                Request a Demo
                            </button>

                            {/* Checklist */}
                            <div className="space-y-[14px] mb-12">
                                <div className="flex items-center gap-3.5">
                                    <CheckIcon />
                                    <span className="text-sm font-semibold leading-[26px] text-white">
                                        All required third party systems integrations.
                                    </span>
                                </div>
                                <div className="flex items-center gap-3.5">
                                    <CheckIcon />
                                    <span className="text-sm font-semibold leading-[26px] text-white">
                                        Model training on all relevant municipal data.
                                    </span>
                                </div>
                                <div className="flex items-center gap-3.5">
                                    <CheckIcon />
                                    <span className="text-sm font-semibold leading-[26px] text-white">
                                        Staff training and handoff.
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* <div className="mt-10 relative  w-full h-[196px] flex items-end justify-end -mr-11 -mb-11">
                            <Image
                                src={yourLogoImg}
                                alt="Sidebar Navigation"
                                className="w-full h-auto object-cover overflow-visible"
                                priority
                            />
                        </div> */}

                        {/* Logo Card with Grid Background */}
                        <div className="absolute bottom-0 right-12 overflow-visible">
                            <div
                                className="relative max-w-[280px] max-h-[280px]"
                            >
                                <Image
                                    src={yourLogoImg}
                                    alt="Your Logo"
                                    className="w-full h-full object-cover overflow-visible"
                                    priority
                                />

                            </div>
                        </div>
                    </div>

                    {/* Card 3: Keeping Conversations And Data Secure - Full Width */}
                    <div
                        className="relative overflow-hidden rounded-[20px] border border-gray-200 p-11 lg:col-span-2"
                        style={{
                            background: '#000000'
                        }}
                    >
                        <div className="grid lg:grid-cols-2 gap-12">
                            <div>
                                <h2 className="text-2xl md:text-[34px] font-semibold md:leading-[44px] tracking-tight text-white mb-6 capitalize max-w-[369px]">
                                    Keeping Conversations And Data Secure
                                </h2>

                                <p className="text-sm font-medium leading-6 text-white opacity-70 mb-6 max-w-[532px]">
                                    Muni takes privacy and security seriously, ensuring that every resident conversation—and all municipal data—remain fully protected. Our platform uses robust data encryption, strict access controls, and regular security audits to safeguard information against unauthorized access and cyber threats.
                                </p>

                                <button className="inline-flex items-center justify-center px-4 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm text-base font-semibold text-gray-700 hover:text-white hover:bg-[#2F443D] transition duration-300 hover:border-[#2F443D]">
                                    Learn More
                                </button>
                            </div>

                            {/* Checklist */}
                            <div className='flex items-center justify-center'>
                                <div className="space-y-[14px] lg:pl-12 text-center">
                                    <div className="flex items-center gap-3.5">
                                        <CheckIconWhite />
                                        <span className="text-sm font-semibold leading-[26px] text-white">
                                            End-to-end encryption protects all data.
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <CheckIconWhite />
                                        <span className="text-sm font-semibold leading-[26px] text-white">
                                            Access limited to authorized users only.
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <CheckIconWhite />
                                        <span className="text-sm font-semibold leading-[26px] text-white">
                                            Routine security audits and updates.
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <CheckIconWhite />
                                        <span className="text-sm font-semibold leading-[26px] text-white">
                                            Fully compliant with privacy laws.
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3.5">
                                        <CheckIconWhite />
                                        <span className="text-sm font-semibold leading-[26px] text-white">
                                            Fully compliant with privacy laws.
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}