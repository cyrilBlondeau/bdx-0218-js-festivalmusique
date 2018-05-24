let mysql = require('mysql');

// Connection à la base de données
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "terrain01",
  database: "festizik"
});

con.connect((err) => {
  if (err) throw err;
});

module.exports = con;
