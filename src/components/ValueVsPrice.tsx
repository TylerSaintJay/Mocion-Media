
import React from 'react';

export const ValueVsPrice: React.FC = () => {
  return (
    <section className="py-24 px-6 border-y border-white/[0.03] bg-darkgray/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-bodoni text-4xl md:text-5xl text-softwhite mb-8 italic">
          "Price is what you pay, value is what you get."
        </h2>
        <div className="h-px w-24 bg-dodgerblue mx-auto mb-8"></div>
        <p className="font-inter text-mutedgray text-lg md:text-xl leading-relaxed">
          Cheap creative is the most expensive mistake a brand can make. It drains ad spend, kills your CTR, and erodes trust. At Mocion Media, we don't sell assets; we build <span className="text-softwhite font-semibold">Revenue Generators</span>. 
          If you're looking for the lowest quote, we're not for you. If you're looking for the highest ROI, we should talk.
        </p>
      </div>
    </section>
  );
};
