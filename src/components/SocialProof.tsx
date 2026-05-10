"use client";

import { motion } from "framer-motion";

const SocialProof = () => {
  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-black/30">
          As Featured In
        </p>
      </div>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex bg-white opacity-80">
        <motion.div 
          className="flex whitespace-nowrap gap-24 items-center px-12"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Group 1 */}
          <div className="flex items-center gap-24">
            <div className="text-3xl font-serif tracking-widest font-bold text-black">VOGUE</div>
            <div className="text-4xl font-serif tracking-tighter font-bold text-black">GQ</div>
            <div className="text-3xl font-sans tracking-tight font-black uppercase text-black">Esquire</div>
            <div className="text-3xl font-serif font-bold uppercase tracking-widest text-black">Forbes</div>
            <div className="text-2xl font-sans font-black tracking-widest uppercase text-black">Hypebeast</div>
          </div>
          {/* Group 2 (Duplicate for seamless scroll) */}
          <div className="flex items-center gap-24">
            <div className="text-3xl font-serif tracking-widest font-bold text-black">VOGUE</div>
            <div className="text-4xl font-serif tracking-tighter font-bold text-black">GQ</div>
            <div className="text-3xl font-sans tracking-tight font-black uppercase text-black">Esquire</div>
            <div className="text-3xl font-serif font-bold uppercase tracking-widest text-black">Forbes</div>
            <div className="text-2xl font-sans font-black tracking-widest uppercase text-black">Hypebeast</div>
          </div>
        </motion.div>
        
        {/* Gradient Fades for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default SocialProof;
