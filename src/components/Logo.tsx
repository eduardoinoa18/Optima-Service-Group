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
      viewBox="0 0 120 120"
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className || "w-full h-full"}
      aria-label="Optima Service Group Icon"
      role="img"
    >
      <defs>
        {/* Enhanced Blue Metallic Gradient with 3D effect */}
        <linearGradient id="blueGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a6fa5" stopOpacity={1} />
          <stop offset="25%" stopColor="#003d7a" stopOpacity={1} />
          <stop offset="50%" stopColor="#002652" stopOpacity={1} />
          <stop offset="75%" stopColor="#001a38" stopOpacity={1} />
          <stop offset="100%" stopColor="#000f1f" stopOpacity={1} />
        </linearGradient>

        {/* Blue Highlight for depth */}
        <linearGradient id="blueHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6a8fc5" stopOpacity={0.8} />
          <stop offset="50%" stopColor="#4a6fa5" stopOpacity={0.4} />
          <stop offset="100%" stopColor="#003d7a" stopOpacity={0} />
        </linearGradient>
        
        {/* Enhanced Gold Metallic Gradient with 3D effect */}
        <linearGradient id="goldGradient3D" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fffae6" stopOpacity={1} />
          <stop offset="15%" stopColor="#fff0b3" stopOpacity={1} />
          <stop offset="35%" stopColor="#f4d673" stopOpacity={1} />
          <stop offset="50%" stopColor="#d4af37" stopOpacity={1} />
          <stop offset="70%" stopColor="#aa882e" stopOpacity={1} />
          <stop offset="85%" stopColor="#8c6d1f" stopOpacity={1} />
          <stop offset="100%" stopColor="#6b5216" stopOpacity={1} />
        </linearGradient>

        {/* Gold Highlight for depth */}
        <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fffef0" stopOpacity={0.9} />
          <stop offset="40%" stopColor="#f4d673" stopOpacity={0.5} />
          <stop offset="100%" stopColor="#d4af37" stopOpacity={0} />
        </linearGradient>
        
        {/* Radial shine effect for metallic look */}
        <radialGradient id="metallicShine" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity={0.3} />
          <stop offset="50%" stopColor="#ffffff" stopOpacity={0.1} />
          <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
        </radialGradient>

        {/* Enhanced 3D Shadow with multiple layers */}
        <filter id="shadow3D" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur1" />
          <feOffset in="blur1" dx="3" dy="4" result="offsetBlur1" />
          <feGaussianBlur in="SourceAlpha" stdDeviation="1.5" result="blur2" />
          <feOffset in="blur2" dx="1.5" dy="2" result="offsetBlur2" />
          <feFlood floodColor="#000000" floodOpacity="0.4" result="color1" />
          <feComposite in="color1" in2="offsetBlur1" operator="in" result="shadow1" />
          <feFlood floodColor="#000000" floodOpacity="0.3" result="color2" />
          <feComposite in="color2" in2="offsetBlur2" operator="in" result="shadow2" />
          <feMerge>
            <feMergeNode in="shadow1" />
            <feMergeNode in="shadow2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner shadow for depth */}
        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
          <feOffset dx="1" dy="2" result="offsetblur" />
          <feFlood floodColor="#000000" floodOpacity="0.2" />
          <feComposite in2="offsetblur" operator="in" />
        </filter>
      </defs>

      {/* Main Group Container - Centered with enhanced 3D effect */}
      <g transform="translate(60, 60)" filter="url(#shadow3D)">
        <g transform="translate(-30, -35) scale(0.65)">
          
          {/* Dark Blue Swoosh - Main body with depth */}
          <path
            d="M50,10 A45,45 0 0,1 95,55 A45,45 0 0,1 60,95 L45,80 A25,25 0 0,0 75,55 A25,25 0 0,0 50,30 Z"
            fill="url(#blueGradient3D)"
          />
          
          {/* Blue highlight layer for 3D depth */}
          <path
            d="M50,10 A45,45 0 0,1 95,55 A45,45 0 0,1 60,95 L45,80 A25,25 0 0,0 75,55 A25,25 0 0,0 50,30 Z"
            fill="url(#blueHighlight)"
            opacity="0.4"
          />

          {/* Gold Swoosh and Arrow - Main body with enhanced metallic look */}
          <path
            d="M50,100 A45,45 0 0,1 5,55 C5,45 8,35 12,28 L30,45 C24,50 22,60 25,70 A25,25 0 0,0 50,80 C60,80 68,75 72,68 L90,15 L100,15 L82,70 C75,90 60,100 50,100 Z"
            fill="url(#goldGradient3D)"
          />
          
          {/* Gold highlight layer for 3D depth */}
          <path
            d="M50,100 A45,45 0 0,1 5,55 C5,45 8,35 12,28 L30,45 C24,50 22,60 25,70 A25,25 0 0,0 50,80 C60,80 68,75 72,68 L90,15 L100,15 L82,70 C75,90 60,100 50,100 Z"
            fill="url(#goldHighlight)"
            opacity="0.5"
          />
           
          {/* Arrow Head with enhanced 3D effect */}
          <path
            d="M90,15 L105,15 L105,30 L90,15 Z"
            fill="url(#goldGradient3D)"
          />
          
          {/* Arrow head highlight */}
          <path
            d="M90,15 L105,15 L105,30 L90,15 Z"
            fill="url(#goldHighlight)"
            opacity="0.6"
          />

          {/* Metallic shine overlay for extra depth */}
          <ellipse
            cx="50"
            cy="40"
            rx="40"
            ry="35"
            fill="url(#metallicShine)"
            opacity="0.3"
          />
        </g>
      </g>
    </svg>
  );
}
