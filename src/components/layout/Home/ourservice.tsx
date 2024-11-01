import Image from "next/image";

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageSrc: "/Image/services/1.svg",
        imageAlt: "Web Development",
    },
    {
        id: 2,
        title: "Mobile Development",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageSrc: "/Image/services/2.svg",
        imageAlt: "Mobile Development",
    },
    {
        id: 3,
        title: "Internet of Things",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        imageSrc: "/Image/services/3.svg",
        imageAlt: "Internet of Things",
    }
];

const OurService = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6 lg:p-32">
            <div className="flex flex-col justify-center w-full lg:w-2/5 gap-3">
                <div>
                    <hr className="w-9 bg-indigo-900 h-0.5" />
                    <span className="text-indigo-900 font-medium">OUR SERVICES</span>
                </div>
                <h1 className="text-3xl font-bold font-sans text-gray-800">Innovative solutions for every step forward.</h1>
                <p className="text-sm sm:text-lg text-indigo-900 sm:w-full lg:w-96">
                    We provide software solutions for businesses, government, and public services. Our expertise includes integration of digital devices and 4.0 technologies.
                </p>
            </div>

            <div className="flex flex-col gap-5">
                {services.map((service) => (
                    <div key={service.id} className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                        <Image
                            src={service.imageSrc}
                            alt={service.imageAlt}
                            width={209}
                            height={200}
                            className="w-full lg:w-[209px]"
                        />
                        <div className="flex flex-col gap-3">
                            <h1 className="font-bold text-lg sm:text-xl">{service.title}</h1>
                            <p className="w-full sm:w-72 text-sm text-indigo-900">
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
