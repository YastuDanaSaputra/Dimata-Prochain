import Image from "next/image";
import conferenceImage from "@/images/images25.jpg";

const JumbotronAbout = () => {
  return (
    <section className="relative w-full h-96 lg:h-[500px]">
      {/* Background Image */}
      <Image
        src={conferenceImage}
        alt="Conference"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Centered Text */}
      <div className="relative flex justify-center items-center h-full">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-center text-white">
          ABOUT
        </h1>
      </div>
    </section>
  );
};

export default JumbotronAbout;
