import React from "react";
import logo from '../assets/images/logo.svg'

const Search = () => {
  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width">
            <img src={logo} alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
