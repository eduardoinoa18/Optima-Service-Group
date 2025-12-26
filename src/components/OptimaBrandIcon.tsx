/**
 * Optima Service Group Brand Icon
 * 3D Style Icon with Navy Circle and Gold Arrow
 * - Navy (#0F213A) circular element
 * - Gold (#D4AF37) upward arrow
 * - 3D depth effects with gradients and shadows
 */

import React from 'react';

interface OptimaBrandIconProps {
  className?: string;
  size?: number;
  showGlow?: boolean;
}

export default function OptimaBrandIcon({
  className = '',
  size = 120,
  showGlow = false,
}: OptimaBrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Optima Service Group Brand Icon"
    >
      <defs>
        {/* Gradients for 3D effect */}
        <linearGradient id="navyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#1a3a52', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0F213A', stopOpacity: 1 }} />
        </linearGradient>

        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F5E6C8', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: '#D4AF37', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#B8956A', stopOpacity: 1 }} />
        </linearGradient>

        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="2" dy="3" stdDeviation="3" floodOpacity="0.3" />
        </filter>

        {showGlow && (
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        )}
      </defs>

      {/* Navy Circle Base (Left Side - C Shape) */}
      <circle
        cx="70"
        cy="100"
        r="55"
        fill="url(#navyGradient)"
        filter="url(#shadow)"
      />

      {/* Navy Circle Shadow/Depth */}
      <circle
        cx="70"
        cy="100"
        r="55"
        fill="none"
        stroke="#051424"
        strokeWidth="2"
        opacity="0.5"
      />

      {/* Gold Arrow Shaft - Main body curving upward */}
      <path
        d="M 100 160 Q 115 140 130 100 Q 140 75 150 50"
        stroke="url(#goldGradient)"
        strokeWidth="28"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#shadow)"
      />

      {/* Gold Arrow Shaft Shadow */}
      <path
        d="M 100 160 Q 115 140 130 100 Q 140 75 150 50"
        stroke="#8B7355"
        strokeWidth="26"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.4"
        style={{ transform: 'translate(2px, 2px)' }}
      />

      {/* Gold Arrow Head - Top right triangle */}
      <path
        d="M 150 50 L 170 35 L 155 55 Z"
        fill="url(#goldGradient)"
        filter="url(#shadow)"
      />

      {/* Arrow Head Shadow */}
      <path
        d="M 150 50 L 170 35 L 155 55 Z"
        fill="#8B7355"
        opacity="0.4"
        style={{ transform: 'translate(2px, 2px)' }}
      />

      {/* Inner highlight on navy circle for depth */}
      <ellipse
        cx="50"
        cy="75"
        rx="20"
        ry="25"
        fill="white"
        opacity="0.1"
      />

      {/* Arrow highlight for shine */}
      <path
        d="M 103 158 Q 117 138 130 98"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
