
import React, { useState } from "react";
import { ghibliImages, GhibliImage } from "@/data/ghibliData";
import ImageCard from "./ImageCard";
import { Button } from "@/components/ui/button";

type Category = GhibliImage['category'] | 'all';

const GhibliGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  
  const categories: {label: string; value: Category}[] = [
    { label: "All", value: "all" },
    { label: "Landscapes", value: "landscape" },
    { label: "Characters", value: "character" },
    { label: "Creatures", value: "creature" },
    { label: "Vehicles", value: "vehicle" }
  ];
  
  const filteredImages = selectedCategory === 'all' 
    ? ghibliImages 
    : ghibliImages.filter(image => image.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.value}
            variant={selectedCategory === category.value ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.value)}
            className="transition-all"
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages.map((image) => (
          <ImageCard key={image.id} image={image} className="h-64" />
        ))}
      </div>
    </div>
  );
};

export default GhibliGallery;
