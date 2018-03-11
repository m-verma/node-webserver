const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',(e)=>{
    if(e){
        console.log('unable to connect to DB', e);
    }    
});

const ToDo = mongoose.model('ToDo',{
    text:{
        type: String,
        required: true,
        trim: true,
        minlength:1
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

var walkTheDogTodo = new ToDo({
    text:'Walk The dog',
    completed: true,
    completedAt: 123
});

var cookDinnerTodo = new ToDo({
    text:'Cook Dinner',
});

walkTheDogTodo.save().then((res)=>{
    console.log('Todo saved successfully', res);
}, (e)=>{
    console.log('failed to save Todo', e);
});

cookDinnerTodo.save().then((res)=>{
    console.log('Todo saved successfully', res);
}, (e)=>{
    console.log('failed to save Todo', e);
});

const User = mongoose.model('User',{
    email:{
        type: String,
        required: true,
        trim: true,
        minlength:1
    }
})

var user1 = new User({email:'mukesh@verma.com'})
user1.save().then((doc) =>{
    console.log('User saved successfully', doc);
}, (e) =>{
    console.log('User save failed', e);
});