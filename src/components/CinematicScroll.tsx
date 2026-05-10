"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CinematicScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Reduced height: Hero only, no brand story
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // ==========================================
  // HERO SECTION (0.0 to 1.0 — the entire scroll)
  // ==========================================
  
  // 1. Heading separates
  const headingMoveLeft = useTransform(smoothProgress, [0, 0.35], ["0vw", "-100vw"]);
  const headingMoveRight = useTransform(smoothProgress, [0, 0.35], ["0vw", "100vw"]);
  const headingOpacity = useTransform(smoothProgress, [0.1, 0.35], [1, 0]);

  // 2. Description zooms
  const descY = useTransform(smoothProgress, [0.1, 0.45], ["0vh", "-12vh"]); 
  const descScale = useTransform(smoothProgress, [0.1, 0.55], [1, 3.5]);
  const descOpacity = useTransform(smoothProgress, [0.55, 0.75], [1, 0]);

  // 3. Shoes Parallax
  const shoe1Y = useTransform(smoothProgress, [0, 0.8], ["100vh", "-150vh"]);
  const shoe2Y = useTransform(smoothProgress, [0, 0.8], ["120vh", "-130vh"]);
  const shoe3Y = useTransform(smoothProgress, [0, 0.8], ["140vh", "-110vh"]);
  const shoe4Y = useTransform(smoothProgress, [0, 0.8], ["160vh", "-90vh"]);

  const shoe1Rotate = useTransform(smoothProgress, [0, 0.8], [0, -20]);
  const shoe2Rotate = useTransform(smoothProgress, [0, 0.8], [15, -10]);
  const shoe3Rotate = useTransform(smoothProgress, [0, 0.8], [-15, 25]);
  const shoe4Rotate = useTransform(smoothProgress, [0, 0.8], [10, -30]);

  // Hero container fade out at the end
  const heroContainerOpacity = useTransform(smoothProgress, [0.85, 1], [1, 0]);

  // Scroll indicator
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[300vh]">
      <motion.div 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center bg-white"
      >
        {/* HERO ELEMENTS */}
        <motion.div className="absolute inset-0 z-10 pointer-events-none" style={{ opacity: heroContainerOpacity }}>
          {/* Typography */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex overflow-hidden justify-center w-full">
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
            <motion.div 
              style={{ y: descY, scale: descScale, opacity: descOpacity }}
              className="mt-8 flex flex-col items-center"
            >
              <p className="text-sm tracking-[0.4em] font-bold text-black uppercase text-center">
                Uncompromising Quality. <br /> Absolute Precision.
              </p>
            </motion.div>
          </div>

          {/* Floating Shoes */}
          {/* S1 (Top Left) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl left-[10%]" style={{ y: shoe1Y, rotate: shoe1Rotate }}>
            <img src="/hero_color_1.webp" alt="Oxfords" className="w-full h-auto object-contain" />
          </motion.div>
          {/* S2 (Top Right) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl right-[2%]" style={{ y: shoe2Y, rotate: shoe2Rotate }}>
            <img src="/hero_color_2.webp" alt="Sneakers" className="w-full h-auto object-contain" />
          </motion.div>
          {/* S3 (Bottom Left) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl left-[5%]" style={{ y: shoe3Y, rotate: shoe3Rotate }}>
            <img src="/hero_color_3.webp" alt="Boots" className="w-full h-auto object-contain" />
          </motion.div>
          {/* S4 (Bottom Right) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl right-[10%]" style={{ y: shoe4Y, rotate: shoe4Rotate }}>
            <img src="/hero_color_4.webp" alt="Loafers" className="w-full h-auto object-contain" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
          style={{ opacity: scrollIndicatorOpacity }}
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">Scroll</span>
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
