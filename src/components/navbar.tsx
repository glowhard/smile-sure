'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: '',
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const navLinks = [
    { label: 'Home', href: '#', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'About', href: '#', icon: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
    { label: 'Services', href: '#', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { label: 'Contact', href: '#', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isBookingModalOpen || isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingModalOpen, isMenuOpen]);

  const handleBookingClick = () => setIsBookingModalOpen(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || '4511f9eb-b6a1-44dc-a429-d3ee9ba6d22d',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          date: formData.date,
          message: formData.message,
          subject: 'New Appointment Booking from SmileSure',
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', date: '', message: '' });
        setTimeout(() => {
          setIsBookingModalOpen(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'py-2 bg-white/95 backdrop-blur-2xl shadow-lg shadow-gray-200/50 border-b border-gray-100'
            : 'py-4 bg-gradient-to-b from-black/30 via-black/10 to-transparent backdrop-blur-sm'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* LOGO SECTION */}
            <motion.div
              className="flex items-center gap-3 cursor-pointer group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className={`absolute inset-0 rounded-xs blur-xl transition-all duration-500 ${
                    isScrolled ? 'bg-[#a67c52]/20' : 'bg-white/30'
                  }`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Image
                  src="/mainLogo.jpeg"
                  alt="SmileSure Logo"
                  width={64}
                  height={64}
                  className={`relative rounded-md object-cover transition-all duration-500 ${
                    isScrolled 
                      ? 'w-24 h-12 shadow-md' 
                      : 'w-20 h-14 shadow-xl shadow-white/20'
                  }`}
                  priority
                />
              </div>
            </motion.div>

            {/* CENTER NAVIGATION - Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveLink(link.label)}
                  className={`relative px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                    activeLink === link.label
                      ? isScrolled
                        ? 'text-[#5c3d2e]'
                        : 'text-white'
                      : isScrolled
                      ? 'text-gray-600 hover:text-gray-900'
                      : 'text-white/70 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                    </svg>
                    {link.label}
                  </span>
                  
                  {/* Active indicator */}
                  {activeLink === link.label && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute inset-0 rounded-xl ${
                        isScrolled 
                          ? 'bg-gradient-to-r from-[#5c3d2e]/10 to-[#a67c52]/10 border border-[#a67c52]/20' 
                          : 'bg-white/10 backdrop-blur-sm border border-white/20'
                      }`}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity ${
                      isScrolled ? 'bg-gray-100' : 'bg-white/5'
                    }`}
                  />
                </motion.a>
              ))}
            </div>

            {/* RIGHT SECTION - CTA & Menu */}
            <div className="flex items-center gap-4">
              
              {/* Book Appointment Button - Desktop */}
              <motion.button
                onClick={handleBookingClick}
                className={`hidden lg:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-[#5c3d2e] to-[#a67c52] text-white shadow-lg shadow-[#a67c52]/25 hover:shadow-xl hover:shadow-[#a67c52]/40'
                    : 'bg-white text-[#5c3d2e] shadow-xl shadow-black/20 hover:shadow-2xl'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Now</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gray-100 text-gray-900'
                    : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
                }`}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={isMenuOpen ? 'open' : 'closed'}
                  className="w-6 h-6 flex flex-col justify-center items-center"
                >
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: -4 },
                      open: { rotate: 45, y: 0 }
                    }}
                    className={`w-5 h-0.5 rounded-full transition-colors ${
                      isScrolled ? 'bg-gray-900' : 'bg-white'
                    }`}
                  />
                  <motion.span
                    variants={{
                      closed: { opacity: 1 },
                      open: { opacity: 0 }
                    }}
                    className={`w-5 h-0.5 rounded-full mt-1.5 transition-colors ${
                      isScrolled ? 'bg-gray-900' : 'bg-white'
                    }`}
                  />
                  <motion.span
                    variants={{
                      closed: { rotate: 0, y: 4 },
                      open: { rotate: -45, y: 0 }
                    }}
                    className={`w-5 h-0.5 rounded-full mt-1.5 transition-colors ${
                      isScrolled ? 'bg-gray-900' : 'bg-white'
                    }`}
                  />
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Image
                      src="/mainLogo.jpeg"
                      alt="SmileSure"
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">SmileSure</h3>
                      <p className="text-xs text-gray-500">Dental Excellence</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Menu Links */}
                <div className="flex-1 overflow-y-auto p-6">
                  <nav className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => {
                          setActiveLink(link.label);
                          setIsMenuOpen(false);
                        }}
                        className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                          activeLink === link.label
                            ? 'bg-gradient-to-r from-[#5c3d2e]/10 to-[#a67c52]/10 text-[#5c3d2e] border border-[#a67c52]/20'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className={`p-2 rounded-lg ${
                          activeLink === link.label ? 'bg-[#a67c52]/20' : 'bg-gray-100'
                        }`}>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d={link.icon} />
                          </svg>
                        </div>
                        <span className="font-medium">{link.label}</span>
                      </motion.a>
                    ))}
                  </nav>
                </div>

                {/* Menu Footer */}
                <div className="p-6 border-t border-gray-100">
                  <motion.button
                    onClick={() => {
                      handleBookingClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-[#5c3d2e] to-[#a67c52] text-white py-4 rounded-xl font-semibold shadow-lg shadow-[#a67c52]/25 flex items-center justify-center gap-2"
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book Appointment
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* BOOKING MODAL */}
      <AnimatePresence>
        {isBookingModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setIsBookingModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative bg-gradient-to-r from-[#5c3d2e] to-[#a67c52] p-8 text-white">
                <button
                  onClick={() => setIsBookingModalOpen(false)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Book Your Appointment</h2>
                    <p className="text-white/80 mt-1">We'll get back to you within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a67c52] focus:ring-0 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a67c52] focus:ring-0 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a67c52] focus:ring-0 transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a67c52] focus:ring-0 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-[#a67c52] focus:ring-0 transition-colors resize-none"
                    placeholder="Tell us about your dental concerns or any specific requests..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={submitStatus === 'loading'}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all shadow-lg ${
                    submitStatus === 'loading'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-500 shadow-green-500/25'
                      : submitStatus === 'error'
                      ? 'bg-red-500 shadow-red-500/25'
                      : 'bg-gradient-to-r from-[#5c3d2e] to-[#a67c52] shadow-[#a67c52]/25 hover:shadow-xl'
                  }`}
                  whileHover={submitStatus === 'idle' ? { scale: 1.02 } : {}}
                  whileTap={submitStatus === 'idle' ? { scale: 0.98 } : {}}
                >
                  {submitStatus === 'loading' && (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  )}
                  {submitStatus === 'success' && (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Booking Sent Successfully!
                    </span>
                  )}
                  {submitStatus === 'error' && 'Error - Please Try Again'}
                  {submitStatus === 'idle' && 'Submit Booking Request'}
                </motion.button>

                {submitStatus === 'error' && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}