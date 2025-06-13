import React from "react";
import Meaterial from "../pages/Home/Meaterial";
import Testimonial from "../pages/Home/Testimonial";

const Contacts = () => {
  return (
    <section>
      {/* banner */}
      <div className='bg-[url("/hero.png")] bg-cover bg-no-repeat flex items-center justify-center h-[400px] w-full'>
        <div>
          <h1 className="text-5xl font-bold text-white underline underline-offset-4">
            Contact Page
          </h1>
        </div>
      </div>
      {/* Materials section */}
                  <Meaterial />
                  {/* testimonials  */}
                  <Testimonial/>
    </section>
  );
};

export default Contacts;
