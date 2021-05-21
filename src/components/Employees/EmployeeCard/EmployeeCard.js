import React from "react";

import classes from "./EmployeeCard.module.css";
import ImageBlock from "../ImageBlock/ImageBlock";
import NameBlock from "../NameBlock/NameBlock";
import IconsBlock from "../IconsBlock/IconsBlock";

const EmployeeCard = (props) => {
  if (props.employee.imagePortraitUrl !== null) {
    return (
      <div className={classes["employee-card"]}>
        <ImageBlock imageUrl={props.employee.imagePortraitUrl}></ImageBlock>
        <NameBlock
          name={props.employee.name}
          office={props.employee.office}
        ></NameBlock>
        <IconsBlock
          linkedIn={props.employee.linkedIn}
          gitHub={props.employee.gitHub}
          twitter={props.employee.twitter}
        ></IconsBlock>
      </div>
    );
  }
  return <div className={classes["employee-card-null"]}></div>;
};

export default EmployeeCard;
