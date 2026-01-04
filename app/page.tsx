import AboutClinic from '@/src/components/AboutClinic';
import BookVisit from '@/src/components/BookVisit';
import BookVisit2 from '@/src/components/BookVisit2';
import Hero from '@/src/components/hero';
import HeroBottom from '@/src/components/heroBottom';
import OurServices from '@/src/components/OurServices';
import Testimonials from '@/src/components/Testimonails';
import WhiteSolution from '@/src/components/WhiteSolution';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='bg-white'>
        <Hero />
        <HeroBottom />
        <AboutClinic />
        <BookVisit />
        <OurServices />
        <WhiteSolution />
        <Testimonials />
        <BookVisit2 />
      </div>
    </>
  );
}
