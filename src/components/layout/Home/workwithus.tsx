import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const works = [
  {
    id: 1,
    title: "All-in-One Efficiency",
    description:
      "Streamline operations with our integrated platform, covering everything from inventory to analytics.",
    imageSrc: "/Image/Work/circle-1.png",
    imageAlt: "All-in-One Efficiency",
  },
  {
    id: 2,
    title: "Client-Centric Approach",
    description:
      "We prioritize your goals by working closely with you throughout the development process, ensuring that our solutions align perfectly with your vision.",
    imageSrc: "/Image/work/circle-2.png",
    imageAlt: "Client-Centric Approach",
  },
  {
    id: 3,
    title: "Proven Track Record",
    description:
      "We have a strong track record of delivering high-quality results that drive growth across various industries.",
    imageSrc: "/Image/work/circle-3.png",
    imageAlt: "Proven Track Record",
  },
];

const WorkWithUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:px-24 lg:py-16 bg-gradient-to-b from-white to-gray-100">
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6 items-center lg:items-start">
        <div className="flex flex-col gap-3">
          <div>
            <hr className="w-12 bg-yellow-500 h-1 rounded-full" />
            <span className="text-orange-600 font-medium uppercase tracking-widest">
              Work With Us
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 leading-snug">
            Why Choose Us?
          </h1>
        </div>
        <div className="flex justify-end">
          <p className="text-md sm:text-lg lg:text-xl text-right text-gray-700 w-full lg:w-8/12 leading-relaxed">
            Experience our unmatched expertise and dedication to delivering
            exceptional results tailored to your needs.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6 py-10">
        {works.map((work) => (
          <div
            key={work.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 text-center"
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-5">
              <Image
                src={work.imageSrc}
                alt={work.imageAlt}
                width={80}
                height={80}
                className="rounded-full"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              {work.title}
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkWithUs;
