"use client";
import Image from "next/image";
import React from "react";

type Logo = {
    src: string;
    alt: string;
    width?: number;
    height?: number;
};

interface ScrollingLogosProps {
    logos: Logo[];
    duration?: number;
    gap?: number;
    pauseOnHover?: boolean;
    className?: string;
}

const ScrollingLogos: React.FC<ScrollingLogosProps> = ({
    logos,
    duration = 25,
    gap = 48,
    pauseOnHover = true,
    className = "",
}) => {
    return (
        <div
            className={[
                "relative w-full overflow-hidden",
                "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                className,
            ].join(" ")}
            aria-label="Partner logos marquee"
        >
            <div
                className={[
                    "flex select-none marquee-animate",
                    "[animation:marquee-rtl_linear_infinite]",
                    pauseOnHover ? "hover:[animation-play-state:paused]" : "",
                ].join(" ")}
                style={{
                    animationDuration: `${duration}s`,
                    willChange: "transform",
                    width: "200%",
                }}
            >
                <ul
                    className="flex shrink-0 items-center"
                    style={{
                        columnGap: `${gap}px`,
                        marginRight: `${gap}px`,
                    }}
                    aria-hidden="true"
                >
                    {logos.map((logo, i) => (
                        <li
                            key={`a-${i}`}
                            className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width ?? 120}
                                height={logo.height ?? 48}
                                className="h-[48px] w-auto object-contain"
                                priority={i < 4}
                            />
                        </li>
                    ))}
                </ul>

                <ul
                    className="flex shrink-0 items-center"
                    style={{ columnGap: `${gap}px` }}
                    aria-hidden="true"
                >
                    {logos.map((logo, i) => (
                        <li
                            key={`b-${i}`}
                            className="shrink-0 opacity-80 transition-opacity hover:opacity-100"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width ?? 120}
                                height={logo.height ?? 48}
                                className="h-[48px] w-auto object-contain"
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ScrollingLogos;
