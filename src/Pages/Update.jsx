import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Link, useLoaderData, useNavigate } from "react-router";
import { IoReturnDownBack } from "react-icons/io5";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Update = () => {
  const { user } = use(AuthContext);
  const info = useLoaderData();

  const navigate = useNavigate();

  useEffect(() => {
    if (info.message === "Invalid ID format" || info === "") {
      navigate("/MyListings");
    }
  }, [info, navigate]);

  const [formData, setFormData] = useState({
    title: info?.title || "",
    location: info?.location || "",
    rentAmount: info?.rentAmount || "",
    roomType: info?.roomType || "",
    lifestylePreferences: {
      pets: info?.lifestylePreferences?.pets ?? false,
      smoking: info?.lifestylePreferences?.smoking ?? false,
      nightOwl: info?.lifestylePreferences?.nightOwl ?? false,
    },
    description: info?.description,
    contactInfo: info?.contactInfo,
    availability: info?.availability,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLifestyleChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      lifestylePreferences: {
        ...prev.lifestylePreferences,
        [name]: checked,
      },
      name: user.displayName,
      email: user.email,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:3000/flatify/${info._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          console.log("no modification");
          toast.error("no modification");
        }
      })
      .catch((err) => console.log(err));
  };
  if (!user)
    return (
      <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
        <span className="loading loading-bars w-[50px] text-primary"></span>
      </div>
    );
  return (
    <div className="max-w-4xl mx-auto w-11/12 my-[40px]">
      <Link
        to={"/MyListings"}
        className="flex items-center text-2xl text-primary">
        <IoReturnDownBack className="self-end" />
        Back
      </Link>
      <div className=" p-8 shadow-lg bg-white dark:bg-base-200 rounded-xl my-[40px]">
        <h2 className="text-2xl font-bold mb-6 text-center text-secondary">
          Add Roommate Listing
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="label">Listing Title</label>
            <input
              type="text"
              name="title"
              placeholder="Listing Title"
              value={formData.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Rent Amount</label>
            <input
              type="text"
              name="rentAmount"
              placeholder="Rent Amount"
              value={formData.rentAmount}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="label">Room Type</label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="select select-bordered w-full cursor-pointer"
              required>
              <option disabled value="">
                Select Room Type
              </option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block font-semibold mb-2">
              Lifestyle Preferences:
            </label>
            <div className="flex gap-4 flex-wrap">
              {["pets", "smoking", "nightOwl"].map((pref) => (
                <label
                  key={pref}
                  className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name={pref}
                    checked={formData.lifestylePreferences[pref]}
                    onChange={handleLifestyleChange}
                    className="checkbox"
                  />
                  <span className="capitalize">{pref}</span>
                </label>
              ))}
            </div>
          </div>

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full md:col-span-2"
            rows={4}
            required
          />

          <input
            type="number"
            name="contactInfo"
            placeholder="Contact Number"
            value={formData.contactInfo}
            onChange={handleChange}
            className="input input-bordered w-full md:col-span-2"
            required
          />

          <div className="form-control md:col-span-2">
            <label className="label cursor-pointer">
              <span className="label-text">Available?</span>
              <input
                type="checkbox"
                className="toggle toggle-success ml-4"
                checked={formData.availability}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    availability: !prev.availability,
                  }))
                }
              />
            </label>
          </div>

          <input
            type="text"
            name="rent"
            placeholder="UserName"
            value={user?.displayName}
            className="input input-bordered w-full"
            readOnly
          />
          <input
            type="text"
            name="rent"
            placeholder="email"
            value={user?.email}
            className="input input-bordered w-full"
            readOnly
          />

          <button
            type="submit"
            className="btn btn-primary w-full md:col-span-2">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
