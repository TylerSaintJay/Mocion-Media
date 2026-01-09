import React, { useState } from 'react';

export const GrowthAudit: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to your backend or email service
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-20 px-6">
                <div className="max-w-2xl w-full bg-darkgray/50 border border-white/5 p-12 text-center rounded-sm">
                    <h2 className="font-bodoni text-4xl text-softwhite mb-6">Application Received</h2>
                    <p className="font-inter text-mutedgray text-lg mb-8">
                        We review every application manually. Expect to hear back from our team within 48 hours if we believe there is a strong fit.
                    </p>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="px-8 py-3 bg-dodgerblue text-white font-inter font-medium rounded-sm hover:bg-dodgerblue/90 transition-colors"
                    >
                        Return Home
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="font-bodoni text-5xl md:text-6xl text-softwhite mb-6">
                        Growth Audit Application
                    </h1>
                    <p className="font-inter text-mutedgray text-lg max-w-xl mx-auto">
                        We only work with brands where we can mathematically guarantee results. Please answer honestly so we can determine if our systems will work for you.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 bg-darkgray/30 p-8 md:p-12 border border-white/5 rounded-sm backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label className="block font-inter text-sm text-softwhite/80 uppercase tracking-wider">First Name</label>
                            <input
                                required
                                type="text"
                                className="w-full bg-charcoal border border-white/10 p-4 text-softwhite focus:border-dodgerblue focus:outline-none transition-colors rounded-sm"
                                placeholder="John"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block font-inter text-sm text-softwhite/80 uppercase tracking-wider">Last Name</label>
                            <input
                                required
                                type="text"
                                className="w-full bg-charcoal border border-white/10 p-4 text-softwhite focus:border-dodgerblue focus:outline-none transition-colors rounded-sm"
                                placeholder="Doe"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="block font-inter text-sm text-softwhite/80 uppercase tracking-wider">Work Email</label>
                        <input
                            required
                            type="email"
                            className="w-full bg-charcoal border border-white/10 p-4 text-softwhite focus:border-dodgerblue focus:outline-none transition-colors rounded-sm"
                            placeholder="john@company.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-inter text-sm text-softwhite/80 uppercase tracking-wider">Company Website</label>
                        <input
                            required
                            type="url"
                            className="w-full bg-charcoal border border-white/10 p-4 text-softwhite focus:border-dodgerblue focus:outline-none transition-colors rounded-sm"
                            placeholder="https://company.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block font-inter text-sm text-softwhite/80 uppercase tracking-wider">Monthly Marketing Budget</label>
                        <select
                            className="w-full bg-charcoal border border-white/10 p-4 text-softwhite focus:border-dodgerblue focus:outline-none transition-colors rounded-sm appearance-none"
                        >
                            <option value="" disabled selected>Select a range</option>
                            <option value="under-10k">Under $10k/mo</option>
                            <option value="10k-50k">$10k - $50k/mo</option>
                            <option value="50k-100k">$50k - $100k/mo</option>
                            <option value="100k-plus">$100k+/mo</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label className="block font-inter text-sm text-softwhite/80 uppercase tracking-wider">Biggest Growth Bottleneck</label>
                        <textarea
                            required
                            rows={4}
                            className="w-full bg-charcoal border border-white/10 p-4 text-softwhite focus:border-dodgerblue focus:outline-none transition-colors rounded-sm"
                            placeholder="Tell us what's holding you back..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-5 bg-dodgerblue text-white font-inter font-bold tracking-wide text-lg rounded-sm hover:bg-dodgerblue/90 transition-all shadow-lg mt-4"
                    >
                        Submit Application
                    </button>

                    <p className="text-center text-xs text-mutedgray mt-4">
                        By submitting this form, you agree to our privacy policy. Your data is secure.
                    </p>
                </form>
            </div>
        </div>
    );
};
