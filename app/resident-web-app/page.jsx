import Navbar from '@/src/components/shared/Navbar';
import Footer from '@/src/components/shared/Footer';
import Image from 'next/image';
import Header from '@/src/components/admin/Header';
import ResidentSection from '@/src/components/admin/ResidentSection';
import IntegrationsSection from '@/src/components/admin/IntegrationsSection';
import FeatureToggleSection from '@/src/components/admin/FeatureToggleSection';
import ServiceTicketSection from '@/src/components/admin/ServiceTicketSection';
import AdminCarousel from '@/src/components/admin/AdminCarousel';
import reportQuick from "@/public/icons/report-quick.svg"
import makePayment from "@/public/icons/make-payment.svg"
import simpleImg from "@/public/icons/simple-img.svg"
import webReminders from "@/public/icons/remainders-web.svg"
import newsEvents from "@/public/icons/news-events.svg"
import TextSection from '@/src/constants/TextSection';
import WebAppBenefits from '@/src/components/admin/WebAppBenefits';
import { privacyIntegration } from '@/src/constants/integrations';

import smartConvo from "@/public/icons/smart-convo.svg"
import { securityFeatures } from '@/src/constants/features';

export default function ResidentWebApp() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <Header heading="Web App for Residents" para={<>Residents can connect effortlessly—access services, get updates, <br className='hidden md:flex' />
        and engage with their community all in one place.</>} />
      <WebAppBenefits />

      <ResidentSection
        category="Simple for Everyone"
        title="Find What You Need
                Hassle-Free"
        description="Navigating the web app is intuitive and accessible, making it easy for everyone—including seniors—to get the help they need in just a few steps."
        features={[
          "Straightforward menus guide you directly to common tasks",
          "Clean layout minimizes distractions, so it’s easier to focus and complete tasks quickly.",
          "Simple AI chat helps with questions, guidance, and city tasks in plain language.",
          "Friendly responses make digital tasks feel personal and stress-free."
        ]}
        imageSrc={simpleImg}
        imageAlt="simple for everyone" />

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
        heading={<>Powerful Features <br className='hidden md:block' />
          Simple Experience</>}
        description="Residents Enjoy instant access to a range of tools designed to make 
          city interactions seamless and stress-free."
        backgroundColor="#FFFFFF"
        accentColor="#006A4A"
      />

      <ServiceTicketSection
        tagline="Service Tickets"
        heading="Quickly Report Any 
          Issue Online"
        description="Whether it's a maintenance concern or a service request, residents can submit and track their needs directly through the web app. The streamlined workflow keeps everyone updated at every step, provides helpful notifications, and enables faster, more transparent resolutions—so nothing ever gets lost or overlooked."
        imagePosition="left"
        img={reportQuick}
        imgCutLeft
        backgroundColor={"#FFFFFF"} />

      <AdminCarousel />

      <ServiceTicketSection
        tagline="Payment"
        heading="Make City Payments 
        Online—Anytime, Anywhere"
        description="Take care of bills, fees, permits, parking, and property taxes quickly and safely through the web app. Choose your preferred payment method, set up reminders or auto-pay, and access your receipts or transaction history whenever you need—all with security and peace of mind built in."
        imagePosition="right"
        imgCutRight
        img={makePayment}
        backgroundColor={"#F9F9F9"} />

      <ServiceTicketSection
        tagline="Curbside Collection"
        heading="View Pickups, Reminders, 
and Schedules Right From 
Your Browser"
        description="Effortlessly keep track of garbage, recycling, and other curbside services through the web app. Personalized schedules, address-based reminders, and real-time notifications mean you never miss a collection day—even during holidays or unexpected changes. Residents can view local calendars, receive direct updates, and get the latest status from any device, wherever they are."
        imagePosition="left"
        img={webReminders}
        imgCut
        backgroundColor={"#FFFFFF"} />

      <ServiceTicketSection
        tagline="News & Events"
        heading={<>Source for Local News
          and Community Events</>}
        description="Muni’s integrated knowledge base management system acts as the intelligent foundation for the residential AI agent’s decision-making and response generation, by centralizing all essential municipal information into one dynamic, continuously updated repository."
        imagePosition="right"
        img={newsEvents}
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

      <div className='mb-10 md:mb-24 max-w-[1440px] md:mx-[100px] 2xl:mx-auto'>
        <TextSection buttonText1="Get In Touch" buttonText2="FAQ" boxTitle="Have Questions?" bg
          boxDesc="Curious about how Muni can fit your municipality’s unique needs? Reach out to our team for personalized answers or explore our comprehensive FAQ section to find quick solutions. "
        />
      </div>

      <Footer />
    </div>
  );
}

