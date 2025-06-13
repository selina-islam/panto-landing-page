import React from "react";
import Button from "../../components/Button";

const WhyChoose = () => {
  return (
    <section className="container mx-auto md:px-4 lg:px-16 px-2">
      {/* Parent grid layout with spacing */}
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-8 md:gap-12 text-left">
        <div>
          {/* Section Title */}
          <h2 className="text-4xl font-bold">Why Choosing Us</h2>
        </div>
        {/* Card 1: Luxury facilities */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
          <p className="text-base mb-2">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
          <Button text="Learn Info" />
        </div>
        {/* Card 2: Affordable Price */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Affordable Price</h3>
          <p className="text-base mb-2">
            You can get a workspace of the highest quality at an affordable
            price and still enjoy the facilities that are only here.
          </p>
          <Button text="Learn Info" />
        </div>
        {/* Card 3: Many Choices */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Many Choices</h3>
          <p className="text-base mb-2">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <Button text="Learn Info" />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
