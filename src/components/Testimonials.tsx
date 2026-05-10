"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    id: 1,
    name: "James L.",
    role: "Verified Buyer",
    content: "The craftsmanship is unparalleled. These are without a doubt the most comfortable oxfords I have ever worn.",
  },
  {
    id: 2,
    name: "Michael C.",
    role: "Verified Buyer",
    content: "I was hesitant about the price, but the quality of the leather and the attention to detail blew me away. Worth every penny.",
  },
  {
    id: 3,
    name: "David R.",
    role: "Verified Buyer",
    content: "The trail runners are incredibly durable and stylish. They handled my weekend hike perfectly and look great in the city.",
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#FAFAFA] py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-black/50 mb-4"
          >
            Word on the Street
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black max-w-2xl"
          >
            "A masterclass in modern shoemaking."
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-8">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-black/10 group-hover:text-black/30 transition-colors duration-500">
                  <path d="M10 11L8 17H5L7 11H5V7H10V11ZM19 11L17 17H14L16 11H14V7H19V11Z" fill="currentColor"/>
                </svg>
              </div>
              <p className="text-lg text-black/80 font-medium leading-relaxed mb-8">
                {review.content}
              </p>
              <div className="mt-auto">
                <p className="font-bold text-black uppercase tracking-widest text-sm mb-1">
                  {review.name}
                </p>
                <p className="text-xs text-black/40 font-bold uppercase tracking-widest">
                  {review.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
