require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')


const path = require('path');

// Inicializando la DB
require('./database')

//CORS
app.use(cors());


app.use(express.json());
//app.use(express.urlencoded({extended : false}))
app.use(express.static(path.join(__dirname, 'public')))
app.set('views' , path.join(__dirname, 'views'));


app.use('/api', require('./routes/index'));

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor en linea`)
})


