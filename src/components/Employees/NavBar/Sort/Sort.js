import React from "react";

import classes from "./Sort.module.css";

const Sort = (props) => {
  return (
    <div className={classes["sort-by"]}>
      <span className={classes["sort-by-text"]}>Sort by</span>
      <select
        className={classes["sort-by-options"]}
        onChange={props.sortHandler}
        defaultValue="None"
      >
        <option disabled value="None">
          None
        </option>
        <option value="NameAscending">Name A-Z</option>
        <option value="NameDescending">Name Z-A</option>
        <option value="OfficeAscending">Office A-Z</option>
        <option value="OfficeDescending">Office Z-A</option>
      </select>
    </div>
  );
};

export default Sort;
