import React from "react";
import Home from "../components/mainpage/Home";
import FlashDeals from "../components/flashdeals/FlashDeals";

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      
      <FlashDeals productItems={productItems} />
    </>
  );
};

export default Pages;
