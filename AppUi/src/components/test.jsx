import React, { useState, useRef, useEffect } from 'react';

const TravelCard = ({ image, scale, opacity }) => {
  return (
    <div 
      className="transition-all duration-700 ease-out rounded-3xl overflow-hidden shadow-2xl"
      style={{
        width: `${300 + scale * 180}px`,
        height: `${200 + scale * 80}px`,
        opacity: 0.4 + opacity * 0.6,
        transform: `scale(${0.85 + scale * 0.15})`,
      }}
    >
      <img 
        src={image} 
        alt="Travel" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const Test = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const maxScroll = 200;
  
  const images = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop'
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.5;
      
      setScrollPosition(prev => {
        const newPos = prev + delta;
        return Math.max(0, Math.min(maxScroll * 2, newPos));
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  const getCardScale = (index) => {
    const cardPosition = index * maxScroll;
    const distance = Math.abs(scrollPosition - cardPosition);
    const scale = Math.max(0, 1 - distance / maxScroll);
    return scale;
  };

  const getCardOpacity = (index) => {
    const cardPosition = index * maxScroll;
    const distance = Math.abs(scrollPosition - cardPosition);
    const opacity = Math.max(0, 1 - distance / (maxScroll * 1.5));
    return opacity;
  };

  return (
    <div 
      ref={containerRef}
      className="w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="flex flex-col items-center gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="transform transition-all duration-700 ease-out"
          >
            <TravelCard
              image={image}
              scale={getCardScale(index)}
              opacity={getCardOpacity(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Test;