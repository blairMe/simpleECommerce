import React from "react";

const FlashCard = ({ productItems }) => {
  return (
    <>
      { productItems.map((productItems) => {
        return(
        <div className="box">
          <div className="product mtop">
            <div className="img">
              <span className="discount">{productItems.discount}% Off</span>
              <img src={productItems.cover} alt="" />
              <div className="product-like">
                <label>0</label> <br />
                <i className="fa-regular fa-heart"></i>
              </div>
            </div>
            <div className="product-details">
              <h3>{product}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4></h4>
                <button>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>)
      })}
    </>
  );
};

export default FlashCard;
