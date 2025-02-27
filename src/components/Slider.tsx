import Image from 'next/image';

const Slider = () => {
  const slides = [
    "/ev1.png",
    "/ev2.png",
    "/ev3.png",
    "/hackathon.png",
    "/arvrcv_slider.jpg",
    "/job_slider.jpg",
    "/slider_tih4.jpg",
  ];

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className="absolute w-full h-full transition-opacity duration-500" style={{ opacity: index === 0 ? 1 : 0 }}>
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default Slider; 