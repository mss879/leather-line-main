"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ShoppingBag, Heart } from "lucide-react";

const NewArrivals = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const headerY = useTransform(scrollYProgress, [0, 0.3], [40, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);

  const products = [
    { id: 1, name: "Aero Runner Pro", category: "Running", price: "$145", originalPrice: "$180", image: "/running_1.webp", badge: "New", colors: ["#1a1a1a", "#8B4513", "#2F4F4F"] },
    { id: 2, name: "Classic High-Top", category: "Sneakers", price: "$125", originalPrice: null, image: "/sneaker_1.webp", badge: null, colors: ["#000", "#FFF", "#C41E3A"] },
    { id: 3, name: "Heritage Oxford", category: "Formal", price: "$185", originalPrice: null, image: "/oxford_1.webp", badge: "Bestseller", colors: ["#8B4513", "#1a1a1a", "#654321"] },
    { id: 4, name: "Urban Boot V2", category: "Boots", price: "$165", originalPrice: "$210", image: "/boot_1.webp", badge: "Sale", colors: ["#1a1a1a", "#8B4513"] }
  ];

  return (
    <section ref={sectionRef} className="w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-20"
          style={{ y: headerY, opacity: headerOpacity }}
        >
          <div>
            <span className="text-black/30 font-bold uppercase tracking-[0.35em] text-[10px] md:text-xs mb-4 block">
              Just Dropped
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-black leading-[0.95]">
              New<br/>
              <span className="text-black/20">Arrivals</span>
            </h2>
          </div>
          <a 
            href="/shop/new"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-black/80 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
          >
            Shop The Drop
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: string;
    originalPrice: string | null;
    image: string;
    badge: string | null;
    colors: string[];
  };
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group block"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] bg-[#F5F5F5] rounded-2xl overflow-hidden flex items-center justify-center p-8 mb-5">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain mix-blend-multiply"
          whileHover={{ scale: 1.08, rotate: index % 2 === 0 ? 3 : -3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Badge */}
        {product.badge && (
          <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] ${
            product.badge === "Sale" 
              ? "bg-red-500 text-white" 
              : product.badge === "New"
              ? "bg-black text-white"
              : "bg-white text-black border border-black/10"
          }`}>
            {product.badge}
          </div>
        )}

        {/* Wishlist */}
        <button 
          onClick={(e) => { e.preventDefault(); setIsLiked(!isLiked); }}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10 ${
            isLiked 
              ? "bg-red-500 text-white scale-110" 
              : "bg-white/80 backdrop-blur-sm text-black/50 hover:text-black hover:bg-white"
          } shadow-[0_2px_10px_rgba(0,0,0,0.06)]`}
        >
          <Heart className="w-4 h-4" fill={isLiked ? "currentColor" : "none"} />
        </button>

        {/* Quick Add to Cart */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0"
          style={{ transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
        >
          <button 
            onClick={(e) => e.preventDefault()}
            className="w-full py-3.5 bg-black text-white rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-black/85 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Add to Cart
          </button>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col gap-1.5">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-[15px] font-bold text-black group-hover:text-black/60 transition-colors duration-300 tracking-tight">
              {product.name}
            </h3>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-black/35 mt-0.5">
              {product.category}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-black">{product.price}</p>
            {product.originalPrice && (
              <p className="text-xs text-black/30 line-through">{product.originalPrice}</p>
            )}
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

export default NewArrivals;
