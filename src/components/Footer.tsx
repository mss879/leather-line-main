import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-10 px-6 md:px-12 border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Row — Big Brand + Newsletter */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div>
            <div className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none">
              LEATHER<br/>LINE
            </div>
            <p className="text-white/30 text-sm font-medium leading-relaxed max-w-xs">
              Elevating the modern stride with uncompromising quality and timeless craftsmanship since 2024.
            </p>
          </div>
          
          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Youtube, href: "#" },
              { icon: Facebook, href: "#" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                className="w-10 h-10 rounded-full border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.05] flex items-center justify-center text-white/40 hover:text-white transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Shop */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 mb-6">
              Shop
            </h3>
            <ul className="space-y-4">
              {['All Collections', 'New Arrivals', 'Sneakers', 'Boots', 'Oxfords', 'Running'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              {['Contact Us', 'Shipping & Returns', 'Size Guide', 'FAQ', 'Track Order'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {['Our Story', 'Careers', 'Sustainability', 'Press'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/25 mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map(link => (
                <li key={link}>
                  <a href="#" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.04] text-[10px] font-medium text-white/20 gap-4 tracking-wide">
          <div>
            &copy; {new Date().getFullYear()} LEATHER LINE. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>USD $</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
