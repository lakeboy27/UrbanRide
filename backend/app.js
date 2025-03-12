const dotenv = require('dotenv') ; 
dotenv.config(); 
const express = require('express') ; 
const cors = require('cors') ; 
const connecttodb= require('./db/db') ; 
 
const cookieParser = require('cookie-parser') ;

const app = express() ;

const userRoutes = require('./routes/user.routes') ; 
const captainRouter = require('./routes/captain.routes') ;  
const mapsRouter = require('./routes/maps.routes') ; 


connecttodb() ; 



app.use(cors()) ; 
app.use(express.json()) ; 
app.use(express.urlencoded({extended : true}))  ; 
app.use(cookieParser()) ;

app.get('/' , (req , res ) =>{
    res.send("hello world") ; 
}) ; 

app.use('/users' , userRoutes) ; 
app.use('/captains' , captainRouter) ;
app.use('/maps' , mapsRouter) ;



module.exports =app ; 
