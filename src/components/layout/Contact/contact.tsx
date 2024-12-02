import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6 lg:p-32">
      {/* Bagian Gambar */}
      <div
        className="flex justify-center lg:justify-start"
        data-aos="fade-right"
      >
        <Image
          src="/Image/Contact/Contact.jpg"
          alt="Contact Us"
          width={500}
          height={500}
          className="w-full max-w-md object-contain"
        />
      </div>

      {/* Bagian Teks */}
      <div
        className="flex flex-col justify-center w-full lg:w-2/5 gap-3"
        data-aos="fade-left"
      >
        <div>
          <hr className="w-9 bg-yellow-500 h-0.5" />
          <span className="text-orange-500 font-medium">CONTACT US</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 lg:w-96">
          Get in Touch with Us
        </h1>
        <p className="w-full text-sm sm:text-lg text-gray-700">
          Have questions or need assistance? We’re here to help. Reach out to us
          for personalized support and tailored solutions for your business.
        </p>

        {/* Tombol WhatsApp */}
        <div className="flex flex-row mt-3">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex py-3 px-10 text-base font-medium text-center text-white bg-green-500 hover:bg-green-700"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
