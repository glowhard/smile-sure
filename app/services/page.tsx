import OurServices from '@/src/components/OurServices';
import BookVisit2 from '@/src/components/BookVisit2';
import PageHeader from '@/src/components/PageHeader';

export default function Services() {
  return (
    <>
      <div className='bg-white'>
        <PageHeader
          label="Our Services"
          title="Comprehensive Dental Care"
          description="We offer a wide range of dental services to meet all your oral health needs, from routine check-ups to advanced treatments."
          backgroundImage='/assets/header2.png'
        />
        <OurServices />
        <BookVisit2 />
      </div>
    </>
  );
}

