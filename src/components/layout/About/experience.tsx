import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-slate-300 h-94 w-full lg:p-20 p-10">
      <div className="lg:flex">
        <div data-aos="fade-right">
          <hr className="w-9 bg-orange-600 h-0.5" />
          <h1 className="text-orange-500">OUR EXPERIENCE</h1>
          <h1 className="text-black w-4/5 font-bold text-3xl mt-4 text-gray-800 lg:w-4/5">
            Building Success Through Experience
          </h1>
        </div>
        <div
          className="flex lg:flex-row lg:justify-between lg:items-center space-x-2 lg:space-y-0 mt-10"
          data-aos="fade-up"
        >
          <div className="border-2 items-center text-center w-42 h-32 border-gray-800 md:h-32 lg:h-24">
            <p className="text-5xl mt-2 font-black text-gray-800">20+</p>
            <p className="text-gray-800 ml-1 mr-1 text-sm mt-2 font-bold">
              Years of Experience
            </p>
          </div>
          <p className="border-l-2 border-gray-800 h-16"></p>
          <div className="border-2 items-center text-center w-42 h-32 border-gray-800 md:h-32 lg:h-24">
            <p className="text-5xl mt-2 font-black text-gray-800">10+</p>
            <p className="text-gray-800 mr-1 ml-1 text-sm mt-2 font-bold">
              Projects Completed
            </p>
          </div>
          <p className="border-l-2 border-gray-800 h-16 ml-0 mr-0"></p>
          <div className="border-2 p-2 items-center text-center w-42 h-32 border-gray-800 md:h-32 lg:h-24">
            <p className="text-5xl font-black text-gray-800">15+</p>
            <p className="mr-3 ml-3 text-gray-800 text-sm mt-2 font-bold">
              Happy Clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceAbout;
