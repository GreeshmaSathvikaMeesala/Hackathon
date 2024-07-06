require ('dotenv').config();
const bodyparser = require('body-parser');
const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db')

const app = express() 
connectDB();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))
app.use((express.static('public')))
app.set('view engine','ejs');
app.set('views','views'); 

const nav = require('./routes/transactions')

app.use(express.json()) 
app.use('/',nav);



const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
{   
    console.log(`listening on ${PORT}`);
});