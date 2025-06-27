import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaEnvelope, FaPhoneAlt, FaQuestionCircle } from "react-icons/fa";

const Support = () => {
  return (
    <section className="bg-base-200 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
            Need Help?
          </h2>
          <p className="text-gray-600 mb-10">
            We're here to assist you with anything related to Flatify — whether
            it's about your listings, finding a roommate, or getting started.
          </p>
        </Fade>

        <Fade delay={200} cascade damping={0.1} triggerOnce>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="bg-base-100 p-6 rounded-lg shadow">
              <FaEnvelope className="text-primary text-2xl mb-2" />
              <h4 className="font-semibold mb-1">Email Support</h4>
              <p className="text-sm text-gray-600 mb-2">support@flatify.com</p>
              <a
                href="mailto:support@flatify.com"
                className="text-sm text-blue-500 underline">
                Send an email
              </a>
            </div>

            <div className="bg-base-100 p-6 rounded-lg shadow">
              <FaPhoneAlt className="text-primary text-2xl mb-2" />
              <h4 className="font-semibold mb-1">Call Us</h4>
              <p className="text-sm text-gray-600">+880 123 456 789</p>
              <p className="text-xs text-gray-400">Mon–Fri, 9am–6pm (BST)</p>
            </div>

            <div className="bg-base-100 p-6 rounded-lg shadow col-span-full">
              <FaQuestionCircle className="text-primary text-2xl mb-2" />
              <h4 className="font-semibold mb-1">Browse Help Topics</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>How to add a listing</li>
                <li>How to find compatible roommates</li>
                <li>Managing your dashboard</li>
                <li>Roommate preference settings</li>
              </ul>
              <a
                href="/"
                className="text-sm text-blue-500 underline mt-2 inline-block">
                View all FAQs at Home →
              </a>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Support;
