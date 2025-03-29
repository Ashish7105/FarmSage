
import React from "react";
import { cn } from "@/lib/utils";
import { GhibliImage } from "@/data/ghibliData";

interface ImageCardProps {
  image: GhibliImage;
  className?: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, className }) => {
  return (
    <div className={cn("ghibli-card group", className)}>
      <img
        src={image.imageUrl}
        alt={image.title}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="ghibli-card-content">
        <h3 className="text-lg font-semibold">{image.title}</h3>
        <p className="text-sm text-gray-200">{image.film} ({image.year})</p>
        <p className="mt-2 text-sm opacity-90">{image.description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
