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
<<<<<<< HEAD
=======
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
    title: "WebAR Marketing Campaign",
    subtitle: "For Personal Care Brand",
    image: "/image/ev3.png",
  },
  {
    title: "WebAR Gaming Experience",
    subtitle: "For Food Retail Brand",
    image: "/image/arvrcv_slider.jpg",
>>>>>>> 3755027 (Initial commit)
  }
];

const WorkCarousel = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-5xl font-bold text-center mb-12">Our Recent Work</h2>
        
<<<<<<< HEAD
        <div className="relative">
=======
        <div className="relative w-full">
>>>>>>> 3755027 (Initial commit)
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
<<<<<<< HEAD
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
=======
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
              },
              480: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2.8,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              }
>>>>>>> 3755027 (Initial commit)
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
<<<<<<< HEAD
          padding: 20px 0;
        }
        .queppelin-slide {
          width: 300px;
          height: 400px;
=======
          padding: 20px 0 40px;
          width: 100%;
          max-width: 100vw;
          overflow: visible;
        }
        .queppelin-slide {
          width: 100%;
          height: auto;
          min-height: 300px;
          max-height: 400px;
          transition: all 0.3s ease;
>>>>>>> 3755027 (Initial commit)
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
<<<<<<< HEAD
=======
        @media (min-width: 480px) {
          .queppelin-slide {
            width: 280px;
          }
        }
        @media (min-width: 640px) {
          .queppelin-slide {
            width: 320px;
          }
        }
>>>>>>> 3755027 (Initial commit)
        @media (min-width: 768px) {
          .queppelin-slide {
            width: 350px;
          }
        }
        @media (min-width: 1024px) {
          .queppelin-slide {
<<<<<<< HEAD
=======
            width: 380px;
          }
        }
        @media (min-width: 1280px) {
          .queppelin-slide {
>>>>>>> 3755027 (Initial commit)
            width: 400px;
          }
        }
      `}</style>
    </div>
  );
};

export default WorkCarousel;