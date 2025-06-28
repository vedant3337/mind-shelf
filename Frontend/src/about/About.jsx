import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mt-5 px-6 py-12 bg-white text-gray-800 dark:bg-slate-800 dark:text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl font-bold mb-4">About Mind Shelf</h1>
            <p className="text-lg mb-4">
              Welcome to <strong>Mind Shelf</strong> — your one-stop destination
              for meaningful reading, free resources, and intellectual
              exploration. We believe in the power of books to transform minds
              and spark ideas.
            </p>
            <p className="text-lg mb-4">
              Whether you're seeking timeless classics, modern knowledge, or
              curated free courses, our platform is designed to support your
              growth, learning, and creativity. Join our journey to build a
              mindful community of readers and thinkers.
            </p>
            <p className="text-lg">
              Our mission is simple: <em>Learn something new, every day.</em>
            </p>
          </div>

          {/* Image Section */}
          <div>
            <img
              src="https://img.freepik.com/free-vector/library-concept-illustration_114360-28841.jpg?ga=GA1.1.343453320.1750773220&semt=ais_items_boosted&w=740"
              alt="About Mind Shelf"
              className="w-full h-auto rounded-xl shadow-md"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
