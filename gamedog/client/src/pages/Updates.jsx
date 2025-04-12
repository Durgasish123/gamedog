// File: src/pages/Updates.jsx
import React, { useState, useEffect } from 'react';
import UpdateCard from '../components/UpdateCard';
import { FavoriteProvider } from '../contexts/FavoriteContext';

// Retro placeholder data for updates
const placeholderUpdates = [
  {
    id: 1,
    title: 'PATCH NOTES LOADING...',
    game: 'RETRO SYSTEM',
    version: 'v1.0.0',
    date: '1980-01-01',
    description: 'Initial system boot sequence initiated...',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHcbTHeuhFPICzu1OgC_6ooDgxghYnpS2Gag&s',
    type: 'system'
  },
  {
    id: 2,
    title: 'SECURITY UPDATE',
    game: 'ARCADE OS',
    version: 'v2.5.3',
    date: '1983-06-15',
    description: 'Fixed high score vulnerability in leaderboards',
    image: 'https://media.istockphoto.com/id/1483954002/vector/press-start-retro-video-game-background.jpg?s=612x612&w=0&k=20&c=1_653eQp-d6BfORK_t7FluXfuIa9Ee2LEtZQb8tVo24=',
    type: 'security'
  },
  {
    id: 3,
    title: 'NEW DLC CONTENT',
    game: 'CLASSIC ADVENTURE',
    version: 'v3.2.1',
    date: '1985-11-30',
    description: 'Added secret level and 8 new power-ups',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0Y9MmkLLiO5_Js6HobYaCEQa-8eq5eDxnQ&s',
    type: 'content'
  },
  {
    id: 4,
    title: 'PERFORMANCE PATCH',
    game: 'LEGENDARY QUEST',
    version: 'v1.8.4',
    date: '1987-04-22',
    description: 'Improved frame rate in dungeon areas',
    image: 'https://rukminim3.flixcart.com/image/850/1000/j0zlevk0/fm-radio/v/h/p/pyle-ptcdcs32bt-retro-vintage-classic-bluetooth-turntable-original-imaesmtfxmhgejzz.jpeg?q=20&crop=false',
    type: 'performance'
  }
];

// Sample real updates data (would normally come from API)
const sampleUpdates = [
  {
    id: 5,
    title: 'GTA VI PREP PATCH',
    game: 'GTA ONLINE',
    version: 'v2.18',
    date: '2023-12-05',
    description: 'Preparing servers for upcoming GTA VI integration. Fixed 12 security vulnerabilities.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdsKG-ZnbIhyyLz31acHZdnI7X85nmyeo85Q&s',
    type: 'security'
  },
  {
    id: 6,
    title: 'MARIO WONDER UPDATE',
    game: 'SUPER MARIO BROS. WONDER',
    version: 'v1.2.0',
    date: '2023-11-20',
    description: 'Added new Wonder Seed effects and fixed flower power glitch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbR4bm9e9QmT9j3Vyr-dDCtamXBXWcf1iYcw&s',
    type: 'content'
  },
  {
    id: 7,
    title: 'DOTA 2 PATCH',
    game: 'DOTA 2',
    version: '7.34d',
    date: '2023-11-15',
    description: 'Hero balance changes and map adjustments',
    image: 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg',
    type: 'balance'
  },
  {
    id: 8,
    title: 'CYBERPUNK HOTFIX',
    game: 'CYBERPUNK 2077',
    version: '2.02',
    date: '2023-11-14',
    description: 'Fixed vehicle physics and quest progression bugs',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_OX9TQaJsqRP4WSfeyGoQ2Nv3XUT0t6ebA&s',
    type: 'bugfix'
  },
  
  {
    id: 9,
    title: 'HALO: MASTER CHIEF PATCH',
    game: 'HALO: MASTER CHIEF COLLECTION',
    version: 'v1.3079.0',
    date: '2023-12-10',
    description: 'Improved matchmaking and UI responsiveness',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUnlAYzMSdBCKQQD_RnHb8H-XOmdWm1QwiEg&s',
    type: 'performance'
  },
  {
    id: 10,
    title: 'ELDEN RING BALANCE PATCH',
    game: 'ELDEN RING',
    version: 'v1.10.1',
    date: '2024-01-05',
    description: 'Tuned weapon balance and adjusted boss AI behavior',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWd_tkOxuHHuXLmrTDMYfXxXZe9G46A-3z8g&s',
    type: 'balance'
  },
  {
    id: 11,
    title: 'VALORANT ANTI-CHEAT UPDATE',
    game: 'VALORANT',
    version: 'v7.02',
    date: '2024-02-02',
    description: 'Improved Vanguard anti-cheat engine and reduced false positives',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5p4Z4mawDozeyTj5bvRjsEB4MK8PArvHP0w&s',
    type: 'security'
  },
  {
    id: 15,
    title: 'FIFA 24 WEEKLY SQUAD UPDATE',
    game: 'EA SPORTS FC 24',
    version: 'v1.3.6',
    date: '2024-03-01',
    description: 'Updated squad lineups and player stats',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqGQd7ksdON9hDZ0o_oDl8WdZwgo_mWj2aQ&s',
    type: 'content'
  },
  {
    id: 16,
    title: 'MINECRAFT 1.21 SNAPSHOT',
    game: 'MINECRAFT',
    version: '1.21-SNAPSHOT',
    date: '2024-03-15',
    description: 'Introduced new mobs, cave biomes, and enchantments',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpeaVLLU2s5s2TKZgTIrn3J36g7a9E6eB5AQ&s',
    type: 'content'
  },
  {
    id: 17,
    title: 'APEX LEGENDS EVENT HOTFIX',
    game: 'APEX LEGENDS',
    version: 'v4.2.0',
    date: '2024-03-20',
    description: 'Resolved ranked exploit and fixed Bloodhound tactical glitch',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjWq0r3c29g5Nzpu80HuYg7AeaIsab-WA9DA&s',
    type: 'bugfix'
  },
  {
    id: 18,
    title: 'GOD OF WAR RAGNARÖK PATCH',
    game: 'GOD OF WAR RAGNARÖK',
    version: 'v1.06',
    date: '2024-03-25',
    description: 'Enhanced lighting in Svartalfheim and fixed Tyr’s pathing bug',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAIxqHM0M8KdyprPRmJUPW8a5LWZf1U2jgvQ&s',
    type: 'bugfix'
  },
  {
    id: 19,
    title: 'TEKKEN 8 BALANCE PASS',
    game: 'TEKKEN 8',
    version: 'v1.0.3',
    date: '2024-04-01',
    description: 'Adjusted combo damage and frame timings for competitive mode',
    image: 'https://cdn.akamai.steamstatic.com/steam/apps/1778820/header.jpg',
    type: 'balance'
  },
  {
    id: 20,
    title: 'ROCKET LEAGUE SPRING UPDATE',
    game: 'ROCKET LEAGUE',
    version: 'v2.33',
    date: '2024-04-03',
    description: 'New arena: Sky Heights, and 5 new car decals added',
    image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/252950/header.jpg',
    type: 'content'
  }
];

