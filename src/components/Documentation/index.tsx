"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DOCUMENTATION_SLIDES } from "@/constants";

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
  const TRAVEL = TRACK_HEIGHT - HANDLE_HEIGHT;
  const slidesCount = DOCUMENTATION_SLIDES.length;
  const SEGMENT = useMemo(
    () => (slidesCount > 1 ? TRAVEL / (slidesCount - 1) : 0),
    [TRAVEL, slidesCount],
  );
  const sliderLabel = useMemo(
    () => slidesCount.toString().padStart(2, "0"),
    [slidesCount],
  );

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(slidesCount - 1, index));
    setActiveSlide(clamped);
  }, [slidesCount]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartY(e.clientY);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || SEGMENT === 0) return;
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
    if (SEGMENT === 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const index = Math.round((y - HANDLE_HEIGHT / 2) / SEGMENT);
    goTo(index);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowDown" || e.key === "PageDown") goTo(activeSlide + 1);
    if (e.key === "ArrowUp" || e.key === "PageUp") goTo(activeSlide - 1);
    if (e.key === "Home") goTo(0);
    if (e.key === "End") goTo(slidesCount - 1);
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
  }, [hovering, activeSlide, goTo]);
  return (
    <div className="px-4 relative mx-4">
    <div id="documentation" className="center-box md:!p-[100px] !p-4 w-full md:h-[800px] h-[900px]">
      <div className="animated-border-box-glow"></div>
      <div
        className="animated-border-box flex md:flex-row flex-col justify-between items-center md:p-12 p-4 gap-12"
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
              aria-valuemax={slidesCount}
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
            <span className="typography-body1 !text-[#3D99F5]">
              {sliderLabel}
            </span>
          </div>
          <div>
            <span className="typography-body1 !text-[#3D99F5]">Document</span>

            <div className=" md:space-y-16 space-y-6 md:mt-6 mt-3">
              <h2 className="md:typography-h2 typography-h4  !text-left">
                {DOCUMENTATION_SLIDES[activeSlide].title}
              </h2>
              <div className=" space-y-6">
                <p className="md:typography-body1 typography-body2 font-bold">
                  {" "}
                  {DOCUMENTATION_SLIDES[activeSlide].subtitle}
                </p>
                <p className="md:typography-body1 typography-body2 !font-normal text-[#C4C4C4]">
                  {DOCUMENTATION_SLIDES[activeSlide].description}
                </p>
              </div>
              <Link
                href={DOCUMENTATION_SLIDES[activeSlide].buttonLink ?? ""}
                target="_blank"
                className="bg-[#F7F7F7] py-4 px-6  rounded-full"
              >
                <span className="typography-body1 text-[#020202]">
                  {DOCUMENTATION_SLIDES[activeSlide].buttonText}{" "}
                </span>
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={DOCUMENTATION_SLIDES[activeSlide].imageSrc}
          alt="Document"
          width={449}
          height={510}
        />
      </div>
    </div>
    </div>
  );
}

export default Documentation;
