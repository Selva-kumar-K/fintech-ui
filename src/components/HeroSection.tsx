import Image from "next/image";
import React from "react";
import HeroImage from "./../../public/HeroSection.png";

export default function HeroSection() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center my-[4.8%] py-5">
      {/* Left div */}
      <div className="lg:w-1/2 flex flex-col gap-y-5">
        <div>
          <span className="bg-[#FFFFFF]/10 px-3 py-2 rounded-full font-medium text-[14px] leading-[150%]">
            🔥 100% TRUSTED PLATFORM
          </span>
        </div>
        <h1 className="uppercase text-[34px] md:text-[64px] leading-[120%] tracking-[4%] font-bold">
          finance with security and{" "}
          <span className="text-[#E2FF54]">flexibility</span>
        </h1>
        <p className="leading-[150%] text-[18px] font-medium">
          No-fee checking account with cash back rewards. Enjoy fee-free banking
          and earn cash back on your everyday purchases.
        </p>

        <div className="inline-flex -space-x-5 cursor-pointer">
          <button className="bg-[#00B512] px-7 py-2 rounded-full font-medium hover:bg-[#00B512]/80">
            Open Account
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 border rounded-full w-10 h-10 p-2 bg-[#FBF9F1] stroke-black "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
      </div>
      {/* Right div */}
      <div className="hidden lg:flex items-center">
        <Image src={HeroImage} alt="logo" className="md:max-w-sm" />
      </div>
    </div>
  );
}
