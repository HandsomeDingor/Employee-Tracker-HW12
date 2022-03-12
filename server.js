const inquirer = require("inquirer");
const db = require('./db/connection');
const cTable = require('console.table');

// Query database
db.query('SELECT * FROM department', function (err, results) {
  console.table(results);
});

// Query database
db.query('SELECT * FROM roles', function (err, results) {
  console.table(results);
});

// Query database
db.query('SELECT * FROM employee', function (err, results) {
  console.table(results);
});

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
});