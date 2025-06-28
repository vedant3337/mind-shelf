import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
function Courses() {
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-white">
        <Navbar />
        <div className="h-20"></div>
        <div className="">
          <Course />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
