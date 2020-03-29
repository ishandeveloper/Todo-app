var express = require('express');
var app = express();
var todoController = require('./controllers/todo-controller');

//Setting Template Engine
app.set('view engine', 'ejs');

//Serving Static Files
app.use('/assets', express.static('assets'));

//Firing Controllers
todoController(app);

//Running Up The Server
var port = process.env.PORT || 8080;
app.listen(port);
console.log("Server Up at Port: " + port);
