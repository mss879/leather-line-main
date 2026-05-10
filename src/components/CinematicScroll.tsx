"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CinematicScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Total height: 650vh (250vh Hero + 400vh BrandStory)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // Global Background Color (Always white)
  const sectionBgColor = useTransform(smoothProgress, [0.75, 0.85], ["#FFFFFF", "#FFFFFF"]);

  // ==========================================
  // PHASE 1: HERO SECTION (0.0 to 0.38)
  // ==========================================
  
  // 1. Heading separates
  const headingMoveLeft = useTransform(smoothProgress, [0, 0.15], ["0vw", "-100vw"]);
  const headingMoveRight = useTransform(smoothProgress, [0, 0.15], ["0vw", "100vw"]);
  const headingOpacity = useTransform(smoothProgress, [0.05, 0.15], [1, 0]);

  // 2. Description (Starts moving slightly earlier to feel quicker)
  const descY = useTransform(smoothProgress, [0.05, 0.2], ["0vh", "-12vh"]); 
  const descScale = useTransform(smoothProgress, [0.05, 0.25], [1, 3.5]);
  const descOpacity = useTransform(smoothProgress, [0.25, 0.35], [1, 0]);

  // 3. Shoes Parallax (They fly completely off the top of the screen by 0.35)
  const shoe1Y = useTransform(smoothProgress, [0, 0.35], ["100vh", "-150vh"]);
  const shoe2Y = useTransform(smoothProgress, [0, 0.35], ["120vh", "-130vh"]);
  const shoe3Y = useTransform(smoothProgress, [0, 0.35], ["140vh", "-110vh"]);
  const shoe4Y = useTransform(smoothProgress, [0, 0.35], ["160vh", "-90vh"]);

  const shoe1Rotate = useTransform(smoothProgress, [0, 0.35], [0, -20]);
  const shoe2Rotate = useTransform(smoothProgress, [0, 0.35], [15, -10]);
  const shoe3Rotate = useTransform(smoothProgress, [0, 0.35], [-15, 25]);
  const shoe4Rotate = useTransform(smoothProgress, [0, 0.35], [10, -30]);

  // Hero container fade out completely to prevent ANY overlap on weird aspect ratios
  const heroContainerOpacity = useTransform(smoothProgress, [0.35, 0.38], [1, 0]);

  // ==========================================
  // PHASE 2: BRAND STORY (0.35 to 1.0)
  // ==========================================

  // Slide 1: Heritage (0.35 to 0.6)
  const slide1Opacity = useTransform(smoothProgress, [0.35, 0.45, 0.55, 0.6], [0, 1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0.35, 0.45, 0.55, 0.6], ["10vh", "0vh", "0vh", "-10vh"]);
  const img1Y = useTransform(smoothProgress, [0.35, 0.6], ["20vh", "-20vh"]);
  const img1Scale = useTransform(smoothProgress, [0.35, 0.6], [1, 1.1]);
  const img1Clip = useTransform(smoothProgress, [0.35, 0.45], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]);

  // Slide 2: Craft (0.58 to 0.8)
  const slide2Opacity = useTransform(smoothProgress, [0.58, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.58, 0.65, 0.75, 0.8], ["10vh", "0vh", "0vh", "-10vh"]);
  const img2Y = useTransform(smoothProgress, [0.58, 0.8], ["20vh", "-20vh"]);
  const img2Scale = useTransform(smoothProgress, [0.58, 0.8], [1, 1.1]);
  const img2Clip = useTransform(smoothProgress, [0.58, 0.65], ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]);

  // Slide 3: Future (0.78 to 1.0)
  const slide3Opacity = useTransform(smoothProgress, [0.78, 0.88, 1], [0, 1, 1]);
  const text3Y = useTransform(smoothProgress, [0.78, 0.88, 1], ["10vh", "0vh", "0vh"]);
  const img3Scale = useTransform(smoothProgress, [0.78, 1], [1.2, 1]);

  // Pointer events to prevent non-visible slides from intercepting clicks
  const pointerEvents1 = useTransform(smoothProgress, [0.35, 0.6], ["auto", "none"]);
  const pointerEvents2 = useTransform(smoothProgress, [0.58, 0.8], ["auto", "none"]);
  const pointerEvents3 = useTransform(smoothProgress, [0.78, 1], ["auto", "auto"]); // final slide is clickable

  return (
    <section ref={containerRef} className="relative w-full h-[650vh]">
      <motion.div 
        className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center"
        style={{ backgroundColor: sectionBgColor }}
      >
        {/* ========================================== */}
        {/* HERO ELEMENTS                              */}
        {/* ========================================== */}
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
            <img src="/hero_color_1.png" alt="Oxfords" className="w-full h-auto object-contain" />
          </motion.div>
          {/* S2 (Top Right) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl right-[2%]" style={{ y: shoe2Y, rotate: shoe2Rotate }}>
            <img src="/hero_color_2.png" alt="Sneakers" className="w-full h-auto object-contain" />
          </motion.div>
          {/* S3 (Bottom Left) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl left-[5%]" style={{ y: shoe3Y, rotate: shoe3Rotate }}>
            <img src="/hero_color_3.png" alt="Boots" className="w-full h-auto object-contain" />
          </motion.div>
          {/* S4 (Bottom Right) */}
          <motion.div className="absolute w-64 md:w-96 drop-shadow-2xl right-[10%]" style={{ y: shoe4Y, rotate: shoe4Rotate }}>
            <img src="/hero_color_4.png" alt="Loafers" className="w-full h-auto object-contain" />
          </motion.div>
        </motion.div>


        {/* ========================================== */}
        {/* BRAND STORY ELEMENTS                       */}
        {/* ========================================== */}

        {/* Slide 1: Heritage */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-between px-8 md:px-24 z-20"
          style={{ opacity: slide1Opacity, pointerEvents: pointerEvents1 as any }}
        >
          <motion.div className="w-full md:w-1/2 flex flex-col items-start" style={{ y: text1Y }}>
            <span className="text-sm tracking-[0.3em] text-black/50 mb-6 font-bold uppercase">01 / Heritage</span>
            <div className="overflow-hidden">
              <h2 className="text-[6vw] md:text-[5vw] leading-[0.9] font-black uppercase tracking-tighter text-black">Born from</h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[6vw] md:text-[5vw] leading-[0.9] font-black uppercase tracking-tighter text-black/30">Tradition</h2>
            </div>
            <p className="mt-8 text-black/60 max-w-md text-lg leading-relaxed font-light">
              Decades of mastery passed down through generations. Every stitch tells a story of relentless dedication to the craft.
            </p>
          </motion.div>
          <motion.div 
            className="hidden md:block w-5/12 h-[70vh] relative shadow-2xl overflow-hidden rounded-3xl"
            style={{ y: img1Y, clipPath: img1Clip }}
          >
            <motion.img src="/hero_generated_1.jpg" className="w-full h-full object-cover" style={{ scale: img1Scale }} alt="Heritage" />
          </motion.div>
        </motion.div>

        {/* Slide 2: Craft */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-between px-8 md:px-24 z-30"
          style={{ opacity: slide2Opacity, pointerEvents: pointerEvents2 as any }}
        >
          <motion.div 
            className="hidden md:block w-5/12 h-[60vh] relative shadow-2xl overflow-hidden mt-20"
            style={{ y: img2Y, clipPath: img2Clip }}
          >
            <motion.img src="/hero_generated_2.jpg" className="w-full h-full object-cover" style={{ scale: img2Scale }} alt="Craft" />
          </motion.div>
          <motion.div className="w-full md:w-1/2 flex flex-col items-end text-right" style={{ y: text2Y }}>
            <span className="text-sm tracking-[0.3em] text-black/50 mb-6 font-bold uppercase">02 / Craft</span>
            <div className="overflow-hidden">
              <h2 className="text-[6vw] md:text-[5vw] leading-[0.9] font-black uppercase tracking-tighter text-black">Engineered</h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="text-[6vw] md:text-[5vw] leading-[0.9] font-black uppercase tracking-tighter text-black/30">for Motion</h2>
            </div>
            <p className="mt-8 text-black/60 max-w-md text-lg leading-relaxed font-light">
              Every silhouette is meticulously engineered for fluid dynamics, balancing the line between structured elegance and unrestrained comfort.
            </p>
          </motion.div>
        </motion.div>

        {/* Slide 3: Future */}
        <motion.div className="absolute inset-0 flex items-center justify-center z-0" style={{ opacity: slide3Opacity }}>
          <motion.img src="/hero_generated_3.jpg" className="w-full h-full object-cover" style={{ scale: img3Scale }} alt="Future" />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </motion.div>
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center z-40 text-center"
          style={{ y: text3Y, opacity: slide3Opacity, pointerEvents: pointerEvents3 as any }}
        >
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-white/60 mb-6 drop-shadow-md">03 / Future</p>
          <h2 className="text-7xl md:text-9xl lg:text-[10rem] font-black uppercase tracking-tighter leading-none text-white mb-12 drop-shadow-2xl">
            Enduring <br />
            <span className="text-white/50">Style</span>
          </h2>
          <button data-cursor data-cursor-text="DISCOVER" className="text-sm font-bold uppercase tracking-widest text-white border-b-2 border-white pb-2 hover:text-white/50 hover:border-white/50 transition-colors drop-shadow-md">
            Discover Our Story
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default CinematicScroll;
