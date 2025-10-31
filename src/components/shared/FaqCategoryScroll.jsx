"use client"
import { useEffect, useState } from "react";

const categories = ['Functionality', 'Technology', 'Security', 'Pricing', 'Process'];

const FaqCategoryScroll = ({ fixOnTop = false, onCategorySelect, activeCategory = categories[0], className }) => {
  const [activeCategoryLocal, setActiveCategoryLocal] = useState(activeCategory);

  const handleCategoryClick = (category) => {
    // setActiveCategoryLocal(category);
    onCategorySelect(category);
  };

  useEffect(() => {
    setActiveCategoryLocal(activeCategory);
  }, [activeCategory]);

  return (
    <div className={`${className} transition-all duration-300 lg:flex lg:flex-col lg:items-start lg:p-0 overflow-x-auto whitespace-nowrap py-[23px] pb-[30px] px-[20px] bg-white z-20 ${fixOnTop ? "" : "lg:w-fit w-screen fixed top-0 pt-[120px] shadow-lg lg:shadow-none lg:sticky lg:top-[120px]"}`} style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <span className="mb-[40px] px-4 hidden lg:flex font-semibold text-[14px] leading-[28px] text-[#1B312A] lg:p-0"></span>
      <div className="lg:flex lg:flex-col inline-flex lg:inline-flex-none lg:justify-start lg:items-start gap-[40px]">
        {categories.map((category) => (
          <button
            key={category}
            className={`inline-block lg:block mr-2 lg:mr-0 lg:p-0 rounded-full text-[20px] leading-[30px] lg:text-[24px] lg:leading-[30px] font-semibold transition-colors duration-300 ${activeCategoryLocal === category
              ? 'text-[#1B312A]'
              : 'text-[#87938F]'
              }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FaqCategoryScroll;

