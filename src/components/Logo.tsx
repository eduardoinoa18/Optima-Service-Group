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
  return (
    <div className={className}>
      <Image
        src="/logo-optima.png"
        alt="Optima Service Group Logo - Professional services in Lawrence MA"
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-contain"
      />
    </div>
  );
}
