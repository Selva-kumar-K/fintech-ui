import Image from "next/image";
import React from "react";
import ServiceImage1 from "./../../public/service-img.png";
import Graph from "./../../public/graph.svg";
import Settings from "./../../public/settings.svg";
import ServiceImage2 from "./../../public/service-img2.png";

export default function ServicesSection() {
  return (
    <div className="font-poppins my-[5%]">
      <div className="flex flex-col justify-center items-center my-[3%] text-center ">
        <div className="w-full md:w-[580px]">
          <span className="bg-[#FFFFFF]/10 px-3 py-2 uppercase rounded-full font-medium text-[14px] leading-[150%] border">
            🔥 SERVICES
          </span>

          <h1 className="uppercase text-[34px] md:text-[48px] leading-[120%] tracking-[4%] font-bold my-3">
            Can Help You Achieve Financial Success
          </h1>
        </div>
      </div>

      {/* Grid Imge Section */}
      <div className="grid md:grid-cols-3 bg-[#F6F9F8] md:w-[75%] gap-2 mx-auto overflow-hidden">
        <div className="md:col-span-3 md:flex space-x-3">
          <div className="md:w-1/2  rounded-lg p-4 border">
            <Image
              src={Graph}
              alt="graph"
              className="bg-green-500 rounded-xl"
            />
            <h1 className="font-bold text-[32px]">
              Create A Card That Is Unique And Customized
            </h1>
            <p className="text-[#676666]">
              we offer a comprehensive range of innovative financial services
              tailored to meet your needs. Our services include High-Yield
              Savings Accounts.
            </p>
            <Image src={ServiceImage1} alt="services-img-1" />
          </div>
          <div className="md:w-1/2  rounded-lg p-4 border">
            <Image
              src={Settings}
              alt="setting"
              className="bg-green-500 rounded-xl"
            />
            <h1 className="font-bold text-[32px]">
              Personalized Insights And Financial Goals
            </h1>
            <p className="text-[#676666]">
              savings accounts that offer competitive interest rates and
              flexible deposit options. Investment Invest wisely with our
              personalized.Our services include High-Yield Savings{" "}
            </p>
            <Image src={ServiceImage2} alt="services-img-2" />
          </div>
        </div>
        <div className="col-span-1 rounded-lg p-4 border bg-yellow-300/70">
          <h1 className="font-bold text-[32px]">100% Dedication</h1>
          <p className="text-slate-700">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs.
          </p>
        </div>
        <div className="col-span-1 rounded-lg p-4 border">
          <h1 className="font-bold text-[32px]">
            Hold Money in 30+ concurrencies.
          </h1>
          <p className="text-slate-700">
            we offer a comprehensive range of innovative financial services
            tailored to meet your needs.
          </p>
        </div>
        <div className="col-span-1 bg-[#2D907A] text-white rounded-lg p-4 border">
          <h1 className="font-bold text-[32px]">Visit Our Service Pages</h1>
          <p className="text-slate-700">To know more. Get in touch.</p>
        </div>
      </div>
    </div>
  );
}
