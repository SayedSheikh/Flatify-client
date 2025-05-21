import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";

import feat1 from "/featured1.jpeg";
import feat2 from "/featured2.jpeg";
import feat3 from "/featured3.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./banner.css";

const Banner = () => {
  const slides = [
    {
      title: "Find the Perfect Roommate, Fast!",
      description:
        "Post your listing or browse hundreds of verified roommate profiles near you.",
      img: "https://cdn.diggz.co/assets/city-banner-desktop-dark30-9ea3a158466fa13feb8147c6ae647ed63d9032a9411e69c49389662808dd25a0.webp",
    },
    {
      title: "Verified Listings You Can Trust",
      description:
        "No more fake ads. All rooms and profiles are screened for your safety.",
      img: "https://images.unsplash.com/photo-1586105251261-72a756497a12?auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Match by Lifestyle and Budget",
      description:
        "Use filters to match with roommates who share your habits, hobbies, and price range.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1740&q=80",
    },
  ];

  return (
    <div className="h-[500px] rounded-[8px]  z-[4]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        cssMode={true}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper h-full">
        {/* <SwiperSlide>
          <div
            style={{
              backgroundImage: `linear-gradient(-330deg, rgba(10, 10, 10,.80) 0%, rgba(17, 17, 17, 0.00) 100%) , url(${imgUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="w-full h-[100%] p-[20px] md:p-[80px] lg:p-[100px] flex rounded-[8px]">
            <div className="relative text-white self-center space-y-[10px]">
              <h1 className="font-bold md:text-3xl text-2xl lg:text-5xl">
                The Best & Fastest Flatmate finder
              </h1>
              <p className="semi-bold text-balance text-base md:text-lg lg:text-xl mb-[10px] mt-[20px]">
                Looking for a roommate, renting out a room, or teaming up to
                find new places?
              </p>

              <Link
                to={`#`}
                className="relative inline-block px-4 py-2 font-medium group active:translate-y-[1px] transition-transform duration-100  z-10">
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#F471B5] group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#F471B5] group-hover:border-none "></span>
                <span className="relative text-black group-hover:text-white flex items-center ">
                  <MdOutlineKeyboardArrowRight size={30} /> Find rooms
                </span>
              </Link>
            </div>
          </div>
        </SwiperSlide> */}
        {slides.map((itme, indx) => (
          <SwiperSlide key={indx}>
            <div
              style={{
                backgroundImage: `linear-gradient(-330deg, rgba(10, 10, 10,.20) 0%, rgba(17, 17, 17, 0.00) 100%) , url(${feat1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-[100%] p-[20px] md:p-[80px] lg:p-[100px] pb-0 flex rounded-[8px] ">
              <div className="relative text-white self-center space-y-[10px] w-fit">
                <h1 className="font-semibold md:text-3xl text-2xl lg:text-5xl">
                  <span className="text-pink-500">
                    {itme.title.split(" ")[0]}
                    <br />
                  </span>
                  <span>{itme.title.split(" ").slice(1).join(" ")}</span>
                  {/* {itme.title} */}
                </h1>
                <p className="semi-bold text-balance text-base md:text-lg lg:text-xl mb-[10px] mt-[20px]">
                  {itme.description}
                </p>

                <Link
                  to={`#`}
                  className="relative inline-block px-4 py-2 font-medium group active:translate-y-[1px] transition-transform duration-100  z-10">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#F471B5] group-hover:-translate-x-0 group-hover:-translate-y-0 "></span>
                  <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#F471B5] group-hover:border-none "></span>
                  <span className="relative text-black group-hover:text-white flex items-center ">
                    <MdOutlineKeyboardArrowRight size={30} /> Find Roommates
                  </span>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
