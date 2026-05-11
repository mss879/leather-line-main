"use client";

import Navigation from "@/components/Navigation";
import CinematicScroll from "@/components/CinematicScroll";
import CategoryGrid from "@/components/CategoryGrid";
import VideoBanner from "@/components/VideoBanner";
import SocialProof from "@/components/SocialProof";
import NewArrivals from "@/components/NewArrivals";
import FeaturesCarousel from "@/components/FeaturesCarousel";
import BestSellers from "@/components/BestSellers";
import WhyChooseUs from "@/components/WhyChooseUs";
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

      {/* Hero Scrollytelling Experience */}
      <CinematicScroll />

      {/* Categories — immediately after hero for maximum impact */}
      <CategoryGrid />

      {/* Campaign Video Banner */}
      <VideoBanner />

      {/* Rest of the content — standard flow */}
      <div className="relative">
        <SocialProof />
        <NewArrivals />
        <FeaturesCarousel />
        <BestSellers />
        <WhyChooseUs />
        <Testimonials />
        <NewsletterPromo />
        <Footer />
      </div>
    </main>
  );
}
