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
       return this.connection.query('SELECT roles.id, roles.title, roles.salary, department.department_name AS department FROM roles LEFT JOIN department ON roles.department = department.id;')
    };

    //view all employees
    viewAllEmployees() {
        return this.connection.query('SELECT * FROM employee ')
           // console.log data for this in server.js and then parse data post
    };

    //add department
    addDepartment(newDepartment) {
        return this.connection.query('INSERT INTO department(department_name) VALUES (?)', newDepartment)
        // INSERT INTO department(department_name) VALUES ("Bacon");
    };

    // Add a Role
    addARole() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'roleName',
                message: 'name:'
            },
        )
            .then((answers) => {
                const roleName = answers.roleName;
                connection.query('INSERT INTO role SET ?', { roles: roleName }, (err, res) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    // console.table(res);????
                    viewAllRoles();
                }
                );
            })
    }

    // Add an Employee
    addAnEmployee() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'EmpName',
                message: 'name:'
            },
        )
            .then((answers) => {
                const EmpName = answers.EmpName;
                connection.query('INSERT INTO employee SET ? ', { employee: EmpName }, (err, res) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    // console.table(res);???

                    viewAllEmployees();
                })
            })
    }

    //Update an Employee
    updateAnEmployee() {

    }

    //Delete an Employee
    deleteAnEmployee() {

    }
}

module.exports = new DB(connection);