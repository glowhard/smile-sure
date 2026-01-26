'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Mail, Phone, MapPin, Clock, Calendar, Award, Shield, Star, Facebook } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();

  const sections = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Services", href: "/services" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Scaling", href: "/services#scaling" },
        { label: "Tooth Coloured Filling", href: "/services#tooth-coloured-filling" },
        { label: "Ortho Braces", href: "/services#ortho-braces" },
        { label: "Root Canal Treatment", href: "/services#root-canal-treatment" },
        { label: "Crowns & Bridges", href: "/services#crowns-bridges" },
        { label: "Dentures", href: "/services#dentures" },
        { label: "Children Dental Care", href: "/services#children-dental-care" },
        { label: "Tooth Extraction", href: "/services#tooth-extraction" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Privacy Policy", href: "/privacy", target: "_blank" },
      ],
    },
  ];

  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/SmileSuredc/", icon: <Facebook size={18} /> },
    { name: "Instagram", href: "https://www.instagram.com/smilesure20", icon: <Instagram size={18} /> },
    { name: "WhatsApp", href: "https://wa.me/919220688266", icon: <Phone size={18} /> },
    { name: "Mail", href: "mailto:care@smilesure.in", icon: <Mail size={18} /> },
  ];

  const isPrivacyPage = pathname === '/privacy';

  if (isPrivacyPage) {
    return null;
  }

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#120a05] via-[#1a1008] to-[#201309] text-[#e7d9b0] overflow-hidden">
      {/* Special Offer Banner */}
      <div className="bg-[#c8a95d] py-4 px-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[#1a1209]">
          <div className="flex items-center gap-2">
            <Award size={20} className="flex-shrink-0" />
            <p className="font-bold text-sm sm:text-base">Free Digital X-Ray</p>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#1a1209]/30"></div>
          <div className="flex items-center gap-2">
            <Star size={20} className="flex-shrink-0" />
            <p className="font-bold text-sm sm:text-base">10% Off on All Treatments</p>
          </div>
          <div className="hidden sm:block w-px h-5 bg-[#1a1209]/30"></div>
          <motion.a
            href="tel:9220688266"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1a1209] text-[#c8a95d] px-5 py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-[#0f0703] transition-all flex items-center gap-2"
          >
            <Calendar size={16} />
            Book Now
          </motion.a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16">

          {/* Column 1: About & Logo */}
          <div className="flex flex-col items-start space-y-6">
            <Image
              src="/mainLogo.jpeg"
              alt="SmileSure Dental Care Logo"
              width={144}
              height={144}
              className="w-32 sm:w-36 rounded-xl shadow-lg ring-2 ring-[#c8a95d]/30"
            />
            <p className="text-[#d6c9a3]/80 leading-relaxed text-sm">
              Redefining trust and care — where expertise meets excellence every single day.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-[#1a1209] px-3 py-2 rounded-lg border border-[#c8a95d]/20">
                <Shield size={16} className="text-[#c8a95d]" />
                <span className="text-xs font-semibold text-[#e7d9b0]">Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-[#1a1209] px-3 py-2 rounded-lg border border-[#c8a95d]/20">
                <Award size={16} className="text-[#c8a95d]" />
                <span className="text-xs font-semibold text-[#e7d9b0]">Certified</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-3">
              <p className="text-[#f0e6c8] font-semibold text-sm uppercase tracking-wider">Connect With Us</p>
              <div className="flex gap-3">
                {socials.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    {...(!social.href.startsWith('mailto:') && { target: "_blank", rel: "noopener noreferrer" })}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1209] border-2 border-[#c8a95d]/30 hover:bg-[#c8a95d] hover:text-[#1a1209] hover:border-[#c8a95d] transition-all"
                    title={social.name}
                  >
                    <div className="w-[18px] h-[18px]">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-[#f0e6c8] font-bold text-lg mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[3px] after:bg-[#c8a95d]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {sections[0].links.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#d6c9a3]/80 hover:text-[#c8a95d] hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a95d]/50 group-hover:bg-[#c8a95d] transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <h4 className="text-[#f0e6c8] font-semibold text-base mb-3">Resources</h4>
              <ul className="space-y-3">
                {sections[2].links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      target={link.target}
                      className="text-[#d6c9a3]/80 hover:text-[#c8a95d] hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c8a95d]/50 group-hover:bg-[#c8a95d] transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-6">
            <h3 className="text-[#f0e6c8] font-bold text-lg mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[3px] after:bg-[#c8a95d]">
              Our Services
            </h3>
            <ul className="space-y-3">
              {sections[1].links.slice(0, 8).map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#d6c9a3]/80 hover:text-[#c8a95d] hover:translate-x-1 transition-all duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8a95d]/50 group-hover:bg-[#c8a95d] transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-[#f0e6c8] font-bold text-lg mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-[3px] after:bg-[#c8a95d]">
              Contact Us
            </h3>

            {/* Consultation Timings */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Clock size={18} className="text-[#c8a95d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#f0e6c8] font-semibold text-sm mb-1">Consultation Hours</p>
                  <p className="text-[#d6c9a3]/80 text-sm leading-relaxed">
                    Mon - Sat<br />
                    10:30am - 1:30pm<br />
                    3:30pm - 8:00pm
                  </p>
                  <p className="text-[#c8a95d] text-xs font-semibold mt-1">Sundays by Appointment</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#c8a95d] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[#f0e6c8] font-semibold text-sm mb-1">Location</p>
                  <p className="text-[#d6c9a3]/80 text-sm leading-relaxed">
                    Shop No. 1, Market Complex,<br />
                    Amrapali Zodiac, Sec-120,<br />
                    Noida - 201301
                  </p>
                  <a
                    href="https://maps.app.goo.gl/anE6woKbe4bRXHZx7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#c8a95d] text-xs font-semibold hover:text-[#d4b76a] transition mt-2"
                  >
                    <MapPin size={12} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#c8a95d] flex-shrink-0" />
                <a
                  href="tel:9220688266"
                  className="text-[#d6c9a3] text-sm font-medium hover:text-[#c8a95d] transition"
                >
                  +91 9220688266
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#c8a95d] flex-shrink-0" />
                <a
                  href="mailto:care@smilesure.in"
                  className="text-[#d6c9a3] text-sm font-medium hover:text-[#c8a95d] transition"
                >
                  care@smilesure.in
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href="tel:9220688266"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 w-full bg-[#c8a95d] text-[#1a1209] px-6 py-3 rounded-full font-bold text-sm hover:bg-[#d4b76a] transition-all shadow-lg shadow-[#c8a95d]/20 mt-2"
            >
              <Calendar size={16} />
              Book Appointment
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#c8a95d]/20">
        <div className="container mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-[#d6c9a3]/60 text-center sm:text-left">
            © {new Date().getFullYear()} SmileSure Dental Care. All rights reserved.
          </p>
          <p className="text-xs text-[#d6c9a3]/50">
            Dr. Shrestha Singh, BDS, MDS (Orthodontist)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
