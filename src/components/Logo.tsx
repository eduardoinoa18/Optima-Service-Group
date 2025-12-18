"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  noCircle?: boolean;
}

export default function Logo({
  className = "",
  width = 50,
  height = 50,
  priority = false,
  noCircle = false,
}: LogoProps) {
  const baseClass = noCircle 
    ? "inline-block shrink-0"
    : "inline-block rounded-full bg-white/98 p-1 shadow-xl overflow-hidden border-2 border-optima-gold/40 shrink-0 backdrop-blur-sm";

  return (
    <div
      className={`${baseClass} ${className}`.trim()}
      style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px`, maxWidth: `${width}px`, maxHeight: `${height}px`, ...(noCircle && { overflow: 'visible' }) }}
      aria-label="Optima Service Group logo"
    >
      <Image
        src="/Logo.png"
        alt="Optima Service Group Logo - Professional services in Lawrence MA"
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
