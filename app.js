var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require('method-override')
var routes = require("./routes/routes");
var app = express();

//Connect to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/todoApp", {
  useMongoClient: true
}).then(function() {
  console.log("Todo App Database Has Started!");
});

//Use BodyParser
app.use(bodyParser.urlencoded({ extended: true}));

//Set EJS as View Engine
app.set("view engine", "ejs");

//Serve Static Folders
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

//Use method override
app.use(methodOverride('_method'));

//Routes
app.use("/", routes);

//Start Server
app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Todo App Server Has Started!"); 
});