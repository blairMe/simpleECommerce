import React from "react";

const Cart = ({ cartItem, addToCart }) => {
  return (
    <>
      <section className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">
                No items are added in the Cart
              </h1>
            )}
          </div>
          {
            cartItem.map((item) => {
              const prodcutQty = item.price * item.prodcutQty
              return(
                <div className="cartlist product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default Cart;
