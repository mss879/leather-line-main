"use client";

import { motion, Variants } from "framer-motion";
import { ShieldCheck, Sparkles, MoveRight, Truck } from "lucide-react";

const features = [
  {
    title: "Premium Materials",
    description: "Crafted from the finest full-grain Italian leather, ensuring unmatched durability and an elegant patina over time.",
    icon: ShieldCheck,
  },
  {
    title: "Handcrafted Quality",
    description: "Each pair is meticulously constructed by master artisans, paying attention to every stitch and detail.",
    icon: Sparkles,
  },
  {
    title: "Comfort First",
    description: "Engineered with modern ergonomics and cushioned insoles for all-day comfort without compromising on style.",
    icon: MoveRight,
  },
  {
    title: "Global Shipping",
    description: "We offer complimentary worldwide shipping on all orders, delivering luxury directly to your doorstep.",
    icon: Truck,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
  },
};

const WhyChooseUs = () => {
  return (
    <section className="bg-white text-black py-24 border-t border-b border-gray-200 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
              Why Choose Leather Line
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-medium">
              We believe in redefining luxury footwear by combining timeless craftsmanship with modern innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 uppercase tracking-wide">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
