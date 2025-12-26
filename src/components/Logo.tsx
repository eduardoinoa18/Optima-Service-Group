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
  width = 80,
  height = 80,
  priority = false,
}: LogoProps) {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 rounded-full overflow-hidden ${className}`.trim()}
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
