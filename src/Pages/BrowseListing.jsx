import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link, useLoaderData } from "react-router";

const BrowseListing = () => {
  const allPosts = useLoaderData();

  const renderLifestyleBadges = (prefs) => {
    return Object.entries(prefs).map(([key, value], index) => {
      const isPositive =
        value === true || value === "Yes" || value === "Occasionally";
      return (
        <span
          key={index}
          className={`badge text-xs text-black px-3 py-1 mr-2 mb-2 ${
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
    <section className="my-12 max-w-[1300px] mx-auto mt-[80px] w-11/12">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
        All Roommate Posts
      </h2>
      {allPosts.length === 0 && <p>Loading...</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allPosts.map((post) => (
          <div
            key={post.id}
            className="card bg-base-100 shadow-xl border border-gray-200">
            <div className="card-body space-y-2">
              <h3 className="card-title text-lg font-semibold">{post.title}</h3>
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
                  to={`/details/${post.id}`}
                  className="btn btn-primary w-full">
                  See More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseListing;
