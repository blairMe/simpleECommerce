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
              const prodcutQty = item.price * item.qty
              return(
                <div className="cartlist product d_flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>{item.price} * {item.qty}
                    <span>${prodcutQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart"></div>
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
