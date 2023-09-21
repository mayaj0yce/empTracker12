const mysql = require('mysql2');
const express = require('express');
const sequelize = require('./config/connections');

// const inquirer = require('inquirer');
// const consoleTable = require('console.table');
//Need?

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });

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
    'Update an Employee Role',
    'Delete an Employee',
    'Exit', 
],
},
]
}
inquirer.prompt(questions).then((answers) => {
    if (answers.option === '' ) {

    }
    if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }  if (answers.option === '' ) {
        
    }
})

// GET ALL departments
// GET ALL roles
// GET ALL employees

// ADD department 
// ADD role
// ADD employee

// UPDATE employee

// DELETE employee



startQuestions();
