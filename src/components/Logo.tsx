"use client";

import React from "react";

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
}

export default function Logo({
  className = "w-12 h-12",
  width = "150px",
  height = "auto",
}: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className || "w-full h-full"}
      aria-label="Optima Service Group Icon"
      role="img"
    >
      <defs>
        <linearGradient id="blueGradientIcon" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#003d7a" stopOpacity={1} />
          <stop offset="100%" stopColor="#001a38" stopOpacity={1} />
        </linearGradient>
        <linearGradient id="goldGradientIcon" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffe599" stopOpacity={1} />
          <stop offset="50%" stopColor="#d4af37" stopOpacity={1} />
          <stop offset="100%" stopColor="#aa882e" stopOpacity={1} />
        </linearGradient>
        <filter id="shadowIcon" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feOffset in="blur" dx="1" dy="2" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g transform="translate(100, 100)" filter="url(#shadowIcon)">
        <g transform="translate(-50, -55) scale(1)">
          {/* Dark Blue Swoosh */}
          <path
            d="M50,10 A45,45 0 0,1 95,55 A45,45 0 0,1 60,95 L45,80 A25,25 0 0,0 75,55 A25,25 0 0,0 50,30 Z"
            fill="url(#blueGradientIcon)"
          />

          {/* Gold Swoosh and Arrow Combination */}
          <path
            d="M50,100 A45,45 0 0,1 5,55 C5,45 8,35 12,28 L30,45 C24,50 22,60 25,70 A25,25 0 0,0 50,80 C60,80 68,75 72,68 L90,15 L100,15 L82,70 C75,90 60,100 50,100 Z"
            fill="url(#goldGradientIcon)"
          />

          {/* Arrow Head */}
          <path
            d="M90,15 L105,15 L105,30 L90,15 Z"
            fill="url(#goldGradientIcon)"
          />
        </g>
      </g>
    </svg>
  );
}
