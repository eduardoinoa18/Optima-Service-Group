"use client";

import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
}

const Logo = ({ className = "w-12 h-12" }: LogoProps) => {
  return (
    <motion.svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ rotate: 0, scale: 1 }}
      whileHover={{ rotate: 5, scale: 1.05 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Navy Circle Background */}
      <circle cx="100" cy="100" r="85" fill="#0A2942" />
      
      {/* Inner light circle */}
      <circle cx="100" cy="100" r="75" fill="#1a3a5a" />
      
      {/* 3D Gold Arrow - Main Path */}
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4E4B3" stopOpacity={1} />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity={1} />
          <stop offset="100%" stopColor="#B8941F" stopOpacity={1} />
        </linearGradient>
        <linearGradient id="arrowShadow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity={0.3} />
          <stop offset="100%" stopColor="#000000" stopOpacity={0} />
        </linearGradient>
      </defs>
      
      {/* Arrow bottom curve (swoosh base) */}
      <motion.path
        d="M 70 140 Q 60 120, 70 100 Q 80 80, 100 70 Q 120 60, 140 70 L 130 85 Q 115 80, 100 88 Q 88 95, 85 110 Q 83 120, 90 130 Z"
        fill="url(#goldGradient)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      
      {/* Arrow upward diagonal path */}
      <motion.path
        d="M 90 130 L 145 55 L 165 65 L 110 140 Z"
        fill="url(#goldGradient)"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      
      {/* Arrow head */}
      <motion.path
        d="M 145 55 L 165 65 L 175 45 L 170 30 L 155 35 Z"
        fill="#F4E4B3"
        initial={{ scale: 0, transformOrigin: "165px 50px" }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      />
      
      {/* 3D Shadow effect for depth */}
      <motion.path
        d="M 92 132 L 147 57 L 145 55 L 90 130 Z"
        fill="url(#arrowShadow)"
        opacity="0.4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      {/* Highlight on arrow for 3D effect */}
      <motion.path
        d="M 95 128 Q 110 110, 125 90 L 127 92 Q 112 112, 97 130 Z"
        fill="#FFFFFF"
        opacity="0.3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      />
      
      {/* Subtle outer glow */}
      <circle
        cx="100"
        cy="100"
        r="85"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="2"
        opacity="0.3"
      />
    </motion.svg>
  );
};

export default Logo;
