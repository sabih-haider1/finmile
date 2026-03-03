import React from "react";
import { Button } from "../ui/Button";

export const Header = () => {
  const links = [
    "Solutions", "Deliveries", "Features", "About", "Resources", "Whitepapers", "Delivery Software"
  ];

  return (
    <header
      className="fixed left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-[1500px] flex items-center justify-between px-4 md:px-8 lg:px-10 py-3 lg:py-4 bg-[#1b0f3e]/40 backdrop-blur-xl border border-white/20 shadow-[0_15px_40px_rgba(0,0,0,0.3)] rounded-full transition-all duration-300"
      style={{ top: '24px' }}
    >
      {/* Logo */}
      <div className="flex items-center shrink-0 mr-4">
        <img
          src="/assets/logos/logo-white.png"
          alt="Finmile Logo"
          className="h-10 md:h-12 lg:h-14 object-contain drop-shadow-lg"
        />
      </div>

      {/* Center Nav Links */}
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

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 shrink-0 ml-4">
        <Button
          variant="liquid-glass"
          size="lg"
          className="hidden lg:inline-flex rounded-full text-[13px] md:text-[14px] px-5 py-2.5 min-w-max"
        >
          Track Parcel
        </Button>
        <Button
          variant="solid"
          size="lg"
          className="rounded-full text-[13px] md:text-[14px] px-5 py-2.5 min-w-max"
        >
          Request A Demo
        </Button>
      </div>
    </header>
  );
};
