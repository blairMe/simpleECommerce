import React from "react";

import Head from './Head';
import Search from "./Search";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <Head />
      <Search />
      <NavBar />
    </>
  );
};

export default Header;