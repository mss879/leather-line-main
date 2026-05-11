"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";

const CinematicScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Sync video time with scroll progress
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      // Use raw scrollYProgress for instant video scrubbing rather than spring to prevent lag
      videoRef.current.currentTime = latest * duration;
    }
  });

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // ==========================================
  // HERO SECTION (0.0 to 1.0 — the entire scroll)
  // ==========================================
  
  // 1. Heading separates
  const headingMoveLeft = useTransform(smoothProgress, [0, 0.35], ["0vw", "-100vw"]);
  const headingMoveRight = useTransform(smoothProgress, [0, 0.35], ["0vw", "100vw"]);
  const headingOpacity = useTransform(smoothProgress, [0.1, 0.35], [1, 0]);

  // 2. Description slides in from left
  const descX = useTransform(smoothProgress, [0.35, 0.55], ["-100vw", "0vw"]); 
  const descOpacity = useTransform(smoothProgress, [0.35, 0.45], [0, 1]); 

  // Keep hero container fully visible at the end so there's no gap
  const heroContainerOpacity = useTransform(smoothProgress, [0.85, 1], [1, 1]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh]">
      <motion.div 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white"
      >
        {/* Background Video synced to scroll */}
        <motion.div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: heroContainerOpacity }}>
           <video 
             ref={videoRef}
             src="/shoe_falling_optimized.mp4"
             className="w-full h-full object-cover"
             muted
             playsInline
             onLoadedMetadata={handleLoadedMetadata}
             preload="auto"
           />
        </motion.div>

        {/* HERO ELEMENTS */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none flex flex-col items-center justify-center" style={{ opacity: heroContainerOpacity }}>
          {/* Typography */}
          <div className="flex overflow-hidden justify-center w-full drop-shadow-sm">
            <motion.h1
              style={{ x: headingMoveLeft, opacity: headingOpacity }}
              className="text-[12vw] md:text-[10vw] leading-none tracking-tighter font-black text-black uppercase pr-2"
            >
              LEATHER
            </motion.h1>
            <motion.h1
              style={{ x: headingMoveRight, opacity: headingOpacity }}
              className="text-[12vw] md:text-[10vw] leading-none tracking-tighter font-black text-black uppercase pl-2"
            >
              LINE
            </motion.h1>
          </div>
          <div className="absolute inset-y-0 left-6 md:left-16 lg:left-24 flex items-center justify-start pointer-events-none z-20 max-w-[50vw]">
            <motion.div 
              style={{ x: descX, opacity: descOpacity }}
              className="drop-shadow-md text-left"
            >
              <p className="text-lg md:text-2xl lg:text-4xl tracking-[0.15em] md:tracking-[0.25em] font-black text-black uppercase leading-[1.3] md:leading-[1.3]">
                Uncompromising <br /> 
                Quality. <br /> 
                Absolute Precision.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40 bg-white/50 backdrop-blur-md px-2 py-1 rounded">Scroll</span>
          <motion.div
            className="w-[1px] h-8 bg-black/20 relative overflow-hidden"
            initial={{ opacity: 0.5 }}
          >
            <motion.div 
              className="absolute top-0 left-0 w-full bg-black"
              animate={{ height: ["0%", "100%", "0%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CinematicScroll;
