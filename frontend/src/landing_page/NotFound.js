import React from "react";
import Navbar from "./home/Navbar";
import Footer from "./Footer";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-5 p-5">
        <div className="row p-5">
          <div className="col-6">
            <h1>404 Not Found</h1>
            <h4>Sorry, the page you are looking for does not exist.</h4>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
