import Image from "next/image";
import React from "react";
import About from "./../../public/about.png";

export const about = [
  {
    title: "Expenses Tracker",
    content:
      "Our comprehensive selection of medications, supplements, and healthcare products .",
  },
  {
    title: "Crypto Connection",
    content:
      "From advanced imaging technology such as MRI and CT scanners to precision surgical tools.",
  },
  {
    title: "Automated Invoicing ",
    content:
      "We're committed to leveraging the latest innovations in medical technology.",
  },
  {
    title: "Automated Invoicing ",
    content:
      "We're committed to leveraging the latest innovations in medical technology.",
  },
  {
    title: "Automated Invoicing ",
    content:
      "We're committed to leveraging the latest innovations in medical technology.",
  },
  {
    title: "Automated Invoicing ",
    content:
      "We're committed to leveraging the latest innovations in medical technology.",
  },
];
export default function AboutSection() {
  return (
    <div className="w-[85%] md:w-[75%] mx-auto flex flex-col space-y-20 my-[5%] md:space-y-0  md:flex-row justify-between">
      {/* Left div */}
      <div className="md:w-2/5">
        <Image src={About} alt="about" />
      </div>

      {/* Right div */}
      <div className="md:w-2/4 lg:w-1/2 h-[350px] lg:h-[450px] overflow-y-scroll scrollbar space-y-5">
        <div>
          <span className="bg-[#FFFFFF]/10 uppercase px-3 py-2 rounded-full font-medium text-[14px] leading-[150%]">
            🔥 about us
          </span>
        </div>
        <h1 className="uppercase text-[34px] lg:text-[48px] leading-[120%]  font-bold">
          all your money needs in one app
        </h1>

        <div className="space-y-5 pr-10">
          {about.map((about, index) => (
            <div key={index} className="hover:bg-yellow-100 p-3 rounded-xl">
              <h1 className="font-bold text-[20px] leading-[150%]">
                {about.title}
              </h1>
              <p className="leading-[150%]">{about.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
