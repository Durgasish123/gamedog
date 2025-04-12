// File: src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import GameCard from '../components/GameCard';
import { FavoriteProvider } from '../contexts/FavoriteContext';

// Retro placeholder data
const placeholderGames = [
  {
    id: 1,
    name: 'LOADING...',
    background_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcbTHeuhFPICzu1OgC_6ooDgxghYnpS2Gag&s',
    rating: 0,
    released: '1980',
    platforms: [{ platform: { name: 'ARCADE' } }]
  },
  {
    id: 2,
    name: 'PRESS START',
    background_image: 'https://media.istockphoto.com/id/1483954002/vector/press-start-retro-video-game-background.jpg?s=612x612&w=0&k=20&c=1_653eQp-d6BfORK_t7FluXfuIa9Ee2LEtZQb8tVo24=',
    rating: 0,
    released: '1983',
    platforms: [{ platform: { name: 'NES' } }]
  },
  {
    id: 3,
    name: 'HIGH SCORE',
    background_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0Y9MmkLLiO5_Js6HobYaCEQa-8eq5eDxnQ&s',
    rating: 0,
    released: '1985',
    platforms: [{ platform: { name: 'ATARI' } }]
  },
  {
    id: 4,
    name: 'PLAYER 1',
    background_image: 'https://rukminim3.flixcart.com/image/850/1000/j0zlevk0/fm-radio/v/h/p/pyle-ptcdcs32bt-retro-vintage-classic-bluetooth-turntable-original-imaesmtfxmhgejzz.jpeg?q=20&crop=false',
    rating: 0,
    released: '1987',
    platforms: [{ platform: { name: 'SEGA' } }]
  },
  {
    id: 5,
    name: 'PLAYER 1',
    background_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50dlQZ4M0s3POKdDPyNn3Ku1IZ82avS08VQ&s',
    rating: 0,
    released: '1987',
    platforms: [{ platform: { name: 'SEGA' } }]
  },
  {
    id: 6,
    name: 'PLAYER 1',
    background_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw5JwhS_ZTeVxfee1a6npH4CWo_HFs1GdVg&s',
    rating: 0,
    released: '1987',
    platforms: [{ platform: { name: 'SEGA' } }]
  }
];

const SearchGames = () => {
  const [query, setQuery] = useState('');
  const [games, setGames] = useState(placeholderGames);
  const [loading, setLoading] = useState(false);
  const [showPlaceholders, setShowPlaceholders] = useState(true);

  const fetchGames = async () => {
    if (!query) return;
    setLoading(true);
    setShowPlaceholders(false);
    try {
      const res = await fetch(`https://gamedog.onrender.com/api/games/search?query=${query}`);
      const data = await res.json();
      setGames(data.results.length > 0 ? data.results : placeholderGames);
    } catch (error) {
      console.error('Error fetching games:', error);
      // Show error-themed placeholders
      setGames([
        {
          id: 1,
          name: 'ERROR 404',
          background_image: 'https://via.placeholder.com/300x200/1a1a2e/ff6b6b?text=CONNECTION+LOST',
          rating: 0,
          released: '1980',
          platforms: [{ platform: { name: 'ARCADE' } }]
        },
        ...placeholderGames.slice(1)
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Retro scanline effect for the background
  useEffect(() => {
    document.body.classList.add('retro-bg');
    return () => {
      document.body.classList.remove('retro-bg');
    };
  }, []);

  
  return (
    <FavoriteProvider>
      {/* Changed to flex layout with min-h-screen */}
      <div className="flex flex-col min-h-screen bg-[#1a1a2e] text-[#f0e68c] font-pixel">
        <Navbar query={query} setQuery={setQuery} fetchGames={fetchGames} />

        {/* Main content with flex-grow to push footer down */}
        <main className="flex-grow p-4 retro-container">
          {loading ? (
            <div className="text-center text-lg pixel-font">
              <div className="inline-block animate-blink">▶ SEARCHING ARCHIVES...</div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {games.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  isPlaceholder={showPlaceholders || game.name === placeholderGames[0].name}
                />
              ))}
            </div>
          )}
        </main>

        {/* Footer will now always stick to bottom */}
        <Footer />
      </div>
    </FavoriteProvider>
  );
};

export default SearchGames;

