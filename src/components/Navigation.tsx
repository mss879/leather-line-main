"use client";

import { useState, useEffect } from 'react';
import { Menu, X, Search, User, ShoppingBag, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(2);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);

  const promoTexts = [
    "Free shipping on all orders over $100",
    "New arrivals from top brands", 
    "Premium footwear for every occasion"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % promoTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [promoTexts.length]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.02,
        staggerDirection: -1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
    exit: { opacity: 0, y: 10 }
  };

  return (
    <div className="w-full relative z-50 bg-black/80 backdrop-blur-md text-white">
      {/* Single Navigation Row */}
      <div className="border-b border-t border-white/20">
        <div className="w-full px-4 md:px-8">
          <div className="flex items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 border-r border-white/20 h-20 flex items-center px-8 py-1">
              <img src="/leather-line.jpg" alt="Leather Line" className="h-14 w-auto object-contain" />
            </div>

            {/* Center Promotional Text Cycle */}
            <div className="hidden md:flex w-64 lg:w-96 flex-shrink-0 justify-center border-r border-white/20 h-20 items-center relative overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                {promoTexts.map((text, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-in-out"
                    style={{
                      opacity: index === currentTextIndex ? 1 : 0,
                      transform: index === currentTextIndex ? 'translateY(0%)' : 'translateY(100%)',
                      willChange: 'transform'
                    }}
                  >
                    <p className="text-sm font-medium tracking-wide uppercase text-white">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-1 flex justify-end mr-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </Button>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="hidden md:flex flex-1 items-center">
              {/* Browse Link */}
              <div 
                className="relative"
                onMouseEnter={() => setIsShopDropdownOpen(true)}
                onMouseLeave={() => setIsShopDropdownOpen(false)}
              >
                <a 
                  href="#browse" 
                  className="relative overflow-hidden px-8 border-r border-white/20 h-20 flex items-center group min-w-[120px]"
                >
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                    <span className="text-base font-bold tracking-wide uppercase flex items-center gap-1 text-white">
                      BROWSE
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-white text-black transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                    <span className="text-base font-bold tracking-wide uppercase flex items-center gap-1">
                      BROWSE
                      <ChevronDown size={16} className={`transition-transform duration-300 ${isShopDropdownOpen ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </a>
              </div>
              
              {/* Search Bar */}
              <div className="flex flex-1 items-center h-20 px-6 border-r border-white/20 min-w-[200px]">
                <div className="relative w-full group">
                  <input 
                    type="text" 
                    placeholder="Search archives..." 
                    className="w-full bg-transparent border-b border-white/50 py-1.5 pr-8 text-white text-sm uppercase tracking-wide placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
                  />
                  <Search size={16} className="absolute right-0 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" />
                </div>
              </div>
              
              {/* Sign In Button */}
              <a 
                href="#signin" 
                className="relative overflow-hidden px-12 border-r border-white/20 h-20 flex items-center group min-w-[140px]"
              >
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <User size={20} className="text-white" />
                  <span className="text-base font-bold tracking-wide uppercase text-white">
                    SIGN IN
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-white text-black transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <User size={20} />
                  <span className="text-base font-bold tracking-wide uppercase">
                    SIGN IN
                  </span>
                </div>
              </a>

              {/* Cart Button */}
              <a 
                href="#cart" 
                className="relative overflow-hidden px-8 h-20 flex items-center group min-w-[120px]"
              >
                <div className="absolute inset-0 flex items-center justify-center gap-2 transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:-translate-y-full">
                  <ShoppingBag size={20} className="text-white" />
                  <span className="text-base font-bold tracking-wide uppercase text-white">
                    CART
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center gap-2 bg-white text-black transition-all duration-300 ease-in-out opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                  <ShoppingBag size={20} />
                  <span className="text-base font-bold tracking-wide uppercase">
                    CART
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Mega Menu Overlay */}
      <AnimatePresence>
        {isShopDropdownOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-20 left-0 w-full bg-[#111] z-40 border-b border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] overflow-hidden"
            onMouseEnter={() => setIsShopDropdownOpen(true)}
            onMouseLeave={() => setIsShopDropdownOpen(false)}
          >
            <div className="w-full">
              <div className="flex h-[60vh] min-h-[500px]">
                {/* Left Side - Links */}
                <div className="w-1/2 p-16 flex border-r border-white/10">
                  <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="exit" className="w-1/2 pr-8">
                    <motion.h3 variants={staggerItem} className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-8">Categories</motion.h3>
                    <div className="space-y-4">
                      {["ALL SHOES", "SNEAKERS", "BOOTS", "FORMAL", "ACCESSORIES", "NEW ARRIVALS", "FEATURED", "SALE"].map((item, i) => (
                        <motion.a 
                          key={i}
                          variants={staggerItem}
                          href="#" 
                          className="block text-white hover:text-white/60 transition-colors text-2xl font-black uppercase tracking-tighter"
                        >
                          {item}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                  
                  <motion.div variants={staggerContainer} initial="hidden" animate="show" exit="exit" className="w-1/2 pl-8">
                    <motion.h3 variants={staggerItem} className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-8">Browse By</motion.h3>
                    <div className="space-y-4">
                      {["SIZE", "BRAND", "PRICE RANGE", "COLOR"].map((item, i) => (
                        <motion.a 
                          key={i}
                          variants={staggerItem}
                          href="#" 
                          className="block text-white hover:text-white/60 transition-colors text-xl font-bold uppercase tracking-tight"
                        >
                          {item}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Right Side - Immersive Images */}
                <div className="w-1/2 relative flex">
                  <a 
                    href="#new-arrivals" 
                    className="w-1/2 h-full relative block group overflow-hidden border-r border-white/10"
                    data-cursor
                    data-cursor-text="SHOP"
                  >
                    <img 
                      src="/hero_sneakers.png" 
                      alt="Just Dropped" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end transition-colors duration-500 group-hover:from-black">
                      <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">The Drop</h4>
                      <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em]">Latest Heat</p>
                    </div>
                  </a>
                  
                  <a 
                    href="#featured" 
                    className="w-1/2 h-full relative block group overflow-hidden"
                    data-cursor
                    data-cursor-text="EXPLORE"
                  >
                    <img 
                      src="/hero_oxfords.png" 
                      alt="Featured Shoes" 
                      className="w-full h-full object-cover transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-12 flex flex-col justify-end transition-colors duration-500 group-hover:from-black">
                      <h4 className="text-3xl font-black text-white uppercase tracking-tighter mb-2">Classics</h4>
                      <p className="text-xs font-bold text-white/70 uppercase tracking-[0.2em]">Timeless Icons</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navigation;