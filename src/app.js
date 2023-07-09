const express = require("express");
const path = require('path');
const morgan = require ('morgan');
const mysql = require ("mysql");
const myConnection = require("express-myconnection");

const app = express();


//importando rutas
    const customerRoutes = require('./routes/customer');


//setting
    app.set('port', process.env.PORT || 3001);
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

//middlewares funciones
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3366,
    database: 'crudnodejsmysql'
}, 'single'))
    app.use(express.urlencoded({extend: false}));
//static files//
    app.use(express.static(path.join(__dirname, 'public')));

//routes 
    app.use('/', customerRoutes);
 
//begin server
    app.listen(app.get('port'), () => {
        console.log('Server on port 3001')
    });