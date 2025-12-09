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
        {/* Blue Gradient for swoosh */}
        <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#003d7a" stopOpacity={1} />
          <stop offset="100%" stopColor="#001a38" stopOpacity={1} />
        </linearGradient>

        {/* Gold Gradient for swoosh and arrow */}
        <linearGradient id="goldGradient" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffe599" stopOpacity={1} />
          <stop offset="50%" stopColor="#d4af37" stopOpacity={1} />
          <stop offset="100%" stopColor="#aa882e" stopOpacity={1} />
        </linearGradient>

        {/* Drop shadow filter */}
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur" />
          <feOffset in="blur" dx="2" dy="3" result="offsetBlur" />
          <feMerge>
            <feMergeNode in="offsetBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main Group Container */}
      <motion.g transform="translate(200, 200)" filter="url(#shadow)">
        {/* Icon Group */}
        <motion.g
          transform="translate(-75, -100) scale(1.5)"
          variants={iconVariants}
        >
          {/* Dark Blue Swoosh (Top/Left part of circle) */}
          <motion.path
            d="M50,10 A45,45 0 0,1 95,55 A45,45 0 0,1 60,95 L45,80 A25,25 0 0,0 75,55 A25,25 0 0,0 50,30 Z"
            fill="url(#blueGradient)"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
          />

          {/* Gold Swoosh and Arrow Combination */}
          <motion.path
            d="M50,100 A45,45 0 0,1 5,55 C5,45 8,35 12,28 L30,45 C24,50 22,60 25,70 A25,25 0 0,0 50,80 C60,80 68,75 72,68 L90,15 L100,15 L82,70 C75,90 60,100 50,100 Z"
            fill="url(#goldGradient)"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.8,
              delay: 0.4,
            }}
          />

          {/* Arrow Head */}
          <motion.path
            d="M90,15 L105,15 L105,30 L90,15 Z"
            fill="url(#goldGradient)"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              delay: 0.6,
            }}
          />
        </motion.g>

        {/* Text Group - conditionally rendered */}
        {includeText && (
          <motion.g
            transform="translate(0, 100)"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Primary Text */}
            <text
              x="0"
              y="0"
              fontSize="24"
              fontWeight="bold"
              fill="#001a38"
              letterSpacing="1"
            >
              OPTIMA SERVICE GROUP
            </text>

            {/* Secondary Text */}
            <text
              x="0"
              y="22"
              fontSize="14"
              fontWeight="normal"
              fill="#001a38"
            >
              Your Solution, All in One Place.
            </text>
          </motion.g>
        )}
      </motion.g>
    </motion.svg>
  );
}
