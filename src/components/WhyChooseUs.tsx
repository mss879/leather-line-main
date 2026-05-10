"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Sparkles, Truck, RotateCcw } from "lucide-react";

const features = [
  {
    title: "Premium Materials",
    description: "Full-grain Italian leather with an elegant patina that gets better over time.",
    icon: ShieldCheck,
    stat: "100%",
    statLabel: "Genuine Leather"
  },
  {
    title: "Handcrafted Quality",
    description: "Each pair is constructed by master artisans with over 200 hand-finished steps.",
    icon: Sparkles,
    stat: "200+",
    statLabel: "Hand Finished Steps"
  },
  {
    title: "Free Global Shipping",
    description: "Complimentary express worldwide shipping on every order, delivered in 3-5 days.",
    icon: Truck,
    stat: "3-5",
    statLabel: "Day Delivery"
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free returns with prepaid shipping labels included in every box.",
    icon: RotateCcw,
    stat: "30",
    statLabel: "Day Returns"
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 md:py-32 overflow-hidden relative">
      {/* Ambient gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20 md:mb-24">
            <span className="text-white/25 font-bold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4 block">
              The Leather Line Difference
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 uppercase tracking-tighter leading-[0.95]">
              Why Choose<br/>
              <span className="text-white/25">Leather Line</span>
            </h2>
            <p className="text-lg text-white/40 max-w-xl mx-auto font-medium leading-relaxed">
              We believe in redefining luxury footwear by combining timeless craftsmanship with modern innovation.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-white/[0.06] rounded-2xl overflow-hidden">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants} 
                className="group bg-[#0A0A0A] hover:bg-white/[0.03] transition-colors duration-700 p-8 md:p-10 flex flex-col text-center items-center"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] group-hover:bg-white/[0.08] border border-white/[0.06] flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-white/60 group-hover:text-white transition-colors duration-500" />
                </div>

                {/* Stat */}
                <div className="mb-6">
                  <span className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                    {feature.stat}
                  </span>
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30 mt-2">
                    {feature.statLabel}
                  </p>
                </div>
                
                {/* Content */}
                <h3 className="text-base font-bold mb-3 uppercase tracking-wider text-white/80">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/35 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
