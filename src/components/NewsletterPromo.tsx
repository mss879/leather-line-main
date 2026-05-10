"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const NewsletterPromo = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
      setEmail("");
    }
  };

  return (
    <section className="relative bg-[#0A0A0A] text-white overflow-hidden">
      {/* Background Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-white/[0.02] rounded-full blur-[150px]" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white/25 font-bold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-6 block">
              Join the Club
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tighter leading-[0.95]">
              Stay<br/>
              <span className="text-white/25">Ahead</span>
            </h2>
            <p className="text-base md:text-lg text-white/40 font-medium leading-relaxed max-w-lg">
              Get early access to exclusive releases, private sales, and behind-the-scenes looks at our craftsmanship. No spam, ever.
            </p>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-white/20 focus:border-white/20 outline-none px-6 py-5 text-base font-medium transition-all duration-300 rounded-2xl focus:bg-white/[0.07]"
                />
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full py-5 bg-white text-black rounded-2xl text-xs font-bold uppercase tracking-[0.25em] hover:bg-white/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitted ? (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    You&apos;re In!
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>

              <p className="text-[10px] text-white/20 font-medium tracking-wide text-center">
                By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
              </p>
            </form>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-8 mt-10 pt-8 border-t border-white/[0.05]">
              <div className="text-center">
                <p className="text-2xl font-black text-white">50K+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mt-1">Subscribers</p>
              </div>
              <div className="w-px h-10 bg-white/[0.06]" />
              <div className="text-center">
                <p className="text-2xl font-black text-white">Weekly</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mt-1">Drops</p>
              </div>
              <div className="w-px h-10 bg-white/[0.06]" />
              <div className="text-center">
                <p className="text-2xl font-black text-white">15%</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 mt-1">First Order</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPromo;
