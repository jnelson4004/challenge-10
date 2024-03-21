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
        message: "Pick an option",
        choices: ["Add Department", "View Department"]
    }
]

// // Query database using COUNT() and GROUP BY
// db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
//     console.log(results);
// });
  
//   // Query database using SUM(), MAX(), MIN() AVG() and GROUP BY
// db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
//     console.log(results);
// });
  
const promptMenu = () => {

    inquirer.prompt(mainMenu).then(answers => {
        console.log(answers);
        //based on user answer
        
        switch(answers.action){
            case "Add Department": 
            addDepartment()
            break;
            case "View Department":
                viewDepartment();
                break;
            }
        })
    }


const viewDepartment= ()=> {
    // query your databasse - use mysql
    console.log("===================View Deparments Starting +===================================")
    promptMenu()
}