// File: src/components/UpdateCard.jsx
import React from 'react';

const UpdateCard = ({ update, isPlaceholder }) => {
  const getTypeColor = () => {
    switch(update.type) {
      case 'security': return 'bg-[#ff6b6b]';
      case 'content': return 'bg-[#6bff6b]';
      case 'performance': return 'bg-[#6b6bff]';
      case 'bugfix': return 'bg-[#ffcc6b]';
      default: return 'bg-[#f0e68c]';
    }
  };

  return (
    <div className={`relative border-2 ${isPlaceholder ? 'border-[#f0e68c] animate-pulse' : 'border-[#4a4a5a]'} 
      p-4 rounded-lg bg-[#2a2a3a] hover:border-[#f0e68c] transition-all`}>
      
      {/* Update type badge */}
      <div className={`absolute -top-3 -left-3 px-2 py-1 rounded ${getTypeColor()} text-[#1a1a2e] 
        text-xs font-bold pixel-font uppercase`}>
        {update.type || 'update'}
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-shrink-0">
          <img 
            src={update.image} 
            alt={update.game} 
            className="w-32 h-32 object-cover rounded border border-[#f0e68c]"
          />
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold pixel-font mb-1">{update.title}</h3>
          <div className="flex items-center text-sm mb-2">
            <span className="bg-[#4a4a5a] px-2 py-1 rounded mr-2">{update.game}</span>
            <span className="text-[#a0a0a0]">v{update.version}</span>
          </div>
          <p className="text-[#c0c0c0] mb-3">{update.description}</p>
          <div className="text-xs text-[#f0e68c]">
            RELEASED: {update.date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCard;