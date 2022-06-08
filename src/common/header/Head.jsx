import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label>+254 710000000</label>
            <i className="fa fa-envelope"></i>
            <label>example@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>Theme FAQ's</label>
            <label>Needs Help</label>
            <span></span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
