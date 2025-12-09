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
      viewBox="0 0 100 100"
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className || "w-full h-full"}
      aria-label="Optima Service Group Icon"
      role="img"
    >
      <defs>
        {/* Blue Metallic Gradient */}
        <linearGradient id="blueGradientPerfect" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#003d7a" stopOpacity={1} />
          <stop offset="40%" stopColor="#002652" stopOpacity={1} />
          <stop offset="100%" stopColor="#001a38" stopOpacity={1} />
        </linearGradient>
        {/* Gold Metallic Gradient */}
        <linearGradient id="goldGradientPerfect" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff0b3" stopOpacity={1} />
          <stop offset="30%" stopColor="#d4af37" stopOpacity={1} />
          <stop offset="65%" stopColor="#aa882e" stopOpacity={1} />
          <stop offset="100%" stopColor="#7d6118" stopOpacity={1} />
        </linearGradient>
        
        {/* Filter to simulate the prominent drop shadow/depth */}
        <filter id="iconShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2.5" result="blur" />
          <feOffset in="blur" dx="2" dy="3" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Group Container - Centered and scaled appropriately */}
      <g transform="translate(50, 50)" filter="url(#iconShadow)">
        <g transform="translate(-30, -35) scale(0.6)">
          
          {/* 1. Dark Blue Swoosh (The C-shape behind the gold) */}
          <path
            d="M50,10 A45,45 0 0,1 95,55 A45,45 0 0,1 60,95 L45,80 A25,25 0 0,0 75,55 A25,25 0 0,0 50,30 Z"
            fill="url(#blueGradientPerfect)"
          />

          {/* 2. Gold Swoosh and Arrow Shaft (The C-shape and the upward movement) */}
          <path
            d="M50,100 A45,45 0 0,1 5,55 C5,45 8,35 12,28 L30,45 C24,50 22,60 25,70 A25,25 0 0,0 50,80 C60,80 68,75 72,68 L90,15 L100,15 L82,70 C75,90 60,100 50,100 Z"
            fill="url(#goldGradientPerfect)"
          />
           
           {/* 3. Arrow Head Tip (Ensures a sharp, distinct arrow point) */}
           <path
            d="M90,15 L105,15 L105,30 L90,15 Z"
            fill="url(#goldGradientPerfect)"
          />
        </g>
      </g>
    </svg>
  );
}
