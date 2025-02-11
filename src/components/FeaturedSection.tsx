import Image from "next/image";
import React from "react";
import Featured from "./../../public/featured.png"

export default function FeaturedSection() {
  return (
    <div className="w-[85%] md:w-[75%] mx-auto font-poppins ">
      <div className="my-28  flex flex-col space-y-20 md:space-y-0 md:flex-row md:space-x-10">
          <div className="md:w-1/2 flex flex-col gap-y-5">
            <div>
              <span className="bg-[#FFFFFF]/10 px-3 py-2 uppercase rounded-full font-medium text-[14px] leading-[150%] border">
                🔥 featured
              </span>
            </div>
            <h1 className="uppercase text-[34px] md:text-[48px] leading-[120%] tracking-[4%] font-bold">
             all the features in one app
            </h1>
            <li className="leading-[150%]  ">
            Get 3% cash back on everyday purchases, 2% on everything else.
            </li>
            <li className="leading-[150%]  ">
            Extra Spending Power when you have Rewards Checking through Upgrade.
            </li>
            <div className="inline-flex -space-x-5 cursor-pointer">
              <button className="border px-7 py-2 rounded-full font-medium border-green-200">
                Get Started
              </button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 border rounded-full w-10 h-10 p-2 bg-[#00B512]/80 stroke-black "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src={Featured} alt="featured"/>
          </div>
      </div>
    </div>
  );
}
