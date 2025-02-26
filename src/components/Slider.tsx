import Image from 'next/image';

const Slider = () => {
  const slides = [
    "/images/sliders/ev1.png",
    "/images/sliders/ev2.png",
    "/images/sliders/ev3.png",
    "/images/hackathon.png",
    "/images/sliders/arvrcv_slider.jpg",
    "/images/sliders/job_slider.jpg",
    "/images/sliders/slider_tih4.jpg",
  ];

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} className="absolute w-full h-full transition-opacity duration-500" style={{ opacity: 1 }}>
          <Image
            src={slide}
            alt={`Slide ${index + 1}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Slider; 