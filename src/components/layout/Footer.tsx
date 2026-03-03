'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <>
            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #6A27D4;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #8247E5;
                }
            `}</style>
            <footer className="w-full bg-[#1b0a4a] text-white pt-20 pb-4 px-6 lg:px-16 overflow-hidden relative">

            {/* Background Glow Effects (Hero-style gradients) */}
            <div className="absolute -top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#531FD1] rounded-full blur-[180px] opacity-40 pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#3B257E] rounded-[100%] blur-[200px] opacity-40 pointer-events-none" />

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 z-10 relative">

                {/* Column 1: Brand & Actions */}
                <div className="flex flex-col space-y-10 md:col-span-4 lg:col-span-5">
                    {/* Brand Logo */}
                    <div className="mb-2">
                        <img src="/assets/logos/logo-white.png" alt="Finmile Logo" className="w-[180px] h-[50px] object-contain" />
                    </div>

                    {/* Email Chip */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full liquid-glass flex items-center justify-center">
                            <Mail className="w-6 h-6 text-white" />
                        </div>
                        <a href="mailto:hello@finmile.co" className="text-white text-[14px] xl:text-[16px] font-medium hover:text-[#D8C7FF] transition-colors tracking-wide">
                            hello@finmile.co
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <button className="bg-[#6A27D4] text-white w-[160px] h-[48px] rounded-full text-[14px] shadow-[0_10px_20px_rgba(106,39,212,0.4)] hover:bg-[#5a21b5] transition-all whitespace-nowrap">
                            Request A Demo
                        </button>
                        <button className="liquid-glass text-white w-[160px] h-[48px] rounded-full text-[16px] transition-all whitespace-nowrap">
                            Track Parcel
                        </button>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col space-y-6 md:col-span-4 lg:col-span-3 mt-2 md:mt-0">
                    <h4 className="font-bold text-[18px] tracking-wide mb-2">Quick Links</h4>
                    <nav className="flex flex-col space-y-5 text-[#B8ADC9] text-[15px] font-medium max-h-[200px] overflow-y-auto pr-2 custom-scrollbar">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/agents" className="hover:text-white transition-colors">Ai Agents</Link>
                        <Link href="/control-tower" className="hover:text-white transition-colors">Control Tower</Link>
                        <Link href="/deliveries" className="hover:text-white transition-colors">Deliveries</Link>
                        <Link href="/delivery-software" className="hover:text-white transition-colors">Delivery Software</Link>
                        <Link href="/driver-app" className="hover:text-white transition-colors">Driver App</Link>
                        <Link href="/3pl-networks" className="hover:text-white transition-colors">3PL & Networks</Link>
                        <Link href="/dsps" className="hover:text-white transition-colors">DSPs</Link>
                        <Link href="/retailers" className="hover:text-white transition-colors">Finmile for Retailers</Link>
                        <Link href="/optimization" className="hover:text-white transition-colors">Optimization</Link>
                        <Link href="/return-optimization" className="hover:text-white transition-colors">Return Optimization</Link>
                        <Link href="/sustainable" className="hover:text-white transition-colors">Sustainable Delivery</Link>
                    </nav>
                </div>

                {/* Column 3: Resources */}
                <div className="flex flex-col space-y-6 md:col-span-2 lg:col-span-2 mt-2 md:mt-0">
                    <h4 className="font-bold text-[18px] tracking-wide mb-2">Resources</h4>
                    <nav className="flex flex-col space-y-5 text-[#B8ADC9] text-[15px] font-medium">
                        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                        <Link href="/whitepapers" className="hover:text-white transition-colors">Whitepapers</Link>
                        <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
                        <Link href="/track" className="hover:text-white transition-colors">Track Delivery</Link>
                    </nav>
                </div>

                {/* Column 4: Get in Touch */}
                <div className="flex flex-col space-y-6 md:col-span-2 lg:col-span-2 mt-2 md:mt-0">
                    <h4 className="font-bold text-[18px] tracking-wide mb-2">Get In Touch</h4>
                    <nav className="flex flex-col space-y-5 text-[#B8ADC9] text-[15px] font-medium">
                        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                    </nav>

                    <div className="w-12 h-12 mt-6 rounded-full liquid-glass flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer">
                        <Linkedin className="w-5 h-5 text-white" />
                    </div>
                </div>

            </div>

            {/* Bottom Legal Bar */}
            <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[#B8ADC9] text-[13px] font-medium z-10 relative">
                <p>© 2026 Finmile. All rights reserved.</p>
                <div className="flex gap-4 md:gap-6 mt-6 md:mt-0">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <span className="hidden md:block">|</span>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    <span className="hidden md:block">|</span>
                    <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
        </>
    );
};
