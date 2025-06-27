import React, { useEffect, useState } from "react";

import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link, useLocation } from "react-router";
import Skeleton from "../Loading/Skeleton";
import toast from "react-hot-toast";

// Sample JSON data (normally this would come from props or an API)
// const allPosts = [
//   {
//     id: 1,
//     title: "Looking for a roommate in Dhanmondi",
//     location: "Dhanmondi, Dhaka",
//     rentAmount: "8500 BDT/month",
//     roomType: "Shared",
//     lifestylePreferences: { pets: false, smoking: "No", nightOwl: true },
//     availability: true,
//   },
//   {
//     id: 2,
//     title: "Roommate wanted near GEC Circle",
//     location: "GEC Circle, Chattogram",
//     rentAmount: "6000 BDT/month",
//     roomType: "Single",
//     lifestylePreferences: {
//       pets: true,
//       smoking: "Occasionally",
//       nightOwl: false,
//     },
//     availability: true,
//   },
//   {
//     id: 3,
//     title: "Shared room available in Uttara",
//     location: "Uttara, Dhaka",
//     rentAmount: "7000 BDT/month",
//     roomType: "Shared",
//     lifestylePreferences: { pets: false, smoking: "No", nightOwl: false },
//     availability: false,
//   },
//   {
//     id: 4,
//     title: "Student roommate wanted in Mohammadpur",
//     location: "Mohammadpur, Dhaka",
//     rentAmount: "5000 BDT/month",
//     roomType: "Shared",
//     lifestylePreferences: { pets: false, smoking: "No", nightOwl: true },
//     availability: true,
//   },
//   {
//     id: 5,
//     title: "Room in Bashundhara R/A",
//     location: "Bashundhara, Dhaka",
//     rentAmount: "10000 BDT/month",
//     roomType: "Single",
//     lifestylePreferences: { pets: true, smoking: "No", nightOwl: false },
//     availability: true,
//   },
//   {
//     id: 6,
//     title: "Female roommate needed in Khulshi",
//     location: "Khulshi, Chattogram",
//     rentAmount: "4500 BDT/month",
//     roomType: "Shared",
//     lifestylePreferences: { pets: false, smoking: "No", nightOwl: false },
//     availability: true,
//   },
//   {
//     id: 7,
//     title: "Shared room for students in Sylhet",
//     location: "Zindabazar, Sylhet",
//     rentAmount: "4000 BDT/month",
//     roomType: "Shared",
//     lifestylePreferences: { pets: false, smoking: "No", nightOwl: true },
//     availability: true,
//   },
// ];

const Featured = () => {
  const [allPosts, setAllPosts] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then((res) => res.json())
      .then((data) => setAllPosts(data))
      .catch(() => toast.error("error occured"));
  }, [setAllPosts]);

  // const availablePosts = allPosts
  //   .filter((post) => post.availability)
  //   .slice(0, 6);

  const renderLifestyleBadges = (prefs) => {
    return Object.entries(prefs).map(([key, value], index) => {
      const isPositive =
        value === true || value === "Yes" || value === "Occasionally";
      return (
        <span
          key={index}
          className={`badge text-xs text-base-400 px-3 py-1 mr-2 mb-2 ${
            isPositive
              ? "bg-[#b2dcb14c] border-1 border-[#b2dcb1]"
              : "bg-[#f3cece65] border-1 border-[#f3cece]"
          }`}>
          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
          {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
        </span>
      );
    });
  };

  return (
    <section className="my-12 max-w-[1300px] mx-auto mt-[80px]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
        Featured Roommate Posts
      </h2>
      {allPosts.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, idx) => {
            return <Skeleton key={idx}></Skeleton>;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allPosts.map((post) => (
            <div
              key={post?._id}
              className="card bg-base-100 shadow-xl border border-gray-200">
              <div className="card-body space-y-2">
                <h3 className="card-title text-lg font-semibold">
                  {post.title}
                </h3>
                <p className="flex items-center gap-2 text-sm">
                  <FaLocationDot size={20} className="text-blue-500" />{" "}
                  {post.location}
                </p>
                <p className="flex items-center gap-1 text-sm">
                  <MdOutlineAttachMoney size={25} className="text-blue-500" />{" "}
                  {post.rentAmount}
                </p>
                <p className="text-sm ">Room Type: {post.roomType}</p>
                <div className="text-sm mt-2">
                  <p className="font-medium mb-1">Lifestyle Preferences:</p>
                  <div className="flex flex-wrap">
                    {renderLifestyleBadges(post.lifestylePreferences)}
                  </div>
                </div>
                <div className="card-actions mt-4">
                  <Link
                    state={{ from: pathname }}
                    to={`/details/${post._id}`}
                    className="btn btn-primary w-full">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Featured;
