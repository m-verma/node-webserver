const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {User} = require('./models/User');
const {ToDo} = require('./models/Todo');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
    var todo = new ToDo({
        text: req.body.text
    })

    todo.save().then((doc)=>{
        console.log('Todo Saved Successfully');
        res.send(doc);
    }, (e)=>{
        console.log('Save Failed');
        res.status(400).send(e);
    })
})


app.listen(3000, ()=>{
    console.log('Server started on port', 3000);
});