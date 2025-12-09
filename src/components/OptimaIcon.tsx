/**
 * Optima Service Group Icon Component
 * 
 * Displays the official business logo
 * - Responsive scaling
 * - Works with image optimization
 * - Used in header, app bar, and PWA manifest
 */

import React from 'react';
import Image from 'next/image';

interface OptimaIconProps {
  className?: string;
  size?: number;
}

export default function OptimaIcon({ 
  className = '', 
  size = 48
}: OptimaIconProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Optima Service Group"
      width={size}
      height={size}
      className={className}
      priority={false}
    />
  );
}
