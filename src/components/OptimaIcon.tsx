/**
 * Optima Service Group Icon Component
 * 
 * Stylized Open Loop / Rising Swoosh - Brand Identity Icon
 * - Gold (#F5C440) on Navy (#0F213A) backgrounds
 * - White (#FFFFFF) on bright or Gold backgrounds
 * - Scalable SVG with currentColor for dynamic styling
 * - Clear space: minimum half the icon height around it
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
      aria-label="Optima Service Group Icon"
    >
      {/* Elegant Rising Swoosh - Brand Identity */}
      <path
        d="M15 80 Q25 60, 35 50 Q45 40, 55 35 Q65 30, 75 28 Q82 26, 88 30"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="1"
      />
      
      {/* Dynamic accent swoosh */}
      <path
        d="M20 72 Q28 58, 38 48 Q48 38, 58 33"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      
      {/* Base Accent Circle */}
      <circle
        cx="15"
        cy="80"
        r="5"
        fill="currentColor"
        opacity="1"
      />
      
      {/* Peak Accent Circle */}
      <circle
        cx="88"
        cy="30"
        r="5"
        fill="currentColor"
        opacity="1"
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

