import Navbar from '@/src/components/shared/Navbar';
import Footer from '@/src/components/shared/Footer';
import Image from 'next/image';

import AdminDashboardBenefit from '@/src/components/admin/DashBoardBenefit';
import TextSection from '@/src/constants/TextSection';
import Header from '@/src/components/admin/Header';
import ResidentSection from '@/src/components/admin/ResidentSection';
import IntegrationsSection from '@/src/components/admin/IntegrationsSection';
import { adminIntegrations } from '@/src/constants/integrations';
import residentIntegrationImg from '@/public/icons/admin-resident.svg';
import FeatureToggleSection from '@/src/components/admin/FeatureToggleSection';
import FeaturesCarousel from '@/src/components/home/FeaturesCarousel';
import AdminCarousel from '@/src/components/admin/AdminCarousel';
import ServiceTicketSection from '@/src/components/admin/ServiceTicketSection';
import resolveRes from "@/public/icons/resolve-resistant.svg"
import streamline from "@/public/icons/streamline.svg"
import curbside from "@/public/icons/curbside.svg"
import centralized from "@/public/icons/centralized.svg"
import moreFeatures from "@/public/icons/more-features.svg"
import { admninFeatures } from '@/src/constants/features';



export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Header heading="Admin Dashboard" para={<>Streamline workflows, monitor progress, and make data-driven <br className='hidden md:flex' /> decisions—all from one intuitive Muni dashboard.</>} />
      <AdminDashboardBenefit />

      <ResidentSection
        category="Resident Relationship"
        title="Build Trust Deliver Exceptional Service"
        description="Strengthen your city's connection with residents through Muni's modern resident relationship management system."
        features={[
          "Complete view of individual histories and needs",
          "Robust analytics provide insights about residents",
          "Improves communication speed and quality",
          "Supports personalized, proactive engagement"
        ]}
        imageSrc={residentIntegrationImg}
        imageAlt="Resident Management Dashboard"
        badgeText="Admin"
        badgeColor="bg-[#ABEFC6]"
        badgeTextColor="text-[#1B312A]" />

      <IntegrationsSection
        tagline="Integration Highlights"
        heading="Integrations That Power a Connected Municipality"
        description="Muni works with most existing systems to centralize data and simplify daily operations."
        buttonText="Talk to Our Integration Team"
        buttonLink="#"
        integrations={adminIntegrations} />

      <FeatureToggleSection

        tagline="Feature Showcase"
        heading={<>Flexible Feature Selection <br /> for Customized Solutions</>}
        description="Instantly enable the features you need—just toggle and go."
        backgroundColor="#FFFFFF"
        toggleColor="#47816F"
        accentColor="#006A4A"
      />

      <ServiceTicketSection
        tagline="Service Ticket Management"
        heading="Resolve Resident Requests Faster"
        description="With Muni's service ticket system, your team spends less time chasing down issues and more time delivering results. Quickly prioritize and assign tickets, monitor real-time progress, and ensure nothing slips through the cracks. The result? Faster response times that boost resident satisfaction and trust in local government. Transparent, organized workflows mean your staff can collaborate efficiently, solve problems swiftly, and demonstrate accountability at every step."
        imagePosition="left"
        img={resolveRes}
        backgroundColor={"#FFFFFF"}
        imgWidth={"md:w-[500px]"} imgHeight={"md:h-[350px]"} />


      <AdminCarousel />

      <ServiceTicketSection
        tagline="Workflow Automation Management"
        heading="Streamline Requests
          Accelerate Resolutions"
        description="Muni’s workflow automation transforms how service tickets move through your municipality—from submission to resolution. Automated routing ensures each ticket lands with the right team based on issue type, priority, or location, eliminating delays caused by manual assignment. Built-in triggers send reminders and escalate unresolved tickets to keep workflows on track and prevent backlog. Notifications keep staff and residents informed every step of the way, boosting transparency and satisfaction."
        imagePosition="right"
        img={streamline}
        backgroundColor={"#F9F9F9"}
        imgWidth={"md:w-[500px]"} imgHeight={"md:h-[350px]"} />

      <ServiceTicketSection
        tagline="Curbside Collection Management"
        heading="Effortless Curbside
          Collection Scheduling"
        description="Easily set, modify, and optimize schedules to match neighborhood needs, minimizing missed pickups and maximizing route efficiency. With automated reminders and real-time adjustments, your team can respond quickly to changes, improve service consistency, and boost resident satisfaction. Better coordination leads to cleaner streets, happier communities, and smarter city management."
        imagePosition="left"
        img={curbside}
        imgCut
        backgroundColor={"#FFFFFF"} />

      <ServiceTicketSection
        tagline="Knowledge Base Management"
        heading={<>Centralized Hub <br />
          for AI-Driven
          Municipal Insights</>}
        description="Muni’s integrated knowledge base management system acts as the intelligent foundation for the residential AI agent’s decision-making and response generation, by centralizing all essential municipal information into one dynamic, continuously updated repository."
        imagePosition="right"
        img={centralized}
        backgroundColor={"#F9F9F9"} />

      <ServiceTicketSection
        heading={<>With Many More
          Features Available</>}
        description="We’re just getting started—there are many more features available and in the works to make your admin experience even better. "
        imagePosition="left"
        img={moreFeatures}
        backgroundColor={"#FFF"}
        imgBottom
        features={admninFeatures}
        hasFeatures />

      <div className='mb-10 md:mb-24 '>
        <TextSection buttonText1="Get In Touch" buttonText2="FAQ" boxTitle="Have Questions?" bg
          boxDesc="Curious about how Muni can fit your municipality’s unique needs? Reach out to our team for personalized answers or explore our comprehensive FAQ section to find quick solutions. "
        />
      </div>

      <Footer />
    </div>
  );
}