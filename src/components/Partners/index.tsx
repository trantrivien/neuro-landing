import React from "react";
import Image from "next/image";
import { PARTNER_LOGOS } from "@/constants";

function Partners() {
  return (
    <div className="container pb-[100px] pt-9">
      <h1 className="typography-h5 text-gradient-01 text-center">
        Partnered with worldwide leading companies
      </h1>
      <div className="mt-16 flex justify-center w-full md:gap-x-20 gap-x-4">

        {PARTNER_LOGOS.map((logo, i) => (
          <div key={`a-${i}`}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={48}
              className="h-[48px] w-auto object-contain"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
