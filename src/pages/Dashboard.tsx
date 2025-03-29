
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WeatherForecast from "@/components/WeatherForecast";
import BusinessAdvisory from "@/components/BusinessAdvisory";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("weather");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-green-800 mb-2">Welcome to Your FarmSage Dashboard</h1>
          <p className="text-gray-600 mb-6">
            Access weather forecasts, business advisory services, and more to help your agricultural business thrive.
          </p>
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2">
              <TabsTrigger value="weather">Weather Forecast</TabsTrigger>
              <TabsTrigger value="business">Business Advisory</TabsTrigger>
            </TabsList>
            
            <TabsContent value="weather">
              <WeatherForecast />
            </TabsContent>
            
            <TabsContent value="business">
              <BusinessAdvisory />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
