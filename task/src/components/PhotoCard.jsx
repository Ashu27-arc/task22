import React from 'react';

const PhotoCard = ({ color, text }) => {
  return (
    <div className="relative group">
      <div className="p-4  border-2 border-gray-700 bg-black/20 backdrop-blur-sm">
        <div 
          className={`${color} aspect-square w-full rounded-lg shadow-lg 
          transition-all duration-300 ease-in-out 
          hover:scale-105 hover:shadow-xl
          border border-gray-600`}
        >
          <div className="flex items-center justify-center h-full text-gray-400">
            600 x 600
          </div>
        </div>
        <p className="text-white text-sm mt-2 transition-opacity duration-300">
          {text}
        </p>
      </div>
    </div>
  );
};

export default PhotoCard;
