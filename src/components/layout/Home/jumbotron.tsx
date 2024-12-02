import Image from "next/image";
import conferenceImage from "@/images/images25.jpg";
import logo from "@/images/logo.png";

const Jumbotron = () => {
  return (
    <section className="relative min-h-screen bg-gray-600 bg-blend-multiply">
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <Image
        src={conferenceImage}
        alt="Warehouse background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
      />
      <div className="relative z-20 px-4 mx-auto max-w-screen-xl text-center py-[30vh] lg:py-56">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image src={logo} alt="ProChain logo" width={200} height={200} />
        </div>
        {/* Title */}
        <h1 className="mb-4 text-5xl font-semibold tracking-tight leading-tight text-white md:text-6xl lg:text-7xl">
          Integrated Process Chain Management System
        </h1>
        {/* Subtitle */}
        <p className="mb-8 text-lg font-light italic text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          “Centralized & Distributed in Harmony”
        </p>
        {/* Button */}
        <a
          href="https://wa.me/1234567890"
          className="inline-flex justify-center items-center py-3 px-6 text-base font-medium text-white bg-amber-500 rounded hover:bg-amber-600"
        >
          Book Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Jumbotron;
