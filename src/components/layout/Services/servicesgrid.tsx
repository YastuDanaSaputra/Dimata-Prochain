import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesGrid = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Web Development */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
          >
            <Image
              src="/Image/Services/images111.png"
              alt="Web Development"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Sales Management</h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>

          {/* Mobile Development */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/Image/Services/mobile-development.jpg"
              alt="Mobile Development"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Inventory Control & Transfer
              </h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>

          {/* Internet of Things */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/Image/Services/iot.jpg"
              alt="Internet of Things"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Purchasing Management</h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>

          {/* Artificial Intelligence */}
          <div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/Image/Services/ai.jpg"
              alt="Artificial Intelligence"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Inventory Control & Transfer
              </h3>
              <p className="text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
