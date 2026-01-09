
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src="blank.png" 
        alt="Mocion Media Logo" 
        className="h-full object-contain brightness-110 contrast-125"
      />
      <span className="font-bodoni text-2xl tracking-tight font-bold text-softwhite">
        MOCiON
      </span>
    </div>
  );
};
