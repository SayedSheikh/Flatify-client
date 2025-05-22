import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <div className="w-full h-screen bg-[#fff]">
      <title>AppOcean | 404 Not Found</title>

      <div className="flex flex-col items-center justify-center min-h-[calc(100vh - 95px)] bg-white px-4 text-center">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Not Found"
          className="size-[400px]"
        />
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Sorry, we can’t find that page
        </h1>
        <p className="text-gray-600 mt-2">
          Oops! The page you are looking for does not exist. It might have been
          moved or deleted.
        </p>
        <Link
          to="/"
          className="mt-6 text-blue-600 hover:underline inline-flex items-center">
          Go Back to Home →
        </Link>
      </div>
    </div>
  );
};

export default Error;
