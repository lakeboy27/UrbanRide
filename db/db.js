const mongoose = require('mongoose') ; 

function connecttodb(){
    mongoose.connect(process.env.DB_CONNECT).then(()=> {
        console.log("db is connected") ; 
    }).catch(err => console.log(err)) ; 
}

module.exports = connecttodb ; 

