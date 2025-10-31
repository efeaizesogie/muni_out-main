import React from "react";

export default function ConsequenceCard({ icon, title, description, index }) {
    return (
        <div
            className={`flex flex-col gap-[14px] p-4 sm:p-6 lg:p-11  items-start ${
                index === 1 ? "border-t border-b border-[#E9EAEB]" : ""
            }`}
        >
            {icon}
            <h3 className="font-semibold text-lg text-[#000000] text-balance">{title}</h3>
            <p className="text-sm font-medium text-[#1B312A] leading-relaxed text-pretty">{description}</p>
        </div>
    );
}   

