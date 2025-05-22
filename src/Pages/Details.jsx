import React from "react";
import {
  MdLocationOn,
  MdOutlineAttachMoney,
  MdBedroomParent,
  MdPets,
  MdSmokingRooms,
  MdNightlight,
  MdEmail,
  MdPhone,
  MdPerson,
  MdDescription,
} from "react-icons/md";

const Details = () => {
  const roommate = {
    id: 1,
    title: "Looking for a roommate in Dhanmondi",
    location: "Dhanmondi, Dhaka",
    rentAmount: "8500 BDT/month",
    roomType: "Shared",
    lifestylePreferences: {
      pets: false,
      smoking: "No",
      nightOwl: true,
    },
    availability: true,
    contactInfo: "",
    name: "Tanvir Ahmed",
    email: "tanvir.dhanmondi@gmail.com",
    phone: "+8801781234567",
    description:
      "Spacious and clean flat in Dhanmondi. Looking for a student or working professional. Wi-Fi, washing machine, and gas available. Bills shared equally.",
  };

  return (
    <div className="min-h-[calc(100vh-65px)] w-11/12 mx-auto flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-sm shadow-primary my-12 bg-base-200 text-base-content ]">
        <h1 className="text-4xl font-bold mb-6 text-secondary">
          {roommate.title}
        </h1>

        {/* Availability Badge */}
        <div
          className={`inline-block px-4 py-1 rounded-full font-semibold mb-6 ${
            roommate.availability
              ? "bg-success text-success-content"
              : "bg-error text-error-content"
          }`}>
          {roommate.availability ? "Available" : "Not Available"}
        </div>

        {/* Location, Rent, Room Type */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="flex items-center space-x-3">
            <MdLocationOn className="text-3xl text-secondary" />
            <span className="text-lg font-medium">{roommate.location}</span>
          </div>

          <div className="flex items-center space-x-3">
            <MdOutlineAttachMoney className="text-3xl text-accent" />
            <span className="text-lg font-medium">{roommate.rentAmount}</span>
          </div>

          <div className="flex items-center space-x-3">
            <MdBedroomParent className="text-3xl text-info" />
            <span className="text-lg font-medium">{roommate.roomType}</span>
          </div>
        </div>

        {/* Lifestyle Preferences */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-primary">
            Lifestyle Preferences
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center space-x-2">
              <MdPets
                className={`text-2xl ${
                  roommate.lifestylePreferences.pets
                    ? "text-success"
                    : "text-neutral"
                }`}
              />
              <span>
                {roommate.lifestylePreferences.pets
                  ? "Pets Allowed"
                  : "No Pets"}
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <MdSmokingRooms
                className={`text-2xl ${
                  roommate.lifestylePreferences.smoking === "No"
                    ? "text-neutral"
                    : "text-warning"
                }`}
              />
              <span>Smoking: {roommate.lifestylePreferences.smoking}</span>
            </div>

            <div className="flex items-center space-x-2">
              <MdNightlight
                className={`text-2xl ${
                  roommate.lifestylePreferences.nightOwl
                    ? "text-info"
                    : "text-neutral"
                }`}
              />
              <span>
                {roommate.lifestylePreferences.nightOwl
                  ? "Night Owl"
                  : "Early Bird"}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-primary flex items-center gap-2">
            <MdDescription className="text-xl" />
            Description
          </h2>
          <p>{roommate.description}</p>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-primary flex items-center gap-2">
            <MdPerson className="text-xl" />
            Contact Information
          </h2>

          <div className="space-y-2 text-lg">
            <p>
              <strong>Name: </strong> {roommate.name}
            </p>
            <p className="flex items-center gap-2">
              <MdPhone className="text-success" />
              <a
                href={`tel:${roommate.phone}`}
                className="hover:text-success-focus underline">
                {roommate.phone}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail className="text-info" />
              <a
                href={`mailto:${roommate.email}`}
                className="hover:text-info-focus underline">
                {roommate.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
