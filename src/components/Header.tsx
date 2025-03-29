
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="py-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-ghibli-forest to-ghibli-sky opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-ghibli-forest mb-4 animate-float">
            Enchanted Ghibli Visions
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore the magical worlds of Studio Ghibli through these
            breathtaking landscapes and memorable scenes
          </p>
          
          <div className="mt-6 flex justify-center space-x-4">
            <span className="inline-block h-16 w-16 animate-sway">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
                  fill="#a8bf82" stroke="#5d8a66" strokeWidth="1"/>
                <path d="M8 14C9.10457 14 10 13.1046 10 12C10 10.8954 9.10457 10 8 10C6.89543 10 6 10.8954 6 12C6 13.1046 6.89543 14 8 14Z"
                  fill="#5d8a66"/>
                <path d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z"
                  fill="#5d8a66"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
