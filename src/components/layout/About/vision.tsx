import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const VisionAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[url('/Image/About/vision.jpg')] h-full bg-cover bg-center bg-no-repeat bg-gray-300 bg-blend-multiply relative">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="flex flex-col justify-center items-center space-y-10 p-10 lg:flex-row lg:space-y-0 lg:space-x-10 relative z-10">
        <div className="text-center">
          <div
            className="lg:flex lg:flex-col lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center"
            data-aos="fade-down"
          >
            <hr className="lg:bg-white lg:w-24 w-28 mb-3 ml-32 lg:ml-0 md:ml-0" />
            <p className="text-white text-2xl font-semibold mb-5">
              VISION AND MISSION
            </p>
          </div>
          <div
            className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-10 space-y-10 lg:space-y-0 md:flex md:flex-col md:justify-center md:items-center"
            data-aos="fade-up"
          >
            <div
              className="bg-white p-10 space-y-5 lg:w-2/5 bg-opacity-80 shadow-lg rounded-lg"
              data-aos="fade-right"
            >
              <h1 className="text-4xl font-bold text-center text-gray-800">
                VISION
              </h1>
              <hr className="w-64 ml-3 h-0.5 bg-black lg:w-96 lg:ml-5 md:ml-56 md:w-72" />
              <p className="text-center text-gray-600">
                To be the leading platform that empowers businesses of all sizes
                by providing innovative, centralized solutions that streamline
                operations, drive growth, and inspire efficiency across diverse
                industries.
              </p>
            </div>
            <div
              className="bg-white p-10 space-y-5 lg:w-2/5 bg-opacity-80 shadow-lg rounded-lg"
              data-aos="fade-left"
            >
              <h1 className="text-4xl font-bold text-center text-gray-800">
                MISSION
              </h1>
              <hr className="w-64 ml-3 h-0.5 bg-black lg:w-96 lg:ml-5 md:ml-56 md:w-72" />
              <p className="text-center text-gray-600">
                To deliver comprehensive, user-friendly solutions that simplify
                business operations, enhance decision-making through data-driven
                insights, and foster sustainable growth by supporting our
                clients in achieving operational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAbout;
