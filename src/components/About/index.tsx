import React from "react";
import Candle from "../ui/Candle";
import { NumberTicker } from "../ui/NumberTicker";

function About() {
  return (
    <div
      id="about"
      className="py-[100px] container relative flex flex-col justify-center items-center mt-[132px] max-w-[1321px]"
    >
      <div className="flex w-full absolute top-[100px]  justify-between max-w-[80vw] ">
        <div className="flex gap-[128px]">
          <Candle />
          <div className=" mt-[200px]">
            <Candle />
          </div>
        </div>

        <div className="flex gap-[200px]">
          <Candle />
          <div className=" mt-[300px]">
            <Candle />
          </div>
          <div className=" mt-[150px]">
            <Candle />
          </div>
        </div>
      </div>
      <div className="max-w-[647px] space-y-16">
        <h2 className="typography-h2 text-gradient-01 mt-6">
          Built for the Future of Onchain Capital Flow
        </h2>
        <p className="typography-body text-[#C4C4C4] text-center">
          NeroVault is engineered for DeFi strategists, stablecoin managers, and
          treasury operators who demand more than just deposits. With
          non-custodial logic, async redemption, and smart fee routing,
          NeroVault transforms passive capital into an optimized asset flow
          across chains and strategies.
        </p>
      </div>

      <div className=" grid grid-cols-4 space-x-14 mt-24">
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className="typography-h4 text-white">
            <NumberTicker value={20} className="typography-h4 text-white" />+
          </span>
          <span className="typography-body1 text-[#C4C4C4] text-center">
            Strategies Supported
          </span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className="typography-h4 text-white">
            <NumberTicker
              value={0.5}
              decimalPlaces={1}
              className="typography-h4 text-white"
            />
            %
          </span>
          <span className="typography-body1 text-[#C4C4C4] text-center">
            Base Redemption Fee
            <br />
            (xUSD NAV)
          </span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className="typography-h4 text-white">
            {" "}
            <NumberTicker value={100000} className="typography-h4 text-white" />
            +
          </span>
          <span className="typography-body1 text-[#C4C4C4] text-center">
            Redemptions Processed
          </span>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4">
          <span className="typography-h4 text-white">
            {" "}
            <NumberTicker value={200} className="typography-h4 text-white" />+
          </span>
          <span className="typography-body1 text-[#C4C4C4] text-center">
            Merchants Accept
          </span>
        </div>
      </div>
    </div>
  );
}

export default About;
