const inquirer = require("inquirer");
const db = require("./db/dbQueries")

//inquirer

viewEmployees = () => {
db.findAllEmployees().then((rows) => {
    console.table(rows);
})

}

viewEmployees();