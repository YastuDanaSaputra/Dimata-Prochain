import JumbotronServices from "@/components/layout/Services/jumbotron";
import ServicesGrid from "@/components/layout/Services/servicesgrid";

const ServicesView = () => {
  return (
    <>
      <JumbotronServices />
      <div className="p-4 mt-12 text-center">
        <h2 className="text-4xl font-bold">
          Innovative solutions for every step forward
        </h2>
        <p className="mt-2 text-lg font-light">
          We provide software solutions for businesses, government, and public
          services. Our expertise includes integration of
          <br />
          digital devices and 4.0 technologies.
        </p>
      </div>
      {/* Services Grid Component */}
      <ServicesGrid /> {/* Render the Services Grid here */}
    </>
  );
};

export default ServicesView;
