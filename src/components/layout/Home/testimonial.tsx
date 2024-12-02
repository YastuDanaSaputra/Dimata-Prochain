import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Saraswati",
      role: "Client",
      message:
        "ProChain has completely transformed how we manage our inventory across multiple stores. The centralized platform is intuitive, and having real-time access to stock levels has helped us reduce waste and improve order accuracy. Highly recommended!",
      imageUrl: "/Image/person1.jpg",
    },
    {
      id: 2,
      name: "John Doe",
      role: "Customer",
      message:
        "The reporting tools on ProChain have been a game-changer. We can analyze sales and costs in detail, allowing us to make data-driven decisions that actually impact our bottom line. It's exactly what our business needed.",
      imageUrl: "/Image/person2.jpg",
    },
    {
      id: 3,
      name: "Rick Ashley",
      role: "Client",
      message:
        "Switching to ProChain was the best decision for our growing business. Managing orders, tracking inventory, and monitoring deliveries is all in one place, and it’s easy to use even with our team in multiple locations. We’ve saved time and reduced errors significantly.",
      imageUrl: "/Image/person3.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < testimonialsData.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : testimonialsData.length - 1
    );
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const testimonial = testimonialsData[currentIndex];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:serugaming77@gmail.com?subject=New Testimonial from ${name}&body=Name: ${name}%0D%0ARole: ${role}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
    setName("");
    setRole("");
    setMessage("");
    setModalOpen(false);
  };

  const handleCancel = () => {
    setName("");
    setRole("");
    setMessage("");
    setModalOpen(false);
  };

  return (
    <div
      className="relative flex pt-16 md:pt-32 font-sans"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative flex flex-col lg:flex-row lg:p-32 p-5 justify-between items-center w-full h-[50vh] lg:h-[90vh]">
        {/* Background with Blur Full Screen */}
        <div
          className="absolute inset-0 bg-[url('/Image/testi.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black/50 before:backdrop-blur-sm before:content-[''] z-[-1]"
          data-aos="fade-in"
        ></div>

        <div
          className="flex flex-col items-center lg:items-start justify-start text-white gap-3 z-10"
          data-aos="fade-right"
        >
          <h1 className="text-xl md:text-2xl italic font-medium text-yellow-400">
            TESTIMONIAL
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            What They Say About Us
          </h1>
        </div>

        <div
          className="flex flex-col p-8 gap-6 bg-white shadow-lg rounded-lg w-full max-w-lg lg:max-w-md z-10 relative"
          data-aos="fade-up"
        >
          <div className="flex justify-between items-center gap-5">
            <div className="flex flex-col justify-center items-start">
              <h1 className="font-semibold text-lg md:text-xl text-gray-800">
                {testimonial.name}
              </h1>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
            <Image
              src={testimonial.imageUrl}
              alt={`${testimonial.name} profile`}
              width={80}
              height={80}
              className="rounded-full border-2 border-gray-300"
            />
          </div>

          <p className="text-sm md:text-base text-gray-700 text-right italic">
            "{testimonial.message}"
          </p>

          <div className="flex justify-end items-center gap-4">
            <span
              onClick={handlePrevious}
              className="cursor-pointer text-gray-700 hover:text-gray-500 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <FaArrowLeftLong size={24} />
            </span>
            <span
              onClick={handleNext}
              className="cursor-pointer text-gray-700 hover:text-gray-500 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <FaArrowRightLong size={24} />
            </span>
          </div>
        </div>
      </div>

      {/* Tombol untuk membuka modal di dalam background */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-yellow-400 text-white p-2 rounded-full hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
        >
          Submit Your Testimonial
        </button>
      </div>

      {/* Modal Testimonial */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[400px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Submit Your Testimonial
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Your Role"
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Testimonial"
                rows={4}
                className="p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <div className="flex justify-between gap-2">
                <button
                  type="submit"
                  className="bg-yellow-400 text-white p-2 rounded-md mt-4 hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-red-400 text-white p-2 rounded-md mt-4 hover:bg-red-500 transition-all duration-300 transform hover:scale-105"
                >
                  Batal
                </button>
              </div>
            </form>
            {/* Tombol tutup modal */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
