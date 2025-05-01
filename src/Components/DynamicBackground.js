import React, { useEffect, useState } from 'react';

const DynamicBackground = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Generate stars
    const generateStars = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const numberOfStars = Math.min(windowWidth * windowHeight / 5000, 150);
      
      const newStars = [];
      for (let i = 0; i < numberOfStars; i++) {
        newStars.push({
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          size: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.7 + 0.3,
          duration: `${Math.random() * 10 + 10}s`,
          delay: `${Math.random() * 15}s`,
          distance: `${Math.random() * 200 - 100}px`
        });
      }
      setStars(newStars);
    };

    generateStars();
    
    const handleResize = () => {
      generateStars();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="stars">
        {stars.map(star => (
          <div
            key={star.id}
            className="star"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              '--opacity': star.opacity,
              '--duration': star.duration,
              '--delay': star.delay,
              '--distance': star.distance
            }}
          />
        ))}
      </div>
      <div className="glow"></div>
      <div className="glow"></div>
    </>
  );
};

export default DynamicBackground; 