import React, { useEffect, useState } from "react";

const mockUserEmail = "your.email@example.com"; // Replace with actual authenticated user's email

// 🔸 Replace this with your real filtered API data
const mockListings = [
  {
    title: "Looking for a roommate in Dhanmondi",
    location: "Dhanmondi, Dhaka",
    rentAmount: "8500 BDT/month",
    roomType: "Shared",
    contactInfo: "",
    name: "Tanvir Ahmed",
    email: "tanvir.dhanmondi@gmail.com",
  },
  {
    title: "Shared room for students in Sylhet",
    location: "Zindabazar, Sylhet",
    rentAmount: "4000 BDT/month",
    roomType: "Shared",
    contactInfo: {},
    name: "Rahat Miah",
    email: "rahat.sylhet@gmail.com",
  },
  {
    title: "Shared room for students in Sylhet",
    location: "Zindabazar, Sylhet",
    rentAmount: "4000 BDT/month",
    roomType: "Shared",
    contactInfo: {},
    name: "Rahat Miah",
    email: "rahat.sylhet@gmail.com",
  },
  {
    title: "Shared room for students in Sylhet",
    location: "Zindabazar, Sylhet",
    rentAmount: "4000 BDT/month",
    roomType: "Shared",
    contactInfo: {},
    name: "Rahat Miah",
    email: "rahat.sylhet@gmail.com",
  },
  // Add more filtered user-specific listings here
];

const MyListingPage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Simulate fetch + filter by logged-in user
    const userListings = [...mockListings];
    setListings(userListings);
  }, []);

  const handleDelete = (index) => {
    if (confirm("Are you sure you want to delete this listing?")) {
      const updated = [...listings];
      updated.splice(index, 1);
      setListings(updated);
    }
  };

  const handleUpdate = (index) => {
    // TODO: Implement navigation or modal
    alert("Update function triggered for: " + listings[index].title);
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto px-4 py-8 min-h-[calc(100vh-65px)]">
      <h2 className="text-2xl font-bold mb-4 text-center">
        My Roommate Listings
      </h2>
      {listings.length === 0 ? (
        <p className="text-center text-gray-500">No listings found.</p>
      ) : (
        <table className="table table-zebra w-full ">
          <thead>
            <tr className="bg-base-200 text-base font-semibold">
              <th>#</th>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((listing, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{listing.title}</td>
                <td>{listing.location}</td>
                <td>{listing.rentAmount}</td>
                <td>{listing.roomType}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleUpdate(index)}
                    className="btn btn-sm btn-warning">
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="btn btn-sm btn-error">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyListingPage;
