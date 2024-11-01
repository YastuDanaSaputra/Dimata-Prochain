import Image from "next/image";
import { useState, useEffect } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Testimonial = () => {

    const testimonialsData = [
        {
            id: 1,
            name: "Saraswati",
            role: "Client",
            message: " Lorem Ipsum is simply dummy text of the printing, typesetting. Lorem Ipsum is simply dummy text of the printing, typesetting. Lorem Ipsum is simply dummy text of the printing, typesetting. Lorem Ipsum is simply dummy text of the printing, typesetting.",
            imageUrl: "/Image/user.svg",
        },
        {
            id: 2,
            name: "John Doe",
            role: "Customer",
            message: "This is a sample testimonial from a satisfied customer.",
            imageUrl: "/Image/user.svg",
        },
        {
            id: 3,
            name: "Jane Smith",
            role: "Client",
            message: "Great service and support. Highly recommend!",
            imageUrl: "/Image/user.svg",
        },
        // Add more testimonials as needed
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [testimonial, setTestimonial] = useState(testimonialsData[0]);

    useEffect(() => {
        setTestimonial(testimonialsData[currentIndex]);
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex < testimonialsData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="flex pt-16 md:pt-32 font-sans">
            <div className="flex flex-col lg:flex-row lg:p-32 p-5 justify-between items-center bg-[url('/Image/testimonial/1.svg')] w-full h-[50vh] lg:h-[90vh] bg-cover bg-center">
                <div className="flex flex-col items-center lg:items-start justify-start text-white gap-3">
                    <h1 className="text-xl md:text-2xl italic font-medium">TESTIMONIAL</h1>
                    <h1 className="text-2xl md:text-4xl font-bold">What They Say About Us</h1>
                </div>

                <div className="flex flex-col p-5 gap-5 bg-white w-full max-w-lg lg:max-w-md shadow-lg rounded-lg">
                    <div className="flex flex-row justify-end items-center gap-4">
                        <div className="flex flex-col justify-center items-end">
                            <h1 className="font-bold text-lg md:text-xl">{testimonial.name}</h1>
                            <p className="text-sm">{testimonial.role}</p>
                        </div>
                        <Image src={testimonial.imageUrl} alt="pp" width={80} height={80} className="rounded-full" />
                    </div>
                    <div className="flex flex-col text-right">
                        <p className="text-sm md:text-base">{testimonial.message}</p>
                    </div>
                    <div className="flex flex-row gap-3 items-center justify-end">
                        <FaArrowLeftLong
                            size={24}
                            className="cursor-pointer"
                            onClick={handlePrevious}
                        />
                        <FaArrowRightLong
                            size={24}
                            className="cursor-pointer"
                            onClick={handleNext}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
