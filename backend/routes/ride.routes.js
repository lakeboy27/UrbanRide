const express = require('express') ; 
const router = express.Router() ; 
const {body , query} = require('express-validator') ; 
const rideController = require('../controllers/ride.controller') ; 
const authMiddleware = require('../middlewares/auth.middleware') ; 

router.post('/create', authMiddleware.authUser , 
    body('pickup').isString().isLength({ min: 3 }).withMessage('Pickup location must be a string'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long'),
    body('vehicleType').isString().isIn(['auto' , 'car' , 'moto']).withMessage('Invalide vehicle type') , 
    rideController.createRide 
)

router.get('/getfare' , authMiddleware.authUser , 
    query('pickup').isString().isLength({ min: 3 }).withMessage('Pickup location must be a string'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination must be at least 3 characters long'),
    rideController.getFare
)



module.exports = router ; 