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
  const baseClass = "inline-block rounded-full bg-white overflow-hidden";

  return (
    <div
      className={`${baseClass} ${className}`.trim()}
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
