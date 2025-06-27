import React, { use } from "react";
import { FaGithub } from "react-icons/fa6";
import { Link, NavLink } from "react-router"; // fixed import
import lightLogo from "/nightLogo.png";
import { AuthContext } from "../../Contexts/AuthContext";

const Footer = () => {
  const { user } = use(AuthContext);
  const link = (
    <>
      <NavLink to="/" className="  text-md">
        Home
      </NavLink>
      {user && (
        <>
          <NavLink to="/AddListing" className="  text-md">
            Add Listing
          </NavLink>
          <NavLink to="/BrowseListing" className="  text-md">
            Browse Listing
          </NavLink>
          <NavLink to="/MyListings" className="  text-md">
            My Listings
          </NavLink>
        </>
      )}

      <NavLink to="/aboutus" className=" rounded-none">
        AboutUs
      </NavLink>

      <NavLink to="/contact" className=" rounded-none">
        Contatct
      </NavLink>

      <NavLink to="/support" className=" rounded-none">
        Support
      </NavLink>
    </>
  );

  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        {/* Logo */}
        <div className="flex items-center justify-center sm:justify-start">
          <Link to={"/"}>
            <img
              src={lightLogo}
              alt="Flatify Logo"
              className="h-20 mr-2 cursor-pointer"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center gap-6 flex-wrap">{link}</nav>

        {/* Social Icons */}
        <div className="flex justify-center sm:justify-end gap-4">
          <a
            href="https://github.com/SayedSheikh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition">
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.youtube.com/c/ProgrammingHero"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>

          <a
            href="https://www.facebook.com/sayed.sheikh.413765"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Flatify Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
