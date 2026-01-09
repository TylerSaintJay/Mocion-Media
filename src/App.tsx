import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { ChatWidget } from './components/ChatWidget';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { GrowthAudit } from './pages/GrowthAudit';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-dodgerblue selection:text-white flex flex-col">
        <Background />
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/audit" element={<GrowthAudit />} />
          </Routes>
        </div>

        <footer className="py-24 px-6 border-t border-white/[0.03] bg-charcoal mt-auto">
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
    </Router>
  );
};

export default App;
