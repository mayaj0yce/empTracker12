const db = require('./config');
const connection = require('./config/connections');
//  const select = require ('@inquirer/prompts');
var inquirer = require('inquirer');


//asking the questions to get to the database 
function startQuestions() {
    const questions = [{
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
            addARole();
        } else if (answers.option === 'Add an Employee') {
            addAnEmployee();
        } else if (answers.option === 'Update an Employee Role') {
            updateAnEmployee();
        } else if (answers.option === 'Delete an Employee') {
            deleteAnEmployee();
        } else if (answers.option === 'Exit') {
            exit();
        }
    });
}
startQuestions();

function exit() {
    console.log('bye')
}
//functions of above options 

//view ALL departments
function viewDepartments() {
    db.viewAllDepartments()
        .then((data) => {
            const parseData = data[0].map((department) => {
                return `department: ${department.department_name}, id: ${department.id}`
            })
            // console.log(parseData)
            parseData.forEach((dpt) => {
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
            const parseData = data[0].map((roles) => {
                return `role: ${roles.title}, id: ${roles.id}, salary: $${roles.salary}k, department: ${roles.department}`
            })
            parseData.forEach((dpt) => {
                console.log(dpt)
            })
        })

        .then(() =>
            startQuestions()
        )
};
//now repeat for all of the above :)

//view all Employees
function viewAllEmployees() {
    db.viewAllEmployees()
        .then((data) => {
            const parseData = data[0].map((employee) => {
                return `First: ${employee.first_name}, Last: ${employee.last_name}, ID: ${employee.id}, RoleID: ${employee.role_id}, managerID: ${employee.manager_id}`
            })
            parseData.forEach((Emp) => {
                console.log(Emp)
            })
        })
        .then(() =>
            startQuestions()
        )
};

// add a department
async function addDepartment() {
    const response = await inquirer.prompt({
        type: 'input',
        name: 'departmentName',
        message: 'name:'
    },)
    const data = await db.addDepartment(response.departmentName)
    viewDepartments();
};


//add a role
async function addARole() {
    const departmentData = await connection.query('SELECT * FROM department')
    const data = await departmentData[0].map(({
        id,
        department_name
    }) => ({
        name: department_name,
        value: id
    }))
    // console.log(data)
    const response = await inquirer.prompt([{
        type: 'input',
        name: 'roleName',
        message: 'title:'
    },
    {
        type: 'list',
        name: 'roleDepartment',
        message: 'Pick a department:',
        choices: data
    },
    {
        type: 'input',
        name: 'roleSalary',
        message: 'salary amount:'
    },

    ])
    const roleData = await db.addARole(response.roleName, response.roleSalary, response.roleDepartment)
    viewAllRoles()
};

//add an employee
async function addAnEmployee() {
    const role_data = await connection.query('SELECT * FROM role')
    const dataRole = await role_data[0].map(({
        id,
        title
    }) => ({
        name: title,
        value: id
    }))

    console.log(dataRole)
    const response = await inquirer.prompt([{
        type: 'input',
        name: 'firstName',
        message: 'firstName:'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'lastName:'
    },
    {
        type: 'list',
        name: 'role_id',
        message: 'Pick a Role:',
        choices: dataRole
    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'Insert manager id:'
    },
    ])
    const employeeData = await db.addAnEmployee(response.firstName, response.lastName, response.role_id, response.manager_id)
    viewAllEmployees()
};


async function updateAnEmployee() {
          
    const role_data = await connection.query('SELECT * FROM role')
    const dataRole = await role_data[0].map(({
        id,
        title
    }) => ({
        name: title,
        value: id
    }))

    const response = await inquirer.prompt([{
        type: 'input',
        name: 'firstName',
        message: 'firstName:'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'lastName:'
    }, 
    {
        type: 'list',
        name: 'newRole',
        message: 'newRole:',
        choices: dataRole
    },
    ])
    // console.log(data.id)
    console.log(response.firstName)

    const newEmployee = await db.updateAnEmployee(response.newRole, response.lastName, response.firstName)
    viewAllEmployees();
    // console.log(newEmployee)


};

async function deleteAnEmployee() {
    // viewAllEmployees();
    const response = await inquirer.prompt([{
        type: 'input',
        name: 'firstName',
        message: 'firstName:'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'lastName:'
    }
    ])
    const employeeData = await db.deleteAnEmployee(response.lastName)
    viewAllEmployees();
}
// response.firstName
// UPDATE employee

// DELETE employee


// to do
// how to delete vs update