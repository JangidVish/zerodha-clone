import React from "react";
import Navbar from "../home/Navbar";

import Brookerage from "./Brookerage";
import Footer from "../Footer";
import Hero from "./Hero";
import OpenAccount from "../OpenAccount";

const PricingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <OpenAccount />
      <Brookerage />
      <Footer />
    </>
  );
};

export default PricingPage;
