import React from "react";

const Hero = () => {
  return (
    <div className="container p-5 mb-5 ">
      <div className="row text-center">
        <img src="media/homeHero.png" alt="Hero" srcset="" className="mb-4" />
        <h1 className="">Invest in everything</h1>
        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <button
          style={{ width: "25%", margin: "0 auto" }}
          className="p-3 btn btn-primary text-white fs-5"
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Hero;
