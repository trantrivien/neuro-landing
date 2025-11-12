import React from "react";
import SectionHeader from "../ui/SectionHeader";
import PowerLogic from "./PowerLogic";
import RedemptionPaths from "./components/RedemptionPaths";
import TotalVaultAssets from "./components/TotalVaultAssets";
import VaultNAV from "./components/VaultNAV";
import YieldEngineHealth from "./components/YieldEngineHealth";
import { POWERS } from "@/constants";

function Powers() {
  return (
    <div className="py-[100px] container !max-w-[1321px] mx-auto">
      <SectionHeader
        title="What Powers the Future of Onchain Vaults"
        section="WHY NEUROVAULT"
      />
      <div className="mx-auto mt-[71px]">
        <div className="flex h-full gap-5 justify-center items-center lg:justify-start">
          <VaultNAV />
          <TotalVaultAssets />
          <RedemptionPaths />
          <YieldEngineHealth />
        </div>
      </div>

      <div className="mt-[100px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  w-fit mx-auto gap-x-5 gap-y-[46px]">
        {POWERS.map((power, index) => (
          <PowerLogic
            key={index}
            title={power.title}
            description={power.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Powers;
