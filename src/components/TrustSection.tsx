import React from "react";
import Image from "next/image";
import TrustImage from "./../../public/trust.png";

export default function TrustSection() {
  return (
    <div className="bg-gradient-to-tr from-green-950 via-green-900 to-[#2b8e5e] h-[550px] md:h-[720px] text-[#DCDCDC] font-poppins flex flex-col justify-center items-center">
      <div className="w-[85%] mx-auto ">
        <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center my-[4.8%] py-5">
          {/* Left div */}
          <div className="lg:w-1/2 flex flex-col gap-y-5">
            <div>
              <span className="bg-[#FFFFFF]/10 px-3 py-2 rounded-full font-medium text-[14px] leading-[150%]">
                🔥 TRUST WORTHINESS
              </span>
            </div>
            <h1 className="uppercase text-[34px] md:text-[64px] leading-[120%] tracking-[4%] font-bold">
              we value your trust and security
            </h1>
            <p className="leading-[150%] text-[18px] font-medium">
              Our mission is to make finance more accessible, transparent, and
              secure for everyone. With cutting.
            </p>

            <div className="inline-flex -space-x-5 cursor-pointer">
              <button className="bg-[#00B512] px-7 py-2 rounded-full font-medium hover:bg-[#00B512]/80">
                Get Started
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
            <Image src={TrustImage} alt="logo" className="md:max-w-sm" />
          </div>
        </div>
      </div>
    </div>
  );
}
/******  b8f1ded5-555b-462a-8f7a-00c0d7f0d631  *******/
