import React from 'react';
import { Hero } from '../components/Hero';
import { ValueProp } from '../components/ValueProp';
import { Proof } from '../components/Proof';
import { FinalCTA } from '../components/FinalCTA';
import { ValueVsPrice } from '../components/ValueVsPrice';
import { LeadMagnet } from '../components/LeadMagnet';

export const Home: React.FC = () => {
    return (
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
    );
};
