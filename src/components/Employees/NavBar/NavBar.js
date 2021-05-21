import React from "react";

import classes from "./NavBar.module.css";
import Sort from "./Sort/Sort";
import Filter from "./Filter/Filter";

const NavBar = (props) => {
  return (
    <div className={classes["navbar"]}>
      <Sort sortHandler={props.sortHandler}></Sort>
      <Filter filterHandler={props.filterHandler}></Filter>
    </div>
  );
};

export default NavBar;
