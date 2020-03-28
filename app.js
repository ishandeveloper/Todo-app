var express=require('express');
var app=express();
var todoController=require('./controllers/todo-controller');

//Setting Template Engine
app.set('view engine','ejs');

//Serving Static Files
app.use('/assets',express.static('assets'));

//Firing Controllers
todoController(app);

//Running Up The Server
app.listen(3000);
console.log("Server Up at Port 3000");