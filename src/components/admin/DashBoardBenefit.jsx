import React from 'react';
import DashboardBenefit from '../shared/DashboardBenefit';
import { adminBenefits } from '@/src/constants/benefits';
import town from "@/public/icons/town-of-paradize.svg";

const AdminDashboardBenefit = () => {
    return (
        <DashboardBenefit
            tag="Centralized Operations"
            heading="Everything On One Smart Dashboard"
            description="Centralizing all municipal operations within one dashboard eliminates the need to juggle multiple applications, scattered data, and disconnected systems. With Muni's unified interface, administrators gain a complete overview of every task, request, and notification in real time."
            testimonialText="Muni empowers our municipality through a single, user-friendly platform that accelerates decision-making, optimizes workflows, and ensures transparent service delivery."
            testimonialAuthor="Jessica Smith"
            testimonialRole="Head of Operations"
            testimonialCompany="Town of Paradise"
            dashboardImage="/icons/admin-benefit-img.svg"
            benefits={adminBenefits}
            testimonialImg={town}
            benefitsFor="Admins"
        />
    );
};

export default AdminDashboardBenefit;