"use client";
import Navbar from "../navbar/Navbar";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Hero.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="hero relative">
      <Navbar />
      <video
      
      className="absolute inset-0 w-full h-full object-cover"

      autoPlay

      loop

      muted
      
      src="./assets/images/bg.mp4"></video>
       {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.75),rgba(120,0,0,0.95))] z-10"></div> */}
      <div className="swiper-cont text-white relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-slide",
            prevEl: ".button-prev-slide",
          }}
          pagination={{ clickable: true }}
          //   scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="h-[100%]"
        >
          <SwiperSlide>
            <div className="hero-inside h-[100%]">
              <div className="container">
                <div className="content z-10">
                  <h1 className="title text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Welcome to Our Fitness Center
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Join us today for a healthier lifestyle!
                  </p>
                  <button className="hero-btn">Get Started</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inside h-[100%]">
              <div className="container">
                <div className="content ">
                  <h1 className="title text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Personalized Training Plans
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Work with expert trainers to achieve your goals.
                  </p>
                  <button className="hero-btn">Learn More</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inside h-[100%]">
              <div className="container">
                <div className="content">
                  <h1 className="title text-4xl md:text-5xl font-bold leading-tight mb-4">
                    State-of-the-Art Equipment
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Experience the latest in fitness technology.
                  </p>
                  <button className="hero-btn">View Our Facilities</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inside h-[100%]">
              <div className="container">
                <div className="content">
                  <h1 className="title text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Group Fitness Classes
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Join fun and motivating group classes.
                  </p>
                  <button className="hero-btn">Check Schedule</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-inside h-[100%]">
              <div className="container">
                <div className="content">
                  <h1 className="title text-4xl md:text-5xl font-bold leading-tight mb-4">
                    Membership Benefits
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed mb-6">
                    Enjoy exclusive perks as a member of our gym.
                  </p>
                  <button className="hero-btn">Sign Up Now</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <button className="button-next-slide absolute top-1/2 right-[2rem] z-10 bg-[var(--pumpkinOrange)] p-2 sharp cursor-pointer btn-swap transition-all duration-500">
          <span>
            <FaArrowRight />
          </span>
        </button>
        <button className="button-prev-slide absolute top-1/2 left-[2rem] z-10 bg-[var(--pumpkinOrange)] p-2 sharp cursor-pointer btn-swap transition-all duration-500">
          <span>
            <FaArrowLeft />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
