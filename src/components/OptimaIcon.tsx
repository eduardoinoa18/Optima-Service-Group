/**
 * Optima Service Group Icon Component
 * 
 * Dynamic SVG icon extracted from brand logo
 * - Uses currentColor for easy theming (Gold/White)
 * - Optimized for PWA and mobile displays
 * - Scales perfectly for all screen densities
 */

import React from 'react';

interface OptimaIconProps {
  className?: string;
  size?: number;
  color?: string;
}

export default function OptimaIcon({ 
  className = '', 
  size = 48,
  color = 'currentColor'
}: OptimaIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Optima Service Group Icon"
    >
      <title>Optima Service Group Icon</title>
      
      {/* Main Icon Shape - Dynamic Loop/Swoosh */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 10C31.25 10 16 25.25 16 44C16 62.75 31.25 78 50 78C68.75 78 84 62.75 84 44V40H80V44C80 60.54 66.54 74 50 74C33.46 74 20 60.54 20 44C20 27.46 33.46 14 50 14H76C76 22.28 69.28 29 61 29H50C38.95 29 30 37.95 30 49V54H26V49C26 35.75 36.75 25 50 25H61C71.49 25 80 16.49 80 6V10C80 10 84 10 84 10M50 35C41.72 35 35 41.72 35 50C35 58.28 41.72 65 50 65C58.28 65 65 58.28 65 50C65 41.72 58.28 35 50 35M50 39C56.08 39 61 43.92 61 50C61 56.08 56.08 61 50 61C43.92 61 39 56.08 39 50C39 43.92 43.92 39 50 39Z"
        fill={color}
      />
      
      {/* Accent Element - Dynamic Rising Line */}
      <path
        d="M70 25C70 25 75 20 82 15C85 13 88 11 90 10"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// Preset variations for common use cases
export function OptimaIconGold({ className = '', size = 48 }: Omit<OptimaIconProps, 'color'>) {
  return <OptimaIcon className={className} size={size} color="#F5C440" />;
}

export function OptimaIconWhite({ className = '', size = 48 }: Omit<OptimaIconProps, 'color'>) {
  return <OptimaIcon className={className} size={size} color="#FFFFFF" />;
}
