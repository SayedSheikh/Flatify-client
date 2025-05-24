import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthContext";

const Reviews = () => {
  const { user } = use(AuthContext);
  // console.log(user);
  const [review, setReview] = useState("");
  const [area, setArea] = useState("");
  const [rating, setRating] = useState(1); // default rating
  const [userReview, setUserReview] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      return;
    }
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setUserReview(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("error occurs");
        setLoading(false);
      });
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (review.trim() !== "") {
      document.getElementById("my_modal_5").close();
      // console.log(review, rating);
      const obj = {
        rating,
        comment: review,
        location: area,
        name: user?.displayName || "",
      };
      fetch("http://localhost:3000/reviews", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(obj),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setUserReview((prev) => [
              ...prev,
              { ...obj, _id: data.insertedId },
            ]);
            toast.success("Review added Successfully !!");
          }
        })
        .catch((err) => console.log(err));
      setReview("");
      setRating(1);
      setArea("");

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
      toast.error("Login first to add review !!");
    }
  };

  if (loading) {
    return (
      <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
        <span className="loading loading-bars w-[50px] text-primary"></span>
      </div>
    );
  }
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
        {userReview.map((review) => (
          <div
            key={review._id}
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
            <p className="text-sm text-base-400 max-w-[450px]">
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
