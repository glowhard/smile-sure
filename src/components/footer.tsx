'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Send, Mail } from "lucide-react";

const Footer = () => {
  const sections = [
    {
      title: "Company",
      links: [
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about" },
        { label: "Pricing", href: "/pricing" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Consultation", href: "#" },
        { label: "Dental Care", href: "#" },
        { label: "Whitening", href: "#" },
        { label: "Surgery", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
  ];

  const socials = [
    { name: "Instagram", href: "#", icon: <Instagram size={18} /> },
    { name: "Telegram", href: "#", icon: <Send size={18} /> },
    { name: "Mail", href: "mailto:info@company.com", icon: <Mail size={18} /> },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#120a05] via-[#1a1008] to-[#201309] text-[#e7d9b0] pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="container mx-auto relative flex flex-col md:flex-row justify-between gap-8 sm:gap-12 md:gap-20 lg:gap-28 z-10">
        {/* Logo + Description */}
        <div className="flex flex-col items-start max-w-sm">
          <Image
            src="/mainLogo.jpeg"
            alt="Company Logo"
            width={144}
            height={144}
            className="w-28 sm:w-32 md:w-36 rounded-lg shadow-md ring-1 ring-[#c8a95d]/20"
          />
          <p className="mt-4 sm:mt-5 text-[#d6c9a3]/80 leading-relaxed text-xs sm:text-sm md:text-base">
            Redefining trust and care — where expertise meets excellence every single day.
          </p>
        </div>

        {/* Navigation Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full md:w-auto">
          {sections.map((section, idx) => (
            <div key={idx}>
              <p className="text-[#f0e6c8] font-semibold text-base mb-4 relative inline-block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-4 after:h-[2px] after:bg-[#c8a95d]/70">
                {section.title}
              </p>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-[#d6c9a3]/70 hover:text-[#c8a95d] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-start md:items-end gap-3 sm:gap-4">
          <p className="text-[#f0e6c8] font-semibold text-sm sm:text-base mb-2">
            Connect With Us
          </p>
          <div className="flex gap-2 sm:gap-3">
            {socials.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1209] border border-[#c8a95d]/20 hover:bg-[#c8a95d] hover:text-[#1a1209] transition"
              >
                <div className="w-4 h-4 sm:w-[18px] sm:h-[18px]">
                  {social.icon}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto border-t border-[#c8a95d]/20 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-[#d6c9a3]/60 px-4">
        © {new Date().getFullYear()} SmileSure. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
