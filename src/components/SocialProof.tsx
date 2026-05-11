"use client";

import { motion } from "framer-motion";

const SocialProof = () => {
  const brands = [
    { name: "NIKE", className: "text-4xl md:text-5xl font-sans font-black italic tracking-tighter" },
    { name: "ADIDAS", className: "text-3xl md:text-4xl font-sans font-bold tracking-widest uppercase" },
    { name: "NEW BALANCE", className: "text-3xl md:text-4xl font-serif tracking-tight font-bold italic" },
    { name: "PUMA", className: "text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter" },
    { name: "CONVERSE", className: "text-3xl md:text-4xl font-sans font-medium tracking-[0.2em] uppercase" },
    { name: "VANS", className: "text-4xl md:text-5xl font-sans font-black uppercase tracking-tighter" },
    { name: "DR. MARTENS", className: "text-3xl md:text-4xl font-serif font-bold uppercase tracking-widest" }
  ];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-black/25">
          Brands We Carry
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-28 items-center px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {/* Group 1 */}
          <div className="flex items-center gap-16 md:gap-28">
            {brands.map((brand) => (
              <div key={brand.name} className={`${brand.className} text-black/80 hover:text-black transition-colors duration-300 cursor-default select-none`}>
                {brand.name}
              </div>
            ))}
          </div>
          {/* Group 2 (Duplicate for seamless scroll) */}
          <div className="flex items-center gap-16 md:gap-28">
            {brands.map((brand) => (
              <div key={`dup-${brand.name}`} className={`${brand.className} text-black/80 hover:text-black transition-colors duration-300 cursor-default select-none`}>
                {brand.name}
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default SocialProof;
