import type { Metadata } from "next";
import Testimonials from '@/src/components/Testimonials';
import BookVisit from '@/src/components/BookVisit';
import ClinicGallery from '@/src/components/ClinicGallery';
import PageHeader from '@/src/components/PageHeader';
import WhyChooseUs from '@/src/components/WhyChooseUs';

export const metadata: Metadata = {
  title: "About SmileSure Dental Care & Dr. Shrestha Singh | Noida",
  description:
    "Meet Dr. Shrestha Singh (BDS, MDS) - Orthodontist at SmileSure Dental Care, Sector 120, Noida. 2,500+ happy patients. State-of-the-art clinic with personalized care.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About SmileSure Dental Care & Dr. Shrestha Singh",
    description:
      "Meet Dr. Shrestha Singh - Orthodontist at SmileSure Dental Care, Sector 120, Noida.",
    url: "/about",
  },
};

export default function About() {
    return (
        <main id="main-content">
            <div className='bg-white'>
            <PageHeader
                    label="About Us"
                    title="Your Trusted Dental Care Partner"
                    description="Discover our commitment to excellence, state-of-the-art facilities, and compassionate approach to dental care."
                    backgroundImage='/assets/header1.png'
                />
                <WhyChooseUs />
                <ClinicGallery />
                <Testimonials />
                <BookVisit />
            </div>
        </main>
    );
}

