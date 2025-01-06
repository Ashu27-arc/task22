import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';
import PhotoCard from './PhotoCard';

const PhotoGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const photos = [
    {
      id: 1,
      color: 'bg-lime-400',
      text: 'accusamus beatae ad facilis cum similiq'
    },
    {
      id: 2,
      color: 'bg-purple-600',
      text: 'reprehenderit est deserunt velit ipsam'
    },
    {
      id: 3,
      color: 'bg-green-400',
      text: 'officia porro iure quia iusto qui ipsa ut n'
    },
    {
      id: 4,
      color: 'bg-pink-500',
      text: 'culpa odio esse rerum omnis laboriosam'
    },
    {
      id: 5,
      color: 'bg-pink-400',
      text: 'natus nisi omnis corporis facere molesti'
    },
    {
      id: 6,
      color: 'bg-blue-500',
      text: 'accusamus ea aliquid et amet sequi ner'
    },
    {
      id: 7,
      color: 'bg-green-200',
      text: 'officia delectus consequatur vero aut ve'
    },
    {
      id: 8,
      color: 'bg-purple-700',
      text: 'aut porro officiis laborum odit ea laudar'
    }
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-xl">{error}</p>
      </div>
    );
  }

  return (
    // Added border-2 and border-gray-700 for the main container
    <div className="container mx-auto p-8 border-gray-700 rounded-xl bg-black/40 backdrop-blur-sm">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Photos</h1>
      {/* Adjusted gap to account for the new borders */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id}
            color={photo.color}
            text={photo.text}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery;
