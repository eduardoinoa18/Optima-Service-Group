"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  width?: string;
  height?: string;
  includeText?: boolean;
}

export default function Logo({
  className = "w-12 h-12",
  width = "300px",
  height = "auto",
  includeText = true,
}: LogoProps) {
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={className ? undefined : width}
      height={className ? undefined : height}
      className={className || "w-full h-full"}
      aria-label="Optima Service Group Logo"
      role="img"
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.02 }}
    >
      <defs>
        {/* Blue Gradient - darker, more metallic */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4A6B8A" stopOpacity={1} />
          <stop offset="50%" stopColor="#2C4A6B" stopOpacity={1} />
          <stop offset="100%" stopColor="#1A2E46" stopOpacity={1} />
        </linearGradient>

        {/* Gold Gradient - more metallic sheen */}
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4E4C1" stopOpacity={1} />
          <stop offset="40%" stopColor="#D4AF37" stopOpacity={1} />
          <stop offset="100%" stopColor="#B8941F" stopOpacity={1} />
        </linearGradient>

        {/* Enhanced drop shadow for 3D effect */}
        <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset in="blur" dx="3" dy="5" result="offsetBlur" />
          <feComponentTransfer in="offsetBlur" result="darkerShadow">
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode in="darkerShadow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Inner highlight for depth */}
        <radialGradient id="highlightGradient">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
        </radialGradient>
      </defs>

      {/* Main Group Container */}
      <motion.g transform="translate(200, 200)" filter="url(#shadow)">
        {/* Icon Group - Circular swoosh with arrow */}
        <motion.g
          transform="translate(0, -50) scale(1.8)"
          variants={iconVariants}
        >
          {/* Navy Blue Swoosh (Top half) - thicker, more prominent */}
          <motion.path
            d="M 0,0 A 50,50 0 1,1 50,50 L 35,35 A 30,30 0 1,0 0,0 Z"
            fill="url(#blueGradient)"
            stroke="#1A2E46"
            strokeWidth="0.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Inner highlight on blue swoosh */}
          <motion.path
            d="M 5,5 A 45,45 0 0,1 45,45"
            fill="none"
            stroke="url(#highlightGradient)"
            strokeWidth="2"
            opacity={0.4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8 }}
          />

          {/* Gold Swoosh/Arrow (Bottom half emerging to arrow) */}
          <motion.path
            d="M 0,0 A 50,50 0 0,0 -50,50 L -35,35 A 30,30 0 0,1 0,0 L 55,-20 L 65,-10 L 70,-20 L 65,-30 L 55,-25 Z"
            fill="url(#goldGradient)"
            stroke="#B8941F"
            strokeWidth="0.5"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          />

          {/* Inner highlight on gold swoosh */}
          <motion.path
            d="M -5,5 A 45,45 0 0,0 -45,45"
            fill="none"
            stroke="url(#highlightGradient)"
            strokeWidth="2"
            opacity={0.4}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1 }}
          />
        </motion.g>

        {/* Text Group - conditionally rendered */}
        {includeText && (
          <motion.g
            transform="translate(0, 100)"
            textAnchor="middle"
            fontFamily="Montserrat, Arial, sans-serif"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Primary Text */}
            <text
              x="0"
              y="0"
              fontSize="26"
              fontWeight="700"
              fill="#1A2E46"
              letterSpacing="2"
            >
              OPTIMA SERVICE GROUP
            </text>

            {/* Secondary Text */}
            <text
              x="0"
              y="26"
              fontSize="14"
              fontWeight="400"
              fill="#2C4A6B"
              letterSpacing="0.5"
            >
              Your Solution, All in One Place.
            </text>
          </motion.g>
        )}
      </motion.g>
    </motion.svg>
  );
}
