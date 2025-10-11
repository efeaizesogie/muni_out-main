import React from 'react';
import FaqItem from './FaqItem';

const GenericFaq = React.forwardRef(({ category, faqItems, id = "" }, ref) => {
  return (
    <div className="bg-white px-[20px] py-[35px] md:p-12 lg:first:pt-0" ref={ref} id={id}>
      <h2 className="text-[#1B312A] text-[28px] leading-[44px] md:text-[34px] md:leading-[44px] font-semibold mb-8">{category}</h2>

      {faqItems.map((item, index) => (
        <div key={index}>
          <FaqItem
            question={item.question}
            answer={item.answer}
          />
          {index < faqItems.length - 1 && (
            <hr className="border-[#EBEFE4] border-t border-[2px] my-[40px]" />
          )}
        </div>
      ))}
    </div>
  );
});

GenericFaq.displayName = 'GenericFaq';

export default GenericFaq;