import React, { useMemo, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router";

const BrowseListing = () => {
  const data = useLoaderData();

  const navigate = useNavigate();

  const location = useLocation();
  const layout = location.pathname.split("/")[1];

  console.log(location.pathname.split("/")[1]);

  const [sortOrder, setSortOrder] = useState("default");
  const [filterType, setFilterType] = useState("all");

  // Derived listings based on filter/sort
  const listings = useMemo(() => {
    let filtered = [...data];

    // Filtering
    if (filterType !== "all") {
      filtered = filtered.filter(
        (item) => item.roomType.toLowerCase() === filterType.toLowerCase()
      );
    }

    // Sorting
    if (sortOrder === "asc") {
      filtered.sort((a, b) => Number(a.rentAmount) - Number(b.rentAmount));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => Number(b.rentAmount) - Number(a.rentAmount));
    }

    return filtered;
  }, [data, sortOrder, filterType]);

  const handleMore = (id) => {
    // TODO: Implement navigation or modal

    const to = location.pathname.split("/")[1] || "";

    // navigate(`${to?`/${to}`:""}/details/${id}`);
    if (to === "BrowseListing") navigate(`/details/${id}`);
    else navigate(`/${to}/details/${id}`);
  };

  const renderLifestyleBadges = (prefs) => {
    return Object.entries(prefs).map(([key, value], index) => {
      const isPositive =
        value === true || value === "Yes" || value === "Occasionally";
      return (
        <span
          key={index}
          className={`badge text-xs text-base-400 px-3 py-1 mr-2 mb-2 ${
            isPositive
              ? "bg-[#b2dcb14c] border-1 border-[#b2dcb1]"
              : "bg-[#f3cece65] border-1 border-[#f3cece]"
          }`}>
          {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
          {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
        </span>
      );
    });
  };

  const tableView = (
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
                  listing.availability ? "text-green-400" : "text-red-400"
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
  );

  const cardView = (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((post) => (
        <div
          key={post?._id}
          className="card bg-base-100 shadow-xl border border-gray-200">
          <div className="card-body space-y-2">
            <h3 className="card-title text-lg font-semibold">{post.title}</h3>
            <p className="flex items-center gap-2 text-sm">
              <FaLocationDot size={20} className="text-blue-500" />{" "}
              {post.location}
            </p>
            <p className="flex items-center gap-1 text-sm">
              <MdOutlineAttachMoney size={25} className="text-blue-500" />{" "}
              {post.rentAmount}
            </p>
            <p className="text-sm ">Room Type: {post.roomType}</p>
            <div className="text-sm mt-2">
              <p className="font-medium mb-1">Lifestyle Preferences:</p>
              <div className="flex flex-wrap">
                {renderLifestyleBadges(post.lifestylePreferences)}
              </div>
            </div>
            <div className="card-actions mt-4">
              <Link
                state={{ from: location.pathname }}
                to={`/details/${post._id}`}
                className="btn btn-primary w-full">
                See More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="overflow-x-auto max-w-6xl mx-auto px-4 py-8 min-h-[calc(100vh-65px)]">
      <title>FlaTify | Browse Listing</title>

      {/* Sort & Filter Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <div className="flex flex-col items-center gap-2">
          <label className="font-medium w-max">Sort by Rent:</label>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="select select-bordered select-sm">
            <option value="default">Default</option>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        </div>
        <div className="flex flex-col items-center gap-2">
          <label className="font-medium">Filter by Room Type:</label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="select select-bordered select-sm">
            <option value="all">All</option>
            <option value="Single">Single</option>
            <option value="Shared">Shared</option>
          </select>
        </div>
      </div>
      <Fade duration={1500} triggerOnce>
        <h2 className="text-2xl font-bold mb-4 text-center text-secondary">
          Roommate Listings
        </h2>
        <Fade delay={500} cascade damping={0.3} triggerOnce>
          {listings.length === 0 ? (
            <p className="text-center text-gray-500">No listings found.</p>
          ) : layout === "dashboard" ? (
            tableView
          ) : (
            cardView
          )}
        </Fade>
      </Fade>
    </div>
  );
};

export default BrowseListing;
