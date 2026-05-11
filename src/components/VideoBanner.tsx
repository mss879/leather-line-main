"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="w-full h-[40vh] md:h-[55vh] relative overflow-hidden bg-white flex items-center justify-start">
      <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/footwear_collection.mp4" type="video/mp4" />
        </video>
      </motion.div>
      
      {/* Subtle overlay to ensure text readability while keeping the video bright */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-700 hover:bg-black/20" />
      
      {/* Content overlay */}
      <div className="relative z-10 text-left px-8 md:px-16 lg:px-24 w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            Footwear
            <br />
            <span className="text-white/90">Collection</span>
          </h2>
          <p className="text-xs md:text-sm text-white/90 uppercase tracking-[0.3em] font-bold drop-shadow-sm">
            Discover Our Latest Campaign
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoBanner;
