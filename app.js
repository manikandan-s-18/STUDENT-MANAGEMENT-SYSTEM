const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require("dotenv").config(); // Load environment variables

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static files
app.use(express.static("public"));

// Template engine
const handlebars = exphbs.create({ extname: ".hbs" });
app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");

// MySQL Connection

// Debugging: Check if database configuration is correct
// console.log("DB Config:", {
//     host: "localhost",
//     user: "root",
//     password: "******", // Masked for security
//     database: "student_management_system"
// });

// Check Database Connection

/*
// Router

*/
const routes = require("./server/routes/students")
app.use('/',routes)

// Listen on port
app.listen(port, () => {
    console.log("Listening on Port:", port);
});
