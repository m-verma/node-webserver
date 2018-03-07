const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const _ = require('lodash');

const port = process.env.port || 3000;

hbs.registerPartials(__dirname+'/views/partials');

hbs.registerHelper('getCurrentYear', ()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

const app = express();
app.set('view engine', hbs);
app.use((req, res, next)=>{
    var log = `${new Date().toDateString()} : ${req.method} ${req.path}`;
    console.log(log);
    fs.appendFile('request.log', log+'\n',(err)=>{
        if(!_.isNull(err)){
            console.log(err);
        }
    })
    next();
});

// app.use((req, res, next)=>{
//     res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));


app.get('/', (req, res)=>{
    res.render('home.hbs',{
        myWebsite:'My Website'
    });
});
app.get('/about', (req, res)=>{
    res.render('about.hbs');
});
app.get('/bad', (req, res)=>{
    res.send('<h1>Bad req!</h1>');
});

app.listen(port, ()=>{console.log('Server is up!')});