import React from "react";

const Hero = () => {
  return (
    <div className="bg-primary  p-4 w-100">
      <div className="row w-100 text-white p-4">
        <div className="col-6 ">
          <h4>Support Portal</h4>
        </div>
        <div
          className="col-6"
          style={{ textAlign: "right", textDecorationLine: "underline" }}
        >
          <h4 className="">Track Tickets</h4>
        </div>
      </div>
      <div className="row mt-4 text-white p-5">
        <div className="col-6">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <div className="inputBox w-100 bg-white text-black mt-4">
            <input
              type="text"
              name=""
              placeholder=""
              id=""
              className=" border-0 p-3"
              style={{ width: "90%" }}
            />
            <i
              class="fa-solid fa-magnifying-glass"
              style={{ marginLeft: "2rem" }}
            ></i>
          </div>

          <div className="row  mt-4 text-decoration-underline ">
            <div className="col-4">Track account opening</div>
            <div className="col-4">Track segment activation</div>
            <div className="col-4">Intraday margins</div>
            <div className="col-4">Kite user manual</div>
          </div>
        </div>
        <div className="col-6 mt-3">
          <h4>Featured</h4>
          <ol style={{ textDecoration: "underline" }} className="fs-6">
            <li>Current Buybacks - October 2024</li>
            <br />
            <li>Rights Entitlements listing in October 2024</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Hero;
