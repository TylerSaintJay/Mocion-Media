
import React from 'react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    id: 'performance-video',
    title: 'High-Retention Video',
    description: 'We produce performance-driven video assets designed to stop the scroll and keep attention. Every frame is optimized for retention and conversion delta.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    isEmphasized: true
  },
  {
    id: 'revenue-identity',
    title: 'Revenue-First Identity',
    description: 'Brand identity that doesn\'t just look "premium"—it commands authority and facilitates transactions. Design as a tool for commercial dominance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 'creative-strategy',
    title: 'Paid Social Strategy',
    description: 'We merge algorithmic data with psychological triggers. Our creative strategy adapts to platform changes in real-time, ensuring your ROAS never plateaus.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    )
  }
];

export const ValueProp: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="font-bodoni text-5xl md:text-6xl text-softwhite mb-6">The 3 Pillars of Mocion</h2>
          <p className="font-inter text-mutedgray max-w-2xl mx-auto">
            We operate at the intersection of high-tier design and algorithmic precision. No fluff, just scalable systems built for 2026 performance standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className={`group p-10 rounded-lg bg-darkgray transition-all duration-500 hover:-translate-y-2 border border-white/[0.03] hover:border-dodgerblue/30 shadow-2xl ${feature.isEmphasized ? 'scale-105 border-dodgerblue/20 bg-darkgray/80 ring-1 ring-dodgerblue/10 shadow-dodgerblue/5' : ''}`}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded bg-dodgerblue/10 text-dodgerblue mb-8 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-inter font-semibold text-xl text-softwhite mb-4">{feature.title}</h3>
              <p className="font-inter text-mutedgray leading-relaxed text-sm">
                {feature.description}
              </p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-dodgerblue text-xs font-semibold tracking-widest uppercase flex items-center gap-2">
                  Request Detail
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
