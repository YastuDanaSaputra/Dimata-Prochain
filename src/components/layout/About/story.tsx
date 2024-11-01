import Image from "next/image";

const StoryAbout = () => {
  return (
    <div className="mt-20 p-20 flex flex-col items-center lg:mb-20 lg:flex-row lg:justify-between lg:items-start ">
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/img/about/tangan.png"
          alt="story"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10 lg:mt-20 lg:p-10">
        <hr className="w-9 bg-indigo-900 h-0.5 " />
        <span className="text-indigo-900">OUR STORY</span>
        <h1 className="text-black font-bold text-4xl mt-4 text-gray-800 lg:w-3/4">
          Turning visions into reality.
        </h1>
        <h1 className="text-black font-bold text-4xl mt-4 text-gray-800"></h1>
        <p className="text-black text-sm mt-4 text-gray-700 lg:w-2/3">
          Dimata IT Solutions was founded in 2002 with a vision to develop smart
          information systems using the latest technologies. We have
          successfully delivered software solutions for various industries.
        </p>
      </div>
    </div>
  );
};

export default StoryAbout;
