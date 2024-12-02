import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const aboutContent = [
    {
      title: "Empowering Business Harmony.",
      text: "Welcome to ProChain, where Centralized and Distributed solutions come together in perfect harmony...",
      image: "/Image/ab.jpg",
    },
    {
      title: "Innovating Business for the Future.",
      text: "At ProChain, we constantly push the boundaries of what's possible by providing cutting-edge solutions...",
      image: "/Image/ab.jpg",
    },
    {
      title: "Your Trusted Partner in Success.",
      text: "With a strong focus on quality and customer satisfaction, ProChain is your reliable partner...",
      image: "/Image/ab.jpg",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideInterval.current = setInterval(() => {
      handleManualNavigation("next");
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (autoSlideInterval.current) {
      clearInterval(autoSlideInterval.current);
      autoSlideInterval.current = null;
    }
  };

  const autoSlideInterval = useRef<NodeJS.Timeout | null>(null);

  const handleManualNavigation = (direction: "next" | "prev") => {
    stopAutoSlide();
    if (direction === "next") {
      setCurrentIndex((prev) => (prev + 1) % aboutContent.length);
    } else {
      setCurrentIndex((prev) =>
        prev === 0 ? aboutContent.length - 1 : prev - 1
      );
    }
    startAutoSlide();
  };

  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    stopAutoSlide();
    setIsDragging(true);
    if ("touches" in e) {
      setTouchStart(e.touches[0].clientX);
    } else {
      setTouchStart(e.clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (!isDragging) return;
    let touchEnd: number;

    if ("touches" in e) {
      touchEnd = e.touches[0].clientX;
    } else {
      touchEnd = e.clientX;
    }

    const diff = touchStart - touchEnd;

    if (diff > 50) {
      handleManualNavigation("next");
      setIsDragging(false);
    } else if (diff < -50) {
      handleManualNavigation("prev");
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    startAutoSlide();
  };

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-[600px] bg-white text-gray-800 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
    >
      {/* Container untuk slide */}
      <div
        className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {aboutContent.map(({ title, text, image }, index) => (
          <div
            key={index}
            className="min-w-full flex flex-col lg:flex-row items-center justify-between h-[600px] px-6 lg:px-32 gap-8"
            data-aos="fade-up"
          >
            <Image
              src={image}
              alt="story"
              width={500}
              height={500}
              className="w-full max-w-md rounded-xl shadow-lg"
            />
            <div className="w-full lg:w-2/5">
              <span className="text-orange-500 text-sm tracking-wide uppercase font-semibold">
                About Us
              </span>
              <h1 className="mt-2 text-4xl font-extrabold leading-tight text-gray-800">
                {title}
              </h1>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                {text}
              </p>
              <a
                href="#"
                className="mt-6 inline-block py-3 px-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Navigasi */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg focus:outline-none transition-all transform hover:scale-110"
          onClick={() => handleManualNavigation("prev")}
        >
          <span className="text-2xl text-gray-800">←</span>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 hidden md:block">
        <button
          className="p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg focus:outline-none transition-all transform hover:scale-110"
          onClick={() => handleManualNavigation("next")}
        >
          <span className="text-2xl text-gray-800">→</span>
        </button>
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {aboutContent.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-orange-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
