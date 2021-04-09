const express = require('express');
const path = require('path');
const routes = require('../routes');

const configs = require('./config');

const app = express();
const config = configs[app.get('env')];

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './views'));
app.use(express.static('public'));


app.use((req, res, next) =>{
    const date = new Date();
    res.locals.currentYear = date.getFullYear(); 
    
    return next();
})

app.locals.sitetitle = config.sitename;

app.use('/', routes());

app.listen(3000);