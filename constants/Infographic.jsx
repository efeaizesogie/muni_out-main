import React from "react"
import Image from "next/image"
import archive from "@/public/icons/archive.svg";
import layerThree from "@/public/icons/layers-three-01.svg";
import shieldOff from "@/public/icons/shield-off.svg";
import ConsequenceCard from "@/utils/ConsequenceCard";

const challengeItems = [
    { icon: <Image src={layerThree} alt={"headphone"} className="w-5 h-5 "/>, label: "Backlog" },
    { icon: <Image src={layerThree} alt={"headphone"} className="w-5 h-5 "/>, label: "Overload" },
    { icon: <Image src={layerThree} alt={"headphone"} className="w-5 h-5 "/>, label: "Public Trust" },
]

const consequences = [
    {
        icon: (
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Image src={layerThree} alt={"headphone"} className="w-5 h-5 "/>
            </div>
        ),
        title: "Increasing Service Backlogs",
        description:
            "Without efficient automation and streamlined workflows, routine service requests accumulate, creating longer wait times that frustrate residents and lead to growing dissatisfaction with municipal services.",
    },
    {
        icon: (
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Image src={archive} alt={"headphone"} className="w-5 h-5 "/>
            </div>
        ),
        title: "Rising Administrative Overload",
        description:
            "Manual processes require repetitive data entry and excessive paperwork tasks, diverting precious human resources away from complex issues and strategic initiatives, weakening overall organizational effectiveness.",
    },
    {
        icon: (
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                <Image src={shieldOff} alt={"headphone"} className="w-5 h-5 "/>
            </div>
        ),
        title: "Decreasing Public Trust",
        description:
            "Lack of transparency, inconsistent communication, and delayed updates contribute to growing perception that municipal services are unresponsive or inefficient, eroding the trust between residents and their local government.",
    },
]



function ChallengeFlowItem({ icon, label }) {
    return (
        <div className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg bg-white">
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </div>
    )
}

export default function MunicipalitiesInfographic() {
    return (
        <div className="bg-[#FFFFFF] max-w-7xl mx-auto px-4 sm:px-6 lg:px-11 lg:py-16 border-[1px] border-[#E9EAEB] rounded-[20px] ">

            {/* Hero Section */}
            <div className="">
                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left Column - Challenges Flow */}
                    <div>
                        <h2 className="text-2xl md:text-[34px] md:leading-[44px] text-[#006A4A] font-semibold mb-4">
                            Three Critical
                            <br />
                            <span className="text-[#000000]">Challenges</span>
                        </h2>
                        <p className="text-sm text-[#000000] mb-8 font-medium leading-relaxed">
                            Municipalities face mounting pressures on key pain points (and workflows), threatening the very foundation
                            of public service and community well-being.
                        </p>

                        {/* Flow Diagram */}
                        <div className="flex flex-col items-center gap-4">
                            {/* Municipalities Button */}
                            <div className="relative">
                                <button className="px-6 py-2.5 bg-emerald-600 text-white rounded-full font-medium text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/20">
                                    <Image src={layerThree} alt={"headphone"} className="w-5 h-5 "/>
                                    Municipalities
                                </button>

                                {/* Connector Line */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-8 bg-gray-300">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-white" />
                                </div>
                            </div>

                            {/* Challenge Items */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-xl pt-8">
                                {challengeItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        {index === 1 && <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-gray-300" />}
                                        <ChallengeFlowItem {...item} />
                                    </div>
                                ))}
                            </div>

                            {/* Bottom Connector */}
                            <div className="w-px h-8 bg-gray-300 relative">
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-500 border-2 border-white" />
                            </div>

                            <div className="flex items-center gap-3 px-4 py-3 border border-gray-200 rounded-lg bg-white">
                                <Image src={archive} alt={"headphone"} className="w-5 h-5 "/>
                                <span className="text-sm font-medium">Resident</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Consequences */}
                    <div className="space-y-8">
                        {consequences.map((consequence, index) => (
                            <ConsequenceCard key={index} {...consequence} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
