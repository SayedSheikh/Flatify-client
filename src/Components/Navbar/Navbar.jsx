import React from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import lightLogo from "/logoBGWhite.png";
import nightLogo from "/nightLogo.png";
import { MdLightMode, MdModeNight } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const themeChange = (
    <>
      {theme === "light" ? (
        <FaMoon
          className="cursor-pointer mr-[5px]"
          size={25}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      ) : (
        <MdLightMode
          className="cursor-pointer mr-[5px]"
          size={25}
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        />
      )}
    </>
  );
  const logo = (
    <>
      {theme === "light" ? (
        <img className="w-[150px]" src={lightLogo} alt="" />
      ) : (
        <img className="w-[150px]" src={nightLogo} alt="" />
      )}
    </>
  );
  const link = (
    <>
      <li className="w-fit">
        <NavLink to="/" className=" rounded-none">
          Home
        </NavLink>
      </li>
      <li className="w-fit">
        <NavLink to="/AddListing" className=" rounded-none">
          Add Listing
        </NavLink>
      </li>
      <li className="w-fit">
        <NavLink to="/BrowseListing" className=" rounded-none">
          Browse Listing
        </NavLink>
      </li>
      <li className="w-fit">
        <NavLink to="/MyListings" className=" rounded-none">
          My Listings
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm ">
      <div className="navbar  max-w-[1300px] mx-auto w-11/12 p-0">
        <div className="navbar-start">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className="px-0 btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow relative border border-gray-400">
              {" "}
              {link}
              <div className="absolute right-[10px] top-[10px] sm:hidden">
                {themeChange}
              </div>
            </ul>
          </div>
          <Link className="w-[150px]" to="/">
            {logo}
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end gap-[4px]">
          <div className="hidden sm:block">{themeChange}</div>

          <a className="btn btn-primary btn-outline">Login</a>
          <a className="btn btn-primary">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
