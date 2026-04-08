'use client';
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from "../ui/Button";

export const Header = ({ theme = 'dark' }: { theme?: 'light' | 'dark' }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const isLight = theme === 'light';

    const industryLinks = [
        { name: "Logistics & Delivery", href: "/logistics-delivery" },
        { name: "E-Commerce & Retail", href: "/retail-ecommerce" },
        { name: "Automotive & Parts", href: "/automotive-parts" },
        { name: "Medical & Pharmacy", href: "/medical-pharmacy" },
        { name: "Field Service", href: "/field-service" },
        { name: "Wholesale & B2B", href: "/wholesale-b2b" },
        { name: "Sustainability", href: "/sustainable-operators" },
    ];

    const featureLinks = [
        { name: "Integrations", href: "/integrations" },
        { name: "Routing & Optimization", href: "/optimization" },
        { name: "Execution & Tracking", href: "/deliveries" },
        { name: "Drivers App", href: "/driver-app" },
        { name: "Control Tower", href: "/control-tower" },
    ];

    const moreLinks = [
        { name: "Delivery", href: "/deliveries" },
        { name: "Delivery Software", href: "/delivery-software" },
    ];

    const defaultLinks = [
        { name: "Solutions", href: "/solutions" },
        { name: "Industries", href: "#industries", subMenu: industryLinks },
        { name: "Features", href: "#features", subMenu: featureLinks },
        { name: "About", href: "/about" },
        { name: "Resources", href: "/resources/all" },
        { name: "Whitepapers", href: "/whitepapers" },
        { name: "More", href: "#more", subMenu: moreLinks }
    ];

    const links = defaultLinks;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Scroll control for mobile menu
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);
    const DEMO_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScU-6l73tsAkZgXUH5YZtpVgDLw2LxRNfZRQCaarp46eqa33g/viewform';

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

    const dropdownVariants: Variants = {
        hidden: { opacity: 0, y: 10, scale: 0.95 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        exit: { 
            opacity: 0, 
            y: 10, 
            scale: 0.95,
            transition: { duration: 0.15, ease: "easeIn" }
        }
    };

    return (
        <>
            <motion.header
                variants={headerVariants}
                initial="initial"
                animate="animate"
                className={`fixed left-3 right-3 md:left-5 md:right-5 lg:left-6 lg:right-6 xl:left-4 xl:right-4 2xl:left-[30px] 2xl:right-[30px] z-[100] max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-8 lg:px-10 rounded-full transition-all duration-500 ease-out ${
                    isMobileMenuOpen && 'xl:hidden' 
                        ? 'bg-transparent border-transparent py-3 lg:py-4' 
                        : isScrolled 
                            ? isLight 
                                ? 'bg-white/90 backdrop-blur-md border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] py-2.5 lg:py-3.5'
                                : 'bg-[#2A1B54]/80 backdrop-blur-md border border-white/10 shadow-[0_8px_30px_rgba(11,6,22,0.8)] py-2.5 lg:py-3.5' 
                            : 'bg-transparent border-transparent py-4 lg:py-5'
                }`}
                style={{ top: '3px' }}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className={`relative z-[110] flex items-center justify-center shrink-0 mr-4 transition-opacity duration-300 self-center translate-y-[2px] cursor-pointer ${isMobileMenuOpen ? 'xl:opacity-100 opacity-0' : 'opacity-100'}`}
                >
                    <Image
                        src={isLight ? "/assets/logos/logo-blue.png" : "/assets/logos/logo-white.png"}
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
                        const isActive = link.href.startsWith('/') && (pathname === link.href || pathname?.startsWith(link.href + '/'));
                        const hasSubMenu = link.subMenu && link.subMenu.length > 0;

                        return (
                            <motion.div
                                key={link.name}
                                custom={i}
                                variants={navItemVariants}
                                initial="hidden"
                                animate="visible"
                                className="relative rounded-full"
                                onMouseEnter={() => {
                                    setHoveredLink(link.name);
                                    if (hasSubMenu) setActiveDropdown(link.name);
                                }}
                                onMouseLeave={() => {
                                    setHoveredLink(null);
                                    if (hasSubMenu) setActiveDropdown(null);
                                }}
                            >
                                {hoveredLink === link.name && !hasSubMenu && (
                                    <motion.div
                                        layoutId="nav-hover"
                                        className={`absolute inset-0 rounded-full pointer-events-none ${isLight ? 'bg-gray-100' : 'bg-white/10'}`}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                                
                                <div className="relative z-10 flex items-center gap-1 px-3 py-2 cursor-pointer">
                                    {link.href.startsWith('/') ? (
                                             <Link
                                             href={link.href}
                                             className={`text-[13px] 2xl:text-[14px] font-[600] tracking-tight whitespace-nowrap transition-colors duration-200 ${isActive ? (isLight ? 'text-[#6A27D4]' : 'text-white') : (isLight ? 'text-gray-900 hover:text-[#6A27D4]' : 'text-white/80 hover:text-white')}`}
                                         >
                                             {link.name}
                                         </Link>
                                     ) : (
                                         <span
                                             className={`text-[13px] 2xl:text-[14px] font-[600] tracking-tight whitespace-nowrap transition-colors duration-200 flex items-center gap-1 ${isLight ? 'text-gray-900 hover:text-[#6A27D4]' : 'text-white/80 hover:text-white'}`}
                                         >
                                             {link.name}
                                             {hasSubMenu && <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                         </span>
                                     )}

                                     {isActive && (
                                         <motion.div
                                             layoutId="nav-active"
                                             className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-[2px] rounded-full ${isLight ? 'bg-[#6A27D4]' : 'bg-white'}`}
                                             transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                         />
                                     )}
                                </div>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {activeDropdown === link.name && hasSubMenu && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="absolute top-full left-1/2 -translate-x-1/2 pt-4 min-w-[200px]"
                                        >
                                            <div className={`${isLight ? 'bg-white border-gray-100 shadow-xl' : 'bg-[#1A0F2E]/95 backdrop-blur-xl border-white/10'} border rounded-2xl p-2 shadow-2xl`}>
                                                {link.subMenu?.map((subItem) => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        className={`block px-4 py-2.5 text-[13px] rounded-xl transition-all ${isLight ? 'text-gray-600 hover:text-[#6A27D4] hover:bg-gray-50' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Actions - Desktop */}
                <div className="hidden xl:flex items-center justify-center gap-3 shrink-0 ml-4">
                    <motion.div
                        variants={navItemVariants}
                        custom={links.length}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/track-parcel" className="block">
                            <Button
                                variant={isLight ? "outline" : "liquid-glass"}
                                size="lg"
                                className="w-[154px] h-[48px]"
                            >
                                Track Parcel
                            </Button>
                        </Link>
                    </motion.div>
                    
                    <motion.div
                        variants={navItemVariants}
                        custom={links.length + 1}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="block">
                            <Button
                                variant="solid"
                                size="lg"
                                className={`w-[164px] h-[48px] ${isLight ? 'shadow-[0_8px_20px_rgba(106,39,212,0.15)] bg-[#6A27D4]' : 'shadow-[0_0_20px_rgba(106,39,212,0.4)] hover:shadow-[0_0_25px_rgba(106,39,212,0.6)]'}`}
                            >
                                Request A Demo
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Hamburger Menu Button - Mobile */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="xl:hidden relative flex flex-col gap-1.5 w-8 h-8 justify-center items-center ml-auto z-[110]"
                    aria-label="Toggle menu"
                    aria-expanded={isMobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    <span className={`w-6 h-0.5 ${isLight ? 'bg-gray-900' : 'bg-white'} rounded-full transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                    <span className={`w-6 h-0.5 ${isLight ? 'bg-gray-900' : 'bg-white'} rounded-full transition-opacity duration-300 ease-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`w-6 h-0.5 ${isLight ? 'bg-gray-900' : 'bg-white'} rounded-full transition-transform duration-300 ease-out origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
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
                        className="fixed inset-0 bg-[#0B0616]/80 backdrop-blur-sm z-[95] xl:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu Sidebar */}
            <motion.div
                id="mobile-menu"
                variants={mobileMenuVariants}
                initial="closed"
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="fixed top-0 right-0 h-full w-[300px] bg-[#1A0F2E]/95 backdrop-blur-xl border-l border-white/10 z-[105] xl:hidden flex flex-col shadow-2xl"
            >
                <div className="flex flex-col h-full pt-20 px-6 pb-8 overflow-y-auto custom-scrollbar">
                    {/* Mobile Navigation Links */}
                    <nav className="flex flex-col gap-1 mb-8">
                        <AnimatePresence>
                            {isMobileMenuOpen && links.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                                >
                                    {link.subMenu ? (
                                        <div className="flex flex-col">
                                            <div className="text-[15px] font-[600] text-white/80 py-3 border-b border-white/5 flex items-center justify-between">
                                                {link.name}
                                            </div>
                                            <div className="pl-4 flex flex-col gap-1 mt-1">
                                                {link.subMenu.map((subLink) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-[14px] font-[500] text-white/60 hover:text-white py-2 transition-colors"
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        link.href.startsWith('/') ? (
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
                                        )
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
                            <Link href="/track-parcel" onClick={() => setIsMobileMenuOpen(false)} className="block w-full">
                                <Button
                                    variant="liquid-glass"
                                    size="lg"
                                    className="w-full justify-center"
                                >
                                    Track Parcel
                                </Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                        >
                            <Link
                                href={DEMO_FORM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full"
                            >
                                <Button
                                    variant="solid"
                                    size="lg"
                                    className="w-full justify-center shadow-[0_0_15px_rgba(106,39,212,0.3)]"
                                >
                                    Request A Demo
                                </Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

