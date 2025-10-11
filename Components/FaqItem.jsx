"use client"

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MAX_CHARS = 270;

const FaqItem = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongAnswer = answer.length > MAX_CHARS;

  return (
    <div className="flex flex-col gap-[20px] justify-start items-start">
      <h3 className="text-[#1B312A] text-[20px] leading-[30px] font-semibold">{question}</h3>
      <ReactMarkdown rehypePlugins={[rehypeRaw]} className="text-black text-[14px] leading-[24px]" components={{
        a: ({ node, ...props }) => <a target="_blank" {...props} className="text-[#1B312A] font-semibold underline" />,
        strong: ({ node, ...props }) => <strong {...props} className="font-semibold" />
      }}>
        {isExpanded || !isLongAnswer ? answer : `${answer.slice(0, MAX_CHARS)}${isLongAnswer ? '...' : ''}`}
      </ReactMarkdown>
      {isLongAnswer && (
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-[#1B312A] text-[14px] font-semibold border border-[#1B312A] rounded-full px-5 py-2"
      >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
};

export default FaqItem;



