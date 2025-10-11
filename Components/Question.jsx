'use client'
import { useState } from "react";

const Question = ({title, desc1, desc2}) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className='flex flex-col items-start w-full text-start gap-8 py-[20px]'>
      <hr className='border-[2px] border-[#EBEFE4] w-full'/>
      <p className='font-semibold text-[#1B312A] text-[20px] pt-[25px]'>{title}</p>
      <p className='font-medium text-[14px]'>{desc1}</p>
      { isClicked && <p className='font-medium text-[14px]'>{desc2}</p>}
      <button onClick={toggleClick} className='text-[#1B312A] rounded-full border-black border-[1px] text-[14px] py-[10px] px-[20px] font-semibold cursor-pointer'>{isClicked ? <p>Read Less</p> : <p>Read More</p> }</button>
    </div>
  )
}

export default Question
