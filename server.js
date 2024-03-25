const mysql = require("mysql2");
const inquirer = require("inquirer");

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

const newDepartment = [
    {
        type: "input",
        name: "department_name",
        message: "Enter Department Name:"
    }
];

const newRole = [
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
        name: "department_id",
        message: "Enter Department ID:"
    }
];

const newEmployee = [
    {
        type: "input",
        name: "first_name",
        message: "Enter First Name:"
    },
    {
        type: "input",
        name: "last_name",
        message: "Enter Last Name:"
    },
    {
        type: "input",
        name: "role_id",
        message: "Enter Role ID:"
    }
]
  
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
                addRole();
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


const viewDepartments = () => {

    const insertQuery = "SELECT * FROM department";

    db.query(insertQuery, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
promptMenu();
};


const viewRoles = () => {
    
    const insertQuery = "SELECT * FROM role";

    db.query(insertQuery, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
promptMenu();
};

const viewEmployees = () => {
    
    const insertQuery = "SELECT * FROM employee";

    db.query(insertQuery, (err, results) => {
        if (err) throw err;
        console.log(results);
    });
promptMenu();
};

const addDepartment = () => {

    inquirer.prompt(newDepartment).then(answers => {
        console.log(answers);
    
        const insertQuery = "INSERT INTO department (department_name) VALUES (?)";
        const values = [answers.department_name];

        db.query(insertQuery, values, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    promptMenu();    
    });    
};

const addRole = () => {

    inquirer.prompt(newRole).then(answers => {
        console.log(answers);

        const insertQuery = "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)";
        const values = [answers.title, answers.salary, answers.department_id];

        db.query(insertQuery, values, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    promptMenu();
    });
};

const addEmployee = () => {

    inquirer.prompt(newEmployee).then(answers => {
        console.log(answers);
    
        const insertQuery = "INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)";
        const values = [answers.first_name, answers.last_name, answers.role_id];

        db.query(insertQuery, values, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    promptMenu();
    });
};

promptMenu();
