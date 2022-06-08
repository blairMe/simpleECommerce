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
            {/* {Start with a : when starting to write the comment} */}
            <span>🇰🇪</span>
            <label>SWA</label>
            <span>🇺🇸</span>
            <label>EN</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
