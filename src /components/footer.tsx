'use client';
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative w-full bg-gradient-to-br from-[#11081C] via-[#1a0f2e] to-[#11081C] text-gray-400 py-16 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#4041D1]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#4041D1]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <motion.img
                src="https://framerusercontent.com/images/NafeJntPk9Cf7IEgmwlyEySfeRk.svg"
                alt="SmileSure Dental Logo"
                className="w-36 h-auto"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your trusted partner for comprehensive dental care. We're committed to helping you achieve and maintain optimal oral health with personalized, gentle treatment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#4041D1] to-[#6366f1] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-3 text-sm"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-[#4041D1] to-[#6366f1] rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-gray-300">123 Dental Street, City, ST 12345</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Company
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#4041D1] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about-us", label: "About Us" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact-us", label: "Contact Us" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  custom={index}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 bg-[#4041D1] rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Services
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#4041D1] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </h3>
            <ul className="space-y-4">
              {[
                { href: "/services/preventive-care", label: "Preventive Care" },
                { href: "/services/oral-surgery", label: "Oral Surgery" },
                { href: "/services/emergency-care", label: "Emergency Care" },
                { href: "/services/orthodontics", label: "Orthodontics" }
              ].map((link, index) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  custom={index}
                >
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <motion.div
                      className="w-1 h-1 bg-[#4041D1] rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-bold text-lg mb-6 relative">
              Stay Connected
              <motion.div
                className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-[#4041D1] to-transparent"
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </h3>
            
            {/* Newsletter Signup */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter for dental tips and updates.</p>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#4041D1] transition-colors duration-300"
                />
                <motion.button
                  className="bg-gradient-to-r from-[#4041D1] to-[#6366f1] text-white px-4 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-[#4041D1]/25 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>

            {/* Office Hours */}
            <div>
              <h4 className="text-white font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Mon - Fri:</span>
                  <span className="text-gray-300">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Saturday:</span>
                  <span className="text-gray-300">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Sunday:</span>
                  <span className="text-gray-300">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Divider with Gradient */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-6"
          variants={itemVariants}
        >
          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            {[
              {
                href: "https://www.instagram.com/",
                icon: "https://framerusercontent.com/images/Hv0NGkzwqRCDmQdDh3J8n6CupU.svg",
                label: "Instagram",
                color: "from-pink-500 to-purple-600"
              },
              {
                href: "https://web.telegram.org/a/",
                icon: "https://framerusercontent.com/images/O0TY6YpncRVL9lL13t4WXWFcCSA.svg",
                label: "Telegram",
                color: "from-blue-500 to-cyan-600"
              },
              {
                href: "mailto:information@office.com",
                icon: null,
                label: "Email",
                color: "from-green-500 to-emerald-600"
              }
            ].map((social, index) => (
              <motion.a
                key={social.href}
                href={social.href}
                target={social.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={social.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                className="group relative flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-700/50 bg-gray-800/30 backdrop-blur-sm hover:border-[#4041D1]/50 transition-all duration-300"
                variants={socialVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(64, 65, 209, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon ? (
                    <img src={social.icon} alt={social.label} className="w-4 h-4" />
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-sm text-gray-500 flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <span>© {new Date().getFullYear()} SmileSure Dental. All rights reserved.</span>
            <motion.div
              className="w-1 h-1 bg-[#4041D1] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
