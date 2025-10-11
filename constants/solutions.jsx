import Image from "next/image";
import React from "react";
import call from "@/public/icons/phone-call-01.svg";
import message from "@/public/icons/message.svg";
import face from "@/public/icons/face-smile.svg";

export const solution = [
    {
        icon: (
            <Image src={call} alt={"headphone"} className="w-5 h-5 " />
        ),
        title: "Reduced Call Volume",
        description:
            "Municipalities experience a noticeable reduction in inbound calls thanks to the AI agent's instant, 24/7 answering capabilities, allowing residents to resolve common questions and submit requests on their own schedules without waiting on hold. ",
    },
    {
        icon: (
            <Image src={message} alt={"headphone"} className="w-5 h-5 " />
        ),
        title: "Improved Response Times",
        description:
            "Service requests are processed and triaged instantly or much more quickly than traditional methods, thanks to our automated workflows that ensure each inquiry reaches the appropriate municipal department. ",
    },
    {
        icon: (
            <Image src={face} alt={"headphone"} className="w-5 h-5 " />
        ),
        title: "Increased Resident Satisfaction",
        description:
            "Enhanced access to information and self-service options boost resident engagement and satisfaction by providing convenient, anytime access to municipal services and real-time updates from their devices.",
    },
]


