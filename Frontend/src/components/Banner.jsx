import React from "react";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Mind Shelf — Where Stories{" "}
              <span className="text-pink-500">Spark Minds</span>
            </h1>
            <p className="text-sm md:text-xl">
              Welcome to Mind Shelf, your digital haven for discovering books
              that ignite curiosity, fuel growth, and feed the soul. Whether
              you're exploring timeless classics or modern marvels, every book
              on our shelf is a step toward learning something new—every single
              day.
            </p>
          </div>
          <a href="/signup">
            <button className="btn mt-6 btn-secondary">Get Started</button>
          </a>
        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src="Banner.png"
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
