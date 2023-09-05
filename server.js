const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

function openTable() {
  const questions = [
    {
      type: 'list',
      name: 'selectionList',
      message: 'Please select an option below',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update an Employee',
        'Delete an Employee',
        'EXIT',
      ],
    },
  ]
}

// using inquirer pick the option and the function is described below
inquirer.prompt(questions).then((answers) => {
  if (answers.option === 'View All Departments') {
    viewAllDepartments();
  } else if (answers.option === 'View All Roles') {
    viewAllRoles();
  } else if (answers.option === 'View All Employees') {
    ViewAllEmployees();
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
  } else if (answers.option === 'EXIT') {
    exit();
  } 
})

//functions described for each of the options

// View All Departments
function viewAllDepartments() {
  // * is used for ALL 
  connection.query('SELECT * FROM department', (err, results) => {
      if (err) {
          console.error(err);
          return;
      }
      console.table(results);
      openTable();
      //sends the user back the the option menu
  });
};

// View All Roles
function viewAllRoles() {
  connection.query('SELECT * FROM roles',() => {
    if (err) {
      console.error(err);
      return;
  }
  console.table(results);
  openTable();
  });
};

// View All Employees
function ViewAllEmployees() {
  connection.query('SELECT * FROM employees',() => {
    if (err) {
      console.error(err);
      return;
  }
  console.table(results);
  openTable();
  });
};


// Hardcoded query: DELETE FROM course_names WHERE id = 3;

db.query(`DELETE FROM course_names WHERE id = ?`, 3, (err, result) => {
        if (err) {
          console.log(err);
        }
        console.log(result);
      });

      // Query database
      db.query('SELECT * FROM course_names', function (err, results) {
        console.log(results);
      });

      // Default response for any other request (Not Found)
      app.use((req, res) => {
        res.status(404).end();
      });

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
