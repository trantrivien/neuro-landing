'use client'

import React from "react";
interface ButtonProps {
  className?: string;
  text: string;
}
function Button({ text, className }: ButtonProps) {
  return (
    <button
      className={`px-6 py-4 gap-[10px] bg-[#F7F7F7] typography-body1 font-semibold text-[#020202] rounded-full  ${className}`}
    >
      {text}
    </button>
  );
}

export default Button;
