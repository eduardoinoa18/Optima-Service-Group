/**
 * Optima Service Group Icon Component
 * 
 * Dynamic SVG icon following blueprint specifications:
 * - Uses CURRENTCOLOR for easy theming (Gold/White)
 * - Optimized single-path SVG
 * - Scales perfectly for all screen densities
 * - Minimum file size for PWA performance
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
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-labelledby="optimaIconTitle"
    >
      <title id="optimaIconTitle">Optima Service Group Icon</title>
      
      {/* Main Icon Shape - Open Loop/Swoosh following blueprint */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6C16.27 6 10 12.27 10 20C10 27.73 16.27 34 24 34C31.73 34 38 27.73 38 20V18H36V20C36 26.63 30.63 32 24 32C17.37 32 12 26.63 12 20C12 13.37 17.37 8 24 8H34C34 11.31 31.31 14 28 14H24C19.58 14 16 17.58 16 22V24H14V22C14 16.48 18.48 12 24 12H28C32.42 12 36 8.42 36 4V6C36 6 38 6 38 6M24 18C21.79 18 20 19.79 20 22C20 24.21 21.79 26 24 26C26.21 26 28 24.21 28 22C28 19.79 26.21 18 24 18M24 20C25.1 20 26 20.9 26 22C26 23.1 25.1 24 24 24C22.9 24 22 23.1 22 22C22 20.9 22.9 20 24 20Z"
        fill="currentColor"
      />
      
      {/* Dynamic Accent Element */}
      <path
        d="M32 12C32 12 35 9 39 7C40.5 6.2 42 5.5 43 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
