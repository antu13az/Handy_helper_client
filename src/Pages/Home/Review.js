import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required module

import { FaStar } from "react-icons/fa";
import { IoMdQuote } from "react-icons/io";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { BASE_API } from "../../Config";
const Review = () => {
  const [reviews, setreviews] = useState([]);
  useEffect(() => {
    fetch(`${BASE_API}/happyReviews`)
      .then((res) => res.json())
      .then((data) => setreviews(data));
  }, []);

  return (
    <section id="reviewId" className="testimonials">
      <div className="text-center pt-8 pb-14">
        <h4 className="title "> What Our Clients Says</h4>
        <p>Some clients gives us review here it is</p>
        <p className="underspan">
          <span className="bg-cyan-800"></span>
          <span className="bg-purple-600"></span>
          <span className="bg-cyan-800"></span>
        </p>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          "@0.25": {
            slidesPerView: 2,
            spaceBetween: -100,
          },
          "@0.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.25": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <>
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="reviewCard">
                <IoMdQuote className="quote" />

                <div className="reviewInfo">
                  <p>{review.review}</p>
                </div>
                <div className="authorStars">
                  <div>
                    <img
                      width="50"
                      height="50"
                      className="rounded-full"
                      src={review.img}
                      alt=""
                    />
                  </div>
                  <div className="nameStar">
                    <p className="name font-bold text-[#334499] ">
                      {review.name}
                    </p>
                    <p className="flex justify-center text-[#ff6a00] ">
                      {[...Array(parseInt(review.star))].map((start, index) => {
                        return <FaStar className="mx-1" key={index} />;
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </section>
  );
};

export default Review;
