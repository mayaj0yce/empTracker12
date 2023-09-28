// const express = require('express');
// const sequelize = require('./config/connections.js');
const db = require('./config')
// console.log(db);
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
                'Update an Employee Role',
                'Delete an Employee',
                'Exit',
            ],
        }]
        inquirer.prompt(questions).then((answers) => {
            if (answers.option === 'View All Departments') {
                viewDepartments();
            } else if (answers.option === 'View All Roles') {
                viewAllRoles();
            } else if (answers.option === 'View All Employees') {
                viewAllEmployees();
            } else if (answers.option === 'Add a Department') {
                addDepartment();
            } else if (answers.option === 'Add a Role') {
                db.addARole();
            } else if (answers.option === 'Add an Employee') {
                db.addAnEmployee();
            } else if (answers.option === 'Update an Employee Role') {
                db.updateAnEmployee;
            } else if (answers.option === 'Delete an Employee') {
                db.deleteAnEmployee;
            } else if (answers.option === 'Exit') {
                db.exit;
            }
        });
    }
    startQuestions();

    // module.exports = startQuestions;
    
    
    //functions of above options 
    function viewDepartments() {
          db.viewAllDepartments()
          .then((data) => {
            const parseData = data[0].map((department)=> {
                return `department: ${department.department_name}, id: ${department.id}`
            })
        // console.log(parseData)
            parseData.forEach((dpt)=> {
                // console.log('\n')
                console.log(dpt)
            })
          })
          .then(() => 
            startQuestions()
          )
    };

    //view all roles
    function viewAllRoles() {
db.viewAllRoles()
.then((data) => {
    const parseData = data[0].map((roles)=> {
        return `role: ${roles.title}, id: ${roles.id}, salary: $${roles.salary}k, department: ${roles.department}`
    })
    parseData.forEach((dpt)=> {
        console.log(dpt)
    })
  })

        .then(() => 
            startQuestions()
          )
        };
    //now repeat for all of the above :)
    
    function viewAllEmployees() {
        db.viewAllEmployees()
    .then((data) => {
        const parseData = data[0].map((employee) => {
            return `first name: ${employee.first_name}, last name: ${employee.last_name}, id: ${employee.id}, job title: ${employee.role_id}, manager id: ${employee.manager}`
        })
            parseData.forEach((Emp) => {
                console.log(Emp)
            })
    })
    .then(() => 
     startQuestions()
  )
};
    
    // 
    
    function addDepartment() {
        inquirer.prompt(
            {
                type: 'input',
                name: 'departmentName',
                message: 'name:'
            },
        )
        .then((newDepartment) => {
        console.log(newDepartment)

          db.addDepartment(newDepartment.departmentName)
        })
        .then(() => 
        viewDepartments()
      )
        .then(() => 
        startQuestions()
      )
    };
    
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