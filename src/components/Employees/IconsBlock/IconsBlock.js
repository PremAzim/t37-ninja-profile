import React from "react";

import classes from "./IconsBlock.module.css";
import Icon from "./Icon/Icon";

const IconsBlock = (props) => {
  return (
    <div className={classes["icon-container"]}>
      {props.linkedIn != null && (
        <Icon name="linkedin" linkedIn={props.linkedIn}></Icon>
      )}
      {props.gitHub != null && (
        <Icon name="github" gitHub={props.gitHub}></Icon>
      )}
      {props.twitter != null && (
        <Icon name="twitter" twitter={props.twitter}></Icon>
      )}
    </div>
  );
};

export default IconsBlock;
