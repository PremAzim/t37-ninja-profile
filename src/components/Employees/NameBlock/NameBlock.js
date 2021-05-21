import React from "react";

import classes from "./NameBlock.module.css";

const NameBlock = (props) => {
  return (
    <div className={classes["text-container"]}>
      <p className={classes["name"]}>{props.name}</p>
      <p className={classes["location"]}>📍 {props.office}</p>
    </div>
  );
};

export default NameBlock;
