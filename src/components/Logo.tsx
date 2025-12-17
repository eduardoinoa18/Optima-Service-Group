"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function Logo({
  className = "",
  width = 50,
  height = 50,
  priority = false,
}: LogoProps) {
  const baseClass = "inline-block rounded-full bg-white/95 shadow-sm overflow-hidden border border-optima-gold/30 shrink-0";

  return (
    <div
      className={`${baseClass} ${className}`.trim()}
      style={{ width: `${width}px`, height: `${height}px`, minWidth: `${width}px`, minHeight: `${height}px`, maxWidth: `${width}px`, maxHeight: `${height}px` }}
      aria-label="Optima Service Group logo"
    >
      <Image
        src="/Logo.png"
        alt="Optima Service Group Logo - Professional services in Lawrence MA"
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
