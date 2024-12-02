import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    title: "Data Management",
    description:
      "Centralized control, distributed efficiency. ProChain offers centralized and distributed data management solutions, integrating inventory, purchasing, and pricing across multiple locations. Ideal for businesses seeking real-time data visibility and control.",
    imageSrc: "/Image/services/Bg22.jpg",
    imageAlt: "Data Management",
  },
  {
    id: 2,
    title: "Order & Delivery Tracking",
    description:
      "Efficient ordering, reliable delivery. ProChain ensures seamless tracking of purchase orders and deliveries, helping you maintain accuracy and ensure timely service for your customers.",
    imageSrc: "/Image/services/Bg33.jpg",
    imageAlt: "Order & Delivery Tracking",
  },
  {
    id: 3,
    title: "Internet of Things",
    description:
      "Connecting devices, enhancing data flow. ProChain utilizes IoT technology to optimize logistics, improve real-time decision-making, and provide data-driven insights for streamlined business processes.",
    imageSrc: "/Image/services/Bg44.jpg",
    imageAlt: "Internet of Things",
  },
];

const OurService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-32 px-6 py-16 lg:px-32 lg:py-24 bg-gray-50">
      {/* Left Section: Title & Description */}
      <div className="flex flex-col justify-center w-full lg:w-2/5 gap-5">
        <div>
          <hr className="w-10 bg-yellow-500 h-1 rounded-full" />
          <span className="text-orange-500 font-medium tracking-wide uppercase">
            Our Services
          </span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-gray-800">
          Innovative solutions for every step forward.
        </h1>
        <p className="text-sm sm:text-lg text-gray-700">
          Efficient solutions for seamless operations. ProChain provides
          tailored software solutions for retail chains, manufacturing, and
          service industries. Our system brings centralized data management and
          advanced automation to streamline your business.
        </p>
      </div>

      {/* Right Section: Services List */}
      <div className="flex flex-col gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <Image
              src={service.imageSrc}
              alt={service.imageAlt}
              width={300}
              height={200}
              className="w-full lg:w-[300px] rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col gap-3 text-center lg:text-left">
              <h2 className="font-bold text-xl text-gray-800">
                {service.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurService;
