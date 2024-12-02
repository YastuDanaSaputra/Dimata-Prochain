import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const TeamAbout = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const members = [
    { name: "Jane Smith", role: "Manager", image: "Image/About/ahmad.jpg" },
    {
      name: "Michael Johnson",
      role: "Developer",
      image: "Image/About/ahmad.jpg",
    },
    { name: "Emily Davis", role: "Designer", image: "Image/About/ahmad.jpg" },
    { name: "James Brown", role: "CEO", image: "Image/About/ahmad.jpg" },
    { name: "Sarah Wilson", role: "COO", image: "Image/About/ahmad.jpg" },
    { name: "Chris Evans", role: "CTO", image: "Image/About/ahmad.jpg" },
    { name: "Chris Evans", role: "CTO", image: "Image/About/ahmad.jpg" },
    {
      name: "Michael Johnson",
      role: "Developer",
      image: "Image/About/ahmad.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const totalPages = Math.ceil(members.length / itemsPerPage);
  const currentPage = Math.ceil((currentIndex + 1) / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex < members.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-10 lg:p-20 lg:flex lg:flex-col mb-20">
      {/* Section Header */}
      <div className="ml-8">
        <hr className="w-9 bg-orange-600 font-weight h-0.5" />
        <h1 className="text-orange-500 font-medium text-shadow">OUR TEAM</h1>
        <p
          className="text-black font-bold text-3xl mt-3 color-gray-800 text-shadow text-gray-700"
          data-aos="fade-up"
        >
          The Minds Behind Prochain
        </p>
        <p
          className="text-sm mt-5 text-gray-700 text-shadow"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Prochain's success is powered by a passionate team committed to
          innovation, collaboration, and delivering impactful
          <br /> solutions to our clients.
        </p>
      </div>

      {/* Team Members Section */}
      <div className="relative">
        <div
          className="grid grid-cols-2 items-center justify-center ml-5 mt-10 lg:grid lg:grid-cols-4 lg:flex-row md:ml-56 lg:ml-0"
          data-aos="zoom-in"
        >
          {members
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-40 h-40s lg:w-72 lg:h-72"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full"
                />
                <h2 className="mt-3 text-black font-bold text-shadow">
                  {member.name}
                </h2>
                <p className="text-sm text-shadow">{member.role}</p>
              </div>
            ))}
        </div>

        {/* Navigation Buttons */}
        <div
          className="absolute top-0 right-0 p-2 flex space-x-4 items-center justify-center mb-10"
          style={{ transform: "translateY(-120%) translateX(-25%)" }}
        >
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`bg-orange-600 p-3 w-8 h-8 box-shadow ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src="/Image/About/arrow2.png"
              alt="Previous"
              width={25}
              height={25}
            />
          </button>
          <span className="text-shadow">
            {currentPage}/{totalPages}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= members.length - itemsPerPage}
            className={`bg-orange-600 p-3 w-8 h-8 box-shadow ${
              currentIndex >= members.length - itemsPerPage
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <Image
              src="/Image/About/arrow.png"
              alt="Next"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamAbout;
