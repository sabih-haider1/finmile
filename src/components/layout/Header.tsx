'use client';

import React, { useState, useEffect } from "react";
import { Button } from "../ui/Button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    "Solutions", "Deliveries", "Features", "About", "Resources", "Whitepapers", "Delivery Software"
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed left-[30px] right-[30px] z-[100] max-w-[1500px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 py-3 lg:py-4 rounded-full transition-all duration-300 ${
          isMobileMenuOpen && 'xl:hidden' 
            ? 'bg-transparent border-transparent' 
            : isScrolled 
            ? 'bg-[#1b0f3e]/40 backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.3)]' 
            : 'bg-transparent border border-transparent'
        }`}
        style={{ top: '24px' }}
      >
        {/* Logo */}
        <div className={`flex items-center justify-center shrink-0 mr-4 transition-opacity duration-300 self-center translate-y-[5px] ${
          isMobileMenuOpen ? 'xl:opacity-100 opacity-0' : 'opacity-100'
        }`}>
          <img
            src="/assets/logos/logo-white.png"
            alt="Finmile Logo"
            className="h-10 md:h-12 lg:h-14 object-contain drop-shadow-lg align-middle"
          />
        </div>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden xl:flex items-center justify-center flex-1 gap-5 2xl:gap-8 mx-2 overflow-hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-[13px] 2xl:text-[14px] font-bold text-white/90 tracking-wide hover:text-white transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Actions - Desktop */}
        <div className="hidden xl:flex items-center justify-center gap-3 shrink-0 ml-4">
          <Button
            variant="liquid-glass"
            size="lg"
          >
            Track Parcel
          </Button>
          <Button
            variant="solid"
            size="lg"
          >
            Request A Demo
          </Button>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center ml-auto z-[110]"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-white transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[95] xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#1b0f3e]/95 backdrop-blur-xl border-l border-white/20 z-[99] xl:hidden transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-6 pb-8">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-4 mb-8">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[15px] font-bold text-white/90 hover:text-white transition-colors py-2 border-b border-white/10"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <Button
              variant="liquid-glass"
              size="lg"
              className="w-full"
            >
              Track Parcel
            </Button>
            <Button
              variant="solid"
              size="lg"
              className="w-full"
            >
              Request A Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
