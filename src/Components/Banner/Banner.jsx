import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Mousewheel, Pagination } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import "./Banner.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./banner.css";
import toast from "react-hot-toast";
import Loading from "../Loading/Loading";

const Banner = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("https://flatify-server.vercel.app/banner")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch(() => toast.error("error occured !!!"));
  }, []);
  return (
    <div className="h-[500px] rounded-[8px]  z-[4]">
      {slides.length === 0 && <Loading></Loading>}
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        cssMode={true}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        className="mySwiper h-full">
        {slides.map((item) => (
          <SwiperSlide key={item._id}>
            <div
              style={{
                backgroundImage: `linear-gradient(-330deg, rgba(10, 10, 10,.20) 0%, rgba(17, 17, 17, 0.00) 100%) , url(${item.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="w-full h-[100%] p-[20px] md:p-[80px] lg:p-[100px] pb-0 flex rounded-[8px] ">
              <div className="relative text-white self-center space-y-[10px] w-fit">
                <h1 className="font-semibold md:text-3xl text-2xl lg:text-5xl">
                  <span className="text-pink-500">
                    {item.title.a.split(" ")[0]}
                    <br />
                  </span>
                  {/* <span>{item.title.c.split(" ").slice(1).join(" ")}</span> */}
                  <div className="min-h-10 text-[#3abff8] text-shadow-2xs text-shadow-black">
                    <Typewriter
                      words={[
                        item?.title?.a?.split(" ").slice(1).join(" "),
                        item?.title?.b?.split(" ").slice(1).join(" ") ?? " ",
                        item?.title?.c?.split(" ").slice(1).join(" "),
                      ]}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                    />
                  </div>

                  {/* {itme.title} */}
                </h1>
                <p className="semi-bold text-balance text-base md:text-lg lg:text-xl mb-[10px] mt-[20px]">
                  {item.description}
                </p>

                <Link
                  to={"/BrowseListing"}
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
