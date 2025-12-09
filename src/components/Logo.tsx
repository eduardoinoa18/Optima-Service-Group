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
      aria-label="Optima Service Group"
      role="img"
    >
      <defs>
        {/* Blue circle gradient - richer, more vibrant */}
        <linearGradient id="blueCircle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5a8fc7" stopOpacity={1} />
          <stop offset="30%" stopColor="#2563ab" stopOpacity={1} />
          <stop offset="70%" stopColor="#1e3a5f" stopOpacity={1} />
          <stop offset="100%" stopColor="#0f1f3a" stopOpacity={1} />
        </linearGradient>

        {/* Gold gradient - warmer, more Hispanic-friendly tones */}
        <linearGradient id="goldArrowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff9e6" stopOpacity={1} />
          <stop offset="15%" stopColor="#ffd966" stopOpacity={1} />
          <stop offset="40%" stopColor="#f4c430" stopOpacity={1} />
          <stop offset="65%" stopColor="#d4af37" stopOpacity={1} />
          <stop offset="85%" stopColor="#b8941f" stopOpacity={1} />
          <stop offset="100%" stopColor="#8b7310" stopOpacity={1} />
        </linearGradient>

        {/* Circle outer ring with glow */}
        <linearGradient id="outerRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563ab" stopOpacity={0.9} />
          <stop offset="50%" stopColor="#1e3a5f" stopOpacity={0.95} />
          <stop offset="100%" stopColor="#0f1f3a" stopOpacity={1} />
        </linearGradient>

        {/* Shine effect for 3D depth */}
        <radialGradient id="shine" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.5} />
          <stop offset="40%" stopColor="#ffffff" stopOpacity={0.2} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </radialGradient>

        {/* Enhanced shadow for app-like depth */}
        <filter id="appShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="5" result="blur" />
          <feOffset in="blur" dx="0" dy="6" result="offsetBlur" />
          <feFlood floodColor="#000000" floodOpacity="0.35" />
          <feComposite in2="offsetBlur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow for depth */}
        <filter id="innerGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="0" dy="2" result="offsetblur" />
          <feFlood floodColor="#1e3a5f" floodOpacity="0.4" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
      </defs>

      {/* Main container with app-style shadow */}
      <g filter="url(#appShadow)">
        {/* Outer decorative ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          fill="none"
          stroke="url(#outerRing)"
          strokeWidth="2"
          opacity="0.3"
        />

        {/* Background circle - solid base */}
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="url(#blueCircle)"
        />

        {/* Blue swoosh/half-circle element (left side) */}
        <path
          d="M 45 100 
             A 55 55 0 0 1 100 45
             A 55 55 0 0 1 155 100
             A 40 40 0 0 0 100 60
             A 40 40 0 0 0 60 100
             Z"
          fill="#1e3a5f"
          opacity="0.8"
        />

        {/* Gold swoosh arrow (bottom left to top right) */}
        <path
          d="M 60 130 
             Q 100 100 130 60
             L 140 70
             Q 110 110 70 140
             Z"
          fill="url(#goldArrowGrad)"
        />

        {/* Arrow head pointing up-right */}
        <path
          d="M 130 60 L 150 50 L 145 75 Z"
          fill="url(#goldArrowGrad)"
        />

        {/* Additional gold curved element at bottom */}
        <path
          d="M 70 140
             Q 85 145 100 143
             Q 115 141 125 135
             L 130 142
             Q 115 150 100 152
             Q 85 154 70 147
             Z"
          fill="url(#goldArrowGrad)"
          opacity="0.9"
        />

        {/* Shine overlay for 3D app-like effect */}
        <ellipse
          cx="90"
          cy="70"
          rx="50"
          ry="45"
          fill="url(#shine)"
        />

        {/* Subtle inner circle border for definition */}
        <circle
          cx="100"
          cy="100"
          r="85"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          opacity="0.15"
        />
      </g>
    </svg>
  );
}
