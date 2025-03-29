
import React from "react";
import Header from "@/components/Header";
import GhibliGallery from "@/components/GhibliGallery";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ghibli-dust to-white">
      <Header />
      <GhibliGallery />
      
      <footer className="mt-16 py-6 bg-ghibli-forest/10">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p>Inspired by the magical worlds of Studio Ghibli</p>
          <p className="mt-2">Images are placeholders - actual Ghibli visuals would be used in a production environment</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
