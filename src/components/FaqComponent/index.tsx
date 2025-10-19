"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../ui/SectionHeader";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
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

function FaqComponent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="faq"
      className="py-[100px] container !max-w-[1321px] mx-auto relative"
    >
      <SectionHeader title="Questions & Answers" section="FAQ" />
      <div className="w-full max-w-[868px] mx-auto mt-12 flex flex-col rounded-2xl">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border-b-[4px] bg-[#1d1d1d] rounded-2xl overflow-hidden border-[#020202] "
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center gap-4 p-6 sm:p-8 text-left w-full bg-[#1d1d1d] transition-colors"
            >
              <span className="flex-1 typography-h5 text-[#F7F7F7]">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/assets/icons/plus.svg"
                  alt="plus"
                  height={32}
                  width={32}
                />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                    <div className="text-nero-muted font-inter text-base sm:text-lg font-normal leading-[140%] whitespace-pre-line">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <Image
        src={"/assets/background.svg"}
        alt="background"
        height={100}
        width={1200}
        className=" absolute bottom-0 z-[-1] mx-auto"
      />
    </div>
  );
}

export default FaqComponent;
