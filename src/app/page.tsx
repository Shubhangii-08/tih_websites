import Header from '@/components/header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Slider from '@/components/Slider'
import WorkCarousel from '@/components/WorkCarousel'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Slider />
      <WorkCarousel />
      <Footer />
    </div>
  )
}
