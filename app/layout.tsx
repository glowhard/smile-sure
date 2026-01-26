import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#6b4a2f",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smilesure.in"),
  title: {
    default: "SmileSure Dental Care, Noida | Dr. Shrestha Singh (Orthodontist)",
    template: "%s | SmileSure Dental Care",
  },
  description:
    "SmileSure Dental Care in Noida (Sec-120) by Dr. Shrestha Singh, BDS, MDS Orthodontist. Braces, root canal, crowns & bridges, scaling, tooth-coloured fillings, dentures, child dental care & extractions. Free digital X-ray + 10% off on all treatment. Call 9220688266.",
  keywords: [
    "SmileSure Dental Care",
    "dentist in Noida",
    "orthodontist Noida",
    "Dr Shrestha Singh",
    "braces Noida",
    "root canal Noida",
    "dental clinic Sector 120",
    "crowns and bridges",
    "scaling",
    "tooth coloured filling",
    "dentures",
    "kids dentist",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smilesure.in/",
    siteName: "SmileSure Dental Care",
    title: "SmileSure Dental Care, Noida | Dr. Shrestha Singh (Orthodontist)",
    description:
      "Orthodontics & full-service dentistry in Sec-120, Noida. Free digital X-ray + 10% off on all treatment. Call 9220688266.",
    images: [
      {
        url: "https://smilesure.in/images/smilesure-og.jpg",
        width: 1200,
        height: 630,
        alt: "SmileSure Dental Care – Noida dental clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileSure Dental Care, Noida | Dr. Shrestha Singh",
    description:
      "Braces, RCT, crowns & bridges, fillings, dentures, kids dental care. Free digital X-ray + 10% off. 9220688266.",
    images: ["https://smilesure.in/images/smilesure-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/mainLogo.jpeg", type: "image/jpeg" },
    ],
    apple: [{ url: "/mainLogo.jpeg" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "SmileSure Dental Care",
    url: "https://smilesure.in/",
    image: "https://smilesure.in/images/smilesure-og.jpg",
    telephone: "+91-9220688266",
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 1, Market Complex, Amrapali Zodiac, Sec-120",
      addressLocality: "Noida",
      addressRegion: "UP",
      postalCode: "201301",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:30",
        closes: "13:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "15:30",
        closes: "20:00",
      },
    ],
    areaServed: "Noida",
    founder: {
      "@type": "Person",
      name: "Dr. Shrestha Singh",
      jobTitle: "Orthodontist (Braces Specialist)",
      honorificSuffix: "BDS, MDS",
    },
  };

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        {/* Local Business Schema */}
        <Script
          id="smilesure-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
