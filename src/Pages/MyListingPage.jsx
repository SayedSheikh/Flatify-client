import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { Fade } from "react-awesome-reveal";
import toast from "react-hot-toast";

const MyListingPage = () => {
  const { user } = use(AuthContext);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetch + filter by logged-in user
    if (!user?.email) {
      return;
    }
    // setLoading(true);
    fetch(`https://flatify-server.vercel.app/flatify/mylisting/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setListings(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        toast.error("Error occured");
      });
  }, [user?.email]);

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
              setListings(listings.filter((item) => item._id !== id));
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch(() => toast.error("Error occured"));
      }
    });
  };

  const handleUpdate = (id) => {
    // TODO: Implement navigation or modal
    navigate(`/MyListings/update/${id}`);
  };

  if (!user || loading)
    return (
      <div className="min-h-[calc(100vh-65px)] flex items-center justify-center">
        <title>FlaTify | My Listing</title>
        <span className="loading loading-bars w-[50px] text-primary"></span>
      </div>
    );
  return (
    <div className="overflow-x-auto max-w-6xl mx-auto px-4 py-8 min-h-[calc(100vh-65px)]">
      <title>FlaTify | My Listing</title>
      <Fade duration={1500} triggerOnce>
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
          My Roommate Listings
        </h2>
        <Fade delay={500} cascade damping={0.3} triggerOnce>
          {listings.length === 0 ? (
            <p className="text-center text-gray-500">No listings found.</p>
          ) : (
            <div className="overflow-x-auto rounded-[8px] shadow">
              <table className="table table-zebra w-full  bg-base-200">
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

export default MyListingPage;
