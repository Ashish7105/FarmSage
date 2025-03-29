
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Connecting Farmers and Buyers for a 
              <span className="text-green-600"> Better Tomorrow</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              FarmSage helps farmers sell their crops at the best prices and connects buyers directly to quality produce without middlemen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-green-600 hover:bg-green-700 h-12 px-6 text-base">
                Start Selling <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 px-6 text-base">
                Browse Marketplace
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">5000+</p>
                <p className="text-sm text-gray-600">Farmers</p>
              </div>
              
              <div className="h-10 border-r border-gray-300"></div>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">2000+</p>
                <p className="text-sm text-gray-600">Buyers</p>
              </div>
              
              <div className="h-10 border-r border-gray-300"></div>
              
              <div className="text-center">
                <p className="text-3xl font-bold text-green-600">₹10Cr+</p>
                <p className="text-sm text-gray-600">Transactions</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="bg-green-100 rounded-3xl p-6 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Farmer with crops" 
                className="rounded-2xl w-full object-cover h-80 md:h-96"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-lg border border-green-100 max-w-xs">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 rounded-full p-2">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-green-600">
                    <path d="M22 9h-2.06c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v1.06A9.006 9.006 0 002.06 9H0v2h2.06A9.006 9.006 0 009.06 21V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H22v-2zM11 19c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" fill="currentColor"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">AI-Powered Insights</h3>
                  <p className="text-sm text-gray-600">Get custom recommendations for your farm with our AI Advisor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
