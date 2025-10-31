import React from 'react'
import DashboardBenefit from '../shared/DashboardBenefit'
import { citizenBenefits } from '@/src/constants/benefits'
import testimonialImg from "@/public/icons/michelle-img.svg"

const MobileAppBenefits = () => {
    return (
        <DashboardBenefit
            tag="Centralized Operations"
            heading="Everything On One Smart Dashboard"
            description="The Muni mobile app puts city services right at your fingertips—no matter where you are. Instantly report issues, request services, check real-time updates, and receive important city notifications from the convenience of your phone. With a friendly interface and secure access, residents can easily engage with their community, get answers fast, and keep track of everything that matters."
            testimonialText="With the Muni app, I can report issues, get updates, and stay connected to my city—all in just a few taps. It makes community involvement simple."
            testimonialAuthor="Michelle Burns"
            testimonialRole="Town of Paradise Residents"
            testimonialCompany="Town of Paradise"
            dashboardImage="/icons/resident-app-img.png"
            benefits={citizenBenefits}
            testimonialImg={testimonialImg}
            BenefitFor="Residents"
        />
    )
}

export default MobileAppBenefits