// Setup empty JS object to act as endpoint for all routes
projectData = {};
const cors = require("cors");
const bodyParser = require("body-parser");
let my =
  "https://api.openweathermap.org/data/2.5/weather?zip=90210&appid=ac1ff7ab7a50b6f1a59334c35bcc335c";
// Require Express to run server and routes
const express = require("express");
const app = express();
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance

// Initialize the main project folder
app.use(express.static("website"));
const port = 8000;

app.listen(port, (req, res) => {
  console.log("http://localhost:" + port);
});

// Setup Server
