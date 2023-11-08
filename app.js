// Requiring required modules
const bodyParser = require("body-parser");

var express = require("express");
var path = require("path");
var app = express();
const exphbs = require("express-handlebars");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static file serving middleware
app.use(express.static(path.join(__dirname, "public")));

// Configure Express Handlebars as the template engine
app.engine(".hbs", exphbs.engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");

// Define a route for the root path
// app.get("/", function (req, res) {
//   // Render the "index" view with a title set to "Express"
//   res.render("index", { title: "Express" });
// });

// Define a route for the "/users" path
// app.get("/users", function (req, res) {
//   // Send a response with the text "respond with a resource"
//   res.send("respond with a resource");
// });

const invoiceRouter = require("./routes/invoiceroutes");
const manufacturerRouter = require("./routes/manufacturerroutes");
const dataRouter = require("./routes/dataroutes");

app.use("/search/invoiceNo", invoiceRouter);
app.use("/search/manufacturer", manufacturerRouter);
app.use("/viewData", dataRouter);

app.get("*", function (req, res) {
  // Render the "error" view with a title set to "Error" and a message set to "Wrong Route"
  res.render("error", { title: "Error", message: "Wrong Route" });
});

module.exports = app;

/****************************************************************************** ***
 *	ITE5315 – Assignment 2
 *	I declare that this assignment is my own work in accordance with Humber Academic Policy.   *  No part of this assignment has been copied manually or electronically from any other source *  (including web sites) or distributed to other students.
 *
 *	Name: Deepanker Student ID: N01545191 Date: ____________________
 *
 *
 ******************************************************************************
 **/
