'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: '#', label: 'HOME' },
    { href: '#', label: 'ABOUT' },
    { href: '#', label: 'SERVICES' },
    { href: '#', label: 'DENTISTS' },
    { href: '#', label: 'PRICING' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <motion.div
            className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            SmileSure
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            <motion.div 
              className={`flex items-center space-x-6 px-8 py-3 rounded-full backdrop-blur-md shadow-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-50/80 border border-gray-200/50' 
                  : 'bg-white/10 border border-white/20'
              }`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 relative group ${
                    isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full ${
                    isScrolled ? 'bg-blue-600' : 'bg-blue-300'
                  }`}></span>
                </motion.a>
              ))}

              {/* Dropdown */}
              <motion.div 
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <span className={`text-sm font-medium transition-colors duration-200 flex items-center ${
                  isScrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-blue-300'
                }`}>
                  ALL PAGES
                  <svg
                    className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white/95 backdrop-blur-md rounded-xl shadow-xl py-2 border border-gray-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Page 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                  >
                    Page 2
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Book Appointment
            </motion.button>
          </motion.div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-gray-800 hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200 mb-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block px-6 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Dropdown */}
            <div className="px-6 py-3">
              <div className="text-gray-700 font-medium mb-2">ALL PAGES</div>
              <div className="pl-4 space-y-2">
                <a
                  href="#"
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Page 1
                </a>
                <a
                  href="#"
                  className="block py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  Page 2
                </a>
              </div>
            </div>

            {/* Mobile CTA Button */}
            <div className="px-6 pt-4">
              <button
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-all duration-200 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
