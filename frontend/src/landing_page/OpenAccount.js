import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center" style={{ lineHeight: "4" }}>
        <h1>Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
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

export default OpenAccount;
