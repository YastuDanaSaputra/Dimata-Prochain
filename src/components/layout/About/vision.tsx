const VisionAbout = () => {
  return (
    <div className=" bg-[url('/img/about/vision.png')] h-96 bg-cover bg-center bg-no-repeat h-full w-full lg:h-full lg:bg-cover ">
      <div className="flex flex-col justify-center items-center space-y-10 p-10 lg:flex-row lg:space-y-0 lg:space-x-10">
        <div>
          <div className="lg:flex lg:flex-col lg:justify-center lg:items-center md:flex md:flex-col md:justify-center md:items-center">
            <hr className="lg:bg-white lg:w-24 w-28 mb-3 ml-32 lg:ml-0 md:ml-0" />
            <p className="text-white font-small text-center mb-5">
              VISION AND MISION
            </p>
          </div>
          <div className="lg:flex lg:flex-row lg:justify-center lg:items-center lg:space-x-10 space-y-10 lg:space-y-0 md:flex md:flex-col md:justify-center md:items-centers">
            <div className="bg-white p-10 space-y-5 lg:w-2/5">
              <h1 className="text-4xl font-bold text-center">VISION</h1>
              <hr className="w-64 ml-3 h-0.5 bg-black lg:w-96 lg:ml-5 md:ml-56 md:w-72" />
              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
            <div className="bg-white p-10 space-y-5 lg:w-2/5">
              <h1 className="text-4xl font-bold text-center">MISSION</h1>
              <hr className="w-64 ml-3 h-0.5 bg-black lg:w-96 lg:ml-5 md:ml-56 md:w-72" />
              <p className="text-center">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum is simply dummy
                text of the printing and typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAbout;
