const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Wu19950620?',
  database: 'employee_db'
},
  console.log(`Connected to the employee_db database.`)
);

// db.query(
//   'SELECT * FROM roles',
//   function(err, results, fields){
//     if (err) throw err;
//     console.log(err);
//     console.log(results);
//     console.log(fields);
//   }
// )

module.exports = db;
