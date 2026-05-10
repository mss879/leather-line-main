"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "./ui/MagneticButton";
import { ShoppingBag } from "lucide-react";

const NewArrivals = () => {
  const products = [
    { id: 1, name: "Premium Leather Boots", category: "Boots", price: "$125", image: "/boot_1.png", mt: "mt-0" },
    { id: 2, name: "Classic High-Top", category: "Sneakers", price: "$85", image: "/sneaker_1.png", mt: "mt-32" },
    { id: 3, name: "Comfort Runner", category: "Athletic", price: "$145", image: "/running_1.png", mt: "mt-16" },
    { id: 4, name: "Formal Oxford", category: "Formal", price: "$135", image: "/oxford_1.png", mt: "mt-48" }
  ];

  return (
    <section className="w-full py-32 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-24">
          <h2 className="text-[8vw] md:text-[5vw] font-black uppercase tracking-tighter text-black leading-none">
            New<br/>Arrivals
          </h2>
          <MagneticButton className="px-8 py-4 border border-black rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300">
            Shop The Drop
          </MagneticButton>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href="#"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group block ${product.mt}`}
            >
              <div className="relative aspect-[3/4] bg-[#F5F5F5] rounded-2xl overflow-hidden flex items-center justify-center p-8 mb-6">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                  whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 5 : -5 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Add to Cart Icon */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-black hover:bg-black hover:text-white transition-colors duration-300 z-10">
                  <ShoppingBag className="w-5 h-5" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-black group-hover:text-black/60 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/40 mt-1">
                      {product.category}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-black">{product.price}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
