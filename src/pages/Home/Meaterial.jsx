import React from "react";
import Button from "../../components/Button"; // Reusable button component

const Meaterial = () => {
  return (
    // Main section with responsive spacing and layout

    <section className="container mx-auto my-24 flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 md:px-4 lg:px-16 px-2 bg-white">
      {/* Left content: heading, description, and button */}

      <div className="md:w-1/2 mx-auto">
        {/* Section tag */}

        <h3 className="text-lg uppercase font-semibold text-primary">
          Materials
        </h3>
        {/* Title */}

        <h2 className="capitalize text-4xl font-bold lg:w-1/2 mb-4">
          Very serious materials for making furniture
        </h2>
        {/* Description */}

        <p className="text-secondary mb-5 lg:w-1/2">
          Because panto was very serious about designing furniture for our
          environment, using a very expensive and famous capital but at a
          relatively low price
        </p>
        {/* Call-to-action button */}

        <Button text="More Info" />
      </div>
      {/* Right content: material images */}

      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center">
        {/* First column with two images stacked vertically */}

        <div>
          <img src="/material-1.png" alt="photo" />
          <img src="/material-2.png" alt="photo" />
        </div>
        {/* Second column spans two columns on medium screens and up */}

        <div className="md:col-span-2 col-span-1">
          <img
            src="/material-3.png"
            alt="photo"
            className="md:h-[541px] w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Meaterial;
