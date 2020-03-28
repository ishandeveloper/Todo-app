//Dummy Data For Testing
var data=[{item:'Get Grocery From Market'},{item:'Take Dog For Walk'},{item:'Boil Milk'}];

module.exports=(app)=>{

    app.get('/todo', (req,res)=>{
        res.render('todo.ejs',{todos:data});
    });

    app.post('/todo', (req,res)=>{

    });

    app.delete('/todo', (req,res)=>{

    });
};