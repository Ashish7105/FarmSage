
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Users, BarChart } from "lucide-react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-10 w-10 text-green-600" />,
      title: "Live Marketplace",
      description: "Connect directly with buyers and sellers. Post your crops or browse available produce without middlemen involved."
    },
    {
      icon: <BarChart className="h-10 w-10 text-green-600" />,
      title: "AI Farming Advice",
      description: "Get personalized recommendations for your crops, pest control, and yield predictions using our AI advisor."
    },
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Business Growth",
      description: "Access resources, connect with funding opportunities, and get support to start or expand your agricultural business."
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How FarmSage Works</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform provides tools and resources to help farmers prosper and buyers access quality produce
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-green-100 hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 p-3 w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
