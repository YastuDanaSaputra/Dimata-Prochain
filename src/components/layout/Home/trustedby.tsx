import Image from "next/image";

const TrustedBy = () => {
    return (
        <div className="bg-white py-12">
            <div className="overflow-hidden relative w-full">
                <div className="scroll-container flex animate-scroll-infinite space-x-8 justify-center">
                    {/* Logo Set 1 */}
                    <div className="flex space-x-32">
                        <Image src="/Image/trusted/1.svg" alt="ProSaas" width={100} height={55} />
                        <Image src="/Image/trusted/2.svg" alt="No1 City" width={100} height={55} />
                        <Image src="/Image/trusted/3.svg" alt="Mata" width={100} height={55} />
                        <Image src="/Image/trusted/4.svg" alt="Brand" width={100} height={55} />
                        <Image src="/Image/trusted/5.svg" alt="Tech House" width={100} height={55} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
