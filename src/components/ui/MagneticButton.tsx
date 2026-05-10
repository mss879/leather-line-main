"use client";

import React, { useRef } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ 
  children, 
  strength = 30, 
  className = "",
  onClick
}: MagneticButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.5 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    x.set(middleX * (strength / 100));
    y.set(middleY * (strength / 100));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y }}
      className={`relative ${className}`}
    >
      <motion.span 
        style={{ x: useTransform(x, v => v * 0.4), y: useTransform(y, v => v * 0.4) }}
        className="block w-full h-full"
      >
        {children}
      </motion.span>
    </motion.button>
  );
};
