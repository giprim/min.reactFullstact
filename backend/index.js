const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3306"
})

// open connection
function openConnection() {
  connection.connect(err => {
    if (err) throw err;
    console.log("OPEN MYSQL CONNECTION");
  })
}



function closeConnection() {
  connection.end(err => {
    if (err) throw err;
    console.log("CLOSE MYSQL CONNECTION");
  })
}

function createDb() {
  let query = "CREATE DATABASE IF NOT EXISTS mysqlReact";
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log("database initiated");
  })
}

function createTable() {
  let query = `CREATE TABLE IF NOT EXISTS mysqlReact.staff(
    id int not null auto_increment,
    firstName varchar(25) not null,
    lastName varchar(25) not null,
    primary key(id)
  )`;

  let conn = connection.query(query, (err, result) => {
    if (err) throw err;
    console.log("database initiated");
  })

}

createDb();
createTable();

app.get("/", (req, res) => {
  let query = "SELECT * FROM mysqlReact.staff ORDER BY firstName";
  connection.query(query, (err, result) => {
    if (err) {
      res.send(err);
    }
    else {
      res.json(result);
    }

  })
})

app.post("/add", (req, res) => {
  let { first, last } = req.query;
  let query = `INSERT INTO mysqlReact.staff(firstName, lastName) values('${first}', '${last}')`;
  connection.query(query, (err, result) => {
    if (err)
      res.json({ feedback: err });
    else
      res.send({ feedback: "successful" });
  })
})

app.delete("/delete", (req, res) => {
  let { id } = req.query;
  let query = `DELETE FROM mysqlReact.staff WHERE id=${id}`;
  connection.query(query, (err, result) => {
    if (err)
      res.json({ feedback: err });
    else
      res.send({ feedback: "successful" });
  })
})

app.listen("4444", (err) => {
  if (err) throw err;
  console.log("listening on port 4444");
})