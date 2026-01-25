import Testimonials from '@/src/components/Testimonails';
import BookVisit from '@/src/components/BookVisit';
import ClinicGallery from '@/src/components/ClinicGallery';
import PageHeader from '@/src/components/PageHeader';
import WhyChooseUs from '@/src/components/WhyChooseUs';

export default function About() {
    return (
        <>
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
        </>
    );
}

