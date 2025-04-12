
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#1a1a2e] text-[#f0e68c] font-mono relative overflow-hidden">
      {/* Retro Scanline Effect */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:100%_2px] z-10"></div>
      
      {/* Pixel Art Background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-[#f0e68c]/10"></div>
          ))}
        </div>
      </div>

      {/* Mario Character */}
      <div className="absolute bottom-10 left-10 z-20 hidden md:block animate-bounce">
        <div className="relative">
          {/* Mario's Hat */}
          <div className="w-16 h-8 bg-red-600 rounded-t-full absolute -top-4 left-2"></div>
          <div className="w-20 h-2 bg-red-700 absolute -top-4"></div>
          
          {/* Mario's Head */}
          <div className="w-20 h-20 bg-[#ffc0a0] rounded-full relative">
            {/* Eyes */}
            <div className="absolute top-4 left-4 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-4 right-4 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute top-5 left-5 w-2 h-2 bg-black rounded-full"></div>
            <div className="absolute top-5 right-5 w-2 h-2 bg-black rounded-full"></div>
            
            {/* Mustache */}
            <div className="absolute top-10 left-2 w-16 h-6 bg-[#8b4513] rounded-b-full"></div>
            
            {/* Mouth */}
            <div className="absolute top-14 left-8 w-4 h-2 bg-[#ff9999] rounded-b-full"></div>
          </div>
          
          {/* Mario's Body */}
          <div className="w-20 h-24 bg-red-600 relative -top-4">
            {/* Overalls */}
            <div className="absolute top-0 left-0 w-full h-16 bg-blue-600">
              <div className="absolute top-2 left-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-2 right-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-8 left-6 w-8 h-2 bg-[#1a1a2e]"></div>
            </div>
            
            {/* Buttons */}
            <div className="absolute top-4 left-10 w-2 h-2 bg-yellow-400 rounded-full"></div>
          </div>
          
          {/* Arms */}
          <div className="absolute top-4 -left-4 w-4 h-12 bg-[#ffc0a0] rotate-12"></div>
          <div className="absolute top-4 -right-4 w-4 h-12 bg-[#ffc0a0] -rotate-12"></div>
          
          {/* Legs */}
          <div className="absolute bottom-0 left-2 w-8 h-8 bg-[#8b4513]"></div>
          <div className="absolute bottom-0 right-2 w-8 h-8 bg-[#8b4513]"></div>
          
          {/* Shoes */}
          <div className="absolute -bottom-2 left-0 w-10 h-4 bg-[#8b0000] rounded-b-full"></div>
          <div className="absolute -bottom-2 right-0 w-10 h-4 bg-[#8b0000] rounded-b-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Game Logo */}
        <div className="mb-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-yellow-400 mb-4 pixel-text">
            Gamedog
          </h1>
          <p className="text-lg text-[#f0e68c]/80">Your portal to classic gaming</p>
        </div>

        {/* Navigation Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
          {/* Search Button */}
          <button 
            onClick={() => navigate('/search')}
            className="bg-[#0f3460] hover:bg-[#16213e] border-4 border-yellow-400 p-6 text-xl transition-all 
                      hover:scale-105 hover:border-yellow-300 flex flex-col items-center"
          >
            <span className="text-4xl mb-2">🔍</span>
            SEARCH GAMES
          </button>

          {/* Updates Button */}
          <button 
            onClick={() => navigate('/updates')}
            className="bg-[#0f3460] hover:bg-[#16213e] border-4 border-yellow-400 p-6 text-xl transition-all 
                      hover:scale-105 hover:border-yellow-300 flex flex-col items-center"
          >
            <span className="text-4xl mb-2">🔄</span>
            UPDATES
          </button>

          {/* About Button */}
          <button 
            onClick={() => navigate('/download')}
            className="bg-[#0f3460] hover:bg-[#16213e] border-4 border-yellow-400 p-6 text-xl transition-all 
                      hover:scale-105 hover:border-yellow-300 flex flex-col items-center"
          >
            <span className="text-4xl mb-2">⬇️</span>
            Dowload Games
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-[#f0e68c]/60">
          <p>© 2025 Gamedog</p>
        </footer>
      </div>
    </div>
  );
};

export default Landing;