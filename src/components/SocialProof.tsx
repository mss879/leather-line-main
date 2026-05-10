"use client";

import { motion } from "framer-motion";

const SocialProof = () => {
  const brands = [
    { name: "VOGUE", className: "text-3xl md:text-4xl font-serif tracking-widest font-bold" },
    { name: "GQ", className: "text-4xl md:text-5xl font-serif tracking-tighter font-bold" },
    { name: "ESQUIRE", className: "text-3xl md:text-4xl font-sans tracking-tight font-black uppercase" },
    { name: "FORBES", className: "text-3xl md:text-4xl font-serif font-bold uppercase tracking-widest" },
    { name: "HYPEBEAST", className: "text-2xl md:text-3xl font-sans font-black tracking-widest uppercase" },
    { name: "COMPLEX", className: "text-3xl md:text-4xl font-sans font-black uppercase tracking-tight" }
  ];

  return (
    <section className="bg-white py-16 md:py-20 overflow-hidden border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8">
        <p className="text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-black/25">
          As Featured In
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
