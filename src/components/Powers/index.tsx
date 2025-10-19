import React from "react";
import SectionHeader from "../ui/SectionHeader";
import PowerLogic from "./PowerLogic";
import RedemptionPaths from "./components/RedemptionPaths";
import TotalVaultAssets from "./components/TotalVaultAssets";
import VaultNAV from "./components/VaultNAV";
import YieldEngineHealth from "./components/YieldEngineHealth";

const powers = [
  {
    title: "Ownership-First, Upgradeable by Design",
    description:
      "NeroVault is non-custodial and upgradeable via proxy, giving you self-custody with future-proof infrastructure. No centralized keys. No lock-ins. Total alignment.",
  },
  {
    title: "ERC4626-Backed, Dual-Token Engine",
    description:
      "Our vault runs on a dual-token system: nUSD represents user shares, while xUSD tracks real NAV. This is not a simulation, this is state-synced vault math",
  },
  {
    title: "Instant & Async Redemption Protocol",
    description:
      "If there’s liquidity, users redeem instantly. If not, you queue async with a cooldown, all protected by smart cooldowns and fully transparent state flows.",
  },
  {
    title: "Yield-Driven Fee Routing",
    description:
      "Every fee is split 50/50 between treasury and the vault itself. When routed back, they mint new xUSD, increasing PPS and rewarding long-term holders.",
  },
  {
    title: "AI-Supported Vault Logic",
    description:
      "From auto-harvests to dynamic redemption flows, AI agents support operators with insights and execution triggers, so capital never sleeps, and NAV stays honest.",
  },
  {
    title: "Modular. Composable. Battle-Ready",
    description:
      "Built for composability, NeroVault is protocol-native and works seamlessly across EVMs. No yield farming gimmicks, just real infrastructure, ready to scale.",
  },
];

function Powers() {
  return (
    <div className="py-[100px] container !max-w-[1321px] mx-auto">
      <SectionHeader
        title="What Powers the Future of Onchain Vaults"
        section="WHY NEROVAULT"
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
        {powers.map((power, index) => (
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
