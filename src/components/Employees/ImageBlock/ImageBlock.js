import React from "react";

import classes from "./ImageBlock.module.css";

const ImageBlock = (props) => {
  let imageUrl = props.imageUrl;

  return (
    <div className={classes["image-block"]}>
      <img src={imageUrl} alt="profile" />
    </div>
  );
};

export default ImageBlock;
