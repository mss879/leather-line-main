"use client";

import Navigation from "@/components/Navigation";
import CinematicScroll from "@/components/CinematicScroll";
import SocialProof from "@/components/SocialProof";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import CategoryGrid from "@/components/CategoryGrid";
import Testimonials from "@/components/Testimonials";
import NewsletterPromo from "@/components/NewsletterPromo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative w-full">
      {/* Navigation - fixed at the top of the viewport */}
      <nav className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </nav>

      {/* Unified Cinematic Scroll Experience */}
      <CinematicScroll />

      {/* Rest of the content - standard flow */}
      <div className="relative bg-[#FAFAFA]">
        <NewArrivals />
        <CategoryGrid />
        <BestSellers />
        <Testimonials />
        <SocialProof />
        <NewsletterPromo />
        <Footer />
      </div>
    </main>
  );
}
