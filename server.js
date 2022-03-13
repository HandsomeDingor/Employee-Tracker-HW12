const inquirer = require("inquirer");
const db = require('./db/connection');
const cTable = require('console.table');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  start();
  getDepartments();
  getRoles();

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
  inquirer.prompt([{
    type: "list",
    name: "viewChoice",
    message: "What would you like to view?",
    choices: ["Departments", "Roles", "Employees", "Exit"]
  }]).then(answer => {
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

    departmentArray = res;
    for (i = 0; i < res.length; i++) {
      newArry.push(res[i].department_name);
    };
    
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
  inquirer.prompt([{
    type: "list",
    name: "viewChoice",
    message: "What would you like to add?",
    choices: ["Departments", "Roles", "Employees", "Exit"]
  }]).then(answer => {
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
  inquirer.prompt(
    {
      type: "input",
      name: "addDepartments",
      message: "What is the new department name?"
    }
  ).then(answer => {
    const sql = 'INSERT INTO departments (department_name) value (?)';
    db.query(sql, answer.addDepartments, (err, res) => {
      if (err) throw err;
      console.log('You have added ${answer.addDepartments}.')
      start();
    })
  });
};

function addRoles() {
  inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the new role name?"
    },
    {
      type: "input",
      name: "salary",
      message: "What is the new role's salary?"
    },
    {
      type: "list",
      name: "id",
      message: "Which is the role's department",
      choices: newArry
    }
  ]).then(answer =>{
    for (i = 0; i < newArry.length; i++){
      if (departmentArray[i].department_name == answer.id){
        answer.id = departmentArray[i].id
      }
    }
    const sql = 'INSERT INTO roles (title, salary, department_id ) value (?,?,?)';
    const params = [answer.title,answer.salary,answer.id];
    db.query(sql, params, (err, res)=>{
      if (err) throw err;
      console.log('New role added: ' + answer.title)
      start();
    })
  })
};

function addEmployees() {
  inquirer.prompt([
    {
      type: "input",
      name: "first_name",
      message: "What is the employee's first name?"
    },
    {
      type: "input",
      name: "last_name",
      message: "What is the employee's last name?"
    },
    {
      type: "list",
      name: "role_id",
      message: "Which is the employee's role",
      choices: newRolesArry
    },
    {
      type: "list",
      name: "manager_id",
      message: "Which is the employee's manager's name",
      choices: ["Mike Chan", "Tom Allen", "Kevin Tupik", "Apple NAT", "Jason Ice","NULL"]

    }
  ]).then(answer =>{
    for (i = 0; i < newRolesArry.length; i++){
      if (roleArray[i].title == answer.role_id){
        answer.role_id = roleArray[i].id;
      }
    }
    if (answer.manager_id === "Tom Allen"){
       answer.manager_id = 3;
    }
    else if (answer.manager_id === "Kevin Tupik"){
       answer.manager_id = 5;
    }
    else if (answer.manager_id === "Apple NAT"){
       answer.manager_id= 6;
    }
    else if (answer.manager_id === "Jason Ice"){
       answer.manager_id = 9;
    }else { answer.manager_id = 'NULL'}

    const sql = 'INSERT INTO employees (first_name, last_name, role_id, manager_id) value (?,?,?,?)';
    const params = [answer.first_name, answer.last_name, answer.role_id, answer.manager_id];
    db.query(sql, params, (err, res)=>{
      if (err) throw err;
      console.log('New employee added: ' + answer.first_name +''+ answer.last_name)
      start();
    })
  })
};


const newArry = [];
let departmentArray;

function getDepartments() {
  db.query("SELECT * FROM departments", (err, res) => {
    if (err) throw err;    
    departmentArray = res;
    for (i = 0; i < res.length; i++) {
      newArry.push(res[i].department_name);
    };
  });
};



const newRolesArry = [];
let roleArray;

function getRoles() {
  db.query("SELECT * FROM Roles", (err, res) => {
    if (err) throw err;    
    roleArray = res;
    for (i = 0; i < res.length; i++) {
      newRolesArry.push(res[i].title);
    };
  });
};

