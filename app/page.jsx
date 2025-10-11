import Problem from "@/Components/Problem";

{/*
import Banner from "@/Components/Banner"*/}
import Features from "@/Components/Features"
import FeaturesCarousel from "@/Components/FeaturesCarousel"
import Footer from "@/Components/Footer"
import Footerbar from "@/Components/Footerbar"
import Introduction from "@/Components/Introduction"
import LandingPage from "@/Components/LandingPage"
import Navbar from "@/Components/Navbar"
import OnBoarding from "@/Components/OnBoarding"
import Questions from "@/Components/Questions"
import Consequences from "@/Components/Consequences";
import MunicipalitiesInfographic from "@/constants/Infographic";
import React from "react";
import Solution from "@/Components/Solution";
import ProductSuite from "@/Components/ProductSuite";
import Resources from "@/Components/Resources";
import MuniBentoGrid from "@/constants/MuniBentoGrid";
import FAQSection from "@/Components/Questions";
import TestimonialSection from "@/Components/TestimonialSection";

export const metadata = {
  title: "Muni: The Ultimate Municipal Customer Service Experience",
  description: "Muni is an AI-powered web and mobile application providing non-emergency municipal services to residents.",
  openGraph: {
    url: "https://getmuni.co",
    type: "website",
    title: "Muni: The Ultimate Municipal Customer Service Experience",
    description: "Muni is an AI-powered web and mobile application providing non-emergency municipal services to residents.",
    images: [{ url: "/muni-og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    domain: "getmuni.co",
    url: "https://getmuni.co",
    title: "Muni: The Ultimate Municipal Customer Service Experience",
    description: "Muni is an AI-powered web and mobile application providing non-emergency municipal services to residents.",
    images: [{ url: "/muni-og.png" }],
  },
};

const page = () => {
  return (
    <div className="text-black bg-[#f3f4f5]">
      {/* 
      <Banner />
      */}
      <Navbar />
      <LandingPage />
      <FeaturesCarousel />
      <Problem />
      <Consequences />
      <Solution />
      <ProductSuite />
      <Features />
      <TestimonialSection />
      <MuniBentoGrid />
      <FAQSection />
      <Resources />
      <Footer />
    </div>

  )
}

export default page
