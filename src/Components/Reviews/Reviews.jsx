import React, { use, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";

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
  const { user } = use(AuthContext);
  console.log(user);
  const [review, setReview] = useState("");
  const [area, setArea] = useState("");
  const [rating, setRating] = useState(1); // default rating
  const [userReview, setUserReview] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("logIn first to add review");
    }
    if (review.trim() !== "") {
      document.getElementById("my_modal_5").close();
      // console.log(review, rating);
      const obj = {
        rating,
        review,
        area,
        name: user?.displayName || "",
      };
      setUserReview(obj);
      setReview("");
      setRating(1);
      setArea("");
      toast.success("Review Added Successfully !!");
      // console.log(userReview);
    } else {
      // alert("please write your comment");
      toast.error("please write your comment");
    }
  };
  const handleReview = () => {
    if (user) {
      document.getElementById("my_modal_5").showModal();
    } else {
      // alert("Install the app first");
      toast.error("Install the app first");
    }
  };
  return (
    <section className="my-16 max-w-[1300px] mx-auto px-4">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-2">
        <h2 className="text-3xl font-bold text-secondary self-start">
          What Our Users Say
        </h2>
        <button
          onClick={handleReview}
          className="btn btn-outline btn-primary self-end w-full sm:w-fit mt-4 sm:mt-0">
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

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-[20px]">Give your feedback</h3>
          <div className="flex gap-[10px]">
            <p>Rating</p>
            <div className="rating rating-sm mb-[10px]">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${value} star`}
                  checked={rating === value}
                  onChange={() => setRating(value)}
                />
              ))}
            </div>
          </div>
          <div className="my-[5px]">
            <p>Area</p>
            <input
              type="text"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="border border-primary rounded-[3px]"
            />
          </div>
          <textarea
            name="review"
            placeholder="Write your review here..."
            className="textarea textarea-primary w-full"
            rows={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </section>
  );
};

export default Reviews;
