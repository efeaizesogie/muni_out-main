import serviceRequestImage from '../public/images/service-request.png';
import knowledgeBaseImage from '../public/images/knowledgeBase.png';
import calenderImg from '../public/images/calender.png';
import balanceImg from '../public/images/balance.png';
import relationshipImg from '../public/images/relationshipImg.png';
import notificationImg from '../public/images/notificationImg.png';
import Image from 'next/image';

export default function MuniFeatures() {
    const features = [
        {
            title: "Resident Relationship Management",
            description: "Muni includes a full CRM--or as we call it, RRM--for full context into resident relationship management.",
            content: (
                <div className="space-y-3">
                    <Image src={relationshipImg} alt='Knowledge based chart' className='' />
                </div>
            )
        },
        {
            title: "Service Requests",
            description: "Allow residents to easily submit and track service requests for quick resolution.",
            content: (
                <div className="space-y-3">
                    <Image src={serviceRequestImage} alt='Knowledge based chart' className='' />
                </div>
            )
        },
        {
            title: "Notifications",
            description: "Muni includes a full CRM--or as we call it, RRM--for full context into resident relationship management.",
            content: (
                <div className="space-y-3">
                    <Image src={notificationImg} alt='Knowledge based chart' className='' />
                </div>
            )
        },
        {
            title: "Curbside Collection",
            description: "Help your residents never miss a a garbage day again. All curbside collection information available all the time.",
            content: (
                <div className="">
                    <Image src={calenderImg} alt='Knowledge based chart' className='' />
                </div>
            )
        },
        {
            title: "Tax Portal",
            description: "Allow residents to process payments for property taxes, utilities, program fees, parking violations and more.",
            content: (
                <div className="">
                    <Image src={balanceImg} alt='Knowledge based chart' className='' />
                </div>
            )
        },
        {
            title: "Knowledge Base",
            description: "Train your AI with up to date municipal data to provide accurate, informative answers to resident questions.",
            content: (
                <div className="overflow-hidden">
                    <Image src={knowledgeBaseImage} alt='Knowledge based chart' className='' />
                </div>
            )
        }
    ];

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 border border-[#E9EAEB] rounded-[20px] overflow-hidden bg-white">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`relative p-11 ${index < 3 ? 'border-b border-[#E9EAEB]' : ''} ${index % 3 !== 2 ? 'md:border-r border-[#E9EAEB]' : ''}`}
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

                            <div className="relative bg-white/30 backdrop-blur-md border border-[#E9EAEB] rounded-xl p-6 shadow-sm">
                                {feature.content}
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