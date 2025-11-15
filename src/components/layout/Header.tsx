"use client";
import React, { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="container md:!px-4 py-[24px] flex justify-between items-center !max-w-[1321px] mx-auto">
      <Image
        src={"./logo.svg"}
        width={279}
        height={63}
        alt="Neurovault"
        className=""
      />
      <div className="md:flex hidden bg-[#8C8C8C57] py-[16px] px-[24px] border border-[#C4C4C4]  gap-[24px] rounded-full">
        {NAV_LINKS.map((nav, index) => (
          <Link key={`${nav.name}-${index}`} href={nav.url} scroll={true}>
            <span className="typography-body1 font-semibold">{nav.name}</span>
          </Link>
        ))}
      </div>
      <button className="md:hidden block" onClick={() => setOpenMenu(true)}>
        <GiHamburgerMenu className="w-5 h-5" />
      </button>
      {openMenu && (
        <div className=" fixed w-screen h-screen top-0 left-0 bg-black/80 backdrop-blur-md p-4">
          <div className="flex justify-between items-center">
            <Image
              src={"./logo.svg"}
              width={229}
              height={13}
              alt="Neurovault"
              className=""
            />
            <button onClick={()=> setOpenMenu(false)}>
            <MdClose className="w-5 h-5"/>
            </button>
          </div>
          <div className="flex flex-col  mt-5 px-2 ">
          {NAV_LINKS.map((nav, index) => (
          <Link key={`${nav.name}-${index}`} href={nav.url} scroll={true} onClick={()=>setOpenMenu(false)} className="border-b border-gray-600 py-2">
            <span className="typography-body1 font-semibold">{nav.name}</span>
          </Link>
        ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
