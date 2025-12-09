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
        {/* Enhanced blue gradient for left semicircle */}
        <linearGradient id="blueSemicircle" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a7ba7" stopOpacity={1} />
          <stop offset="25%" stopColor="#1a4d7d" stopOpacity={1} />
          <stop offset="50%" stopColor="#0d3857" stopOpacity={1} />
          <stop offset="100%" stopColor="#051f35" stopOpacity={1} />
        </linearGradient>

        {/* Blue shine/highlight */}
        <linearGradient id="blueShine" x1="0%" y1="0%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#6a9bc5" stopOpacity={0.6} />
          <stop offset="100%" stopColor="#1a4d7d" stopOpacity={0} />
        </linearGradient>

        {/* Enhanced gold gradient for arrow/swoosh */}
        <linearGradient id="goldArrow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffde0" stopOpacity={1} />
          <stop offset="10%" stopColor="#fffab5" stopOpacity={1} />
          <stop offset="25%" stopColor="#f5d76e" stopOpacity={1} />
          <stop offset="50%" stopColor="#d4a540" stopOpacity={1} />
          <stop offset="75%" stopColor="#a88a2e" stopOpacity={1} />
          <stop offset="100%" stopColor="#7d6820" stopOpacity={1} />
        </linearGradient>

        {/* Gold shine/highlight */}
        <linearGradient id="goldShine" x1="0%" y1="0%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#fffef0" stopOpacity={0.7} />
          <stop offset="100%" stopColor="#d4a540" stopOpacity={0} />
        </linearGradient>

        {/* 3D shadow effect */}
        <filter id="shadow3D" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset in="blur" dx="4" dy="6" result="offsetblur" />
          <feFlood floodColor="#000000" floodOpacity="0.4" result="offsetcolor" />
          <feComposite in="offsetcolor" in2="offsetblur" operator="in" result="offsetblur" />
          <feComposite in="offsetblur" in2="SourceAlpha" operator="in" result="offsetblur" />
          <feMerge>
            <feMergeNode in="offsetblur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow for depth */}
        <radialGradient id="innerShadow" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.2} />
          <stop offset="50%" stopColor="#ffffff" stopOpacity={0.05} />
          <stop offset="100%" stopColor="#000000" stopOpacity={0.1} />
        </radialGradient>
      </defs>

      {/* Main group with shadow */}
      <g filter="url(#shadow3D)">
        {/* Left Blue Semicircle (background) */}
        <path
          d="M 100 40 A 60 60 0 0 0 100 160 Q 100 160 100 100 Q 100 40 100 40 Z"
          fill="url(#blueSemicircle)"
        />

        {/* Blue shine layer */}
        <path
          d="M 100 40 A 60 60 0 0 0 100 160 Q 100 160 100 100 Q 100 40 100 40 Z"
          fill="url(#blueShine)"
          opacity="0.4"
        />

        {/* Gold swoosh/arrow shaft going up-right */}
        <path
          d="M 90 130 Q 120 100 140 60 L 155 75 Q 130 115 100 145 Z"
          fill="url(#goldArrow)"
        />

        {/* Gold arrow head - pointing up-right */}
        <path
          d="M 140 60 L 165 45 L 148 70 Z"
          fill="url(#goldArrow)"
        />

        {/* Gold shine on swoosh */}
        <path
          d="M 90 130 Q 120 100 140 60 L 155 75 Q 130 115 100 145 Z"
          fill="url(#goldShine)"
          opacity="0.5"
        />

        {/* Gold shine on arrow head */}
        <path
          d="M 140 60 L 165 45 L 148 70 Z"
          fill="url(#goldShine)"
          opacity="0.6"
        />

        {/* Inner shadow/depth effect */}
        <circle
          cx="100"
          cy="100"
          r="60"
          fill="url(#innerShadow)"
          opacity="0.3"
        />
      </g>
    </svg>
  );
}
