
import React from 'react';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { ValueProp } from './components/ValueProp';
import { Proof } from './components/Proof';
import { FinalCTA } from './components/FinalCTA';
import { Background } from './components/Background';
import { ValueVsPrice } from './components/ValueVsPrice';
import { LeadMagnet } from './components/LeadMagnet';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-dodgerblue selection:text-white">
      <Background />
      <Navbar />
      
      <main>
        {/* Hook / Value Proposition Top Level (Frustration + Offer Mix) */}
        <Hero />
        
        {/* Value vs. Price Philosophy */}
        <ValueVsPrice />
        
        {/* The 3 Pillars (Value Proposition in more detail) */}
        <ValueProp />
        
        {/* Proof Section (Focusing on the Delta) */}
        <Proof />

        {/* Lead Magnet (The Safety Net) */}
        <LeadMagnet />
        
        {/* Final CTA (The Goal: Growth Audit) */}
        <FinalCTA />
      </main>
      
      <footer className="py-24 px-6 border-t border-white/[0.03] bg-charcoal">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
             <h4 className="font-bodoni text-3xl text-softwhite mb-6 tracking-tight">Mocion Media</h4>
             <p className="font-inter text-mutedgray max-w-sm text-sm leading-relaxed">
                Transforming brand marketing from a cost center into a high-octane profit machine. Precision creative for the algorithmic age.
             </p>
          </div>
          <div>
            <h5 className="font-inter font-semibold text-xs uppercase tracking-widest text-softwhite mb-6">Systems</h5>
            <ul className="space-y-4 text-sm text-mutedgray font-inter">
              <li className="hover:text-dodgerblue transition-colors cursor-pointer">Revenue Attribution</li>
              <li className="hover:text-dodgerblue transition-colors cursor-pointer">Retention Loops</li>
              <li className="hover:text-dodgerblue transition-colors cursor-pointer">AI Creative Ops</li>
            </ul>
          </div>
          <div>
            <h5 className="font-inter font-semibold text-xs uppercase tracking-widest text-softwhite mb-6">Connect</h5>
            <ul className="space-y-4 text-sm text-mutedgray font-inter">
              <li className="hover:text-dodgerblue transition-colors cursor-pointer">LinkedIn</li>
              <li className="hover:text-dodgerblue transition-colors cursor-pointer">Twitter</li>
              <li className="hover:text-dodgerblue transition-colors cursor-pointer">Newsletter</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/[0.03] flex justify-between items-center text-[10px] text-mutedgray uppercase tracking-widest">
           <span>Mocion Media — High Retention Marketing</span>
           <span>Est. 2024</span>
        </div>
      </footer>

      {/* ElevenLabs Conversational AI Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
