// File: src/components/GameCard.jsx
import React, { useContext } from 'react';
import { FavoriteContext } from '../contexts/FavoriteContext';

const GameCard = ({ game, isPlaceholder }) => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);
  const isFav = favorites.some((g) => g.id === game.id);

  // Retro heart icons (8-bit style)
  const heartIcon = isFav ? (
    <span className="text-red-500 pixel-heart">[♥]</span>
  ) : (
    <span className="text-gray-400 pixel-heart">[♡]</span>
  );

  return (
    <div className={`
      bg-[#1a1a2e] rounded-none p-0 border-4 border-[#4a4a4a] 
      hover:border-[#ff6b6b] transition-all cursor-pointer relative
      shadow-[5px_5px_0_#4a4a4a] hover:shadow-[7px_7px_0_#ff6b6b]
      ${isPlaceholder ? 'animate-pulse' : ''}
    `}>
      {/* CRT screen effect overlay */}
      <div className="absolute inset-0 pointer-events-none crt-overlay"></div>
      
      {/* Favorite button */}
      <button
        className="absolute top-1 right-1 z-10 bg-[#4a4a4a] px-1 rounded-none"
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite(game);
        }}
        aria-label={isFav ? 'Remove from favorites' : 'Add to favorites'}
      >
        {heartIcon}
      </button>

      {/* Game image with scanlines */}
      <div className="relative overflow-hidden">
        <img
          src={game.background_image}
          alt={game.name}
          className={`w-full h-40 object-cover ${isPlaceholder ? 'grayscale' : ''}`}
        />
        <div className="absolute inset-0 scanlines"></div>
      </div>

      {/* Game info */}
      <div className="p-2 border-t-2 border-[#ff6b6b]">
        <h2 className={`text-[#f0e68c] text-sm text-center pixel-font mb-1 
          ${game.name.length > 20 ? 'text-xs' : ''}`}>
          {game.name.toUpperCase()}
        </h2>
        
        <div className="flex justify-center gap-4 text-[#ff6b6b] text-xs pixel-font">
          <span>⭐ {game.rating || '??'}</span>
          <span>🕹️ {game.playtime || '--'}H</span>
        </div>

        {/* Platforms - chips style */}
        <div className="flex flex-wrap justify-center gap-1 mt-2">
          {game.platforms?.slice(0, 3).map((p) => (
            <span 
              key={p.platform.name} 
              className="bg-[#ff6b6b] text-[#1a1a2e] text-[8px] px-1 pixel-font"
            >
              {p.platform.name.substring(0, 10)}
            </span>
          ))}
          {game.platforms?.length > 3 && (
            <span className="bg-[#4a4a4a] text-[#f0e68c] text-[8px] px-1 pixel-font">
              +{game.platforms.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;