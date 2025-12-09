/**
 * Optima Service Group Icon Component
 * 
 * Clean SVG icon based on the official logo
 * - Geometric "O" mark with professional styling
 * - Supports color customization via currentColor
 * - Optimized for all screen sizes
 */

import React from 'react';

interface OptimaIconProps {
  className?: string;
  size?: number;
}

export default function OptimaIcon({ 
  className = '', 
  size = 48
}: OptimaIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Optima Service Group Logo"
    >
      {/* Outer Circle with Gold Ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        stroke="currentColor"
        strokeWidth="6"
        fill="none"
        opacity="0.9"
      />
      
      {/* Inner Circle - Solid Fill */}
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="currentColor"
        opacity="0.15"
      />
      
      {/* Center "O" Letter Mark */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontSize="42"
        fontWeight="700"
        fontFamily="system-ui, -apple-system, sans-serif"
        letterSpacing="-2"
      >
        O
      </text>
    </svg>
  );
}

