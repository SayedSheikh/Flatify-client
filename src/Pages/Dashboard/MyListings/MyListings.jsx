import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { Fade } from "react-awesome-reveal";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    isPending,
    isError,
    data: listings = [],
    error,
    refetch,
  } = useQuery({
    queryKey: ["myListings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://flatify-server.vercel.app/flatify/mylisting/${user?.email}`
      );
      const data = await res.json();
      return data;
    },
    enabled: !!user?.email, // ensures user email exists before fetching
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://flatify-server.vercel.app/flatify/${id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              refetch(); // refresh the listings
            }
          })
          .catch(() => toast.error("Error occurred"));
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/mylistingUpdate/${id}`);
  };

  if (!user || isPending)
    return (
      <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
        <title>FlaTify | My Listing</title>
        <span className="loading loading-bars w-[50px] text-primary"></span>
      </div>
    );

  return (
    <div className="min-h-[calc(100vh-65px)] max-w-6xl mx-auto px-4 py-8">
      <title>FlaTify | My Listing</title>
      <Fade duration={1500} triggerOnce>
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
          My Roommate Listings
        </h2>
        <Fade delay={500} cascade damping={0.3} triggerOnce>
          {listings.length === 0 ? (
            <p className="text-center text-gray-500">No listings found.</p>
          ) : (
            <div className="overflow-x-auto w-full rounded-[8px] shadow">
              <table className="table-auto table table-zebra w-full min-w-[700px] bg-base-200">
                <thead>
                  <tr className="bg-base-300 text-base font-semibold">
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
                      <td>{listing.rentAmount} BDT/month</td>
                      <td>{listing.roomType}</td>
                      <td className="flex gap-2">
                        <button
                          onClick={() => handleUpdate(listing._id)}
                          className="btn btn-sm btn-warning">
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(listing._id)}
                          className="btn btn-sm btn-error">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Fade>
      </Fade>
    </div>
  );
};

export default MyListings;
