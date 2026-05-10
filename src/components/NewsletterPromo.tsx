"use client";

const NewsletterPromo = () => {
  return (
    <section className="bg-[#111] text-white py-32 px-4 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-8">
          Join The Club
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 uppercase tracking-tighter leading-tight">
          Exceptional Quality, <br className="hidden md:block" />
          <span className="text-white/40">Delivered to your inbox.</span>
        </h2>
        <p className="text-lg text-white/70 mb-12 font-medium max-w-2xl">
          Subscribe to receive updates on exclusive releases, private sales, and behind-the-scenes looks at our craftsmanship.
        </p>
        
        <form className="w-full max-w-lg relative group">
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full bg-transparent border-b border-white/20 text-white placeholder:text-white/30 focus:border-white outline-none pb-4 text-lg font-medium transition-colors rounded-none"
          />
          <button 
            type="submit"
            className="absolute right-0 bottom-4 text-xs font-bold tracking-[0.2em] uppercase hover:text-white/60 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterPromo;
