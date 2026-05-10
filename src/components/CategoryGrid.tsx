"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CategoryGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle interior parallax instead of extreme overlapping translations
  const yImage1 = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yImage2 = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const yImage3 = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const yImage4 = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  const categories = [
    { 
      title: "Running", 
      subtitle: "Engineered for speed", 
      image: "/category_running.webp", 
      href: "/shop/running", 
      y: yImage1, 
      className: "md:col-span-8 md:row-span-2 h-[60vh] md:h-auto min-h-[500px]" 
    },
    { 
      title: "Basketball", 
      subtitle: "Court ready", 
      image: "/category_basketball.webp", 
      href: "/shop/basketball", 
      y: yImage2, 
      className: "md:col-span-4 h-[40vh] md:h-[400px]" 
    },
    { 
      title: "Retro", 
      subtitle: "Classic silhouettes", 
      image: "/category_retro.webp", 
      href: "/shop/retro", 
      y: yImage3, 
      className: "md:col-span-4 h-[40vh] md:h-[400px]" 
    },
    { 
      title: "Lifestyle", 
      subtitle: "Everyday comfort", 
      image: "/category_lifestyle.webp", 
      href: "/shop/lifestyle", 
      y: yImage4, 
      className: "md:col-span-12 h-[50vh] md:h-[500px]" 
    }
  ];

  return (
    <section ref={containerRef} className="w-full px-4 md:px-8 py-24 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Refined Header */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-black/10 pb-8">
          <div>
            <span className="text-black/50 font-medium uppercase tracking-widest text-sm mb-4 block">
              Curated Selection
            </span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-black">
              The Archives
            </h2>
          </div>
          <a 
            data-cursor 
            data-cursor-text="ALL" 
            href="/shop" 
            className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black hover:text-black/60 transition-colors pb-2"
          >
            View All Collections
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        {/* Architectural Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.a
              key={index}
              href={category.href}
              data-cursor
              data-cursor-text="EXPLORE"
              className={`group relative block rounded-2xl overflow-hidden bg-[#F5F5F5] ${category.className}`}
            >
              {/* Inner Image Parallax wrapper */}
              <motion.div 
                style={{ y: category.y }}
                className="absolute inset-[-10%] w-[120%] h-[120%]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </motion.div>
              
              {/* Elegant Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              
              {/* Typography & Interaction Whimsy */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-[0.6s] ease-[0.16,1,0.3,1]">
                <span className="text-white/80 font-medium tracking-widest uppercase text-xs md:text-sm mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {category.subtitle}
                </span>
                <h3 className="text-white text-3xl md:text-5xl font-bold tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Delightful Hover Arrow Indicator */}
              <div className="absolute top-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[0.6s] ease-[0.16,1,0.3,1] shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/>
                  <path d="m12 5 7 7-7 7"/>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
