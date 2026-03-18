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
      setIsScrolled(window.scrollY > 20); // slightly more sensitive trigger
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to handle initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Framer Motion variants
  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 + 0.3, duration: 0.4, ease: "easeOut" }
    })
  };

  const mobileMenuVariants: Variants = {
    closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed left-3 right-3 md:left-5 md:right-5 lg:left-6 lg:right-6 xl:left-4 xl:right-4 2xl:left-[30px] 2xl:right-[30px] z-[100] max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 rounded-full transition-all duration-500 ease-out ${isMobileMenuOpen && 'xl:hidden'
          ? 'bg-transparent border-transparent py-3 lg:py-4'
          : isScrolled
            ? 'bg-[#2A1B54]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(11,6,22,0.8)] py-2.5 lg:py-3.5'
            : 'bg-transparent border-transparent py-4 lg:py-5'
          }`}
        style={{ top: '3px' }}
      >
        {/* Logo */}
        <Link
          href="/"
          className={`relative z-[110] flex items-center justify-center shrink-0 mr-4 transition-opacity duration-300 self-center translate-y-[2px] cursor-pointer ${isMobileMenuOpen ? 'xl:opacity-100 opacity-0' : 'opacity-100'
            }`}
        >
          <Image
            src="/assets/logos/logo-white.png"
            alt="Finmile Logo"
            width={224}
            height={56}
            sizes="(max-width: 768px) 140px, 224px"
            className="h-10 md:h-12 lg:h-14 object-contain drop-shadow-lg align-middle"
          />
        </Link>

        {/* Center Nav Links - Desktop */}
        <nav className="hidden xl:flex items-center justify-center min-w-0 flex-1 gap-1 2xl:gap-2 mx-2">
          {links.map((link, i) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');

            return (
              <motion.div
                key={link.name}
                custom={i}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                className="relative px-3 py-2 cursor-pointer rounded-full"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white/10 rounded-full pointer-events-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {link.href.startsWith('/') ? (
                  <Link
                    href={link.href}
                    className={`relative z-10 text-[13px] 2xl:text-[14px] font-[600] tracking-wide whitespace-nowrap transition-colors duration-200 ${isActive ? 'text-white drop-shadow-sm' : 'text-white hover:text-gray-400'
                      }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-finmile-purple rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="relative z-10 text-[13px] 2xl:text-[14px] font-[600] tracking-wide text-white hover:text-gray-400 whitespace-nowrap transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                )}
              </motion.div>
            );
          })}
        </nav>

        {/* Actions - Desktop */}
        <div className="hidden xl:flex items-center justify-center gap-3 shrink-0 ml-4">
          <motion.div variants={navItemVariants} custom={links.length} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="liquid-glass"
              size="lg"
            >
              Track Parcel
            </Button>
          </motion.div>
          <motion.div variants={navItemVariants} custom={links.length + 1} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="solid"
              size="lg"
              className="shadow-[0_0_20px_rgba(106,39,212,0.4)] hover:shadow-[0_0_25px_rgba(106,39,212,0.6)]"
            >
              Request A Demo
            </Button>
          </motion.div>
        </div>

        {/* Hamburger Menu Button - Mobile */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden relative flex flex-col gap-1.5 w-8 h-8 justify-center items-center ml-auto z-[110]"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''
              }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-opacity duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''
              }`}
          />
        </button>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#2A1B54]/80 backdrop-blur-sm z-[95] xl:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <motion.div
        variants={mobileMenuVariants}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        className="fixed top-0 right-0 h-full w-[300px] bg-[#2A1B54]/95 backdrop-blur-xl border-l border-white/10 z-[105] xl:hidden flex flex-col shadow-2xl"
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto custom-scrollbar">
          {/* Mobile Navigation Links */}
          <nav className="flex flex-col gap-2 mb-8">
            <AnimatePresence>
              {isMobileMenuOpen && links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  {link.href.startsWith('/') ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-[15px] font-[600] text-white/80 hover:text-white transition-colors py-3 border-b border-white/5"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-[15px] font-[600] text-white/80 hover:text-white transition-colors py-3 border-b border-white/5"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>

          {/* Mobile Action Buttons */}
          <div className="flex flex-col gap-3 mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              <Button
                variant="liquid-glass"
                size="lg"
                className="w-full justify-center"
              >
                Track Parcel
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.3 }}
            >
              <Button
                variant="solid"
                size="lg"
                className="w-full justify-center shadow-[0_0_15px_rgba(106,39,212,0.3)]"
              >
                Request A Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
