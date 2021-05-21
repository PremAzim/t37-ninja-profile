import React from "react";

import classes from "./EmployeesList.module.css";
import NavBar from "./NavBar/NavBar";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

const EmployeeList = (props) => {
  return (
    <div className={classes["employees-list"]}>
      <NavBar
        sortHandler={props.sortHandler}
        filterHandler={props.filterHandler}
      ></NavBar>
      {props.employees.map((employee) => (
        <EmployeeCard key={employee.name} employee={employee}></EmployeeCard>
      ))}
    </div>
  );
};

export default EmployeeList;
