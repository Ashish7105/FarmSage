
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-green-600">
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
              <h2 className="text-2xl font-bold">FarmSage</h2>
            </div>
            <p className="text-green-100 mb-6">
              Connecting farmers and buyers for a sustainable agricultural ecosystem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="bg-green-800 hover:bg-green-700 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">AI Advisor</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Business Hub</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-green-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 shrink-0 text-green-300" />
                <span className="text-green-100">123 Agriculture Way, Farming District, India - 500001</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0 text-green-300" />
                <a href="mailto:info@farmsage.com" className="text-green-100 hover:text-white transition-colors">info@farmsage.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-green-300" />
                <a href="tel:+918000700000" className="text-green-100 hover:text-white transition-colors">+91 8000 700 000</a>
              </li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="text-green-100 mb-4">
              Stay updated with the latest farming tips and marketplace news
            </p>
            <div className="flex flex-col space-y-3">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-green-800 border-green-700 text-white placeholder:text-green-400"
              />
              <Button className="bg-green-600 hover:bg-green-500">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-300 text-sm">
          <p>© {new Date().getFullYear()} FarmSage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
