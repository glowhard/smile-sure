import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import Navbar from "@/src/components/navbar";
import Footer from "@/src/components/footer";
import WhatsAppFAB from "@/src/components/WhatsAppFAB";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  variable: "--font-roboto",
});

export const viewport: Viewport = {
  themeColor: "#6e4e24",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://smilesure.in"),
  title: {
    default: "SmileSure Dental Care, Noida | Dr. Shrestha Singh (Orthodontist)",
    template: "%s | SmileSure Dental Care",
  },
  description:
    "SmileSure Dental Care in Noida (Sec-120) by Dr. Shrestha Singh, BDS, MDS Orthodontist. Braces, root canal, crowns & bridges, scaling, tooth-coloured fillings, dentures, child dental care & extractions. Call 9220688266.",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://smilesure.in/",
    siteName: "SmileSure Dental Care",
    title: "SmileSure Dental Care, Noida | Dr. Shrestha Singh (Orthodontist)",
    description:
      "Orthodontics & full-service dentistry in Sec-120, Noida. Braces, root canal, crowns & bridges, fillings, dentures & child dental care. Call 9220688266.",
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
      "Braces, RCT, crowns & bridges, fillings, dentures, kids dental care. Call 9220688266.",
    images: ["https://smilesure.in/images/smilesure-og.jpg"],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
    "@id": "https://smilesure.in/#dentist",
    name: "SmileSure Dental Care",
    url: "https://smilesure.in/",
    image: "https://smilesure.in/images/smilesure-og.jpg",
    telephone: "+91-9220688266",
    email: "care@smilesure.in",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 1, Market Complex, Amrapali Zodiac, Sec-120",
      addressLocality: "Noida",
      addressRegion: "UP",
      postalCode: "201301",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.5855,
      longitude: 77.391,
    },
    hasMap: "https://maps.app.goo.gl/anE6woKbe4bRXHZx7",
    sameAs: [
      "https://www.instagram.com/smilesure20",
      "https://www.facebook.com/SmileSuredc/",
    ],
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
    areaServed: {
      "@type": "City",
      name: "Noida",
    },
    founder: {
      "@type": "Person",
      name: "Dr. Shrestha Singh",
      jobTitle: "Orthodontist (Braces Specialist)",
      honorificSuffix: "BDS, MDS",
    },
    medicalSpecialty: "Orthodontics",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "120",
    },
  };

  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-md focus:shadow-lg focus:text-gray-900"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFAB />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1ER5YD0LSK"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1ER5YD0LSK');
          `}
        </Script>
      </body>
    </html>
  );
}
