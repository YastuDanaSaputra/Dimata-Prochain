import { useState } from "react";
import Image from "next/image";

const TeamAbout = () => {
  const members = [
    {
      name: "Jane Smith",
      role: "Manager",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Michael Johnson",
      role: "Developer",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Emily Davis",
      role: "Designer",
      image: "/img/about/ahmad.png",
    },
    {
      name: "James Brown",
      role: "CEO",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Sarah Wilson",
      role: "COO",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Chris Evans",
      role: "CTO",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Chris Evans",
      role: "CTO",
      image: "/img/about/ahmad.png",
    },
    {
      name: "Michael Johnson",
      role: "Developer",
      image: "/img/about/ahmad.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Jumlah item yang ditampilkan dalam satu waktu

  // Hitung total halaman dan halaman saat ini
  const totalPages = Math.ceil(members.length / itemsPerPage);
  const currentPage = Math.ceil((currentIndex + 1) / itemsPerPage);

  const nextSlide = () => {
    if (currentIndex + itemsPerPage < members.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const prevSlide = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  return (
    <div className=" p-10 lg:p-20 lg:flex lg:flex-col mb-20 ">
      <div className=" ml-8 ">
        <hr className=" w-9 bg-indigo-900 font-weight h-0.5" />
        <h1 className=" text-indigo-900 font-medium text-shadow ">OUR TEAM</h1>
        <p className=" text-black font-bold text-3xl mt-3 color-gray-800 text-shadow text-gray-700">
          The Minds Behind Dimata
        </p>
        <p className=" text-sm mt-5 text-gray-700 text-shadow">
          Dimata’s success is powered by a passionate team committed to
          innovation, collaboration, and delivering impactful
          <br /> solutions to our clients.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-2 items-center justify-center ml-5 mt-10 lg:grid lg:grid-cols-4 lg:flex-row md:ml-56 lg:ml-0">
          {members
            .slice(currentIndex, currentIndex + itemsPerPage)
            .map((member, index) => (
              <div
                key={index}
                className=" flex flex-col items-center w-40 h-40s lg:w-72 lg:h-72 "
              >
                <img src={member.image} alt={member.name} className="" />
                <h2 className=" mt-3 text-black font-bold text-shadow">
                  {member.name}
                </h2>
                <p className=" text-sm text-shadow">{member.role}</p>
              </div>
            ))}
        </div>

        {/* Tombol untuk menggeser dan pagination */}
        <div
          className="absolute top-0 right-0 p-2 flex space-x-4 items-center justify-center mb-10 "
          style={{ transform: "translateY(-120%) translateX(-25%)" }}
        >
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`bg-indigo-900 p-3 w-8 h-8 box-shadow ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <Image
              src="/img/about/kurang.png"
              alt="Previous"
              width={16}
              height={16}
            />
          </button>

          <span className="text-shadow">
            {currentPage}/{totalPages}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentIndex + itemsPerPage >= members.length}
            className={`bg-indigo-900 p-3 w-8 h-8 box-shadow ${
              currentIndex + itemsPerPage >= members.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
          >
            <Image
              src="/img/about/lebih.png"
              alt="Next"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamAbout;
