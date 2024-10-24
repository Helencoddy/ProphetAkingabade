import Header from "./Components/Header";
import HomePage from "./Components/Home/HomePage";
import Carousel from "./Components/Home/Carousel";
import Button from "./Components/Home/Button";
import Footer from "./Components/Footer";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Carousel />
      <HomePage />
      <Button />
      <Footer />
    </div>
  );
}
