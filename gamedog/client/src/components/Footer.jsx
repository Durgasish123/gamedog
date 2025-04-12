import React from 'react';

const Footer = () => (
  <footer className="mt-auto py-3 bg-[#1a1a2e] border-t-4 border-[#ff6b6b] text-center pixel-font">
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center">
        {/* Retro "powered by" strip */}
        <div className="w-full bg-[#ff6b6b] text-[#1a1a2e] py-1 mb-2 text-xs tracking-widest">
          ░▒▓█ POWERED BY █▓▒░
        </div>
        
        {/* Main footer content */}
        <p className="text-[#f0e68c] text-xs md:text-sm tracking-wide">
          © 1985-{new Date().getFullYear()} GAMEDOG PATCHER
        </p>
        <p className="text-[#ff6b6b] text-xxs mt-1">
          ▲▼▲▼ BUILT WITH <span className="text-[#ffff00]">REACT</span> + 
          <span className="text-[#00ffff]"> TAILWIND</span> ▲▼▲▼
        </p>
        
        {/* CRT scanlines overlay effect */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#ff6b6b] opacity-50"></div>
      </div>
    </div>
  </footer>
);

export default Footer;