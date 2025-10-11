import Image from "next/image";
import React from "react";
import card from "@/public/icons/suite-card.svg";
import phone from "@/public/icons/suite-phone.svg";
import laptop from "@/public/icons/suite-laptop.svg";

export const productSuiteData = [
    {
        icon: (
            <Image src={card} alt={"headphone"} className="w-5 h-5 " />
        ),
        title: "Admin Dashboard",
        description:
            "Experience comprehensive control and oversight with Muni’s Admin Dashboard. Effortlessly monitor service tickets, manage resident requests, and track key metrics.",
    },
    {
        icon: (
            <Image src={phone} alt={"headphone"} className="w-5 h-5 " />
        ),
        title: "Resident Mobile Application ",
        description:
            "Empower residents with municipal services from their smartphones. The Muni Resident Mobile Application lets users report issues, receive timely notifications, and stay informed about community updates. ",
    },
    {
        icon: (
            <Image src={laptop} alt={"headphone"} className="w-5 h-5 " />
        ),
        title: "Resident Web Application ",
        description:
            "Deliver seamless engagement for your community via the Muni Resident Web Application. Residents can access services, submit requests, and browse local resources right from their browser.",
    },
]


