"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "James L.",
    role: "Verified Buyer",
    rating: 5,
    product: "Heritage Oxford",
    content: "The craftsmanship is unparalleled. These are without a doubt the most comfortable oxfords I have ever worn. The leather quality is extraordinary.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Michael C.",
    role: "Verified Buyer",
    rating: 5,
    product: "Limited Edition Sneakers",
    content: "I was hesitant about the price, but the quality of the leather and the attention to detail blew me away. Worth every penny. Already ordered my second pair.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "David R.",
    role: "Verified Buyer",
    rating: 5,
    product: "Trail Running Shoes",
    content: "The trail runners are incredibly durable and stylish. They handled my weekend hike perfectly and look great in the city too. Perfect dual-purpose shoe.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "Sarah K.",
    role: "Verified Buyer",
    rating: 5,
    product: "Casual Slip-On",
    content: "Finally found a brand that doesn't compromise between comfort and aesthetics. The slip-ons feel like wearing clouds. My go-to everyday shoe now.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Alex M.",
    role: "Verified Buyer",
    rating: 4,
    product: "Aero Runner Pro",
    content: "Exceptional running shoes. The cushioning is perfect for long distance, and the breathability keeps my feet cool. Great for daily runners.",
    date: "5 days ago"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const goTo = (index: number) => {
    stopAutoPlay();
    setActiveIndex(index);
    startAutoPlay();
  };

  const prev = () => goTo((activeIndex - 1 + reviews.length) % reviews.length);
  const next = () => goTo((activeIndex + 1) % reviews.length);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="text-black/25 font-bold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4 block">
            Word on the Street
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.95] mb-4">
            What People<br/>
            <span className="text-black/20">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex items-center gap-0.5">
              {[1,2,3,4,5].map((s) => (
                <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-black/60 ml-1">4.8/5</span>
            <span className="text-xs text-black/30 ml-1">from 1,200+ reviews</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-8">
                {Array.from({ length: reviews[activeIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-black leading-relaxed mb-10">
                &ldquo;{reviews[activeIndex].content}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div>
                <p className="font-bold text-black uppercase tracking-widest text-sm mb-1">
                  {reviews[activeIndex].name}
                </p>
                <p className="text-[10px] text-black/30 font-bold uppercase tracking-widest">
                  {reviews[activeIndex].role} · {reviews[activeIndex].product} · {reviews[activeIndex].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-black/10 hover:border-black/30 hover:bg-black hover:text-white flex items-center justify-center text-black/40 transition-all duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-black/10 hover:border-black/30 hover:bg-black hover:text-white flex items-center justify-center text-black/40 transition-all duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeIndex 
                  ? "w-8 bg-black" 
                  : "w-1.5 bg-black/15 hover:bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
