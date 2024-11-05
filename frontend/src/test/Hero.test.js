import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Hero from "../landing_page/home/Hero";

//Test Suite
describe("Hero Component", () => {
  test("render hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Image");
    expect(heroImage).toBeInTheDocument();
  });
});