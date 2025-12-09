"use client";

import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-12 h-12" }: LogoProps) {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <defs>
        <linearGradient id="optima-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6C956" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
        <linearGradient id="optima-navy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a3a5a" />
          <stop offset="100%" stopColor="#0A2942" />
        </linearGradient>
      </defs>

      {/* Outer Navy Circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="95"
        fill="url(#optima-navy)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      />

      {/* Inner Gold Circle */}
      <motion.circle
        cx="100"
        cy="100"
        r="85"
        fill="url(#optima-gold)"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      />

      {/* "O" Shape - Outer Ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="#0A2942"
        strokeWidth="8"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      {/* "O" Shape - Inner Arc (creates letter O) */}
      <motion.circle
        cx="100"
        cy="100"
        r="40"
        fill="none"
        stroke="#0A2942"
        strokeWidth="4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      />

      {/* Upward Arrow/Checkmark - Success Symbol */}
      <motion.path
        d="M 80 115 L 95 100 L 120 85"
        stroke="#0A2942"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      />

      {/* Accent dots for visual appeal */}
      <motion.circle
        cx="140"
        cy="70"
        r="4"
        fill="#E6C956"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7, duration: 0.3 }}
      />
      <motion.circle
        cx="60"
        cy="130"
        r="3"
        fill="#E6C956"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.75, duration: 0.3 }}
      />
    </motion.svg>
  );
}
