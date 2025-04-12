import React from "react";

const games = [
  {
    title: "Minecraft",
    description: "Build epic worlds, pixel by pixel!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFVAnDhl5stP9ljmVRZnF5dHe6689scVU1A&s",
    link: "https://www.minecraft.net/en-us/download",
  },
  {
    title: "CS:GO",
    description: "Reflexes sharper than a 8-bit blade!",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/730/header.jpg",
    link: "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
  },
  {
    title: "GTA V",
    description: "Rule the streets in open-world glory!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bwY-_mMSEXZpa3o_UsgMioar-yfdWeOQuw&s",
    link: "https://www.rockstargames.com/V/",
  },
  {
    title: "Fortnite",
    description: "Battle, build, and dance your way to victory!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJiqQ1RBadq2MrHXEOpK_rdA3U5oe6S2KUdg&s",
    link: "https://www.epicgames.com/fortnite/en-US/home",
  },
  {
    title: "Among Us",
    description: "Sus out the imposter before it’s too late!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKeh0SjmzWbnH6i_QpWXRHi5iMqUiInL3niA&s",
    link: "https://innersloth.com/games/among-us/",
  },
  {
    title: "Valorant",
    description: "Tactical shooter meets hero powers!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPUxp8mnz2Ya6REutGnxKd--i_SLKCR3ICw&s",
    link: "https://playvalorant.com/",
  },
  {
    title: "The Witcher 3",
    description: "Slay monsters, live legends.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbX98MGWC9Uvuu2gvcRJhuAN5ZrgmQ1bQaOg&s",
    link: "https://thewitcher.com/en/witcher3",
  },
  {
    title: "FIFA 24",
    description: "Kick off the ultimate football experience!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlFfufj9o2xYa4BG5S3HgUuyXBOfAIoJLlg&s",
    link: "https://www.ea.com/games/ea-sports-fc/fc-24",
  },
];


const Downloads = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1a0933] to-[#4b0082] text-white font-pixel">
      {/* Retro Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAYAAADTLS5CAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYSURBVBhXY2BgYPj//z8QNDAwMDDwAQC7uQWeo4gzbAAAAABJRU5ErkJggg==')] opacity-10 z-10"></div>

      <header className="p-4 bg-[#ff0055] border-b-4 border-black shadow-[0_4px_0_#000] animate-pulse-slow">
        <h1 className="text-4xl md:text-6xl text-center text-yellow-300 font-bold drop-shadow-[4px_4px_0_#000] pixel-corners">
          🍄 GAMEDOG ARCADE
        </h1>
      </header>

      <main className="flex-grow p-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {games.map((game, index) => (
            <div
              key={index}
              className="relative bg-[#222] rounded-lg overflow-hidden border-4 border-[#ffcc00] shadow-[6px_6px_0_#000] hover:scale-105 hover:shadow-[8px_8px_0_#ff0055] transition-all duration-300 pixel-corners"
            >
              {/* Retro CRT effect */}
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,rgba(0,0,0,0.1),rgba(0,0,0,0.3))] opacity-50"></div>
              
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-56 object-cover border-b-4 border-[#ff0055] pixelated"
              />
              <div className="p-5 relative z-20">
                <h2 className="text-2xl text-[#ffcc00] font-bold mb-3 drop-shadow-[3px_3px_0_#000] animate-flicker">
                  {game.title}
                </h2>
                <p className="text-sm text-[#cccccc] mb-4 font-mono">{game.description}</p>
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#ff0055] text-white font-bold text-lg rounded-sm border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[#ff3388] hover:shadow-[6px_6px_0_#000] transition-all duration-200 pixel-corners"
                >
                  PLAY NOW 🍄
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="p-4 bg-[#111] text-center text-[#cccccc] border-t-4 border-[#ffcc00]">
        <p>© 2025 GAMEDOG. All Rights Pixelated.</p>
      </footer>
    </div>
  );
};

export default Downloads;