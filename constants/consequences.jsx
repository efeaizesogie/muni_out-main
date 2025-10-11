import Image from "next/image";
import React from "react";
import archive from "@/public/icons/archive.svg";
import layerThree from "@/public/icons/layers-three-01.svg";
import shieldOff from "@/public/icons/shield-off.svg";

export const consequences = [
    {
        icon: (
            <Image src={layerThree} alt={"headphone"} className="w-5 h-5 "/>
        ),
        title: "Increasing Service Backlogs",
        description:
            "Without efficient automation and streamlined workflows, routine service requests accumulate, creating longer wait times that frustrate residents and lead to growing dissatisfaction with municipal services.",
    },
    {
        icon: (
            <Image src={archive} alt={"headphone"} className="w-5 h-5 "/>
        ),
        title: "Rising Administrative Overload",
        description:
            "Manual processes require repetitive data entry and excessive paperwork tasks, diverting precious human resources away from complex issues and strategic initiatives, weakening overall organizational effectiveness.",
    },
    {
        icon: (
           <Image src={shieldOff} alt={"headphone"} className="w-5 h-5 "/>
        ),
        title: "Decreasing Public Trust",
        description:
            "Lack of transparency, inconsistent communication, and delayed updates contribute to growing perception that municipal services are unresponsive or inefficient, eroding the trust between residents and their local government.",
    },
]


