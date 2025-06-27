import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API call (email service / backend endpoint)
    window.location.href = `mailto:flatify.support@example.com?subject=Message from ${form.name}&body=${form.message}`;
  };

  return (
    <section className="bg-base-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Fade triggerOnce>
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-secondary mb-4">
            Contact Us
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Have a question, feedback, or a suggestion? We’d love to hear from
            you.
          </p>
        </Fade>

        <Fade delay={200} triggerOnce>
          <form
            onSubmit={handleSubmit}
            className="bg-base-200 p-8 rounded-lg shadow space-y-6">
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                required
                className="textarea textarea-bordered w-full"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default ContactUs;
