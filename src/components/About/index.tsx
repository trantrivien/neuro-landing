import React from "react";
import Candle from "../ui/Candle";
import { NumberTicker } from "../ui/NumberTicker";
import { ABOUT_STATS } from "@/constants";

const CANDLE_COLUMNS = [
  { gapClass: "gap-[128px]", offsets: [0, 200] },
  { gapClass: "gap-[200px]", offsets: [0, 300, 150] },
] as const;

const OFFSET_CLASSES: Record<number, string> = {
  150: "mt-[150px]",
  200: "mt-[200px]",
  300: "mt-[300px]",
};

function About() {
  return (
    <div
      id="about"
      className="py-[100px] container relative flex flex-col justify-center items-center mt-[132px] max-w-[1321px]"
    >
      <div className="flex w-full absolute top-[100px]  justify-between max-w-[80vw] ">
        {CANDLE_COLUMNS.map((column, columnIndex) => (
          <div
            key={`column-${columnIndex}`}
            className={`flex ${column.gapClass}`}
          >
            {column.offsets.map((offset, offsetIndex) => (
              <div
                key={`candle-${columnIndex}-${offsetIndex}`}
                className={OFFSET_CLASSES[offset] ?? ""}
              >
                <Candle />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-[647px] space-y-16">
        <h2 className="typography-h2 text-gradient-01 mt-6">
          Built for the Future of Onchain Capital Flow
        </h2>
        <p className="typography-body text-[#C4C4C4] text-center">
          NeuroVault is engineered for DeFi strategists, stablecoin managers, and
          treasury operators who demand more than just deposits. With
          non-custodial logic, async redemption, and smart fee routing,
          NeuroVault transforms passive capital into an optimized asset flow
          across chains and strategies.
        </p>
      </div>

      <div className=" grid grid-cols-4 space-x-14 mt-24">
        {ABOUT_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col justify-center items-center space-y-4"
          >
            <span className="typography-h4 text-white">
              <NumberTicker
                value={stat.value}
                decimalPlaces={stat.decimalPlaces}
                className="typography-h4 text-white"
              />
              {stat.suffix ?? ""}
            </span>
            <span className="typography-body1 text-[#C4C4C4] text-center whitespace-pre-line">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
