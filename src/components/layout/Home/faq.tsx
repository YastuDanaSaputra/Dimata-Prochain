import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const faq = [
  {
    id: 1,
    question: "What types of businesses can benefit from ProChain?",
    answer:
      "ProChain is designed for diverse industries, including retail chains, restaurants, manufacturing, and service businesses. Our platform is highly adaptable, making it ideal for businesses with multiple locations, warehouses, or complex inventory needs.",
  },
  {
    id: 2,
    question: "Is ProChain compatible with other accounting systems?",
    answer:
      "Yes, ProChain integrates seamlessly with Aiso Accounting, and we are continuously working to expand compatibility with other popular accounting systems to ensure smooth financial management.",
  },
  {
    id: 3,
    question: "Can ProChain handle multiple currencies and locations?",
    answer:
      "Absolutely. ProChain supports multiple currencies and locations, enabling you to manage inventory, pricing, and transactions across international or multi-location operations without complications.",
  },
  {
    id: 4,
    question: "How does ProChain improve order and delivery management?",
    answer:
      "ProChain offers a centralized order tracking system that simplifies purchase order recording and delivery monitoring, giving you clear visibility into each order’s status to ensure timely delivery and accurate inventory levels.",
  },
  {
    id: 5,
    question: "Is there a reporting system included in ProChain?",
    answer:
      "Yes, ProChain features a comprehensive reporting system. You can access detailed analytics on sales, inventory, costs, and more to make data-driven decisions that support business growth and efficiency.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 600, once: true });
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 p-5 sm:px-10 lg:px-32">
      <div className="flex flex-col gap-3" data-aos="fade-up">
        <div>
          <hr className="w-9 bg-yellow-500 h-0.5" />
          <span className="text-orange-500 font-medium">FAQ</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        {faq.map((item, index) => (
          <div
            key={item.id}
            data-aos="fade-up"
            className={`group flex flex-col border-2 border-orange-900 w-full sm:w-[90%] lg:w-full cursor-pointer 
              ${
                activeIndex === index
                  ? "bg-orange-500 text-white"
                  : "bg-white hover:bg-orange-500 hover:text-white"
              }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex flex-row justify-between items-center w-full p-4 sm:p-5">
              <h1
                className={`text-lg sm:text-xl font-bold text-gray-800 group-hover:text-white 
                  ${activeIndex === index ? "text-white" : ""}`}
              >
                {item.question}
              </h1>
              <Image
                src="/Image/icons/arrow.png"
                alt="down"
                width={20}
                height={20}
                className={`transform transition-transform duration-500 ease-in-out 
                  ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </div>
            {activeIndex === index && (
              <div
                data-aos="fade-down"
                className="overflow-hidden cursor-default transition-all duration-500 ease-in-out max-h-[200px]"
              >
                <div className="p-4 sm:p-5 text-gray-800 bg-white">
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
