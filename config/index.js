const connection = require('./connections')
// const startQuestions  = require('../server')

class DB {
    //view all departments
    constructor(connection) {
        this.connection = connection
    }

    viewAllDepartments() {
        return this.connection.query('SELECT * FROM department')
    };

    //view all roles
    viewAllRoles() {
        return this.connection.query('SELECT role.id, role.title, role.salary, department.department_name AS department FROM role LEFT JOIN department ON role.department_id = department.id;')
    };

    //view all employees
    viewAllEmployees() {
        return this.connection.query('SELECT * FROM employee ')
        // console.log data for this in server.js and then parse data post
    };

    //add department
    addDepartment(newDepartment) {
        return this.connection.query(`INSERT INTO department(department_name) VALUES ('${newDepartment}')`)
    };

    // Add a Role
    addARole(roleName, roleSalary, roleDepartment) {
        return this.connection.query(`INSERT INTO role(title, salary, department_id) VALUES ('${roleName}', ${roleSalary}, ${roleDepartment} )`)
    };

    // Add an Employee
    addAnEmployee(firstName, lastName, role_id, manager_id) {
        return this.connection.query(`INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES ('${firstName}', '${lastName}', ${role_id}, ${manager_id} )`)
    };

    //Update an Employee
    updateAnEmployee( role_id, employeeId) {
        return this.connection.query(`UPDATE employee SET role_id = ${role_id} WHERE last_name = '${employeeId}' `  ) 
    }

    //Delete an Employee
    deleteAnEmployee(employee) {
        return this.connection.query(`DELETE FROM employee WHERE last_name = '${employee}' ;`)
    }
}

module.exports = new DB(connection);