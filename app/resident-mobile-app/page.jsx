import Navbar from '@/src/components/shared/Navbar';
import Footer from '@/src/components/shared/Footer';
import Header from '@/src/components/admin/Header';
import ResidentSection from '@/src/components/admin/ResidentSection';
import MobileAppBenefits from '@/src/components/admin/MobileAppBenefits';
import IntegrationsSection from '@/src/components/admin/IntegrationsSection';
import FeatureToggleSection from '@/src/components/admin/FeatureToggleSection';
import ServiceTicketSection from '@/src/components/admin/ServiceTicketSection';
import AdminCarousel from '@/src/components/admin/AdminCarousel';
import TextSection from '@/src/constants/TextSection';
import resNotif from "@/public/icons/res-notification.svg"
import issueRep from "@/public/icons/issue-reporting.svg"
import propPayment from "@/public/icons/prop-payment.svg"
import realTime from "@/public/icons/real-time-alert.svg"
import smartConvo from "@/public/icons/smart-convo.svg"
import stayInform from "@/public/icons/stay-inform.svg"
import { privacyIntegration } from '@/src/constants/integrations';
import { securityFeatures } from '@/src/constants/features';


export default function ResidentMobileApp() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <Navbar />
      <Header heading="Mobile App for Residents" para={<>Residents can stay connected to their city—report issues, track updates, and access local <br className='hidden md:flex' /> services anytime, anywhere, right from their phone.</>} />
      <MobileAppBenefits />

      <ResidentSection
        category="Resident Notifications"
        title="Keep Residents 
Informed, Safe, 
and Engaged"
        description="Instant and targeted alerts ensure residents receive critical updates about their community whenever it matters most."
        features={[
          "Timely communication about road closures, emergencies, and public safety",
          "Personalized alerts based on resident location",
          "Enhances resident safety by delivering emergency notifications",
          "Supports community engagement by keeping residents connected"
        ]}
        imageSrc={resNotif}
        imageAlt="Resident Notification" />

      <IntegrationsSection
        tagline="Security & Privacy"
        heading="Safeguarding
Residents Every
Step of The Way"
        description="Residents personal data, payments, and conversations are always secure with Muni’s rigorous mobile app safeguards."
        buttonText="Talk to Our Integration Team"
        buttonLink="#"
        integrations={privacyIntegration} />

      <FeatureToggleSection

        tagline="Feature Showcase"
        heading={<>Explore What Makes <br />
          the Mobile App Essential</>}
        description="See the tools that bring your community closer, faster, and more connected."
        backgroundColor="#FFFFFF"
        accentColor="#006A4A"
      />

      <ServiceTicketSection
        tagline="Service Tickets"
        heading="Convenient Issue Reporting
and Quick Updates"
        description="Muni’s mobile app makes it easier than ever for residents to report issues and track service requests in real time—right from their phones. This instant accessibility boosts resident engagement and speeds up city responses by streamlining communication and eliminating delays common with traditional reporting methods. The result is faster resolutions and a more connected community."
        imagePosition="left"
        img={issueRep}
        backgroundColor={"#FFFFFF"} />

      <AdminCarousel />

      <ServiceTicketSection
        tagline="Payment"
        heading="Simple, Secure, and
Convenient Transactions"
        description="Paying for city services has never been easier. Through Muni’s mobile app, residents can quickly handle payments for parking tickets, property taxes, permits, or other municipal services—all in one secure place. With built-in payment options like credit and debit, transactions are fast, transparent, and accessible anytime, anywhere."
        imagePosition="right"
        img={propPayment}
        backgroundColor={"#F9F9F9"} />

      <ServiceTicketSection
        tagline="Curbside Collection"
        heading="Never Miss a Pickup with
Real-Time Schedule Alerts"
        description="Muni’s mobile app keeps residents on top of their curbside collection with personalized schedules, reminders, and service alerts delivered straight to their phones. Whether it’s garbage, recycling, or compost, the app provides up-to-date information to help residents manage waste effectively and stay informed about any changes or special pickups."
        imagePosition="left"
        img={realTime}
        backgroundColor={"#FFFFFF"} />

      <ServiceTicketSection
        tagline="Knowledge Base Management"
        heading={<>Centralized Hub <br />
          for AI-Driven
          Municipal Insights</>}
        description="Muni’s integrated knowledge base management system acts as the intelligent foundation for the residential AI agent’s decision-making and response generation, by centralizing all essential municipal information into one dynamic, continuously updated repository."
        imagePosition="right"
        img={stayInform}
        imgCutRight
        backgroundColor={"#F9F9F9"} />

      <ServiceTicketSection
        heading={<>Smarter Conversations,
          Faster Answers</>}
        description="Muni’s AI-powered conversational interface turns the mobile app into a smart, always-available city assistant—helping residents get information, report concerns, and complete tasks with natural, human-like interactions. "
        imagePosition="left"
        img={smartConvo}
        backgroundColor={"#FFF"}
        features={securityFeatures}
        hasStar
        imgWidth={"w-[300px]"} imgHeight={"h-[270px]"}
        hasFeatures />

      <div className='mb-10 md:mb-24 '>
        <TextSection buttonText1="Get In Touch" buttonText2="FAQ" boxTitle="Have Questions?"
          boxDesc="Curious about how Muni can fit your municipality’s unique needs? Reach out to our team for personalized answers or explore our comprehensive FAQ section to find quick solutions. "
        />
      </div>

      <Footer />
    </div>
  );
}

