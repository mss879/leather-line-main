"use client";

import { motion } from "framer-motion";
import { 
  Truck, 
  Banknote, 
  CalendarClock, 
  RefreshCcw, 
  ShieldCheck, 
  Grid 
} from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Islandwide Delivery",
    desc: "Fast & reliable shipping across Sri Lanka"
  },
  {
    icon: Banknote,
    title: "Cash On Delivery",
    desc: "Pay when your order arrives"
  },
  {
    icon: CalendarClock,
    title: "Shop Now Pay Later",
    desc: "Flexible payment with Koko & Mintpay"
  },
  {
    icon: RefreshCcw,
    title: "Easy Exchanges",
    desc: "Hassle-free returns at any store"
  },
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    desc: "100% protected transactions"
  },
  {
    icon: Grid,
    title: "Unparalleled Selection",
    desc: "Curated global brands & styles"
  }
];

const FeaturesCarousel = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#FAFAFA]">
      {/* Ambient Red Glow for Glassmorphism Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Heading */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-12 md:mb-16 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight uppercase mb-4">
          The Leather Line <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">Standard</span>
        </h2>
        <p className="text-sm md:text-base text-black/50 font-medium max-w-2xl mx-auto">
          Experience uncompromising quality and service at every step of your journey.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex py-4">
        <motion.div 
          className="flex gap-8 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 45, repeat: Infinity }}
        >
          {/* Group 1 */}
          <div className="flex gap-8 items-stretch">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={i} 
                  className="w-72 flex-shrink-0 flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-red-700 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-black text-black tracking-wide mb-2 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-black/60 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Group 2 (Duplicate for seamless scroll) */}
          <div className="flex gap-8 items-stretch">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={`dup-${i}`} 
                  className="w-72 flex-shrink-0 flex flex-col items-center text-center p-8 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-50 to-white border border-red-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-red-700 stroke-[1.5]" />
                  </div>
                  <h3 className="text-base font-black text-black tracking-wide mb-2 uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-black/60 font-medium leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Gradients for smooth fade on edges (matching background) */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default FeaturesCarousel;
