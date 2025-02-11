import React from "react";
import Spherule from "./../../public/spherule.png";
import Samsung from "./../../public/samsung.png";
import Visa from "./../../public/visa.png";
import Amazon from "./../../public/amazon.png";
import Paypal from "./../../public/Paypal.png";
import Alipay from "./../../public/alipay.png";
import Image from "next/image";

export const logos = [Spherule, Samsung, Visa, Amazon, Paypal, Alipay];
export default function HeroFooter() {
  return (
    <div className="bg-[#04684C] h-12 flex flex-col justify-center">
      <div className="w-[85%]  mx-auto flex space-x-5 items-center justify-between overflow-auto">
        {logos.map((logo, index) => (
          <Image key={index} src={logo} alt="logo" className="w-[100px]" />
        ))}
       
      </div>
    </div>
  );
}
