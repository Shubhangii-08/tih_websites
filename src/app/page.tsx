<<<<<<< HEAD
=======
'use client';

import { useState, useEffect } from 'react';
>>>>>>> 3755027 (Initial commit)
import Header from '@/components/header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Slider from '@/components/Slider'
import WorkCarousel from '@/components/WorkCarousel'
<<<<<<< HEAD
export default function Home() {
=======
import PartnerSection from '@/components/PartnerSection'
import Introduction from '@/components/introduction';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(currentScroll / totalScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

>>>>>>> 3755027 (Initial commit)
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Slider />
<<<<<<< HEAD
      <WorkCarousel />
=======
      <Introduction/>
      <WorkCarousel />
      <PartnerSection />
>>>>>>> 3755027 (Initial commit)
      <Footer />
    </div>
  )
}
