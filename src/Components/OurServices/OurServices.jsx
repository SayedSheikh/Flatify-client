import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FaUsers,
  FaFilter,
  FaPhoneAlt,
  FaShieldAlt,
  FaHome,
  FaRegSmile,
} from "react-icons/fa";

const services = [
  {
    title: "Smart Roommate Matching",
    icon: <FaUsers className="text-primary text-3xl mb-3" />,
    description:
      "Connect with compatible roommates based on lifestyle, rent, and preferences.",
  },
  {
    title: "Advanced Filtering & Sorting",
    icon: <FaFilter className="text-primary text-3xl mb-3" />,
    description:
      "Easily browse listings using dynamic filters like rent, room type, and location.",
  },
  {
    title: "Secure Contact & Messaging",
    icon: <FaPhoneAlt className="text-primary text-3xl mb-3" />,
    description:
      "Connect with listers securely and conveniently within the platform.",
  },
  {
    title: "Verified Listings",
    icon: <FaShieldAlt className="text-primary text-3xl mb-3" />,
    description:
      "We verify all listings to ensure safety, accuracy, and authenticity.",
  },
  {
    title: "Tailored Recommendations",
    icon: <FaHome className="text-primary text-3xl mb-3" />,
    description:
      "Get suggestions based on your lifestyle preferences and rent budget.",
  },
  {
    title: "User-Friendly Experience",
    icon: <FaRegSmile className="text-primary text-3xl mb-3" />,
    description:
      "Enjoy a clean, fast, mobile-friendly UI built for renters like you.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-base-200 py-16 px-4 my-12 max-w-[1300px] mx-auto mt-[80px] rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Our Services
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto mb-10">
            Everything you need to find a roommate or rent a room — smarter and
            safer.
          </p>
        </Fade>

        <Fade delay={300} cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition-all text-left">
                {service.icon}
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default OurServices;
