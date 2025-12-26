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
  width = 80,
  height = 80,
  priority = false,
  noCircle = false,
}: LogoProps) {
  // Calculate the icon circle size (approximately 35% of the total logo size)
  const iconCircleSize = Math.round(width * 0.35);
  const iconCircleOffset = Math.round(width * 0.08); // Position from top-left

  return (
    <div
      className={`relative inline-flex shrink-0 ${className}`.trim()}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        minWidth: `${width}px`,
        minHeight: `${height}px`,
        maxWidth: `${width}px`,
        maxHeight: `${height}px`,
      }}
      aria-label="Optima Service Group logo"
    >
      {/* Logo image - bigger and without frame */}
      <Image
        src="/Logo.png"
        alt="Optima Service Group Logo - Professional services in Lawrence MA"
        width={width}
        height={height}
        priority={priority}
        className="w-full h-full object-contain"
      />
      
      {/* Circle frame around just the icon */}
      {!noCircle && (
        <div
          className="absolute rounded-full bg-white/95 shadow-lg border-2 border-optima-gold/40 backdrop-blur-sm"
          style={{
            width: `${iconCircleSize}px`,
            height: `${iconCircleSize}px`,
            top: `${iconCircleOffset}px`,
            left: `${iconCircleOffset}px`,
            pointerEvents: 'none',
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
