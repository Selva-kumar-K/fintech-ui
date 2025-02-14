import Image from "next/image";
import React from "react";
import { menus } from "./Header";
import Logo from "./../../public/LogoBig.svg";
import Google from "./../../public/googleplay.png";
import Apple from "./../../public/appstore.png";

export default function FooterSection() {
  return (
    <div>
      <div className="flex flex-col gap-y-4 py-[24px] items-center">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex gap-x-5">
          <Image src={Google} alt="logo" className="cursor-pointer" />
          <Image src={Apple} alt="logo" className="cursor-pointer" />
        </div>
        <ul className="flex flex-wrap justify-center gap-x-[24px]">
          {menus.map((menu, index) => (
            <li key={index} className="hover:text-[#DCDCDC]/80 cursor-pointer">
              {menu}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
