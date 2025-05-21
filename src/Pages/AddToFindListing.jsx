import React, { useState } from "react";

const AddToFindListing = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "",
    lifestyle: {
      pets: false,
      smoking: false,
      nightOwl: false,
    },
    description: "",
    contact: "",
    availability: true,
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
      lifestyle: {
        ...prev.lifestyle,
        [name]: checked,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Listing:", formData);

    // TODO: Send `formData` to the backend API
  };

  return (
    <div className="max-w-4xl mx-auto w-11/12 p-8 shadow-lg bg-white dark:bg-base-200 rounded-xl my-[60px]">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Add Roommate Listing
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Listing Title"
          value={formData.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="number"
          name="rent"
          placeholder="Rent Amount"
          value={formData.rent}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <select
          name="roomType"
          value={formData.roomType}
          onChange={handleChange}
          className="select select-bordered w-full"
          required>
          <option disabled value="">
            Select Room Type
          </option>
          <option value="Single">Single</option>
          <option value="Shared">Shared</option>
        </select>

        <div>
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
                  checked={formData.lifestyle[pref]}
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
          className="textarea textarea-bordered w-full"
          rows={4}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Info"
          value={formData.contact}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <div className="form-control">
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

        <button type="submit" className="btn btn-primary w-full">
          Submit Listing
        </button>
      </form>
    </div>
  );
};

export default AddToFindListing;
