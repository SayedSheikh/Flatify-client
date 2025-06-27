import { use, useState } from "react";
// import { AiFillHeart, AiOutlineHeart } from "react-icons";
import {
  MdLocationOn,
  MdEmail,
  MdOutlinePets,
  MdNightlight,
  MdPhone,
} from "react-icons/md";
import { FaSmokingBan, FaSmoking } from "react-icons/fa";
import { BsDoorOpen } from "react-icons/bs";
import { AiFillHeart, AiFillLike, AiOutlineHeart } from "react-icons/ai";
import { Link, useLoaderData, useLocation } from "react-router";
import { IoReturnDownBack } from "react-icons/io5";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext";

const Details = () => {
  const [liked, setLiked] = useState(false);
  const { user } = use(AuthContext);

  const data = useLoaderData();

  const [roommate, setRoommate] = useState(data);

  const location = useLocation();
  let from = location?.state?.from || "/BrowseListing";
  if (location.pathname.split("/")[1] === "dashboard") {
    from = "/dashboard/BrowseListing";
  }

  if (roommate.message === "Invalid ID format" || roommate === "") {
    return (
      <div className="w-11/12 mx-auto max-w-4xl mt-[50px] min-h-[calc(100vh-65px)]">
        <Link to={from} className="flex items-center text-2xl text-primary">
          <IoReturnDownBack className="self-end" />
          Back
        </Link>
        <div>No Roommate found with that info</div>
      </div>
    );
  }

  const handleLike = () => {
    // console.log(roommate);

    if (user?.email === roommate?.email) {
      toast.error("You can't like your listings");
      return;
    }

    setLiked(true);
    fetch(`https://flatify-server.vercel.app/flatify/like/${roommate._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          setRoommate((prev) => ({
            ...prev,
            liked: prev.liked + 1,
          }));

          toast.success("like increased");
        }
      })
      .catch(() => toast.error("error occured"));
  };
  // const roommate = {
  //   id: 1,
  //   title: "Looking for a roommate in Dhanmondi",
  //   location: "Dhanmondi, Dhaka",
  //   rentAmount: "8500 BDT/month",
  //   roomType: "Shared",
  //   lifestylePreferences: {
  //     pets: false,
  //     smoking: "No",
  //     nightOwl: true,
  //   },
  //   availability: true,
  //   contactInfo: "01845868514",
  //   name: "Tanvir Ahmed",
  //   email: "tanvir.dhanmondi@gmail.com",
  //   description:
  //     "Spacious and clean flat in Dhanmondi. Looking for a student or working professional. Wi-Fi, washing machine, and gas available. Bills shared equally.",
  // };

  return (
    <div className="w-11/12 mx-auto max-w-4xl mt-[50px]">
      <title>FlaTify | Browse Details</title>
      <Link to={from} className="flex items-center text-2xl text-primary">
        <IoReturnDownBack className="self-end" />
        Back
      </Link>
      <h1 className="text-[20px] font-bold text-secondary">
        {roommate.liked} people Intrested
      </h1>
      <div className="max-w-4xl mx-auto p-6 bg-base-100 shadow-sm shadow-primary rounded-2xl my-10 ">
        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div>
            <h1 className="text-4xl font-bold text-primary">
              {roommate.title}
            </h1>
          </div>
          <button
            onClick={() => {
              handleLike();
            }}
            className="text-3xl transition duration-300 hover:scale-110 self-start md:self-end mt-[10px] cursor-pointer active:scale-90 text-blue-600"
            aria-label="Like">
            <AiFillLike size={40} />
          </button>
        </div>

        {/* Location */}
        <div className="flex flex-col-reverse md:flex-row items-start justify-between">
          <p className="flex items-center gap-2 text-lg text-base-content mb-4">
            <MdLocationOn className="text-info text-xl" /> {roommate.location}
          </p>

          {liked && (
            <p className="flex items-center gap-2">
              <MdPhone className="text-info text-xl" />

              <a
                href={`tel:${roommate.contactInfo}`}
                className="link link-hover">
                {roommate.contactInfo}
              </a>
            </p>
          )}
        </div>

        {/* Description */}
        <p className="mb-6 text-base">{roommate.description}</p>

        {/* Rent & Room Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 bg-base-200 p-4 rounded-xl">
            <BsDoorOpen className="text-success text-2xl" />
            <span className="font-semibold">Room Type:</span>{" "}
            {roommate.roomType}
          </div>
          <div className="flex items-center gap-2 bg-base-200 p-4 rounded-xl">
            <span className="text-xl text-warning">💸</span>
            <span className="font-semibold">Rent:</span> {roommate.rentAmount}
          </div>
        </div>

        {/* Lifestyle Preferences */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Lifestyle Preferences</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl">
              <MdOutlinePets className="text-pink-600 text-2xl" />
              <span>
                {roommate.lifestylePreferences.pets
                  ? "Pets Allowed"
                  : "No Pets"}
              </span>
            </div>
            <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl">
              {roommate.lifestylePreferences.smoking === false ? (
                <>
                  <FaSmokingBan className="text-red-500 text-2xl" />
                  <span>No Smoking</span>
                </>
              ) : (
                <>
                  <FaSmoking className="text-yellow-600 text-2xl" />
                  <span> Occasionally</span>
                </>
              )}
            </div>
            <div className="flex items-center gap-2 bg-base-200 p-3 rounded-xl">
              <MdNightlight className="text-purple-500 text-2xl" />
              <span>
                {roommate.lifestylePreferences.nightOwl
                  ? "Night Owl"
                  : "Early Bird"}
              </span>
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Availability</h2>
          <p
            className={`font-medium ${
              roommate.availability ? "text-success" : "text-error"
            }`}>
            {roommate.availability ? "Available" : "Not Available"}
          </p>
        </div>

        {/* Contact Info */}
        <div className="mt-8 border-t pt-6">
          <h2 className="text-xl font-semibold mb-3">Contact</h2>
          <p className="flex items-center gap-2 mb-2">
            <span className="text-primary font-medium">Name:</span>{" "}
            {roommate.name}
          </p>

          <p className="flex items-center gap-2">
            <MdEmail className="text-info text-xl" />

            <a href={`mailto:${roommate.email}`} className="link link-hover">
              {roommate.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
