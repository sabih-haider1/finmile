'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Button } from "../ui/Button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  const links = [
    { name: "Solutions", href: "#solutions" },
    { name: "Deliveries", href: "/deliveries" },
    { name: "Features", href: "#features" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "#resources" },
    { name: "Whitepapers", href: "/whitepapers" },
    { name: "Delivery Software", href: "/delivery-software" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
  }, [isMobileMenuOpen]);

  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + 0.3, duration: 0.4 }
    })
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed left-3 right-3 md:left-5 md:right-5 lg:left-6 lg:right-6 xl:left-4 xl:right-4 z-[100] max-w-[1600px] mx-auto flex items-center px-4 md:px-6 lg:px-8 rounded-full transition-all duration-500 ${isScrolled ? 'bg-[#2A1B54]/80 backdrop-blur-md border border-white/10 shadow-lg py-2.5' : 'bg-transparent py-4'
        }`}
      style={{ top: '3px' }}
    >

      {/* LEFT: Logo */}
      <div className="flex items-center shrink-0" style={{ marginLeft: '30px' }}>
        <Link href="/" className="flex items-center">
          <Image
            src="/assets/logos/logo-white.png"
            alt="Finmile Logo"
            width={224}
            height={56}
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
        </Link>
      </div>

      {/* CENTER: NAV (flex grow but constrained) */}
      <nav className="hidden xl:flex flex-1 justify-center min-w-0 max-w-[700px] gap-2 overflow-hidden">
        {links.map((link, i) => {
          const isActive = pathname === link.href;

          return (
            <motion.div
              key={link.name}
              custom={i}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              className="relative px-2 py-2 whitespace-nowrap"
            >
              <Link
                href={link.href}
                className={`text-[13px] font-semibold transition-colors ${isActive ? 'text-white' : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* RIGHT: ACTIONS */}
      <div className="hidden xl:flex items-center gap-3 shrink-0 ml-auto">
        <Button variant="liquid-glass" size="lg" className="w-[140px] h-[44px]">
          Track Parcel
        </Button>
        <Button variant="solid" size="lg" className="w-[140px] h-[44px]">
          Request A Demo
        </Button>
      </div>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="xl:hidden ml-auto w-8 h-8"
      >
        ☰
      </button>

    </motion.header>
  );
};