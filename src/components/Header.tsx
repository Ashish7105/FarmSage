
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, User, ShoppingCart } from "lucide-react";
import AuthModal from "./AuthModal";

const Header: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");

  const handleOpenLogin = () => {
    setAuthMode("login");
    setIsAuthModalOpen(true);
  };

  const handleOpenRegister = () => {
    setAuthMode("register");
    setIsAuthModalOpen(true);
  };

  return (
    <>
      <header className="py-4 bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-white">
                  <path 
                    d="M12 6.5c0 2-4 2-4 0s4-2 4 0zM15 5c0 1.5-3 1.5-3 0s3-1.5 3 0z" 
                    fill="currentColor"
                  />
                  <path 
                    d="M9 14c-3-3-1-8-1-8s5 2 5 5m0 0c0-3 5-5 5-5s2 5-1 8m-4-3v8"
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-bold text-green-800">FarmSage</h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</a>
              <a href="/dashboard" className="text-gray-700 hover:text-green-600 transition-colors">Dashboard</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Marketplace</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">AI Advisor</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Business Hub</a>
              <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About Us</a>
            </nav>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-gray-700">
                <MapPin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-700">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button variant="outline" className="hidden md:flex" onClick={handleOpenLogin}>
                <User className="mr-2 h-4 w-4" /> Login
              </Button>
              <Button className="bg-green-600 hover:bg-green-700" onClick={handleOpenRegister}>Register</Button>
            </div>
          </div>
        </div>
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;
