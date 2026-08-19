import type { Metadata } from "next";
import OurServices from '@/src/components/OurServices';
import BookVisit2 from '@/src/components/BookVisit2';
import PageHeader from '@/src/components/PageHeader';

export const metadata: Metadata = {
  title: "Dental Services in Sector 120, Noida | SmileSure Dental Care",
  description:
    "Braces, root canal, crowns & bridges, scaling, tooth-coloured fillings, dentures, kids dental care & extractions at SmileSure Dental Care, Noida.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Dental Services - SmileSure Dental Care, Noida",
    description:
      "Complete dental services: orthodontics, RCT, crowns, scaling, fillings, dentures, child care.",
    url: "/services",
  },
};

export default function Services() {
  return (
    <main id="main-content">
      <div className='bg-white'>
        <PageHeader
          label="Our Services"
          title="Comprehensive Dental Care"
          description="We offer a wide range of dental services to meet all your oral health needs, from routine check-ups to advanced treatments."
          backgroundImage='/assets/header1.png'
        />
        <OurServices />
        <BookVisit2 />
      </div>
    </main>
  );
}

