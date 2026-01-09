import React from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      <div className="max-w-6xl w-full text-center z-10">
        <h1 className="font-bodoni text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tighter text-softwhite mb-10 select-none">
          Stop Burning Budget on <br />
          <span className="italic">Content That Gets Ignored.</span>
        </h1>

        <p className="font-inter text-mutedgray text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Most agencies are a cost center. We are a profit center. We merge high-retention performance creative with AI-driven systems to scale your business with mathematical precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/audit" className="group relative px-10 py-5 bg-dodgerblue text-white font-inter font-bold tracking-wide rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(30,144,255,0.5)]">
            <span className="relative z-10">Claim Your Growth Audit</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </Link>

          <button className="px-10 py-5 bg-transparent text-softwhite border border-softwhite/20 font-inter font-medium rounded-sm transition-all duration-300 hover:border-softwhite/40 hover:bg-white/5">
            See the Results
          </button>
        </div>
      </div>

      {/* Hero Visual / Mockup */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-full max-w-6xl opacity-10 pointer-events-none animate-float">
        <div className="aspect-video bg-gradient-to-t from-dodgerblue/30 to-transparent border-x border-t border-softwhite/10 rounded-t-[4rem]"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[9px] uppercase tracking-[0.4em] font-inter text-mutedgray">The Value Shift</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-dodgerblue to-transparent"></div>
      </div>
    </section>
  );
};
