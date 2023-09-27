// const express = require('express');
// const sequelize = require('./config/connections.js');
const db = require('./config/')

var inquirer = require('inquirer');


//asking the questions to get to the database 
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
        inquirer.prompt(questions).then((answers) => {
            if (answers.option === 'View All Departments') {
                db.viewAllDepartments;
            } else if (answers.option === 'View All Roles') {
                db.viewAllRoles;
            } else if (answers.option === 'View All Employees') {
                viewAllEmployees();
            } else if (answers.option === 'Add a Department') {
                addADepartment();
            } else if (answers.option === 'Add a Role') {
                addARole();
            } else if (answers.option === 'Add an Employee') {
                addAnEmployee();
            } else if (answers.option === 'Update an Employee') {
                updateAnEmployee();
            } else if (answers.option === 'Delete an Employee') {
                deleteAnEmployee();
            } else if (answers.option === 'Exit') {
                exit();
            }
        });
    }
    startQuestions();

    
    
    //functions of above options 
    // function viewAllDepartments() {
    //     connection.query('SELECT * FROM department', (err, res) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.table(res);
    //         startQuestions();
    //     });
    // };
    //now repeat for all of the above :)
    
    // function viewAllEmployees() {
    //     connection.query('SELECT * FROM employees', (err, res) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.table(res);
    //         startQuestions();
    //     });
    // };
    
    // function viewAllRoles() {
    //     connection.query('SELECT * FROM roles', (err, res) => {
    //         if (err) {
    //             console.log(err);
    //             return;
    //         }
    //         console.table(res);
    //         startQuestions();
    //     });
    // };
    
    // function addADepartment() {
    //     inquirer.prompt(
    //         {
    //             type: 'input',
    //             name: 'departmentName',
    //             message: 'name:'
    //         },
    //     )
    //         .then((answers) => {
    //             const departmentName = answers.departmentName;
    //             connection.query('INSERT INTO department SET ?', { dep_name: departmentName }, (err, res) => {
    //                 if (err) {
    //                     console.error(err);
    //                     return;
    //                 }
    //                 viewAllDepartments();
    //             }
    //             );
    //         })
    // }
    
    // function addARole() {
    //     inquirer.prompt(
    //         {
    //             type: 'input',
    //             name: 'roleName',
    //             message: 'name:'
    //         },
    //     )
    //         .then((answers) => {
    //             const roleName = answers.roleName;
    //             connection.query('INSERT INTO role SET ?', { roles: roleName }, (err, res) => {
    //                 if (err) {
    //                     console.error(err);
    //                     return;
    //                 }
    //                 viewAllRoles();
    //             }
    //             );
    //         })
    // }
    
    // function addAnEmployee() {
    //     inquirer.prompt(
    //         {
    //             type: 'input',
    //             name: 'EmpName',
    //             message: 'name:'
    //         },
    //     )
    //         .then((answers) => {
    //             const EmpName = answers.EmpName;
    //             connection.query('INSERT INTO employee SET ? ', { employee: EmpName }, (err, res) => {
    //                 if (err) {
    //                     console.error(err);
    //                     return;
    //                 }
    //                 viewAllEmployees();
    //             })
    //         })
    // }
    
    // function updateAnEmployee() {
    
    // }
    
    // function deleteAnEmployee() {
    
    // }
    // UPDATE employee
    
    // DELETE employee
    
    
    
    
    
    // to do
    // how to delete vs update 