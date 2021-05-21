import React from "react";

import classes from "./Filter.module.css";

const Filter = (props) => {
  return (
    <div className={classes["filter-by"]}>
      <span className={classes["filter-by-text"]}>Filter by</span>
      <form>
        <select
          className={classes["filter-by-options"]}
          defaultValue="None"
          onChange={props.filterHandler}
        >
          <option disabled value="None">
            None
          </option>
          <option value="name">Name</option>
          <option value="office">Office</option>
        </select>
        <input
          className={classes["filter-by-search"]}
          placeholder="Filter for..."
          onChange={props.filterHandler}
        />
      </form>
    </div>
  );
};

export default Filter;
