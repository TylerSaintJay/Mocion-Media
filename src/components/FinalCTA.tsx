import React from 'react';
import { Link } from 'react-router-dom';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-40 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bodoni text-5xl md:text-7xl text-softwhite mb-12 leading-tight">
          Ready to Outpace <br /> the Market?
        </h2>
        <p className="font-inter text-mutedgray text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          We only take on 3 new partners per quarter to ensure ruthless focus and execution. Secure your slot for the next growth phase today.
        </p>

        <div className="inline-block relative group">
          <Link to="/audit" className="inline-block relative z-10 px-14 py-6 bg-dodgerblue text-white font-inter font-bold tracking-wide text-lg rounded-sm overflow-hidden shadow-2xl">
            Request a Growth Audit
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>
          <div className="absolute -inset-2 bg-dodgerblue blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-dodgerblue to-transparent"></div>
          <p className="mt-6 text-[10px] tracking-[0.4em] uppercase text-mutedgray">
            The Delta in Growth — Mocion Media &copy; 2024
          </p>
        </div>
      </div>
    </section>
  );
};
