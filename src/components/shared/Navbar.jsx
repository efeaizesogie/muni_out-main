"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import logo from "@/public/icons/Logo.svg";

const Navbar = ({ showLinks = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleNavBar = () => {
    setIsOpen(!isOpen)
  }

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`z-50 fixed w-full bg-black ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'} ${isOpen ? 'h-full' : 'h-0'}`}>
      <div className={`w-full bg-white ${isOpen ? 'bg-opacity-100' : 'bg-opacity-0'}`}>
        <nav className="fixed flex justify-center items-center w-full md:py-[20px] ">
          <div className='flex justify-between items-center md:w-[80%] w-full h-[60px] bg-white md:rounded-[12px] pr-[10px] pl-[20px] border-b border-[E9EAEB] backdrop-blur-md'>
            <div className="flex items-center gap-4">
              {showLinks && (
                <button onClick={toggleNavBar}
                  className="flex flex-col justify-center items-center md:hidden">
                  <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${isOpen ?
                      'rotate-45 translate-y-1' : '-translate-y-0.5'
                    }`} >
                  </span>
                  <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm my-0.5 ${isOpen ?
                      'opacity-0' : 'opacity-100'
                    }`} >
                  </span>
                  <span className={`bg-black block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${isOpen ?
                      '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                    }`} >
                  </span>

                </button>
              )}
              <a href="/"><Image src={logo} width="100" height="25" /></a>
            </div>
            {showLinks && (
              <ul className="md:flex hidden md:items-center gap-6 text-[#131416] text-[14px] font-medium px-[20px]">
                <a href="#introduction" className="hover:text-[#C4E76A] transition duration-400"><li>How It Works</li></a>
                <li className="relative" ref={dropdownRef}>
                  <button 
                    onClick={toggleProductDropdown}
                    className="hover:text-[#006A4A] transition duration-300 flex items-center gap-1 font-medium"
                  >
                    Product
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isProductDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isProductDropdownOpen && (
                    <div className="absolute top-full left-0 mt-3 w-72 bg-white rounded-xl shadow-[0px_20px_40px_rgba(0,0,0,0.1)] border border-[#E9EAEB] py-3 z-50 backdrop-blur-sm">
                      <div className="px-4 py-2 border-b border-[#E9EAEB] mb-2">
                        <span className="text-xs font-semibold text-[#006A4A] uppercase tracking-wide">Our Products</span>
                      </div>
                      <a href="/admin-dashboard" className="block px-4 py-3 text-sm text-[#131416] hover:bg-[#F9F9F9] transition duration-200 group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#EBEFE4] rounded-lg flex items-center justify-center group-hover:bg-[#C4E76A] transition duration-200">
                            <Image src="/icons/Admin.svg" width={20} height={20} alt="Admin" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#131416] group-hover:text-[#006A4A] transition duration-200">Admin Dashboard</div>
                            <div className="text-xs text-[#6B7280] mt-0.5">Streamline municipal operations</div>
                          </div>
                        </div>
                      </a>
                      <a href="/resident-mobile-app" className="block px-4 py-3 text-sm text-[#131416] hover:bg-[#F9F9F9] transition duration-200 group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#EBEFE4] rounded-lg flex items-center justify-center group-hover:bg-[#C4E76A] transition duration-200">
                            <Image src="/icons/suite-phone.svg" width={20} height={20} alt="Mobile" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#131416] group-hover:text-[#006A4A] transition duration-200">Mobile App</div>
                            <div className="text-xs text-[#6B7280] mt-0.5">Native mobile experience for residents</div>
                          </div>
                        </div>
                      </a>
                      <a href="/resident-web-app" className="block px-4 py-3 text-sm text-[#131416] hover:bg-[#F9F9F9] transition duration-200 group">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#EBEFE4] rounded-lg flex items-center justify-center group-hover:bg-[#C4E76A] transition duration-200">
                            <Image src="/icons/suite-laptop.svg" width={20} height={20} alt="Web App" />
                          </div>
                          <div>
                            <div className="font-semibold text-[#131416] group-hover:text-[#006A4A] transition duration-200">Web Application</div>
                            <div className="text-xs text-[#6B7280] mt-0.5">Complete web platform solution</div>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </li>
                <a href="#about" className="hover:text-[#C4E76A] transition duration-400"><li>About</li></a>
                <a href="#faq" className="hover:text-[#C4E76A] transition duration-400"><li>FAQ</li></a>
                <a href="#resources" className="hover:text-[#C4E76A] transition duration-400"><li>Resources</li></a>
              </ul>
            )}
            <a href="https://calendar.app.google/8KeUpeZEfLJQoKFT6" target="_blank"><button className="rounded-lg align-content-end text-[14px] text-[#414651] hover:text-[white] border-[#D5D7DA] border-[1px] p-[10px] bg-white hover:bg-[#2F443D] transition duration-500 font-semibold truncate shadow-sm">Request a demo</button></a>
          </div>
        </nav>
        {showLinks && (
          <div className={`${isOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col text-[#1B312A] justify-center items-center gap-[34px] text-2xl font-semibold pt-[101px] pb-[41px]">
              <a onClick={toggleNavBar} href="#introduction"><li>How It Works</li></a>
              <div className="flex flex-col items-center gap-6">
                <span className="text-2xl font-semibold text-[#006A4A]">Product</span>
                <div className="flex flex-col gap-4 text-lg">
                  <a onClick={toggleNavBar} href="/admin-dashboard" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F9F9F9] transition duration-200">
                    <div className="w-8 h-8 bg-[#EBEFE4] rounded-lg flex items-center justify-center">
                      <Image src="/icons/Admin.svg" width={20} height={20} alt="Admin" />
                    </div>
                    <div>
                      <div className="font-semibold">Admin Dashboard</div>
                      <div className="text-sm text-[#6B7280]">Municipal management</div>
                    </div>
                  </a>
                  <a onClick={toggleNavBar} href="/resident-mobile-app" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F9F9F9] transition duration-200">
                    <div className="w-8 h-8 bg-[#EBEFE4] rounded-lg flex items-center justify-center">
                      <Image src="/icons/suite-phone.svg" width={20} height={20} alt="Mobile" />
                    </div>
                    <div>
                      <div className="font-semibold">Mobile App</div>
                      <div className="text-sm text-[#6B7280]">Resident mobile experience</div>
                    </div>
                  </a>
                  <a onClick={toggleNavBar} href="/resident-web-app" className="flex items-center gap-3 p-3 rounded-lg hover:bg-[#F9F9F9] transition duration-200">
                    <div className="w-8 h-8 bg-[#EBEFE4] rounded-lg flex items-center justify-center">
                      <Image src="/icons/suite-laptop.svg" width={20} height={20} alt="Web" />
                    </div>
                    <div>
                      <div className="font-semibold">Web Application</div>
                      <div className="text-sm text-[#6B7280]">Full web platform</div>
                    </div>
                  </a>
                </div>
              </div>
              <a onClick={toggleNavBar} href="#about"><li>About</li></a>
              <a onClick={toggleNavBar} href="#faq"><li>FAQ</li></a>
              <a onClick={toggleNavBar} href="#resources"><li>Resources</li></a>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar





