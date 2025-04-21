'use client';

import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = () => {
  const slides = [
    {
      image: "/image/ev1.png",
      title: "Digital Prism",
      description: "Where geometry meets art in a stunning display of light and form."
    },
    {
      image: "/image/ev2.png",
      title: "Tech Haven",
      description: "Immerse yourself in the cutting edge of technology and innovation."
    },
    {
      image: "/image/ev3.png",
      title: "Neural Dreams",
      description: "AI-generated masterpieces that blur the line between human and machine creativity."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [isTransitioning]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, slides.length]);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-8">
      {/* Background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-fuchsia-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-fuchsia-500/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Main container */}
      <div className="w-full max-w-6xl mx-auto">
        {/* Carousel container */}
        <div className="carousel-container relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="nav-button absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation"
            title="Previous slide"
          >
            <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="nav-button absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center z-20 text-white touch-manipulation"
            title="Next slide"
          >
            <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel track */}
          <div className="carousel-track relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            {slides.map((slide, index) => {
              const position = (index - currentSlide + slides.length) % slides.length;
              let className = 'carousel-item absolute top-0 left-0 w-full h-full';
              
              if (position === 0) {
                className += ' active';
              } else if (position === 1) {
                className += ' next';
              } else if (position === slides.length - 1) {
                className += ' prev';
              } else {
                className += ' hidden';
              }

              return (
                <div key={index} className={className}>
                  <div className="w-full h-full p-4 sm:p-8">
                    <div className="w-full h-full rounded-xl sm:rounded-2xl overflow-hidden relative group">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-purple-500/40 mix-blend-overlay"></div>
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                        <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-2xl">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-8 sm:w-12 h-1 sm:h-1.5 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-white/40' : 'bg-white/20'
                } hover:bg-white/60`}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .carousel-container {
          perspective: 1000px;
          touch-action: pan-y pinch-zoom;
        }

        .carousel-track {
          transform-style: preserve-3d;
          transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .carousel-item {
          backface-visibility: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .carousel-item.active {
          opacity: 1;
          transform: scale(1) translateZ(0);
        }

        @media (max-width: 640px) {
          .carousel-item.prev {
            opacity: 0;
            transform: scale(0.8) translateX(-50%) translateZ(-100px);
          }

          .carousel-item.next {
            opacity: 0;
            transform: scale(0.8) translateX(50%) translateZ(-100px);
          }
        }

        @media (min-width: 641px) {
          .carousel-item.prev {
            opacity: 0.7;
            transform: scale(0.9) translateX(-100%) translateZ(-100px);
          }

          .carousel-item.next {
            opacity: 0.7;
            transform: scale(0.9) translateX(100%) translateZ(-100px);
          }
        }

        .carousel-item.hidden {
          opacity: 0;
          transform: scale(0.8) translateZ(-200px);
        }

        .nav-button {
          transition: all 0.3s;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }

        @media (hover: hover) {
          .nav-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
          }
        }

        .nav-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </div>
  );
};

export default Slider; 