const Updates = () => {
  const [updates, setUpdates] = useState(placeholderUpdates);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('all');

  const fetchUpdates = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setUpdates(sampleUpdates);
    } catch (error) {
      console.error('Error fetching updates:', error);
      setUpdates([
        {
          id: 1,
          title: 'NETWORK ERROR',
          game: 'SYSTEM ALERT',
          version: 'v0.0.0',
          date: '1980-01-01',
          description: 'Unable to connect to update servers',
          image: 'https://via.placeholder.com/300x200/1a1a2e/ff6b6b?text=CONNECTION+LOST',
          type: 'error'
        },
        ...placeholderUpdates.slice(1)
      ]);
    } finally {
      setLoading(false);
    }
  };

  // Retro scanline effect for the background
  useEffect(() => {
    document.body.classList.add('retro-bg');
    fetchUpdates(); // Fetch real data on mount
    return () => {
      document.body.classList.remove('retro-bg');
    };
  }, []);

  const filteredUpdates = filter === 'all' 
    ? updates 
    : updates.filter(update => update.type === filter);

  return (
    <FavoriteProvider>
      <div className="flex flex-col min-h-screen bg-[#1a1a2e] text-[#f0e68c] font-pixel">

        {/* Main content with flex-grow to push footer down */}
        <main className="flex-grow p-4 retro-container">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl pixel-font border-b-4 border-[#f0e68c] pb-2">
              ▶ LATEST UPDATES
            </h1>
            <div className="flex space-x-2">
              <button 
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded ${filter === 'all' ? 'bg-[#f0e68c] text-[#1a1a2e]' : 'bg-[#2a2a3a]'}`}
              >
                ALL
              </button>
              <button 
                onClick={() => setFilter('security')}
                className={`px-3 py-1 rounded ${filter === 'security' ? 'bg-[#ff6b6b] text-white' : 'bg-[#2a2a3a]'}`}
              >
                SECURITY
              </button>
              <button 
                onClick={() => setFilter('content')}
                className={`px-3 py-1 rounded ${filter === 'content' ? 'bg-[#6bff6b] text-[#1a1a2e]' : 'bg-[#2a2a3a]'}`}
              >
                CONTENT
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center text-lg pixel-font">
              <div className="inline-block animate-blink">▶ CONNECTING TO UPDATE SERVERS...</div>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {filteredUpdates.map((update) => (
                <UpdateCard 
                  key={update.id} 
                  update={update}
                  isPlaceholder={update.id <= 18} 
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </FavoriteProvider>
  );
};

export default Updates;