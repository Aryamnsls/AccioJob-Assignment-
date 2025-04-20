let employees = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" }
  ];
  
  // Task 1 - Using map
  function PrintDeveloperbyMap() {
    employees.map(emp => {
      if (emp.profession === "developer") {
        console.log(emp);
      }
    });
  }
  
  // Task 2 - Using forEach
  function PrintDeveloperbyForEach() {
    employees.forEach(emp => {
      if (emp.profession === "developer") {
        console.log(emp);
      }
    });
  }
  
  // Task 3 - Add data
  function addData() {
    const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
    employees.push(newEmployee);
    console.log(employees);
  }
  
  // Task 4 - Remove Admin
  function removeAdmin() {
    employees = employees.filter(emp => emp.profession !== "admin");
    console.log(employees);
  }
  
  // Task 5 - Concatenate Array
  function ConcatinateArray() {
    const newEmployees = [
      { id: 5, name: "alice", age: "22", profession: "designer" },
      { id: 6, name: "bob", age: "24", profession: "manager" },
      { id: 7, name: "carol", age: "21", profession: "analyst" }
    ];
    const combinedArray = employees.concat(newEmployees);
    console.log(combinedArray);
  }
  