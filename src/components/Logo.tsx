"use client";

import React from "react";
import OptimaBrandIcon from "./OptimaBrandIcon";

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
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`.trim()}
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
      {/* Optima Brand Icon - SVG based */}
      <OptimaBrandIcon
        size={width}
        className="w-full h-full text-optima-navy"
      />
      
      {/* Circle frame around just the icon */}
      {!noCircle && (
        <div
          className="absolute rounded-full bg-white/95 shadow-lg border-2 border-optima-gold/40 backdrop-blur-sm pointer-events-none"
          style={{
            width: `${iconCircleSize}px`,
            height: `${iconCircleSize}px`,
            top: `${iconCircleOffset}px`,
            left: `${iconCircleOffset}px`,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
