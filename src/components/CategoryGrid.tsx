"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CategoryGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [150, -50]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const categories = [
    { title: "Running", image: "/category_running.png", href: "/shop/running", y: y1, width: "md:w-3/4", align: "items-start" },
    { title: "Basketball", image: "/category_basketball.png", href: "/shop/basketball", y: y2, width: "md:w-1/2", align: "items-end mt-32" },
    { title: "Retro", image: "/category_retro.png", href: "/shop/retro", y: y3, width: "md:w-2/3", align: "items-start mt-16" },
    { title: "Lifestyle", image: "/category_lifestyle.png", href: "/shop/lifestyle", y: y4, width: "md:w-full", align: "items-center mt-24" }
  ];

  return (
    <section ref={containerRef} className="w-full px-4 md:px-12 py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        
        <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-black/10 pb-8">
          <h2 className="text-[10vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none text-black">
            The<br/>Archives
          </h2>
          <a data-cursor data-cursor-text="ALL" href="/shop" className="text-sm font-bold uppercase tracking-widest text-black hover:text-black/50 transition-colors">
            View All Collections
          </a>
        </div>
        
        <div className="flex flex-col gap-24 md:gap-0">
          {categories.map((category, index) => (
            <div key={index} className={`flex flex-col ${category.align} w-full`}>
              <motion.a
                href={category.href}
                style={{ y: category.y }}
                data-cursor
                data-cursor-text="EXPLORE"
                className={`group relative block ${category.width} aspect-[4/3] rounded-3xl overflow-hidden`}
              >
                <motion.div 
                  className="absolute inset-0 bg-black/5"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                  />
                </motion.div>
                
                {/* Massive Typography Overlay */}
                <div className="absolute inset-0 flex items-center justify-center mix-blend-difference pointer-events-none">
                  <h3 className="text-white text-[12vw] md:text-[8vw] font-black uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform scale-90 group-hover:scale-100">
                    {category.title}
                  </h3>
                </div>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
