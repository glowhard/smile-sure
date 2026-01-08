
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AppButton from './AppButton';
import { Menu, X } from 'lucide-react';


const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');

  const pathname = usePathname();

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const isPrivacyPage = pathname === '/privacy';

  if(isPrivacyPage) {
    return null;
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-0 px-6 lg:px-12 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-0'
          : 'bg-transparent py-0'
          }`}
        initial={{ y: -110 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="container mx-auto flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <Image
              src={!isScrolled && !isMenuOpen ? '/mainLogo-light.png' : '/mainLogo-dark.png'}
              alt="Company Logo"
              width={100}
              height={100}
              className={`w-auto transition-all duration-200 md:duration-250 ${isScrolled ? 'h-16 sm:h-20 md:h-22' : 'h-20 sm:h-24 md:h-28 lg:h-32'}`}
              style={{ transitionDuration: '0.25s' }}
            />
          </Link>

          {/* Center Navigation – Apple-style segmented control */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <div
              className={`relative flex items-center gap-1 px-2 py-2 rounded-full border
      ${isScrolled
                  ? 'bg-white/70 backdrop-blur-xl border-slate-200 shadow-sm'
                  : 'bg-white/15 backdrop-blur-2xl border-white/20'
                }`}
            >
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href === '/' && pathname === '/');

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`relative z-10 px-4 py-1.5 rounded-full text-sm tracking-wider cursor-pointer block`}
                  >
                    {/* Animated background chip */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full
                        ${isScrolled
                            ? 'bg-primary shadow-md'
                            : 'bg-white/30'
                          }`}
                        transition={{
                          type: 'spring',
                          stiffness: 420,
                          damping: 30,
                          mass: 0.6,
                        }}
                      />
                    )}

                    {/* Label */}
                    <span
                      className={`relative transition-colors duration-200
                        ${isActive ? 'text-white' : isScrolled
                          ? 'text-slate-500 hover:text-slate-900'
                          : 'text-white/70 hover:text-white'
                        }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Section CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <AppButton title='Schedule a visit' onTap={() => {
                window.location.href = "/#book-visit"
              }} />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled || isMenuOpen ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
            >
              {
                isMenuOpen ? <X /> : <Menu />
              }
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.45, type: 'spring', damping: 16, stiffness: 120 }}
            className="fixed inset-0 z-40 bg-white lg:hidden flex flex-col pt-24 px-8"
          >
            <div className="space-y-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    delay: 0.12 + idx * 0.07,
                    duration: 0.38,
                    type: 'spring',
                    damping: 16,
                    stiffness: 110
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-3xl font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-auto pb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.32, type: 'spring', damping: 15, stiffness: 100 }}
            >
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold tracking-widest text-sm shadow-xl">
                SCHEDULE A VISIT
              </button>
              <p className="text-center text-slate-400 mt-6 text-sm">Call us: (555) 123-4567</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
