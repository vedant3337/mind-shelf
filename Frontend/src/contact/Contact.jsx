import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="px-4 py-12 text-gray-800 mt-10 dark:bg-slate-800 dark:text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-lg mb-10">
            We'd love to hear from you! Reach out with your questions,
            suggestions, or feedback.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 py-5">
            <div className="space-y-4">
              <p>
                <strong>Email:</strong> contact@mindshelf.com
              </p>
              <p>
                <strong>Phone:</strong> +91 9988776655
              </p>
              <p>
                <strong>Address:</strong> 123 Knowledge Lane, Book City, India
              </p>
            </div>
            <div className="space-y-4">
              <p>
                <strong>Working Hours:</strong>
              </p>
              <p>Mon – Fri: 9 AM – 6 PM</p>
              <p>Sat: Closed</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
