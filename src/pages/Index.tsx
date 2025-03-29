
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketplacePreview from "@/components/MarketplacePreview";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <MarketplacePreview />
      <Footer />
    </div>
  );
};

export default Index;
