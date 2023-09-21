const mysql = require('mysql2');
const express = require('express');
const sequelize = require('./config/connections');

var inquirer = require('inquirer');
// const consoleTable = require('console.table');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
// connection.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('connection complete');
//     startQuestions();
// });


function startQuestions() {
    const questions = [
            {
            type: 'list',
            name: 'option',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add a Department',
                'Add a Role',
                'Add an Employee',
                'Update an Employee',
                'Delete an Employee',
                'Exit',
            ],
        }]
        inquirer.prompt( questions ).then((answers) => {
            if (answers.option === 'View All Departments' ) {
        viewAllDepartments();
            }
            if (answers.option === 'View All Roles' ) {
                viewAllRoles();
            }  if (answers.option === 'View All Employees' ) {
                viewAllEmployees();
            }  if (answers.option === 'Add a Department') {
                addADepartment();
            }  if (answers.option === 'Add a Role' ) {
                addARole();
            }  if (answers.option === 'Add an Employee' ) {
                addAnEmployee();
            }  if (answers.option === 'Update an Employee' ) {
                updateAnEmployee();
            }  if (answers.option === 'Delete an Employee' ) {
                deleteAnEmployee();
            }  if (answers.option === 'Exit' ) {
                exit();
            }
        });
}


//functions of above options 
function viewAllDepartments() {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startQuestions();
    });
};
//now repeat for all of the above :)

function viewAllEmployees() {
    connection.query('SELECT * FROM employees', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startQuestions();
    });
};

function viewAllRoles() {
    connection.query('SELECT * FROM roles', (err, res) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(res);
        startQuestions();
    });
};

function addADepartment() {
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
              viewAllDepartments();
            }
            );
    })
}

function addARole() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'roleName',
            message: 'name:'
        },
    )
    .then((answers) => {
        const roleName = answers.roleName;
        connection.query('INSERT INTO role SET ?', { roles: roleName}, (err, res) => {
            if (err) {
                console.error(err);
                return;
              }
              viewAllRoles();
            }
            );
    })
}

function addAnEmployee() {
    inquirer.prompt(
        {
            type: 'input',
            name: 'EmpName',
            message: 'name:'
        },
    )
    .then((answers) => {
        const EmpName = answers.EmpName;
        connection.query('INSERT INTO employee SET ? ', { employee: EmpName}, (err, res) => {
            if (err) {
                console.error(err);
                return;
              }
              viewAllEmployees();
        })
    })
}

function deleteAnEmployee() {
    
}
// UPDATE employee

// DELETE employee



startQuestions();


// to do 
// run from terminal 
// inquirer needs to function 
// db . query or inquirer . prompt? 
// how to delete vs update 