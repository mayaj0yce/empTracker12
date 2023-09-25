const express = require('express');
const sequelize = require('./config/connections');

// var inquirer = require('inquirer');
// const consoleTable = require('console.table');

const connection = express();
const PORT = process.env.PORT || 3001;

connection.use(express.json());
connection.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
sequelize.sync().then(() => {
    connection.listen(PORT, () => console.log('Now listening'));
});
//opens the sequelize connection 

//asking the questions to get to the database 
function startQuestions() {

}
//use app. CRUD for the pathways
startQuestions()