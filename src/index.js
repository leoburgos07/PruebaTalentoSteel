require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('./database')


const app = express();
app.use(require('./routes/index'));

app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views' , path.join(__dirname, 'views'));


app.listen(3000, ()=>{
    console.log(`Servidor en linea`)
})