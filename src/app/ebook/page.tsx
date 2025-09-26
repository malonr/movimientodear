import Header from '@/components/Header';
import EbookContent from '@/components/EbookContent';
import EbookCover from '@/components/EbookCover';
import Testimonials from '@/components/Testimonials';

export default function EbookPage() {
  return (
    <>
      <Header />
      <div className="container max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 lg:grid-cols-2 gap-15 items-start"
        style={{
          maxWidth: '1200px',
          padding: '40px 20px',
          gap: '60px'
        }}
      >
        <EbookContent />
        <EbookCover />
      </div>
      <Testimonials />
    </>
  );
}