import { Employee } from "./components/employeeDiv.js";
import { data } from "./data.js";

const rootDiv = document.getElementById("root");
data.then((employees) => {
  employees.forEach((employee) => {
    let emp = new Employee(
      employee.id,
      employee.imageUrl,
      employee.firstName,
      employee.lastName,
      employee.company,
      employee.hobbies
    );
    rootDiv.appendChild(emp.render());
  });
});
