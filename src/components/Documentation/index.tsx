"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";


const steps = [
    {
        title: "Integrate NeroVault. Unlock Onchain Capital Flow.",
        text: "ERC4626-powered contract suite for vault management. Access vault logic directly on-chain.",
        cta: "View Contract Docs",
    },
    {
        title: "Operate Like a Vault DAO. Without Building One.",
        text: "Async fulfillment, yield tracking, and fee routing with SDK toolkit.",
        cta: "Operator Guide",
    },
    {
        title: "Composable. Audited. Chain-Agnostic.",
        text: "Plug NeroVault into any DeFi stack or treasury system.",
        cta: "View Integration Guide",
    },
];



function Documentation() {
    const [active, setActive] = useState(0);
    const refs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        setActive(refs.current.indexOf(entry.target as HTMLDivElement));
                });
            },
            { threshold: 0.5 }
        );
        refs.current.forEach((r) => r && io.observe(r));
        return () => io.disconnect();
    }, []);

    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: cardRef });
    const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

    return (
        <section className="relative min-h-[100vh]  text-white">
            {/* các trigger section */}
            <div className="absolute left-0 top-0 w-full">
                {steps.map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            if (el) refs.current[i] = el;
                        }}
                        className="h-screen"
                    />
                ))}
            </div>

            {/* sticky card */}
            <div className="sticky top-0 flex h-screen items-center justify-center">
                <motion.div
                    ref={cardRef}
                    style={{ y }}
                >

                    <div className="document-card">

                    </div>

                </motion.div>
            </div>
        </section>
    );
}

export default Documentation