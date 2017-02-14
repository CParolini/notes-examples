// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql

// Using the app skeleton provided to you:
// Create a MySQL database named 'chirpy' with a 'chirps' table to hold your data.
// Your 'chirp' table should include a field for id, author, chirp, and time created.
// Modify the connection.js file to create a connection to your database.
// Modify the api-routes.js file so that there is a route for adding a new chirp, as well as retrieving all chirps.
// Create a simple front-end for the app using HTML/JavaScript.

var mysql = require("mysql");

// Set up our connection information
var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "chirpy"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
