import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-6 ${isScrolled ? 'bg-charcoal/80 backdrop-blur-md border-b border-white/[0.05] !py-4' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="block">
          <Logo className="h-6" />
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link to="/" className="font-inter text-sm text-softwhite/70 hover:text-softwhite transition-colors">Practices</Link>
          <Link to="/" className="font-inter text-sm text-softwhite/70 hover:text-softwhite transition-colors">Case Studies</Link>
          <Link to="/" className="font-inter text-sm text-softwhite/70 hover:text-softwhite transition-colors">Systems</Link>
          <Link to="/audit" className="px-6 py-2 border border-dodgerblue/40 text-dodgerblue text-sm font-inter font-medium rounded-sm hover:bg-dodgerblue/10 transition-all">
            Contact
          </Link>
        </div>

        {/* Mobile menu toggle simplified for design showcase */}
        <button className="md:hidden text-softwhite">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
