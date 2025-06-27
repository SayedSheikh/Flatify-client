import React, { useContext, PureComponent } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Contexts/AuthContext";
import CountUp from "react-countup";
import { FaHome, FaHeart, FaListUl, FaUser } from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Chart from "./Chart";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const { data: listings = [], isLoading } = useQuery({
    queryKey: ["listings", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:3000/flatify/mylisting/${user?.email}`
      );
      return res.json();
    },
  });

  // Stats
  const totalListings = listings.length;
  const totalLikes = listings.reduce(
    (sum, item) => sum + Number(item.liked || 0),
    0
  );
  const sharedRooms = listings.filter(
    (item) => item.roomType === "Shared"
  ).length;
  const singleRooms = listings.filter(
    (item) => item.roomType === "Single"
  ).length;

  const chartData = [
    { name: "Total", count: totalListings },
    { name: "Single", count: singleRooms },
    { name: "Shared", count: sharedRooms },
    { name: "Likes", count: totalLikes },
  ];

  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[calc(100vh-65px)]">
        <span className="loading loading-bars text-primary w-10"></span>
      </div>
    );
  }

  return (
    <div className="px-6 py-8 max-w-6xl mx-auto">
      {/* <title>FlaTify | Dashboard</title> */}
      <h2 className="text-3xl font-bold mb-6 text-secondary text-center">
        Dashboard Overview
      </h2>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <FaListUl className="text-3xl text-primary mx-auto mb-2" />
          <h4 className="text-lg font-semibold">Total Listings</h4>
          <p className="text-3xl font-bold text-secondary">
            <CountUp end={totalListings} duration={1.2} />
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <FaHeart className="text-3xl text-pink-500 mx-auto mb-2" />
          <h4 className="text-lg font-semibold">Total Likes</h4>
          <p className="text-3xl font-bold text-secondary">
            <CountUp end={totalLikes} duration={1.2} />
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <FaHome className="text-3xl text-success mx-auto mb-2" />
          <h4 className="text-lg font-semibold">Single Rooms</h4>
          <p className="text-3xl font-bold text-secondary">
            <CountUp end={singleRooms} duration={1.2} />
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow text-center">
          <FaHome className="text-3xl text-warning mx-auto mb-2" />
          <h4 className="text-lg font-semibold">Shared Rooms</h4>
          <p className="text-3xl font-bold text-secondary">
            <CountUp end={sharedRooms} duration={1.2} />
          </p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-base-200 p-6 rounded-lg shadow mb-10">
        <h3 className="text-xl font-semibold mb-4 text-center text-secondary">
          Listings Breakdown
        </h3>
        <Chart chartData={chartData}></Chart>
      </div>

      {/* User Info */}
      <div className="bg-base-200 rounded-lg p-6 shadow flex items-center gap-6">
        <FaUser className="text-4xl text-primary" />
        <div>
          <h4 className="text-xl font-semibold">
            {user?.displayName || "Logged-in User"}
          </h4>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
