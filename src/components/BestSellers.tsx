"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag } from "lucide-react";

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: "Limited Edition Sneakers",
      category: "Sneakers",
      price: "$240",
      frontImage: "/sneaker_2.png",
      backImage: "/sneaker_2.png",
      href: "/shoes/limited-edition-sneakers"
    },
    {
      id: 2,
      name: "Premium Leather Loafers",
      category: "Formal",
      price: "$120",
      frontImage: "/loafer_1.png",
      backImage: "/loafer_1.png",
      href: "/shoes/premium-leather-loafers"
    },
    {
      id: 3,
      name: "Trail Running Shoes",
      category: "Athletic",
      price: "$155",
      frontImage: "/running_2.png",
      backImage: "/running_2.png",
      href: "/shoes/trail-running-shoes"
    },
    {
      id: 4,
      name: "Casual Slip-On Shoes",
      category: "Casual",
      price: "$75",
      frontImage: "/slip_on_1.png",
      backImage: "/slip_on_1.png",
      href: "/shoes/casual-slip-on-shoes"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#FAFAFA]" data-framer-name="Best Sellers">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-black/10 pb-6">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-black"
          >
            Best Sellers
          </motion.h2>
          <motion.a 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="/shop/best-sellers"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors"
          >
            Shop Classics
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href={product.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group block"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] mb-6 bg-white rounded-2xl overflow-hidden flex items-center justify-center p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <img
                  src={product.frontImage}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                
                {/* Add to Cart Icon */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-black hover:bg-black hover:text-white transition-colors duration-300 z-10">
                  <ShoppingBag className="w-5 h-5" />
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-col gap-1 text-center">
                <p className="text-xs font-bold tracking-widest uppercase text-black/40">
                  {product.category}
                </p>
                <h3 className="text-lg font-medium text-black">
                  {product.name}
                </h3>
                <p className="text-md text-black/70 mt-1">
                  {product.price}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
