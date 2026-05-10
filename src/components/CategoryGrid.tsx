"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const categories = [
  { 
    title: "Running", 
    subtitle: "Engineered for Speed", 
    image: "/category_running.webp", 
    href: "/shop/running",
    count: "48 Styles"
  },
  { 
    title: "Basketball", 
    subtitle: "Court Ready", 
    image: "/category_basketball.webp", 
    href: "/shop/basketball",
    count: "36 Styles"
  },
  { 
    title: "Retro", 
    subtitle: "Classic Silhouettes", 
    image: "/category_retro.webp", 
    href: "/shop/retro",
    count: "52 Styles"
  },
  { 
    title: "Lifestyle", 
    subtitle: "Everyday Comfort", 
    image: "/category_lifestyle.webp", 
    href: "/shop/lifestyle",
    count: "64 Styles"
  }
];

const CategoryGrid = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#0A0A0A] relative overflow-hidden py-0">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full h-full flex flex-col">
        
        {/* Section Header */}
        <motion.div 
          className="px-6 md:px-12 lg:px-16 pt-20 pb-10 md:pt-28 md:pb-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-6"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div>
            <span className="text-white/30 font-medium uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4 block">
              Shop by Category
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[0.95]">
              Find Your<br/>
              <span className="text-white/30">Style</span>
            </h2>
          </div>
          <a 
            href="/shop" 
            className="group inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors duration-500 pb-1 border-b border-white/10 hover:border-white/40"
          >
            View All
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

        {/* Full-Width Category Grid — fits the screen */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.04] px-0">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} index={index} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface CategoryCardProps {
  category: {
    title: string;
    subtitle: string;
    image: string;
    href: string;
    count: string;
  };
  index: number;
  scrollProgress: any;
}

const CategoryCard = ({ category, index, scrollProgress }: CategoryCardProps) => {
  const cardY = useTransform(scrollProgress, [0, 0.3], [80 + index * 20, 0]);
  const cardOpacity = useTransform(scrollProgress, [0.05 + index * 0.03, 0.2 + index * 0.03], [0, 1]);
  const imgScale = useTransform(scrollProgress, [0, 1], [1.15, 1]);

  return (
    <motion.a
      href={category.href}
      className="group relative block bg-[#0A0A0A] overflow-hidden"
      style={{
        y: cardY,
        opacity: cardOpacity,
        minHeight: "clamp(400px, 60vh, 700px)"
      }}
    >
      {/* Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ scale: imgScale }}
      >
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover group-hover:scale-110"
          style={{ transition: "transform 1.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </motion.div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:via-black/30 transition-all duration-700" />
      
      {/* Border line on hover */}
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-all duration-700 z-10" />
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10 z-10">
        
        {/* Top-right corner count */}
        <div className="self-end">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors duration-500">
            {category.count}
          </span>
        </div>
        
        {/* Bottom content */}
        <div className="flex items-end justify-between">
          <div className="translate-y-2 group-hover:translate-y-0" style={{ transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <span className="block text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0 delay-75">
              {category.subtitle}
            </span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none uppercase">
              {category.title}
            </h3>
          </div>
          
          {/* Explore arrow */}
          <div className="w-12 h-12 rounded-full bg-white/0 group-hover:bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 flex-shrink-0 ml-4" style={{ transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}>
            <svg 
              className="w-5 h-5 text-white group-hover:text-black transition-colors duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default CategoryGrid;
