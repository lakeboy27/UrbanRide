const mongoose = require('mongoose') ; 

const bcrypt = require('bcrypt') ; 
const jwt = require('jsonwebtoken') ; 

const userSchema = new mongoose.Schema({
    fullname : { 
        firstname : {
            type : String , 
            required : true , 
            minlength : [3 , 'first name require 3 character atleast'] 
        },
        lastname : {
            type : String ,
            minlength : [3 , 'last name require 3 character atleast'] 
        }
    },
    email : {
        type: String , 
        required : true , 
        unique : true , 
        minlength : [5 , 'email is require']
    },
    password : { 
        type : String , 
        required : true , 
        select : false
    },
    socketid : { 
        type : String 
    }
    
})

userSchema.methods.generateAuthToken = function() { 
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token  ; 
}

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password , this.password) ; 
}

userSchema.statics.hashPassword = async function(password) { 
    return await bcrypt.hash(password , 10 ) ; 
}

const userModel = mongoose.model('User' , userSchema) ; 

module.exports = userModel ;  




