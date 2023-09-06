const express = require('express');
var mysql = require('mysql')
var inquirer = require('inquirer')
var fs = require('fs')
require('console.table')
require('dotenv').config();


// Import the connection object
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "Garden"
});


connection.connect(function(err){
    if(err){
    console.log('Hey your DATABASE is not connecting!');
    return
    }
    console.log('Yay! You got a connection!');
    run();






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
  } else if (answers.option === 'EXIT') {
    exit();
  }
});

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
  connection.query('SELECT * FROM roles', () => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    openTable();
  });
};

// View All Employees
function viewAllEmployees() {
  connection.query('SELECT * FROM employees', () => {
    if (err) {
      console.error(err);
      return;
    }
    console.table(results);
    openTable();
  });
};

// Add A Department
function addADepartment() {
  inquirer.prompt(
    {
      type: 'input',
      name: 'departmentName',
      message: 'Enter department name'
    },
  )
    .then((answers) => {
      const departmentName = answers.departmentName;
      connection.query('INSERT INTO department SET ?', { dep_name: departmentName }, (err, results) => {
        if (err) {
          console.error(err);
          return;
        }
        viewAllDepartments();
        console.log(`Department '${department}' added successfully`)
      }
      );
    });
  }

  // Add A Role
  function addARole() {
    inquirer.prompt(
      {
        type: 'input',
        name: 'roles',
        message: 'Enter role name'
      },
    )
      .then((answers) => {
        const roleName = answers.roleName;
        connection.query('INSERT INTO roles SET', { roles: roleName }, (err, results) => {
          if (err) {
            console.error(err);
            return;
          }
          viewAllRoles();
          console.log(`Role '${role}' added successfully`);
        }
        );
      });
  
  // Add An Employee
  function addAnEmployee() {
    inquirer.prompt(
      {
        type: 'input',
        name: 'employee',
        message: ''
      },
    )
  }

  // Update An Employee
  function updateAnEmployee() {

  }

  // Delete An Employee
  function deleteAnEmployee() {

  };
}

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
