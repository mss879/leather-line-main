"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const cursorX = useSpring(0, { stiffness: 400, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 400, damping: 28 });
  
  const outerX = useSpring(0, { stiffness: 150, damping: 20 });
  const outerY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    setIsMounted(true);
    
    // Hide default cursor globally
    document.body.style.cursor = 'none';

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      outerX.set(e.clientX);
      outerY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check for clickable elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }

      // Check for custom cursor data attributes
      const customElement = target.closest('[data-cursor]') as HTMLElement;
      if (customElement) {
        setIsHovering(true);
        setCursorText(customElement.getAttribute('data-cursor-text') || "");
      } else {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [cursorX, cursorY, outerX, outerY]);

  // Don't render on SSR or touch devices (heuristic: width < 768 usually means touch, but relying on isMounted is safer to avoid hydration errors)
  if (!isMounted || typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    if (typeof document !== 'undefined') document.body.style.cursor = 'auto';
    return null;
  }

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isPointer && !isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
      />
      
      {/* Outer Ring / Hover State */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none z-[9998] mix-blend-difference bg-white"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
          width: 40,
          height: 40,
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: isHovering ? 2.5 : isPointer ? 1.5 : 0.5,
          opacity: isHovering ? 1 : isPointer ? 0.5 : 0.2,
          backgroundColor: isHovering ? '#fff' : 'transparent',
          border: isHovering ? 'none' : '1px solid #fff'
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isHovering && (
          <motion.span 
            className="text-black text-[6px] font-black tracking-widest uppercase mix-blend-normal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            {cursorText || "VIEW"}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
