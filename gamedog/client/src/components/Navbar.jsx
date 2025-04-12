import React from 'react';

const Navbar = ({ query, setQuery, fetchGames }) => {
  return (
    <nav className="bg-[#1a1a2e] text-[#f0e68c] px-4 py-3 flex justify-between items-center border-b-4 border-[#ff6b6b] pixel-font">
      <h1 className="text-xl md:text-3xl font-bold tracking-wide">
        <span className="text-[#ff6b6b]">█</span>
        <span className="text-[#ffa500]">█</span>
        <span className="text-[#ffff00]">█</span> GAMEDOG PATCHER
      </h1>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="SEARCH A GAME..."
          className="p-2 rounded-none text-black text-sm w-64 border-4 border-[#4a4a4a] bg-[#e0e0e0] focus:outline-none focus:border-[#ff6b6b] pixel-font"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ boxShadow: '3px 3px 0 #4a4a4a' }}
        />
        <button
          onClick={fetchGames}
          className="bg-[#ff6b6b] text-white px-4 py-2 rounded-none border-4 border-[#4a4a4a] hover:bg-[#ff8e8e] active:translate-x-1 active:translate-y-1 active:shadow-none pixel-font"
          style={{ boxShadow: '4px 4px 0 #4a4a4a' }}
        >
          SEARCH
        </button>
      </div>
    </nav>
  );
};

export default Navbar;