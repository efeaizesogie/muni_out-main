import React from 'react'
import DashboardBenefit from '../shared/DashboardBenefit'
import { accessibilityBenefits } from '@/src/constants/benefits'
import testimonialImg from "@/public/icons/michelle-img.svg"

const WebAppBenefits = () => {
    return (
        <DashboardBenefit
            tag="Resident Web Access"
            heading="All Your City Services 
Just One Click Away"
            description="Access everything your city offers without any hassle—from paying bills and booking services to checking updates and managing requests, the web app makes staying connected simple and efficient. With a clean interface and instant access from any device, residents can handle their city needs at their convenience, wherever they are."
            testimonialText="I love being able to take care of city tasks online, whether I’m at home or on the go. The web app is easy to use and keeps me informed, without having to pick up the phone or visit city hall."
            testimonialRole="Town of Paradise Residents"
            testimonialCompany="Michelle Burns"
            dashboardImage="/icons/resident-web-img.svg"
            benefits={accessibilityBenefits}
            testimonialImg={testimonialImg}
            benefitsFor="Residents"
        />
    )
}

export default WebAppBenefits