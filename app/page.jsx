import Problem from "@/src/components/home/Problem";

{/*
import Banner from "@/src/components/shared/Banner"*/}
import Features from "@/src/components/home/Features"
import FeaturesCarousel from "@/src/components/home/FeaturesCarousel"
import Footer from "@/src/components/shared/Footer"
import LandingPage from "@/src/components/home/LandingPage"
import Navbar from "@/src/components/shared/Navbar"
import Consequences from "@/src/components/home/Consequences";
import React from "react";
import Solution from "@/src/components/home/Solution";
import ProductSuite from "@/src/components/home/ProductSuite";
import Resources from "@/src/components/home/Resources";
import MuniBentoGrid from "@/src/constants/MuniBentoGrid";
import FAQSection from "@/src/components/home/Questions";
import TestimonialSection from "@/src/components/home/TestimonialSection";

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
      <div className="w-full h-[14px] bg-white" />
      <Solution />

      <ProductSuite />
      <Features />
      <TestimonialSection />
      <MuniBentoGrid />
      <div className="w-full h-[14px] bg-white" />
      <FAQSection />
      <div className="w-full h-[14px] bg-white" />
      <Resources />
      <Footer />
    </div>

  )
}

export default page


