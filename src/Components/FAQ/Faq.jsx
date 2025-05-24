import React from "react";

const Faq = () => {
  return (
    <div className="my-[100px] space-y-[10px]">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary">
        Frequently Asked Questions
      </h2>
      <div className="collapse collapse-arrow bg-base-100 border border-primary">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-primary">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Are the listings verified?
        </div>
        <div className="collapse-content text-sm">
          Yes! Every room and roommate profile is manually screened to ensure
          authenticity and safety for our users.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-primary">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Is it free to post a room or search for roommates?
        </div>
        <div className="collapse-content text-sm">
          Yes, creating a profile and browsing listings is completely free.
          Premium features are available for users who want faster matches and
          more visibility.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-primary">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          Can I update or delete my listing later?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. You can edit or remove your room listing or profile at any
          time from your dashboard.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-primary">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold">
          What if I don’t find a match right away?
        </div>
        <div className="collapse-content text-sm">
          New listings are added daily! Keep your profile updated and use
          filters to improve your chances of finding the perfect match.
        </div>
      </div>
    </div>
  );
};

export default Faq;
