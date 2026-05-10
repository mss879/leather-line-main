"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Heart, Star } from "lucide-react";

const BestSellers = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const products = [
    {
      id: 1,
      name: "Limited Edition Sneakers",
      category: "Sneakers",
      price: "$240",
      image: "/sneaker_2.webp",
      href: "/shoes/limited-edition-sneakers",
      rating: 4.9,
      reviews: 128,
      colors: ["#1a1a1a", "#FFF", "#C41E3A"]
    },
    {
      id: 2,
      name: "Premium Leather Loafers",
      category: "Formal",
      price: "$120",
      image: "/loafer_1.webp",
      href: "/shoes/premium-leather-loafers",
      rating: 4.8,
      reviews: 96,
      colors: ["#8B4513", "#1a1a1a"]
    },
    {
      id: 3,
      name: "Trail Running Shoes",
      category: "Athletic",
      price: "$155",
      image: "/running_2.webp",
      href: "/shoes/trail-running-shoes",
      rating: 4.7,
      reviews: 214,
      colors: ["#2F4F4F", "#1a1a1a", "#4682B4"]
    },
    {
      id: 4,
      name: "Casual Slip-On Shoes",
      category: "Casual",
      price: "$75",
      image: "/slip_on_1.webp",
      href: "/shoes/casual-slip-on-shoes",
      rating: 4.6,
      reviews: 167,
      colors: ["#D2B48C", "#1a1a1a", "#FFF"]
    }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-32 bg-[#F7F7F7]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div>
            <span className="text-black/30 font-bold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4 block">
              Most Loved
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.95]">
              Best<br/>
              <span className="text-black/20">Sellers</span>
            </h2>
          </div>
          <a 
            href="/shop/best-sellers"
            className="group flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-black/50 hover:text-black transition-colors duration-300 pb-1 border-b border-black/10 hover:border-black/40"
          >
            Shop Classics
            <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <BestSellerCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface BestSellerCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
    href: string;
    rating: number;
    reviews: number;
    colors: string[];
  };
  index: number;
}

const BestSellerCard = ({ product, index }: BestSellerCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.a
      href={product.href}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] mb-5 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8 shadow-[0_2px_15px_rgba(0,0,0,0.03)]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105"
          style={{ transition: "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
        
        {/* Rank Badge */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-[11px] font-black">
          {index + 1}
        </div>

        {/* Wishlist */}
        <button 
          onClick={(e) => { e.preventDefault(); setIsLiked(!isLiked); }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
            isLiked 
              ? "bg-red-500 text-white scale-110" 
              : "bg-white/90 backdrop-blur-sm text-black/40 hover:text-black"
          } shadow-[0_2px_10px_rgba(0,0,0,0.06)]`}
        >
          <Heart className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} />
        </button>
        
        {/* Quick Add */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0"
          style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <button 
            onClick={(e) => e.preventDefault()}
            className="w-full py-3.5 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-black/85 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Quick Add
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1.5">
        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/35">
          {product.category}
        </p>
        <h3 className="text-[15px] font-bold text-black group-hover:text-black/60 transition-colors tracking-tight">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm font-bold text-black">{product.price}</p>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-bold text-black/60">{product.rating}</span>
            <span className="text-[10px] text-black/30">({product.reviews})</span>
          </div>
        </div>
        
        {/* Color Swatches */}
        <div className="flex gap-1.5 mt-2">
          {product.colors.map((color, i) => (
            <div 
              key={i} 
              className="w-3.5 h-3.5 rounded-full border border-black/10 cursor-pointer hover:scale-125 transition-transform duration-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </motion.a>
  );
};

export default BestSellers;
