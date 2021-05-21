import React, { useState, useEffect, useCallback } from "react";

import EmployeesList from "./components/Employees/EmployeesList";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const fetchEmployees = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://api.1337co.de/v3/employees", {
        headers: {
          Authorization:
            "api-key 14:2021-05-18:sandra.aberg@tretton37.com 8e81f6b103dd97d5d8bbac8708a76f3d431e76db3f9b2a17abfcdbf4a460431c",
        },
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const sortHandler = (e) => {
    let tmpEmployees,
      sorted = [];

    if (filteredEmployees.length > 0) {
      tmpEmployees = filteredEmployees;
    } else {
      tmpEmployees = employees;
    }

    if (e.target.value === "NameAscending") {
      sorted = tmpEmployees.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (e.target.value === "NameDescending") {
      sorted = tmpEmployees.sort((a, b) => (b.name > a.name ? 1 : -1));
    } else if (e.target.value === "OfficeAscending") {
      sorted = tmpEmployees.sort((a, b) => (a.office > b.office ? 1 : -1));
    } else if (e.target.value === "OfficeDescending") {
      sorted = tmpEmployees.sort((a, b) => (b.office > a.office ? 1 : -1));
    }

    if (filteredEmployees.length > 0) {
      setFilteredEmployees([...sorted]);
    } else {
      setEmployees([...sorted]);
    }
    //setEmployees([...sorted]);
  };

  const filterHandler = (e) => {
    let filter, str;
    let tmpEmployees = [];

    if (e.currentTarget.tagName === "SELECT") {
      filter = e.currentTarget.value;
      str = e.currentTarget.nextSibling.value.toLowerCase();
    } else if (e.currentTarget.tagName === "INPUT") {
      filter = e.currentTarget.previousSibling.value;
      str = e.currentTarget.value.toLowerCase();
    }

    if (str.length > 0) {
      employees.forEach((employee) => {
        if (filter === "name" && employee.name !== null) {
          if (employee.name.toLowerCase().startsWith(str)) {
            tmpEmployees.push(employee);
          }
        } else if (filter === "office" && employee.office !== null) {
          if (employee.office.toLowerCase().startsWith(str)) {
            tmpEmployees.push(employee);
          }
        }
      });
    }

    setFilteredEmployees([...tmpEmployees]);
  };

  let content = <p>Found no employees.</p>;

  if (employees.length > 0) {
    content = (
      <EmployeesList
        sortHandler={sortHandler}
        filterHandler={filterHandler}
        employees={employees}
      />
    );
  }

  if (filteredEmployees.length > 0) {
    content = (
      <EmployeesList
        sortHandler={sortHandler}
        filterHandler={filterHandler}
        employees={filteredEmployees}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <>
      <section>{content}</section>
    </>
  );
};

export default App;
