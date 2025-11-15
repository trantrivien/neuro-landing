import { AiOutlineLinkedin } from "react-icons/ai";

import { IoLogoInstagram } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import Image from "next/image";
const companyLinks = [
  { name: "About NeuroVault", href: "#about" },
  { name: "NeuroVault Architecture", href: "#architecture" },
  { name: "Partner With Us", href: "#partner" },
];

const featureLinks = [
  { name: "Dual Token System (nUSD + xUSD)", href: "#dual-token" },
  { name: "Redemption Flow (Async + Instant)", href: "#redemption" },
  { name: "Fee Routing Logic", href: "#fee-routing" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: <AiOutlineLinkedin className="w-8 h-8" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: <IoLogoInstagram className="w-8 h-8" />,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: <FiGithub className="w-8 h-8" />,
  },
  {
    name: "X (Twitter)",
    href: "https://x.com",
    icon: <FaXTwitter className="w-8 h-8" />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: <RiYoutubeLine className="w-8 h-8" />,
  },
];

export default function Footer() {
  return (
    <footer className="py-12 md:px-20 px-4 mt-[10px] page-container flex justify-between items-center">
      <div className="mx-auto w-full">
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <Image
              src={"./logo.svg"}
              width={385}
              height={86}
              alt="Neurovault"
            />
            <p className="text-[#C4C4C4] text-lg sm:text-xl lg:text-2xl font-medium leading-tight tracking-tight">
              Composable Vaults. Real Yield. Total Control.
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-between">
            <div className="flex flex-col gap-5">
              <h3 className="text-[#F7F7F7] text-lg font-semibold">Company</h3>
              <ul className="flex flex-col gap-5">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#C4C4C4] text-lg hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-5">
              <h3 className="text-[#F7F7F7] text-lg font-semibold">Features</h3>
              <ul className="flex flex-col gap-5">
                {featureLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[#C4C4C4] text-lg hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-[#F7F7F7] text-lg font-semibold">
                Follow Us
              </h3>
              <div className="flex items-center gap-6 sm:gap-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity text-[#C4C4C4] w-8 h-8"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-8 border-t border-[#202322]">
            <p className="text-[#F7F7F7] text-lg font-semibold">
              © 2025 NeuroVault Foundation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
