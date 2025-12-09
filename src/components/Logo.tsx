"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  // Create a simplified process flow logo inspired by the Optima diagram
  // Uses gold, navy, and grey to represent the three-lane workflow

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const boxVariants = {
    hidden: { scale: 0, rotateZ: -180 },
    visible: {
      scale: 1,
      rotateZ: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const arrowVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6C956" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="navy-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a3a5a" />
          <stop offset="100%" stopColor="#002B5C" />
        </linearGradient>
        <linearGradient id="grey-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F5" />
          <stop offset="100%" stopColor="#E8E8E8" />
        </linearGradient>
      </defs>

      {/* Background Circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="95"
        fill="rgba(10, 41, 66, 0.05)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Three-lane workflow visualization - simplified */}
      <motion.g variants={containerVariants} initial="hidden" animate="visible">
        {/* Left box (Gold - Afiliado) */}
        <motion.g variants={boxVariants}>
          <rect x="15" y="60" width="45" height="35" rx="4" fill="url(#gold-gradient)" stroke="#D4AF37" strokeWidth="1.5" />
          <text x="37.5" y="83" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="system-ui">
            INPUT
          </text>
        </motion.g>

        {/* Right box (Navy - Zoho System) */}
        <motion.g variants={boxVariants} transition={{ delay: 0.1 }}>
          <rect x="77.5" y="60" width="45" height="35" rx="4" fill="url(#navy-gradient)" stroke="#002B5C" strokeWidth="1.5" />
          <text x="100" y="83" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white" fontFamily="system-ui">
            PROCESS
          </text>
        </motion.g>

        {/* Far right box (Grey - Administración) */}
        <motion.g variants={boxVariants} transition={{ delay: 0.2 }}>
          <rect x="140" y="60" width="45" height="35" rx="4" fill="url(#grey-gradient)" stroke="#D0D0D0" strokeWidth="1.5" />
          <text x="162.5" y="83" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#333" fontFamily="system-ui">
            OUTPUT
          </text>
        </motion.g>

        {/* Arrow 1: Gold to Navy */}
        <motion.path
          d="M 60 77.5 L 77.5 77.5"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          variants={arrowVariants}
          transition={{ delay: 0.3 }}
        />
        <motion.polygon
          points="77.5,77.5 72,75 72,80"
          fill="#D4AF37"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4 }}
        />

        {/* Arrow 2: Navy to Grey */}
        <motion.path
          d="M 122.5 77.5 L 140 77.5"
          stroke="#002B5C"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          variants={arrowVariants}
          transition={{ delay: 0.35 }}
        />
        <motion.polygon
          points="140,77.5 134.5,75 134.5,80"
          fill="#002B5C"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.45 }}
        />

        {/* Bottom flow lines - showing process circulation */}
        <motion.path
          d="M 162.5 95 Q 162.5 115, 100 115 Q 37.5 115, 37.5 95"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="4,4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        />

        {/* Center accent - checkmark/success */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <circle cx="100" cy="140" r="12" fill="#D4AF37" fillOpacity="0.2" stroke="#D4AF37" strokeWidth="1" />
          <path d="M 96 140 L 99 143 L 104 138" stroke="#D4AF37" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </motion.g>

      {/* Decorative elements */}
      <motion.circle
        cx="30"
        cy="30"
        r="2"
        fill="#D4AF37"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.8, duration: 0.3 }}
      />
      <motion.circle
        cx="170"
        cy="170"
        r="2"
        fill="#002B5C"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.85, duration: 0.3 }}
      />
    </motion.svg>
  );
}
