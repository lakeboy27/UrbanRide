const userModel = require('../models/user.model') ;
const bcrypt = require('bcrypt') ;
const jwt = require('jsonwebtoken') ;   
const blacklistModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model') ; 

module.exports.authUser = async (req , res , next ) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ] ;
    if(!token){
        return res.status(401).json({message : 'Unauthenticated'}) ; 
    }
   
    const isBlacklisted = await userModel.findOne({ token :  token}) ;

    if(isBlacklisted){
        return res.status(401).json({message : 'Unauthenticated'}) ; 
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET) ;
        const user = await userModel.findById(decoded._id) ;
        // if(!user){
        //     return res.status(401).json({message : 'Unauthenticated'}) ; 
        // }
        req.user = user ;
        return next() ;
    }catch(err){
        return res.status(401).json({message : 'Unauthenticated'}) ; 
    }

}

module.exports.authCaptain = async (req , res , next ) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ] ;
    if(!token){
        return res.status(401).json({message : 'Unauthenticated'}) ; 
    }
   
    const isBlacklisted = await blacklistModel.findOne({ token :  token}) ;

    if(isBlacklisted){
        return res.status(401).json({message : 'Unauthenticated'}) ; 
    }

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET) ;
        const captain = await captainModel.findById(decoded._id) ;
        // if(!user){
        //     return res.status(401).json({message : 'Unauthenticated'}) ; 
        // }
        req.captain = captain ;
        return next() ;
    }catch(err){
        return res.status(401).json({message : 'Unauthenticated'}) ; 
    }

}