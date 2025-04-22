'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const works = [
  {
    title: "Creating Warrior NFTs",
    subtitle: "Using Solana & Fractal",
    image: "/image/ev1.png",
  },
  {
    title: "Electric Grid Frequency",
    subtitle: "Predictive Analysis",
    image: "/image/ev2.png",
  },
  {
    title: "WebAR Marketing Campaign",
    subtitle: "For Personal Care Brand",
    image: "/image/ev3.png",
  },
  {
    title: "WebAR Gaming Experience",
    subtitle: "For Food Retail Brand",
    image: "/image/arvrcv_slider.jpg",
  },
  {
    title: "Creating Warrior NFTs",
    subtitle: "Using Solana & Fractal",
    image: "/image/ev1.png",
  },
  {
    title: "Electric Grid Frequency",
    subtitle: "Predictive Analysis",
    image: "/image/ev2.png",
  },
  {
    title: "WebAR Marketing Campaign",
    subtitle: "For Personal Care Brand",
    image: "/image/ev3.png",
  },
  {
    title: "WebAR Gaming Experience",
    subtitle: "For Food Retail Brand",
    image: "/image/arvrcv_slider.jpg",
  }
];

const WorkCarousel = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-12">Our Recent Work</h2>
        
        <div className="relative">
          <Swiper
            loop={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={30}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            className="queppelin-swiper"
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
          >
            {works.map((work, index) => (
              <SwiperSlide key={index} className="queppelin-slide">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg w-full h-[400px] relative group cursor-pointer">
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-10">
                    <h3 className="text-2xl font-bold mb-2">{work.title}</h3>
                    <p className="text-lg opacity-90">{work.subtitle}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-[5]" />
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx global>{`
        .queppelin-swiper {
          padding: 20px 0;
        }
        .queppelin-slide {
          width: 300px;
          height: 400px;
        }
        .swiper-pagination {
          bottom: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #000;
          opacity: 0.2;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #000;
        }
        @media (min-width: 768px) {
          .queppelin-slide {
            width: 350px;
          }
        }
        @media (min-width: 1024px) {
          .queppelin-slide {
            width: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkCarousel;