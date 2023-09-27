const connection = require('./connections')

class DB {
    //view all departments
    constructor(connection) {
        this.connection = connection
    }
    viewAllDepartments() {
        connection.query('SELECT * FROM department', (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(res);
            startQuestions();
        });
    };

//view all roles
    viewAllRoles() {
        connection.query('SELECT * FROM roles', (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(res);
            startQuestions();
        });
    };

    //view all employees
    viewAllEmployees() {
        connection.query('SELECT * FROM employees', (err, res) => {
            if (err) {
                console.log(err);
                return;
            }
            console.table(res);
            startQuestions();
        });
    };

//add department
    addADepartment() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'departmentName',
                message: 'name:'
            },
        )
            .then((answers) => {
                const departmentName = answers.departmentName;
                connection.query('INSERT INTO department SET ?', { dep_name: departmentName }, (err, res) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
            // console.table(res);????
                    viewAllDepartments();
                }
                );
            });
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