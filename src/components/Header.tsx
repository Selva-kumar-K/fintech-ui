import React from "react";
import Logo from "./../../public/logo.png";
import Image from "next/image";
import HeroSection from "./HeroSection";
import HeroFooter from "./HeroFooter";

export const menus = [
  "Personal Loan",
  "One Card",
  "Savings",
  "Checkings",
  "Help",
];
export default function Header() {
  return (
    <div className="bg-gradient-to-tr from-green-950 via-green-900 to-[#2b8e5e] h-full text-[#DCDCDC] font-poppins">
      <div className="w-[85%] mx-auto">
        <div className="flex justify-between py-[24px] items-center">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex gap-x-[24px]">
            {menus.map((menu, index) => (
              <li
                key={index}
                className="hover:text-[#DCDCDC]/80 cursor-pointer"
              >
                {menu}
              </li>
            ))}
          </ul>
          <div className="">
            <button className="border border-[#DCDCDC] p-2 md:px-[20px] md:py-[10px] rounded-[12px] transition duration-100 delay-200 ease-in-out hover:bg-[#DCDCDC]/10 hover:border-slate-400/10  hover:text-[#DCDCDC]/80">
              Sign In
            </button>
          </div>
        </div>
        <HeroSection />
      </div>
      <div className="">
        <HeroFooter/>
      </div>
    </div>
  );
}
