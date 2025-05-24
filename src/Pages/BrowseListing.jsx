import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useLoaderData, useNavigate } from "react-router";

const BrowseListing = () => {
  const data = useLoaderData();

  const navigate = useNavigate();

  const [listings] = useState(data);

  const handleMore = (id) => {
    // TODO: Implement navigation or modal
    navigate(`/details/${id}`);
  };

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto px-4 py-8 min-h-[calc(100vh-65px)]">
      <title>FlaTify | Browse Listing</title>
      <Fade duration={1500} triggerOnce>
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
          My Roommate Listings
        </h2>
        <Fade delay={500} cascade damping={0.3} triggerOnce>
          {listings.length === 0 ? (
            <p className="text-center text-gray-500">No listings found.</p>
          ) : (
            <div className="rounded-[8px] overflow-x-auto shadow">
              <table className="table table-zebra w-full bg-base-200 ">
                <thead className="rounded-2xl">
                  <tr className="bg-base-300 text-base font-semibold ">
                    <th>#</th>
                    <th>Location</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Room Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {listings.map((listing, index) => (
                    <tr key={listing._id}>
                      <td>{index + 1}</td>
                      <td>{listing.location}</td>
                      <td>{listing.rentAmount} BDT/month</td>
                      <td
                        className={`${
                          listing.availability
                            ? "text-green-400"
                            : "text-red-400"
                        }`}>{`${
                        listing.availability ? "Available" : "Unavailable"
                      }`}</td>
                      <td>{listing.roomType}</td>
                      <td className="flex gap-2">
                        <button
                          onClick={() => handleMore(listing._id)}
                          className="btn btn-sm btn-primary">
                          See More
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

export default BrowseListing;
