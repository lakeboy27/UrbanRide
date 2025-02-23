const dotenv = require('dotenv') ; 
dotenv.config(); 
const express = require('express') ; 
const cors = require('cors') ; 
const connecttodb= require('./db/db') ; 
const userModel = require('./models/user.model');
const cookieParser = require('cookie-parser') ;

const app = express() ;

userRoutes = require('./routes/user.routes') ; 



connecttodb() ; 



app.use(cors()) ; 
app.use(express.json()) ; 
app.use(express.urlencoded({extended : true}))  ; 
app.use(cookieParser()) ;

app.get('/' , (req , res ) =>{
    res.send("hello world") ; 
}) ; 

app.use('/users' , userRoutes) ; 



module.exports =app ; 
