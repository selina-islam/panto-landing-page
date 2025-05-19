import React from "react";
import { FaSearch } from "react-icons/fa";
import TooltipButton from "../../components/TooltipButton";

const Hero = () => {
  return (
    <>
      {/* Full-height hero section with background image */}
      <section className="h-screen bg-cover bg-center bg-[url('/hero.png')] bg-gray-400">
        {/* Centered content inside the hero section */}
        <div className="pt-24 md:pt-28 text-white md:w-1/2 mx-auto text-center p-2">
          {/* Main heading */}
          <h1 className="text-4xl lg:text-6xl font-medium font-poppins pb-5 lg:leading-tight">
            Make your interior more minimalistic & modern
          </h1>
          {/* Subheading / description */}
          <p className="text-xl font-normal ">
            Turn your room with panto into a lot more <br /> minimalist and
            modern with ease and speed
          </p>
          {/* search field with icon*/}
          <div className="relative inline-block z-30">
            <input
              type=" text"
              placeholder="Search furniture"
              className="border border-b-gray-300 focus:outline-none py-2 px-6 bg-white/15 rounded-full text-white/50 t w-full mt-5"
            />
            {/* Search icon button */}

            <div className="absolute right-1 bottom-1 px-2 bg-primary p-2 rounded-full cursor-pointer">
              <FaSearch />
            </div>
          </div>
        </div>
        {/* Bottom gradient blur effect */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm" />

        {/* Tooltip buttons (appear only on extra-large screens) */}
        {/* Tooltip 1 - bottom left */}
        <div className="hidden xl:block absolute bottom-40 left-24">
          <TooltipButton position="bottom" />
        </div>
        {/* Tooltip 2 - slightly higher and more right */}
        <div className="hidden xl:block absolute bottom-52 left-96">
          <TooltipButton position="bottom" />
        </div>
        {/* Tooltip 3 - near center */}
        <div className="hidden xl:block absolute bottom-24 right-[820px]">
          <TooltipButton position="bottom" />
        </div>
        {/* Tooltip 4 - bottom right corner */}
        <div className="hidden xl:block absolute bottom-12 right-16">
          <TooltipButton position="bottom" />
        </div>
      </section>
   
    </>
  );
};

export default Hero;
