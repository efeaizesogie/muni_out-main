import serviceRequestImage from '../public/images/service-request.svg';
import knowledgeBaseImage from '../public/images/knowledgeBase.svg';
import calenderImg from '../public/images/calender.svg';
import balanceImg from '../public/images/balance.svg';
import relationshipImg from '../public/images/relationshipImg.svg';
import notificationImg from '../public/images/notificationImg.svg';
import Image from 'next/image';

export default function MuniFeatures() {
    const features = [
        {
            title: "Resident Relationship Management",
            description: "Muni includes a full CRM--or as we call it, RRM--for full context into resident relationship management.",
            content: (
                <Image src={relationshipImg} alt='Knowledge based chart' className='w-full h-full object-contain' />
            )
        },
        {
            title: "Service Requests",
            description: "Allow residents to easily submit and track service requests for quick resolution.",
            content: (
                <Image src={serviceRequestImage} alt='Knowledge based chart' className='w-full h-full object-contain' />
            )
        },
        {
            title: "Notifications",
            description: "Muni includes a full CRM--or as we call it, RRM--for full context into resident relationship management.",
            content: (
                <Image src={notificationImg} alt='Knowledge based chart' className='w-full h-full object-contain' />
            )
        },
        {
            title: "Curbside Collection",
            description: "Help your residents never miss a a garbage day again. All curbside collection information available all the time.",
            content: (
                <Image src={calenderImg} alt='Knowledge based chart' className='w-full h-full object-contain' />
            )
        },
        {
            title: "Tax Portal",
            description: "Allow residents to process payments for property taxes, utilities, program fees, parking violations and more.",
            content: (
                <Image src={balanceImg} alt='Knowledge based chart' className='w-full h-full object-contain' />
            )
        },
        {
            title: "Knowledge Base",
            description: "Train your AI with up to date municipal data to provide accurate, informative answers to resident questions.",
            content: (
                <Image src={knowledgeBaseImage} alt='Knowledge based chart' className='w-full h-full object-contain' />
            )
        }
    ];

    return (
        <div className="md:py-12">
            <div className="md:w-[80%] md:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#E9EAEB] md:rounded-[20px] overflow-hidden bg-white">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative p-11 flex flex-col h-full ${index < 3 ? 'border-b border-[#E9EAEB]' : ''} ${index % 3 !== 2 ? 'md:border-r border-[#E9EAEB]' : ''}`}
                            style={{
                                background: 'radial-gradient(92.49% 63.31% at 47.77% 94.26%, #EBEFE4 61.61%, #FFFFFF 75.76%)'
                            }}
                        >
                            <div className="text-center mb-6">
                                <h3 className="text-base font-semibold text-gray-900 mb-3.5 tracking-tight">
                                    {feature.title}
                                </h3>
                                <p className="text-xs font-medium text-gray-700 opacity-70 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>

                            <div className="relative bg-white/30 backdrop-blur-md rounded-xl p-6 border border-[#e9eaeb52] shadow-[0_14px_24px_rgb(0_0_0_0_/_0.04)] flex-1">
                                <div className="h-32 overflow-hidden">
                                    {feature.content}
                                </div>
                            </div>

                            {/* Bottom gradient fade */}
                            <div
                                className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(208.94% 100% at 50% 0%, rgba(255, 255, 255, 0) 30.41%, #FFFFFF 82.09%)'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}