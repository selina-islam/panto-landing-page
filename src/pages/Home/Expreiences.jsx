import React from "react";
import Button from "../../components/Button"; // Reusable button component

const Experiences = () => {
  return (
    // Main section with responsive layout and spacing
    <section className="container mx-auto my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 md:px-4 lg:px-16 px-2">
      {/* Left side: Image container */}

      <div className="md:w-1/2 md:h-[541px]">
        <img src="/experience.png" alt="photo" className="w-full h-full" />
      </div>
      {/* Right side: Text content and call-to-action */}

      <div className="md:w-1/2 mx-auto">
        {/* Section label */}

        <h3 className="text-lg uppercase font-semibold text-primary">
          experiences
        </h3>
        {/* Main headline */}

        <h2 className="capitalize text-4xl font-bold lg:w-1/2 mb-4">
          we provide you the best experience
        </h2>
        {/* Supporting description */}

        <p className="text-secondary mb-5 lg:w-2/3">
          You don’t have to worry about the result because all of these
          interiors are made by people who are professionals in their fields
          with an elegant and lucurious style and with premium quality materials
        </p>
        {/* Button leading to more info */}

        <Button text="More Info" />
      </div>
    </section>
  );
};

export default Experiences;
