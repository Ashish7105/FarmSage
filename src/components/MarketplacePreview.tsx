
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const MarketplacePreview: React.FC = () => {
  const featuredCrops = [
    {
      id: 1,
      name: "Organic Wheat",
      price: "₹2,200/quintal",
      location: "Haryana",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1c5a1ec21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      seller: "Rajesh Kumar",
      rating: 4.8
    },
    {
      id: 2,
      name: "Premium Basmati Rice",
      price: "₹4,500/quintal",
      location: "Punjab",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e8ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      seller: "Amrit Singh",
      rating: 4.7
    },
    {
      id: 3,
      name: "Fresh Tomatoes",
      price: "₹25/kg",
      location: "Karnataka",
      image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      seller: "Lakshmi N",
      rating: 4.5
    },
    {
      id: 4,
      name: "Organic Cotton",
      price: "₹7,800/quintal",
      location: "Gujarat",
      image: "https://images.unsplash.com/photo-1603912699214-92627f304eb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      seller: "Patel Farms",
      rating: 4.9
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured in Marketplace</h2>
            <p className="mt-2 text-xl text-gray-600">
              Browse the latest crops available from farmers across India
            </p>
          </div>
          
          <Button className="mt-4 md:mt-0">
            View All Listings <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCrops.map((crop) => (
            <Card key={crop.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={crop.image} 
                  alt={crop.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold text-lg text-gray-900">{crop.name}</h3>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    {crop.price}
                  </Badge>
                </div>
                
                <div className="mt-3 flex items-center text-sm text-gray-600">
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 mr-1 text-gray-500">
                    <path d="M12 22s8-4.5 8-11.8c0-4-3.1-7.2-7-7.2s-7 3.2-7 7.2c0 7.3 6 11.8 6 11.8z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  {crop.location}
                </div>
                
                <div className="mt-4 flex items-center justify-between">
                  <div className="text-sm">
                    <span className="text-gray-500">Seller:</span> {crop.seller}
                  </div>
                  
                  <div className="flex items-center">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-yellow-500">
                      <path d="M12 2l2.4 7.6H22l-6.2 4.8 2.4 7.6L12 17.4 5.8 22l2.4-7.6L2 9.6h7.6L12 2z" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <span className="ml-1 text-sm font-medium">{crop.rating}</span>
                  </div>
                </div>
                
                <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
