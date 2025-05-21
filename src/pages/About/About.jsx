import React from "react";
import Expreiences from "../Home/Expreiences";

const About = () => {
  return (
    <section>
      {/* banner */}
      <div className='bg-[url("/about-background.jpg")] bg-cover bg-no-repeat flex items-center justify-center h-[400px] w-full'>
        <div>
          <h1 className="text-5xl font-bold text-white underline underline-offset-4">
            About Page
          </h1>
        </div>
      </div>
      {/* Experience section */}
      <Expreiences />
    </section>
  );
};

export default About;
