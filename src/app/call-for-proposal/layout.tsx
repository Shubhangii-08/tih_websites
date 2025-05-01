import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function CallForProposalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
} 