import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutUs = () => {
  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Content */}
        <Fade direction="left" triggerOnce>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              About Flatify
            </h2>
            <p className="text-gray-600 text-md mb-4 leading-relaxed">
              Flatify is a modern roommate and rental listing platform designed
              to make finding the right place — or the right person — easier
              than ever. Our mission is to provide a safe, smart, and
              user-friendly experience for students, professionals, and anyone
              looking to share space.
            </p>
            <p className="text-gray-600 text-md leading-relaxed">
              Whether you’re searching for a shared apartment or listing your
              own, Flatify simplifies the process with smart filters, verified
              profiles, and tools that help people connect with confidence.
            </p>
          </div>
        </Fade>

        {/* Image / Illustration */}
        <Fade direction="right" triggerOnce>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="People in apartment - Flatify concept"
              className="max-w-md w-full rounded-lg shadow-lg"
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUs;
