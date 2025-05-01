import Header from '@/components/header';
import Footer from '@/components/Footer';

export default function AdministrationLayout({
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