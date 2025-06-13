import React from "react";
// import required modules
import { Pagination } from "swiper/modules";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { reviews } from "./../../utils/review";
import Rating from "../../components/Rating";

const Testimonial = () => {
  return (
    <section className="py-6 container mx-auto md:px-4 lg:px-16 px-2">
      <h3 className="text-lg uppercase font-semibold text-primary text-center py-4">
        Testimonials
      </h3>
      {/* Title */}

      <h2 className="capitalize text-4xl font-bold  mb-4 text-center">
        Our Client Reviews{" "}
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${review.coverImg})` }}
              className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[547px] w-full mx-auto bg-cover bg-center rounded-xl"
            >
              <div className="md:pt-64 pt-20">
                <div className="bg-white rounded-lg p-4 mx-10  flex flex-col justify-center items-center relative">
                  <img
                    src={review.image}
                    alt=""
                    className="size-20 ring-2 ring-primary rounded-full absolute -top-10"
                  />
                  <h3 className="pt-9 font-extrabold">{review.name}</h3>
                  <p className="py-2 text-center">{review.review}</p>
                  <Rating rating={review.rating} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
