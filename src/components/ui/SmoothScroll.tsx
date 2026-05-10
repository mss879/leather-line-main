"use client";

import React, { useRef, useState, useCallback, useLayoutEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  // We need to keep track of the scrollable content's height
  const [pageHeight, setPageHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Resize observer to update the body height when content height changes
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setPageHeight(entry.contentRect.height);
      }
    });
    
    resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Framer Motion scroll physics
  const { scrollY } = useScroll();
  const smoothY = useSpring(scrollY, {
    damping: 25,
    mass: 0.1,
    stiffness: 150,
    restDelta: 0.001
  });

  const y = useTransform(smoothY, (value) => -value);

  return (
    <>
      {/* Invisible div to force the body to scroll normally and show a scrollbar */}
      <div style={{ height: pageHeight }} />
      
      {/* The actual content wrapper, fixed to the viewport and transformed smoothly */}
      <motion.div
        ref={contentRef}
        style={{ y }}
        className="fixed top-0 left-0 w-full overflow-hidden will-change-transform"
      >
        {children}
      </motion.div>
    </>
  );
};
