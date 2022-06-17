import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashdeals/FlashDeals";

const Pages = ({ productItems }) => {
  return (
    <>
      <Home />
      <FlashDeals />
    </>
  );
};

export default Pages;
