const inquirer = require("inquirer");
const db = require('./db/connection');
const cTable = require('console.table');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  start();
});

function start() {
  inquirer.prompt({
    type: "list",
    name: "choices",
    message: "Would you like to do?",
    choices: ["View", "Add", "Update", "Delete", "Exit"]
  }).then(answer => {
    switch (answer.choices) {
      case "View":
        views();
        break;

      case "Add":
        adds();
        break;

      case "Update":
        updates();
        break;

      case "Delete":
        deletes();
        break;

      case "Exit":
        db.end();
        break;
    }
  });
}



function views() {
  inquirer.prompt({
    type: "list",
    name: "viewChoice",
    message: "What would you like to view?",
    choices: ["Departments", "Roles", "Employees", "Exit"]
  }).then(answer => {
    switch (answer.viewChoice) {
      case "Departments":
        viewDepartments();
        break;

      case "Roles":
        viewRoles();
        break;

      case "Employees":
        viewEmployees();
        break;

      case "Exit":
        db.end();
        break;
    }
  });
};

function viewDepartments() {
  let query = "SELECT * From departments";
  db.query(query, function (err, res) {
    console.table('All Departments', res);
    start();
  });
};

function viewRoles() {
  let query = "SELECT * From roles";
  db.query(query, function (err, res) {
    console.table('All Roles', res);
    start();
  });
};

function viewEmployees() {
  let query = "SELECT * From employees";
  db.query(query, function (err, res) {
    console.table('All Employeees', res);
    start();
  });

};

function adds() {
  inquirer.prompt({
    type: "list",
    name: "viewChoice",
    message: "What would you like to view?",
    choices: ["Departments", "Roles", "Employees", "Exit"]
  }).then(answer => {
    switch (answer.viewChoice) {
      case "Departments":
        addDepartments();
        break;

      case "Roles":
        addRoles();
        break;

      case "Employees":
        addEmployees();
        break;

      case "Exit":
        db.end();
        break;
    }
  });
};


function addDepartments() {
  inquirer.prompt([
    {
      type: "input",
      name: "addDepartments",
      message: "What is the new department name?"
    }
  ]).then(answer => {
    const sql = 'INSERT INTO departments (department_name) value (?)';
    db.query(sql, answer.addDepartments, (err, res) => {
      if (err) throw err;
      console.log('You have added ${answer.addDepartments}.')
      start();
    })
  });
};

function addRoles() {

};

function addEmployees() {


};

// db.query('SELECT * FROM employee', function (err, results) {
//   console.table(results);
// });