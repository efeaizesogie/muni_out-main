"use client"

import { functionalityFaqItems, pricingFaqItems, processFaqItems, securityFaqItems, technologyFaqItems } from "@/src/constants/faq";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import FaqCategoryScroll from "@/src/components/shared/FaqCategoryScroll";
import GenericFaq from "@/src/components/shared/GenericFaq";
import Navbar from "@/src/components/shared/Navbar";
import Footerbar from "@/src/components/shared/Footerbar";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("Functionality");
  const { mobile } = useMediaQuery(1024);
  const { ref, inView } = useInView({
    threshold: 0,
    initialInView: true,
  });

  const functionalityRef = useRef(null);
  const technologyRef = useRef(null);
  const securityRef = useRef(null);
  const pricingRef = useRef(null);
  const processRef = useRef(null);

  const handleCategorySelect = (category) => {
    const refs = {
      Functionality: functionalityRef,
      Technology: technologyRef,
      Security: securityRef,
      Pricing: pricingRef,
      Process: processRef,
    };

    const selectedRef = refs[category];

    if (selectedRef && selectedRef.current) {
      let offset = mobile ? 170 : 110;
      if (mobile && inView) {
        offset = 250;
      }
      const elementPosition = selectedRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    const categories = ["Functionality", "Technology", "Security", "Pricing", "Process"];
    const refs = [functionalityRef, technologyRef, securityRef, pricingRef, processRef];

    for (let i = refs.length - 1; i >= 0; i--) {
      const ref = refs[i];
      if (ref.current) {
        const elementTop = ref.current.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition >= elementTop) {
          setActiveCategory(categories[i]);
          break;
        }
      }
    }
  }, [functionalityRef, technologyRef, securityRef, pricingRef, processRef]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll]);

  return (
    <div className="text-black h-screen bg-white">
      <Navbar showLinks={false} />
      <div className="bg-[#EBEFE4] h-[308px] lg:h-[324px] flex justify-center" ref={ref}>
        <h1 className="w-[80%] pt-[148px] lg:pt-[166px] text-center lg:text-left text-[34px] leading-[44px] md:text-[54px] md:leading-[64px] font-semibold text-[#1B312A]">Frequently Asked Questions</h1>
      </div>
      <div className="lg:relative flex flex-col lg:flex-row lg:justify-start bg-white lg:max-w-[80%] lg:mx-auto lg:pt-[79px]">
        <div className="lg:sticky lg:top-[120px] lg:h-full">
          <FaqCategoryScroll activeCategory={activeCategory} fixOnTop={inView} onCategorySelect={handleCategorySelect} className="lg:pr-[97px]" />
        </div>
        <hr className="border-[#E6E6E6] border-t border-[0.5px] block lg:hidden" />
        <div className="flex flex-col w-full border-l-[1px] lg:pl-[28px] border-[#E6E6E6] pb-[150px]">
          <GenericFaq category="Functionality" faqItems={functionalityFaqItems} ref={functionalityRef} id="functionality" />
          <GenericFaq category="Technology" faqItems={technologyFaqItems} ref={technologyRef} id="technology" />
          <GenericFaq category="Security" faqItems={securityFaqItems} ref={securityRef} id="security" />
          <GenericFaq category="Pricing" faqItems={pricingFaqItems} ref={pricingRef} id="pricing" />
          <GenericFaq category="Process" faqItems={processFaqItems} ref={processRef} id="process" />
        </div>
      </div>
      <Footerbar height="h-fit" />
    </div>
  )
}

