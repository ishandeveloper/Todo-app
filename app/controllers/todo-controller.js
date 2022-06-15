var bodyParser = require('body-parser');
var urlEncodedParser = bodyParser.urlencoded({
    extended: false
});
var mongoose = require('mongoose');

//Connecting To MongoDB

mongoose.connect('mongodb+srv://admin:admin@todoappcluster.m354o.mongodb.net/todoappcluster?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
// mongoose.connect('mongodb+srv://ID:Pass@abc', { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }).catch(error => handleError(error));
//Create Schema

var todoSchema = new mongoose.Schema({
    item: String
});

//Model

var Todo = mongoose.model('Todo', todoSchema);

// var testitem=Todo({item:'Go To Bed'}).save((err)=>{
//     if(err) throw err;
//     console.log('Item Saved');
// });

//Dummy Data For Testing
// var data=[{item:'Get Grocery From Market'},{item:'Take Dog For Walk'},{item:'Boil Milk'}];

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.redirect("/todo");
    });


    app.get('/todo', (req, res) => {
        Todo.find({}, (err, data) => {
            if (err) throw err;
            res.render('todo.ejs', {
                todos: data
            });
        });
    });

    app.post('/todo', urlEncodedParser, (req, res) => {
        var newTodo = Todo(req.body).save((err, data) => {
            if (err) throw err;
            res.json({
                todos: data
            });
        });
        // res.redirect('/todo'); 
    });

    app.delete('/todo/:item', (req, res) => {
        Todo.find({
            item: req.params.item.replace(/\-/g, " ")
        }).deleteOne((err, data) => {
            if (err) throw err;
            res.json({
                todos: data
            });
        });
    });

    app.get('/todo/:item/edit', (req, res) => {
        var item = req.params.item.replace(/\-/g, " ");
        console.log(item);
        Todo.find({item: item}, (err, data) => {
            if (err) throw err;
            console.log("tou aqui");
            res.render('edit-todo.ejs', {
                todo: data
            });
        });
    });

    app.post('/todo/edit', urlEncodedParser, (req, res) => {
        Todo.findOneAndUpdate({item: req.body.oldItem}, {item: req.body.item}, (err, data) => {
            if (err) throw err;
            res.redirect('/todo');
        });
    });

};
