import Image from "next/image";

const OfficeAbout = () => {
  return (
    <div className="lg:p-20 lg:grid lg:grid-cols-2  lg:h-94 p-10 ">
      <div className=" lg:ml-20">
        <Image
          src="/img/about/office.png"
          alt="office"
          width={500}
          height={500}
        />
      </div>

      <div className="lg:pl-40 lg:items-center lg:  mt-10">
        <hr className="w-9 bg-indigo-900 font-weight h-0.5" />
        <h1 className="text-indigo-900 ">OUR OFFICE</h1>
        <p className="text-gray-800 font-bold text-4xl mt-5">
          Where Innovation
        </p>
        <p className="text-gray-800 font-bold text-4xl mt-5">Happens</p>
        <p className=" mt-5 text-sm ">
          A space built to drive progress and foster creativity. Our modern,
          tech-forward office reflects our commitment to cutting-edge solutions
          and provides the ideal environment for innovation and collaboration.
        </p>
      </div>
    </div>
  );
};
export default OfficeAbout;
