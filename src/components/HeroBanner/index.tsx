"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
    },
  }),
};

function HeroBanner() {
  return (
    <div className=" min-h-[1116px] ">
      <img
        src="/herobanner.png"
        alt="Neurovault"
        className="w-full absolute top-0 z-[-1] min-h-[1116px] max-h-[1500px] hero-banner"
      />

      <div className="container flex flex-col justify-center items-center mt-25">
        <motion.span
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: true }}
          className="typography-body1 bg-[#8C8C8C57] px-4 py-2 rounded-full"
        >
          Welcome to NeroVault
        </motion.span>

        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.4}
          viewport={{ once: true }}
          className="typography-h2 text-gradient-01 mt-6 text-center"
        >
          Deposit, redeem, and grow
          <br />
          your stable assets
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.6}
          viewport={{ once: true }}
          className="max-w-[637px] text-center typography-body1 text-[#C4C4C4] my-10"
        >
          NeroVault is a next-gen ERC4626 vault with async redemption, fee
          routing, and full NAV tracking via dual-token architecture (nUSD &
          xUSD).
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          custom={0.8}
          viewport={{ once: true }}
        >
          <Link
            href="https://app.neurovault.cc/"
            target="_blank"
            className="cursor-pointer"
          >
            <Button text="Launch Vault" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroBanner;
