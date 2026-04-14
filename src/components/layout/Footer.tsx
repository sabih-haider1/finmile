import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';
import { Montserrat } from 'next/font/google';
import { Button } from '../ui/Button';

const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';
const montserrat = Montserrat({ subsets: ['latin'] });

export const Footer = () => {
    return (
        <footer className={`w-full bg-[#0B0616] text-white pt-20 pb-4 px-6 lg:px-16 overflow-hidden relative pointer-events-auto ${montserrat.className}`} style={{ isolation: 'isolate' }}>

            {/* Background Glow Effects (Hero-style gradients) */}
            <div className="absolute -top-[10%] left-[-10%] w-[500px] h-[500px] bg-[#531FD1] rounded-full blur-[180px] opacity-40 pointer-events-none -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#3B257E] rounded-[100%] blur-[200px] opacity-40 pointer-events-none -z-10" />

            <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 z-20 relative items-start">

                {/* Column 1: Brand & Actions */}
                <div className="flex flex-col items-start space-y-10 md:col-span-6 lg:col-span-4 w-full">
                    {/* Brand Logo */}
                    <div className="mb-2 relative left-[-24px] md:left-0">
                        <Link href="/">
                            <Image src="/assets/logos/logo-white.png" alt="Finmile Logo" width={180} height={50} sizes="180px" className="w-[180px] h-[50px] object-contain cursor-pointer transition-all duration-300" />
                        </Link>
                    </div>

                    {/* Email Chip */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full liquid-glass flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-white" aria-hidden="true" />
                        </div>
                        <a href="mailto:hello@finmile.co" className="text-white text-[14px] xl:text-[16px] font-medium hover:text-[#D8C7FF] transition-colors tracking-wide break-all">
                            hello@finmile.co
                        </a>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-8">
                        <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-fit">
                            <Button variant="solid" size="lg" className="shadow-[0_0_20px_rgba(106,39,212,0.4)] w-full sm:w-auto">
                                Request A Demo
                            </Button>
                        </Link>
                        <Link href="/track-parcel" className="w-full sm:w-fit">
                            <Button variant="liquid-glass" size="lg" className="w-full sm:w-auto">
                                Track Parcel
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Column 2: Quick Links */}
                <div className="flex flex-col items-start space-y-6 md:col-span-2 lg:col-span-3 w-full text-left mt-2 md:mt-0">
                    <h4 className="font-bold text-[18px] tracking-wide mb-2">Quick Links</h4>
                    <nav className="flex flex-col items-start space-y-3 sm:space-y-5 text-[#B8ADC9] text-[15px] font-medium w-full md:max-h-[220px] md:overflow-y-auto md:pr-5 custom-scrollbar">
                        <Link href="/about" className="hover:text-white transition-colors">About</Link>
                        <Link href="/ai-agents" className="hover:text-white transition-colors">AI Agents</Link>
                        <Link href="/control-tower" className="hover:text-white transition-colors">Control Tower</Link>
                        <Link href="/integrations" className="hover:text-white transition-colors">Integrations</Link>
                        <Link href="/deliveries" className="hover:text-white transition-colors">Deliveries</Link>
                        <Link href="/delivery-software" className="hover:text-white transition-colors">Delivery Software</Link>
                        <Link href="/driver-app" className="hover:text-white transition-colors">Driver App</Link>
                        <Link href="/3pl-networks" className="hover:text-white transition-colors">3PL Networks</Link>
                        <Link href="/dsps" className="hover:text-white transition-colors">DSPs</Link>
                        <Link href="/retailers" className="hover:text-white transition-colors">Retailers</Link>
                        <Link href="/optimization" className="hover:text-white transition-colors">Optimization</Link>
                        <Link href="/returns-optimization" className="hover:text-white transition-colors">Return Optimization</Link>
                        <Link href="/sustainable-delivery" className="hover:text-white transition-colors">Sustainable Delivery</Link>
                    </nav>
                </div>

                {/* Column 3: Resources */}
                <div className="flex flex-col items-start space-y-6 md:col-span-2 lg:col-span-3 w-full text-left mt-2 md:mt-0">
                    <h4 className="font-bold text-[18px] tracking-wide mb-2">Resources</h4>
                    <nav className="flex flex-col items-start space-y-3 sm:space-y-5 text-[#B8ADC9] text-[15px] font-medium w-full">
                        <Link href="/blog/all" className="hover:text-white transition-colors">Blog</Link>
                        <Link href="/whitepapers/all" className="hover:text-white transition-colors">Whitepapers</Link>
                        <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                        <Link href="/track-parcel" className="hover:text-white transition-colors">Track Delivery</Link>
                    </nav>
                </div>

                {/* Column 4: Get in Touch */}
                <div className="flex flex-col items-start space-y-6 md:col-span-2 lg:col-span-2 w-full text-left mt-2 md:mt-0">
                    <h4 className="font-bold text-[18px] tracking-wide mb-2">Get In Touch</h4>
                    <nav className="flex flex-col items-start space-y-3 sm:space-y-5 text-[#B8ADC9] text-[15px] font-medium w-full">
                        <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                    </nav>

                    <div className="pt-10">
                        <a
                            href="https://www.linkedin.com/company/finmile/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full liquid-glass flex items-center justify-center hover:-translate-y-1 transition-all cursor-pointer block"
                            aria-label="Finmile on LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 text-white" aria-hidden="true" />
                        </a>
                    </div>
                </div>

            </div>

            {/* Bottom Legal Bar */}
            <div className="max-w-[1440px] mx-auto mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between text-[#B8ADC9] text-[13px] font-medium z-20 relative text-left md:text-left">
                <p className="mb-4 md:mb-0">© 2026 Finmile. All rights reserved.</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2 sm:gap-x-4 md:gap-x-6 md:mt-0">
                    <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <span className="hidden md:block">|</span>
                    <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    <span className="hidden md:block">|</span>
                    <Link href="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
};