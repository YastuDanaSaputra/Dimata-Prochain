import React from "react";
import Image from "next/image"; // Import komponen Image dari Next.js
import { motion } from "framer-motion"; // Import framer-motion

const ServicesGrid = () => {
  // Variabel animasi muncul
  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Web Development */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Menambahkan 'amount: 0.5' untuk memastikan elemen setengah terlihat dulu sebelum animasi dimulai
            variants={fadeInUp}
            onViewportEnter={() =>
              console.log("Web Development masuk ke viewport")
            }
          >
            <Image
              src="/images/web-development.jpg"
              alt="Web Development"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Web Development</h3>
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
          </motion.div>

          {/* Mobile Development */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
            onViewportEnter={() =>
              console.log("Mobile Development masuk ke viewport")
            }
          >
            <Image
              src="/images/mobile-development.jpg"
              alt="Mobile Development"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Mobile Development</h3>
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
          </motion.div>

          {/* Internet of Things */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
            onViewportEnter={() =>
              console.log("Internet of Things masuk ke viewport")
            }
          >
            <Image
              src="/images/iot.jpg"
              alt="Internet of Things"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Internet of Things</h3>
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
          </motion.div>

          {/* Artificial Intelligence */}
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={fadeInUp}
            onViewportEnter={() =>
              console.log("Artificial Intelligence masuk ke viewport")
            }
          >
            <Image
              src="/images/ai.jpg"
              alt="Artificial Intelligence"
              width={600}
              height={300}
              className="object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Artificial Intelligence
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
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
