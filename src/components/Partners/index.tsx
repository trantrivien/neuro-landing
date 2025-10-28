import React from "react";
import ScrollingLogos from "./ScrollingLogos";
import Image from "next/image";

const logos = [
  { src: "/assets/partnersLogo/Logo1.png", alt: "Binace" },
  { src: "/assets/partnersLogo/Logo2.png", alt: "Google" },
  { src: "/assets/partnersLogo/Logo3.png", alt: "FB" },
];

function Partners() {
  return (
    <div className="container pb-[100px] pt-9">
      <h1 className="typography-h5 text-gradient-01 text-center">
        Partnered with worldwide leading companies
      </h1>
      <div className="mt-16 flex justify-center w-full gap-x-20">
        {/* <ScrollingLogos
          logos={logos}
          // speed (seconds per loop)
          gap={87} // spacing between logos (px)
          pauseOnHover // hover to pause
          className="mx-auto max-w-screen-2xl"
        /> */}
        {logos.map((logo, i) => (
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
