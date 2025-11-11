export type NavLink = {
  name: string;
  url: string;
};

export const NAV_LINKS: NavLink[] = [
  { name: "ABOUT", url: "#about" },
  { name: "FEATURES", url: "#features" },
  { name: "DOCUMENTATION", url: "#documentation" },
  { name: "FAQ", url: "#faq" },
];

export type ServiceContent = {
  title: string;
  description: string;
  content: string;
};

export const SERVICES: ServiceContent[] = [
  {
    title: "AI-Powered Yield Management",
    description: "Optimize capital like a pro",
    content:
      "NeroVault integrates AI logic to help operators make informed deployment decisions — identifying idle capital, strategy risk signals, and NAV impact",
  },
  {
    title: "Intelligent Async Redemptions",
    description: "Predict & smooth redemptions",
    content:
      "Async redemption flows are enhanced with predictive modeling: AI monitors vault liquidity and user behavior to optimize when/how redemptions are fulfilled",
  },
  {
    title: "Adaptive Fee Tuning",
    description: "Fees that adjust to behavior",
    content:
      "FeeManager modules can be extended with AI to adjust redemption or deposit fees based on market conditions, liquidity stress, and user patterns.",
  },
];

export type PowerItem = {
  title: string;
  description: string;
};

export const POWERS: PowerItem[] = [
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

export type DocumentationSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
};

export const DOCUMENTATION_SLIDES: DocumentationSlide[] = [
  {
    id: 1,
    title: "Automate Treasury, Maximize Performance",
    imageSrc: "/assets/documents/treasury.svg",
    subtitle: "Automated Onchain Treasury",
    description:
      "Unlock onchain treasury automation with NeroVault. Seamlessly manage diverse assets, optimize yield, and scale your financial operations across multiple chain, no technical barriers.",
    buttonText: "View Contract Docs",
    buttonLink: "https://tumilabs2022.gitbook.io/neurovault",
  },
  {
    id: 2,
    title: "Effortless Governance & Asset Control",
    imageSrc: "/assets/documents/effortless.svg",
    subtitle: "Collaborative Asset Governance",
    description:
      "Bring enterprise-grade governance to your vault with easy permission settings, automated approvals, and transparent reporting. Empower teams, DAOs, and investors to collaborate with confidence.",
    buttonText: "Operator Guide",
    buttonLink: "https://tumilabs2022.gitbook.io/neurovault",
  },
  {
    id: 3,
    title: "Ready for Growth. Open to Innovation",
    imageSrc: "/assets/documents/innovation.svg",
    subtitle: "Modular & Scalable Integration",
    description:
      "NeuroVault’s modular architecture fits any blockchain and any product. Deploy upgrades instantly, integrate with Web3 protocols, and customize your solution for future growth, all with robust security.",
    buttonText: "View Integration Guide",
    buttonLink: "https://tumilabs2022.gitbook.io/neurovault",
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How do I redeem assets from NeroVault?",
    answer: `You burn your nUSD shares.
If liquidity is available → instant USDT
If not → request is queued for async redemption  Wait for the cooldown (e.g. 72h), then it can be fulfilled or cancelled.`,
  },
  {
    question: "What's the difference between nUSD and xUSD?",
    answer: `nUSD = Your vault shares (ERC4626-compatible)
xUSD = Vault-side NAV tracker (non-transferable)  Together, they form the dual-token system: nUSD tracks ownership, xUSD tracks value. PPS = xUSD ÷ nUSD.`,
  },
  {
    question: "What happens during async redemption?",
    answer: `Your nUSD is locked. A cooldown timer starts (default: 72h).  Once time passes, operators or agents can call fulfillRedeem().  You receive USDT, vault burns your nUSD and xUSD.  You can cancel anytime before it's fulfilled — no penalty.`,
  },
  {
    question: "What are the fees, and who earns them?",
    answer: `Redemptions apply a base fee (e.g. 0.5%).  Fees are split:
50% to Treasury (protocol earnings)
50% recycled into the vault as new xUSD (raises NAV)  The longer you stay in, the more you benefit.`,
  },
  {
    question: "Can my protocol or DAO integrate with NeroVault?",
    answer: `Yes — NeroVault is modular.
Use our ERC4626 methods directly
Automate flows with the Operator SDK
Track vault health, yield, and redemptions via event logs or AI triggers  Composability is native. No middleware needed.`,
  },
];

export type PartnerLogo = {
  src: string;
  alt: string;
};

export const PARTNER_LOGOS: PartnerLogo[] = [
  { src: "/assets/partnersLogo/Logo1.png", alt: "Binace" },
  { src: "/assets/partnersLogo/Logo2.png", alt: "Google" },
  { src: "/assets/partnersLogo/Logo3.png", alt: "FB" },
];

export type AboutStat = {
  value: number;
  label: string;
  suffix?: string;
  decimalPlaces?: number;
};

export const ABOUT_STATS: AboutStat[] = [
  { value: 20, label: "Strategies Supported", suffix: "+" },
  {
    value: 0.5,
    label: "Base Redemption Fee\n(xUSD NAV)",
    suffix: "%",
    decimalPlaces: 1,
  },
  { value: 100000, label: "Redemptions Processed", suffix: "+" },
  { value: 200, label: "Merchants Accept", suffix: "+" },
];
