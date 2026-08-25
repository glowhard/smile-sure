
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
              src={!isScrolled && !isMenuOpen ? '/mainLogo-light.webp' : '/mainLogo-dark.webp'}
              alt="SmileSure Dental Care Logo"
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
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919220688266?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book appointment via WhatsApp"
              className={`hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#25D366] text-white hover:bg-[#1fb855] shadow-md'
                  : 'bg-[#25D366] text-white hover:bg-[#1fb855]'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hidden lg:inline">WhatsApp</span>
            </a>

            <div className="hidden lg:block">
              <AppButton title='Schedule a visit' onTap={() => {
                window.location.href = "/#book-visit"
              }} />
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
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
            id="mobile-nav"
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
              <a
                href="https://wa.me/919220688266?text=Hi,%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-[#25D366] text-white py-5 rounded-2xl font-bold tracking-wide text-sm shadow-xl mb-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                BOOK VIA WHATSAPP
              </a>

              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.href = "/#book-visit";
                }}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold tracking-widest text-sm shadow-xl"
              >
                SCHEDULE A VISIT
              </button>

              <a
                href="tel:9220688266"
                className="block text-center text-slate-400 mt-6 text-sm hover:text-slate-600 transition-colors"
              >
                Call us: 9220688266
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
