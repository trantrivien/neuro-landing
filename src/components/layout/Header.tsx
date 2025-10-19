import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container py-[24px] flex justify-between items-center">
      <Image src={"./logo.svg"} width={279} height={63} alt="Neurovault" />
      <div className=" bg-[#8C8C8C57] py-[16px] px-[24px] border border-[#C4C4C4] flex gap-[24px] rounded-full">
        {NAV_LINKS.map((nav, index) => (
          <Link key={`${nav.name}-${index}`} href={nav.url} scroll={true}>
            <span className="typography-body1 font-semibold">{nav.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
