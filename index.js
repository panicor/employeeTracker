const inquirer = require("inquirer");
const db = require("./db/dbQueries")

//inquirer
init = () => {

inquirer
    .prompt([
      {
        type: "list",
        name: "mainMenu",
        message: "What would you like to do?",
        choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update employee role", "None"]
      }
    ])
    .then((answer) => {
        switch (answer.mainMenu) {
          case "View all departments":
            viewDepartments();
            break;

          case "View all roles":
            viewRoles();
            break;
  
          case "View all employees":
            viewEmployees();
            break;

        case "Add a department":
            addDepartment();
            break;

        case "Add a role":
            addRole();
            break;

        case "Add an employee":
            addEmployee();
            break;

        case "Update employee role":
            updateRole();
            break;

        case "None":
                break;
        }
      });
}

viewEmployees = () => {

db.findAllEmployees().then((rows) => {
    console.table(rows);
    init()
})

}

viewDepartments = () => {
db.findAllDepartments().then((rows) => {
    console.table(rows);
    init()
})
}

viewRoles = () => {
db.findAllRoles().then((rows) => {
  console.table(rows);
  init()
}
)
}


addDepartment = () => {

}

addRole = () => {

}

addEmployee = () => {

}

updateRole = () => {

}

init();