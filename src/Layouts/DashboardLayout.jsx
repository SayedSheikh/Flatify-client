import React, { use, useEffect } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import nightLogo from "/nightLogo.png";
import toast from "react-hot-toast";
import { AuthContext } from "../Contexts/AuthContext";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.split("/")[1] === "dashboard") {
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", "dark");
      // document.get
    }
  }, [location]);

  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out !!!");
      })
      .catch(() => {
        toast.error("error occured !!!");
      });
  };
  return (
    <div className="max-w-[1500px] mx-auto">
      <title>Faltify | Dashboard</title>
      <ScrollToTop></ScrollToTop>

      {/* <main className="min-h-[calc(100vh-65px)]">
        {navigation.state === "loading" ? (
          <Loading></Loading>
        ) : (
          <Outlet></Outlet>
        )}
      </main> */}

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="navbar bg-base-300 w-full lg:hidden">
            <div className="flex-none ">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2">Navbar Title</div>
          </div>
          {/* Page content here */}
          <div className="overflow-hidden">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-70 p-4">
            <img
              onClick={() => navigate("/")}
              className="w-[150px] cursor-pointer"
              src={nightLogo}
              alt=""
            />
            <hr />
            {/* Sidebar content here */}
            <li className="mt-5">
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary/10 text-white px-4 py-2 rounded block"
                    : "hover:bg-base-300 px-4 py-2 rounded block"
                }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mylisting"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary/10 text-white px-4 py-2 rounded block"
                    : "hover:bg-base-300 px-4 py-2 rounded block"
                }>
                My Listings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/mylistingUpdate"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary/10 text-white px-4 py-2 rounded block"
                    : "hover:bg-base-300 px-4 py-2 rounded block"
                }>
                Add Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/BrowseListing"
                className={({ isActive }) =>
                  isActive
                    ? "bg-primary/10 text-white px-4 py-2 rounded block"
                    : "hover:bg-base-300 px-4 py-2 rounded block"
                }>
                View All
              </NavLink>
            </li>
            <button
              onClick={handleSignOut}
              className="btn bg-secondary/80 mt-20">
              Logout
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
