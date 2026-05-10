import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white pt-20 pb-10 px-4 md:px-8 lg:px-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-black uppercase tracking-tighter mb-6">
              LEATHER LINE
            </div>
            <p className="text-white/50 text-sm font-medium leading-relaxed max-w-xs">
              Elevating the modern stride with uncompromising quality and timeless craftsmanship.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Shop
            </h3>
            <ul className="space-y-4">
              {['All Collections', 'New Arrivals', 'Sneakers', 'Boots', 'Oxfords'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
              Connect
            </h3>
            <div className="flex gap-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-medium text-white/40 gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div>
            &copy; {new Date().getFullYear()} LEATHER LINE. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
