const express = require('express') ; 

const router = express.Router() ; 

const {body} = require('express-validator') ; 
const userController = require('../controllers/user.controller') ;
const authMiddleware = require('../middlewares/auth.middleware') ;




router.post('/register' , [
    body('email').isEmail().withMessage('Invalid email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('first name require 3 character atleast') ,
    body('password').isLength({min : 5} ).withMessage('last name require 5 character atleast')
] , userController.registerUser) 

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min : 5} ).withMessage('last name require 5 character atleast')
] , 
userController.loginUser)

router.get('/profile' , authMiddleware.authUser , userController.getUserProfile) 

router.get('/logout' , authMiddleware.authUser , userController.logoutUser)




module.exports = router ; 
