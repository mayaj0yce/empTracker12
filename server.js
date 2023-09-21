const mysql = require('mysql2');
// const express = require('express');
const inquirer = require("inquirer");
const table = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3001',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
connection.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('connection complete');
    startQuestions();
});


function startQuestions() {
    inquirer
        .prompt({
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
        })
        .then(function (result) {
            switch (result.option) {
                case 'View All Departments':
                    viewAllDepartments();
                    break;
                case 'View All Roles':
                    viewAllRoles();
                    break;
                case 'View All Employees':
                    viewAllEmployees();
                    break;
                case 'Add A Department':
                    addADepartment();
                    break;
                case 'Add A Role':
                    addARole();
                    break;
                case 'Add An Employee':
                    addAnEmployee();
                    break;
                case 'Update Employee':
                    updateAnEmployee();
                    break;
                case 'Delete An Employee':
                    deleteAnEmployee();
                    break;
                case 'Exit':
                    exit();
            }
        });
}


//functions of above options 
function viewAllDepartments() {
    connection.query('SELECT * FROM department', (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(results);
        openTable();
    });
};
//now repeat for all of the above :)

function viewAllEmployees() {
    connection.query('SELECT * FROM employees')
}


// GET ALL departments
// GET ALL roles
// GET ALL employees

// ADD department 
// ADD role
// ADD employee

// UPDATE employee

// DELETE employee



startQuestions();
