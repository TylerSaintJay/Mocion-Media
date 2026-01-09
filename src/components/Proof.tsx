
import React from 'react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Chen',
    role: 'CEO at Lumina Tech',
    content: 'Mocion transformed our growth trajectory. Their AI systems handle 40% of our lead qualification now, allowing our sales team to focus on high-value closing.',
    image: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    author: 'Markus Thorne',
    role: 'Head of Growth, Velocity',
    content: 'The editorial approach they take to creative is refreshing. Our brand feels premium again, while our CAC has dropped by 30%. Sharp, intentional, and serious.',
    image: 'https://picsum.photos/100/100?random=2'
  },
  {
    id: '3',
    author: 'Elena Rossi',
    role: 'Founder, Atmos',
    content: 'Scaling used to feel chaotic. With Mocion\'s marketing practices and AI infrastructure, it now feels like a predictable machine.',
    image: 'https://picsum.photos/100/100?random=3'
  }
];

export const Proof: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-darkgray/50 border-y border-white/[0.03]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bodoni text-4xl md:text-5xl text-center text-softwhite mb-20 italic">Proof of Scale</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="p-8 border-l border-white/5 hover:border-dodgerblue transition-colors duration-500">
              <p className="font-inter text-mutedgray italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-10 h-10 rounded-full grayscale hover:grayscale-0 transition-all duration-300" />
                <div>
                  <p className="font-inter text-softwhite font-medium text-sm">{t.author}</p>
                  <p className="font-inter text-mutedgray text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Marquee placeholder */}
        <div className="mt-32 border-t border-white/5 pt-20">
          <p className="text-center font-inter text-[10px] uppercase tracking-[0.3em] text-mutedgray mb-10">Trusted by modern industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
             <span className="font-bodoni text-2xl">Lumina</span>
             <span className="font-bodoni text-2xl">Velocity</span>
             <span className="font-bodoni text-2xl">Atmos</span>
             <span className="font-bodoni text-2xl">Precision</span>
             <span className="font-bodoni text-2xl">Oasis</span>
          </div>
        </div>
      </div>
    </section>
  );
};
