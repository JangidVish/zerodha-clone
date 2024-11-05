import React from "react";

const Hero = () => {
  return (
    <div className="container mt-4 p-5 text-center mb-5 ">
      <div
        className="row mb-5"
        style={{
          position: "relative",
          marginTop: "3rem",
          paddingBottom: "2rem",
        }}
      >
        <h1 style={{ fontSize: "44px" }}>Zerodha Products</h1>
        <p className="fs-4 text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="fs-5 mt-3">
          Check out our{" "}
          <span className="text-primary">investment offerings →</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
