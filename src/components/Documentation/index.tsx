"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
interface DocumentationSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
}

const slides: DocumentationSlide[] = [
  {
    id: 1,
    title: "Integrate NeroVault. Unlock Onchain Capital Flow.",
    subtitle: "1. ERC4626-powered contract suite for vault management.",
    description:
      "Access the core vault logic directly on-chain: deposit, mint, request async redemptions, fulfill requests, and route fees, all aligned with ERC4626 and MetaVault's dual-token architecture (nUSD/xUSD). Build DeFi apps, yield aggregators, or treasury portals with deep contract control.",
    buttonText: "View Contract Docs",
  },
  {
    id: 2,
    title: "Operate Like a Vault DAO. Without Building One",
    subtitle:
      "2. Async fulfillment, yield tracking, and fee routing, all scriptable",
    description:
      "The NeroVault Operator SDK helps you manage redemptions, automate fee routing, track vault health, and execute strategy flows.  With async-safe logic and AI-trigger compatibility, this toolkit is perfect for DAO treasuries, RWA managers, or stablecoin teams.",
    buttonText: "Operator Guide",
  },
  {
    id: 3,
    title: "Composable. Audited. Chain-Agnostic.",
    subtitle:
      "3. Plug NeroVault into any DeFi stack or onchain treasury system.",
    description:
      "Built on the ERC4626 standard, NeroVault integrates with dashboards, protocols, and vault routers out of the box. Deploy across EVM-compatible chains with minimal changes.  Use nUSD as a stable yield asset, track xUSD as vault NAV, or route flows through MetaVault as a base layer.",
    buttonText: "View Integration Guide",
  },
];

function Documentation() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const areaRef = useRef<HTMLDivElement | null>(null);
  const [hovering, setHovering] = useState(false);
  const wheelAccumRef = useRef(0);
  const wheelCooldownRef = useRef(false);
  const TRACK_HEIGHT = 409;
  const HANDLE_HEIGHT = 147;
  const TRAVEL = TRACK_HEIGHT - HANDLE_HEIGHT; // 262px
  const SEGMENT = TRAVEL / (slides.length - 1);

  const goTo = (index: number) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    setActiveSlide(clamped);
  };

  const handleSliderClick = (index: number) => {
    goTo(index);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartY(e.clientY);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaY = e.clientY - startY;
    const step = Math.round(deltaY / SEGMENT);
    if (step !== 0) {
      goTo(activeSlide + step);
      setStartY(e.clientY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const index = Math.round((y - HANDLE_HEIGHT / 2) / SEGMENT);
    goTo(index);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.deltaY > 0) goTo(activeSlide + 1);
    else goTo(activeSlide - 1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") goTo(activeSlide + 1);
    if (e.key === "ArrowUp" || e.key === "PageUp") goTo(activeSlide - 1);
    if (e.key === "Home") goTo(0);
    if (e.key === "End") goTo(slides.length - 1);
  };

  const sliderPosition = activeSlide * SEGMENT;

  useEffect(() => {
    const el = areaRef.current;
    if (!el) return;

    const WHEEL_STEP_THRESHOLD = 200;
    const COOLDOWN_MS = 200;

    const onWheel = (e: WheelEvent) => {
      if (!hovering) return;
      e.preventDefault();
      e.stopPropagation();

      if (wheelCooldownRef.current) return;

      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      wheelAccumRef.current += delta;

      if (wheelAccumRef.current >= WHEEL_STEP_THRESHOLD) {
        goTo(activeSlide + 1);
        wheelAccumRef.current = 0;
        wheelCooldownRef.current = true;
        setTimeout(() => (wheelCooldownRef.current = false), COOLDOWN_MS);
      } else if (wheelAccumRef.current <= -WHEEL_STEP_THRESHOLD) {
        goTo(activeSlide - 1);
        wheelAccumRef.current = 0;
        wheelCooldownRef.current = true;
        setTimeout(() => (wheelCooldownRef.current = false), COOLDOWN_MS);
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel as EventListener);
    };
  }, [hovering, activeSlide, slides.length]);
  return (
    <div id="documentation" className="center-box h-[800px]">
      <div className="animated-border-box-glow"></div>
      <div
        className="animated-border-box flex justify-between items-center p-12 gap-12"
        ref={areaRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => {
          setHovering(false);
          wheelAccumRef.current = 0;
        }}
      >
        <div className="content  flex">
          <div className="hidden lg:flex flex-col items-center gap-3 flex-shrink-0 mr-12">
            <span className="typography-body1 !text-[#3D99F5]">01</span>
            <div
              className="relative w-2 h-[435px] flex-shrink-0 "
              aria-valuemin={1}
              aria-valuemax={slides.length}
              aria-valuenow={activeSlide + 1}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              onClick={handleTrackClick}
            >
              <div className="absolute left-0 top-0 w-[3px] h-full opacity-45 bg-[#C4C4C4] rounded-full ml-[-0.5px]"></div>
              <div
                className="absolute left-[-3px] w-2  h-[180px] rounded-full bg-gradient-to-b from-[#E8E8E8] to-[#959595] transition-all duration-300 cursor-grab active:cursor-grabbing"
                style={{ top: `${sliderPosition}px` }}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
              ></div>
            </div>
            <span className="typography-body1 !text-[#3D99F5]">03</span>
          </div>
          <div>
            <span className="typography-body1 !text-[#3D99F5]">Document</span>

            <div className=" space-y-16 mt-6">
              <h2 className="typography-h2 !text-left">
                {slides[activeSlide].title}
              </h2>
              <div className=" space-y-6">
                <p className="typography-body1 font-bold">
                  {" "}
                  {slides[activeSlide].subtitle}
                </p>
                <p className="typography-body1 !font-normal text-[#C4C4C4]">
                  {slides[activeSlide].description}
                </p>
              </div>
              <button className="bg-[#F7F7F7] py-4 px-6 rounded-full">
                <span className="typography-body1 text-[#020202]">
                  {slides[activeSlide].buttonText}{" "}
                </span>
              </button>
            </div>
          </div>
        </div>
        <Image
          src={"/assets/document.svg"}
          alt="Document"
          width={449}
          height={510}
        />
      </div>
    </div>
  );
}

export default Documentation;
