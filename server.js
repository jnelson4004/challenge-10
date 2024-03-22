const express = require('express');
const mysql = require("mysql2");
const inquirer = require("inquirer");
const sequelize = require("sequelize");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL Username
      user: 'root',
      // TODO: Add MySQL Password
      password: 'password',
      database: 'roster_db'
    },
    console.log(`roster_db database accessed`)
);

const mainMenu = [
    {
        type: "list",
        name: "action",
        message: "Options",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role"]
    }
];

const addDept = [
    {
        type: "input",
        name: "department",
        message: "Enter Department Name:"
    }
];

const addRole = [
    {
        type: "input",
        name: "title",
        message: "Enter Title:"
    },
    {
        type: "input",
        name: "salary",
        message: "Enter Salary:"
    },
    {
        type: "input",
        name: "department id",
        message: "Enter Department ID:"
    }
];
  
const promptMenu = () => {

    inquirer.prompt(mainMenu).then(answers => {
        console.log(answers);
        //based on user answer
        
        switch(answers.action){
            case "View All Departments": 
                viewDepartments();
            break;
            case "View All Roles":
                viewRoles();
            break;
            case "View All Employees":
                viewEmployees();
            break;
            case "Add Department":
                addDepartment();
            break;
            case "Add Role":
                addRoles();
            break;
            case "Add Employee":
                addEmployee();
            break;
            case "Update Employee Role":
                updateEmployeeRole();
            break;
            }
        }
    )
};


const viewDepartments= ()=> {
    // query your databasse - use mysql
    console.log("===================View Deparments Starting +===================================")
    promptMenu()
};

const viewRoles= ()=> {
    // query your databasse - use mysql
    console.log("===================View Roles Starting +===================================")
    promptMenu()
};

const viewEmployees = () => {
    // query your databasse - use mysql
    console.log("===================View Employees Starting +===================================")
    promptMenu()
};

const addDepartment = () => {

    inquirer.prompt(addDept).then(answers => {
        console.log(answers);
    
        const insertQuery = 'INSERT INTO department (department_name) VALUES ("answers")';
        const values = [(answers)];

        db.query(insertQuery, values, (err, result) => {
            if (err) throw err;
            console.log(result);
        })    
    })

    // query your databasse - use mysql
    promptMenu();
};

const addRoles = () => {

    inquirer.prompt(addRole).then(answers => {
        console.log(answers);
    
        const insertQuery = 'INSERT INTO role (title, salary, department_id) VALUES ("answers")';
        const values = [(answers)];

        db.query(insertQuery, values, (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    })
    // query your databasse - use mysql
    promptMenu();  
};

const addEmployee = () => {

    inquirer.prompt(addEmployee).then(answers => {
        console.log(answers);
    
        const insertQuery = 'INSERT INTO employee (first_name, last_name, role_id) VALUES ("answers")';
        const values = [(answers)];

        db.query(insertQuery, values, (err, result) => {
            if (err) throw err;
            console.log(result);
            promptMenu();
        })
        
    // query your databasse - use mysql
    })
    
};

const updateEmployeeRole = () => {
    // query your databasse - use mysql
    console.log("===================Role Editor Starting +===================================")
    promptMenu()
};

promptMenu();
