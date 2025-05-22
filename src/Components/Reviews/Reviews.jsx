import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rafi Ahmed",
    location: "Dhanmondi, Dhaka",
    rating: 5,
    comment:
      "Very useful website! Found my roommate within 2 days. Highly recommend it.",
  },
  {
    id: 2,
    name: "Fatima Yasmin",
    location: "Chattogram",
    rating: 4,
    comment: "Nice experience. The interface is clean and easy to use.",
  },
  {
    id: 3,
    name: "Sabbir Khan",
    location: "Bashundhara R/A, Dhaka",
    rating: 4,
    comment:
      "Good platform for students. Could improve filtering options though.",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    location: "Uttara, Dhaka",
    rating: 5,
    comment:
      "Super helpful! Found a safe and affordable place through this site.",
  },
  {
    id: 5,
    name: "Tanvir Hossain",
    location: "Sylhet",
    rating: 3,
    comment: "Decent site. Needs more listings in my area.",
  },
];

const Reviews = () => {
  return (
    <section className="my-16 max-w-[1300px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
        <h2 className="text-3xl font-bold text-secondary self-start">
          What Our Users Say
        </h2>
        <button className="btn btn-outline btn-primary self-end">
          Give Your Review
        </button>
      </div>

      <div className="flex flex-wrap gap-2 ">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-base-100 p-5 rounded-lg shadow border border-gray-200 grow-1 ">
            <h3 className="font-semibold text-lg ">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.location}</p>
            <div className="flex items-center my-2">
              {Array.from({ length: review.rating }).map((_, idx) => (
                <FaStar key={idx} className="text-yellow-400 mr-1" />
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, idx) => (
                <FaStar key={idx} className="text-gray-300 mr-1" />
              ))}
            </div>
            <p className="text-sm text-gray-700 max-w-[450px]">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
