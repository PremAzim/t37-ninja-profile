import React from "react";

import linkedinIcon from "../../../assets/linkedin-icon.svg";
import githubIcon from "../../../assets/github-icon.svg";
import twitterIcon from "../../../assets/twitter-icon.svg";

const Icon = (props) => {
  const clickHandler = () => {
    window.open(url, "_blank");
  };

  let url;
  let icon;
  if (props.linkedIn) {
    icon = linkedinIcon;
    url = "https://www.linkedin.com" + props.linkedIn;
  } else if (props.gitHub) {
    icon = githubIcon;
    url = "https://github.com/" + props.gitHub;
  } else if (props.twitter) {
    icon = twitterIcon;
    url = "https://twitter.com/" + props.twitter;
  }
  return (
    <div onClick={clickHandler}>
      <img src={icon} alt={props.name} />
    </div>
  );
};

export default Icon;
