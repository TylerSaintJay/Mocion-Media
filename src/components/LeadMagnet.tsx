
import React from 'react';

export const LeadMagnet: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-charcoal">
      <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-br from-darkgray to-charcoal border border-white/[0.05] p-12 md:p-20 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-dodgerblue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        <h3 className="font-bodoni text-3xl md:text-5xl text-softwhite mb-6 relative z-10">
          Not Ready to Scale Yet?
        </h3>
        <p className="font-inter text-mutedgray text-lg mb-10 relative z-10">
          Get our <span className="text-dodgerblue font-semibold">2026 Creative Audit Checklist</span>. Learn the exact metrics we use to identify content that converts vs. content that burns cash.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <input 
            type="email" 
            placeholder="Your business email" 
            className="w-full sm:w-auto min-w-[300px] px-6 py-4 bg-charcoal border border-white/10 rounded-sm text-softwhite font-inter focus:outline-none focus:border-dodgerblue transition-colors"
          />
          <button className="w-full sm:w-auto px-8 py-4 bg-softwhite text-charcoal font-inter font-bold tracking-wide rounded-sm hover:bg-dodgerblue hover:text-white transition-all duration-300">
            Send My Checklist
          </button>
        </div>
        
        <p className="mt-8 text-[10px] uppercase tracking-widest text-mutedgray opacity-50 relative z-10">
          Zero Spam. Only Performance.
        </p>
      </div>
    </section>
  );
};
