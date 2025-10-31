"use client";

import Image from 'next/image';
import productSuiteImg from "@/public/images/productsuite.png";
import { productSuiteData } from '@/src/constants/productSuiteData';
import multiplayer from '@/public/icons/multiplayer.svg';
import productDash from "@/public/images/product-dash.webp";
import productDash1 from "@/public/images/product-dash-1.webp";
import productDash2 from "@/public/images/product-dash-2.webp";
import mobileSafari from "@/public/icons/mobile-safari.png";
import safari from "@/public/icons/safari-toobar.svg";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from 'react';
import TitleHead from '@/src/constants/TitleHead';

const SuiteCard = ({ icon, title, description, index, isExpanded, onClick }) => (
    <div className={`md:border-l-4 border md:border-0 md:rounded-none ${index === 0 ? "border-l-[#C4E76A] border-[#C4E76A]" : "border-[#66706D]"} cursor-pointer md:cursor-default`} onClick={onClick}>
        <div className="flex flex-col gap-[14px] p-6 px-6 md:px-11 text-white items-start text-start">
            <div className="flex gap-[10px] items-center">
                {icon}
                <h3 className="font-semibold text-lg text-balance">{title}</h3>
            </div>
            <p className={`text-sm font-medium text-[#ffffffa4] text-pretty md:block ${isExpanded ? 'block' : 'hidden'}`}>{description}</p>
        </div>
    </div>
);

const MobileSuiteCard = ({ icon, title, description, index, isExpanded, onClick }) => (
    <div className={`border border-[#66706D] ${index === 0 ? "rounded-t-[12px]" : index === productSuiteData.length - 1 ? "rounded-b-[12px]" : ""} cursor-pointer md:cursor-default`} onClick={onClick}>
        <div className="flex flex-col gap-[14px] p-6 px-6 md:px-11 text-white items-start text-start">
            <div className="flex gap-[10px] items-center">
                {icon}
                <h3 className="font-semibold text-lg text-balance">{title}</h3>
            </div>
            <p className={`text-sm font-medium text-[#ffffffa4] text-pretty md:block ${isExpanded ? 'block' : 'hidden'}`}>{description}</p>
        </div>
    </div>
);

const ProductSuite = () => {
    const [animationStarted, setAnimationStarted] = useState(false);
    const [imageStage, setImageStage] = useState(0); // 0 → first, 1 → second, 2 → third
    const [isMobile, setIsMobile] = useState(false);
    const [expandedCard, setExpandedCard] = useState(0);
    const sectionRef = useRef(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 760);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimationStarted(true);
                    setImageStage(0);

                    // Stage 1 change (after 2s)
                    const stage1 = setTimeout(() => setImageStage(1), 1900);
                    // Stage 2 change (after 4s)
                    const stage2 = setTimeout(() => setImageStage(2), 4000);


                    return () => {
                        clearTimeout(stage1);
                        clearTimeout(stage2);
                    };
                } else {
                    // Reset when out of view
                    setAnimationStarted(false);
                    setImageStage(0);
                }
            },
            { threshold: 0.3, rootMargin: '-50px' }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => sectionRef.current && observer.unobserve(sectionRef.current);
    }, []);

    const getImage = () => {
        switch (imageStage) {
            case 1: return productDash1;
            case 2: return productDash2;
            default: return productDash;
        }
    };

    return (
        <div ref={sectionRef} id="product" className="flex flex-col w-full h-full items-center relative overflow-hidden bg-[#14241F] pb-24">
            <Image
                src={productSuiteImg}
                alt="Muni Premium Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
            />

            <div className="mx-[20px] md:mx-auto md:w-[80%] pt-20 md:pt-32 lg:pt-48 relative z-10">
                <div className="text-center flex flex-col items-center relative">
                    <TitleHead title="Unified Access to Muni’s" titleBreak="Full Suite Experience" tag="Product Suite" textWhite />
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col w-full items-center mt-6">
                    <div className="w-full mb-8">
                        <div className="relative w-full overflow-hidden border border-white rounded-xl">
                            <Image
                                src={mobileSafari}
                                alt="Product Dashboard"
                                className="w-full h-auto  rounded-b-xl"
                            />
                            {/* <Image
                                src={safari}
                                alt="Safari Toolbar"
                                className="absolute top-0 left-0 w-full h-auto z-10 rounded-t-xl"
                            /> */}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col ">
                            {productSuiteData.map((item, index) => (
                                <MobileSuiteCard
                                    key={index}
                                    {...item}
                                    index={index}
                                    isExpanded={expandedCard === index}
                                    onClick={() => setExpandedCard(expandedCard === index ? -1 : index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:flex lg:flex-row flex-col w-full items-center justify-center relative mt-20">
                    {/* Left side */}
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            {productSuiteData.map((item, index) => (
                                <SuiteCard key={index} {...item} index={index} isExpanded={true} />
                            ))}
                        </div>
                    </div>

                    {/* Moving icon */}
                    <div className="absolute bottom-[300px] right-[-20px] md:-top-20 md:-right-20 z-20">
                        <div className={animationStarted ? "animate-move-to-image" : ""}>
                            <Image src={multiplayer} alt="multiplayer icon" />
                        </div>
                    </div>

                    {/* Right side (image animation) */}
                    <div className="w-full lg:w-1/2 flex justify-end relative">
                        <motion.div
                            key={animationStarted ? 'animated' : 'reset'}
                            className="relative w-full max-w-2xl overflow-hidden border-1 border-white rounded-xl"
                            initial={{ x: isMobile ? 150 : 300, opacity: 0 }}
                            animate={animationStarted ? { x: isMobile ? 100 : 250, opacity: 1 } : { x: isMobile ? 150 : 300, opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        >
                            <Image
                                src={getImage()}
                                alt="Product Dashboard"
                                className="w-full h-auto mt-[14px] md:mt-[20px] rounded-b-xl transition-all duration-300 ease-in-out"
                            />
                            <Image
                                src={safari}
                                alt="Safari Toolbar"
                                className="absolute top-0 left-0 w-full h-auto z-10 rounded-t-xl"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#C4E76A] to-[#006A4A]" />
        </div>
    );
};

export default ProductSuite;


