
import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-charcoal">
      {/* Slow animated gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-dodgerblue/5 blur-[120px] rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-dodgerblue/10 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      {/* Grid pattern with shimmer effect */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      ></div>

      {/* Particle drift - simple CSS implementation */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-dodgerblue rounded-full blur-[1px] animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
