import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const StoryAbout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="mt-20 p-20 flex flex-col items-center lg:mb-20 lg:flex-row lg:justify-between lg:items-start">
      <div className="lg:w-1/2 flex justify-center" data-aos="fade-right">
        <Image
          src="/Image/About/story.jpg"
          alt="story"
          width={500}
          height={500}
        />
      </div>
      <div
        className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10 lg:mt-20 lg:p-10"
        data-aos="fade-left"
      >
        <hr className="w-9 bg-orange-600 h-0.5 " />
        <span className="text-orange-500">OUR STORY</span>
        <h1 className="text-black font-bold text-4xl mt-4 text-gray-800 lg:w-3/4">
          Empowering Business Through Innovation.
        </h1>
        <p className="text-black text-sm mt-4 text-gray-700 lg:w-2/3">
          ProChain was founded with a vision to empower businesses by
          simplifying complex operations, delivering a seamless, centralized
          platform that fosters growth and efficiency across industries.
        </p>
      </div>
    </div>
  );
};

export default StoryAbout;
