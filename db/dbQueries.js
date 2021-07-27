const connection = require("./connection");

class DB {
    constructor(connection){
        this.connection = connection;
    }

    findAllDepartments () {
        return this.connection.query(
           "SELECT * FROM department;"
        )
    }

    findAllRoles () {
        return this.connection.query(
           "SELECT role.id, role.title, role.salary, department.department_name FROM role LEFT JOIN department on role.department_id=department.id;"
        )
    }

    findAllEmployees () {
        return this.connection.query(
           "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role_id LEFT JOIN department on role.department_id  = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        )
    }

    addNewDepartment (newDepartment) {
        return this.connection.query(
           "INSERT INTO department (department_name) VALUES (?)",
        
           }
        )
    }

    addNewEmployee () {
        return this.connection.query(
           "INSERT ;"
        )
    }

    addNewRole () {
        return this.connection.query(
           "INSERT ;"
        )
    }

    updateRole () {
        return this.connection.query(
           "SELECT * FROM role;"
        )
    }
}

module.exports = new DB(connection);