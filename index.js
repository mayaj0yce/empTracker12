const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
//Need?
require('dotenv').config();


function startQuestions() {
    const questions = [
        {
type: 'list',
name: 'option',
message: 'What would you like to do?',
choices: [
    'View All Deparments',
    'View All Roles',
    'View All Employees',
    'Add a Department',
    'Add a Role',
    'Add an Employee',
    'Update an Employee Role',
    'Update an Employee Manager',
    'Delete an Employee',
    'Exit', ],
},

GET ALL departments
GET ALL roles
GET ALL employees

ADD department 
ADD role
ADD employee

UPDATE employee

DELETE employee