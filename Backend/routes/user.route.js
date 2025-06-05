const express = require('express');
const router = express.Router();

const{body} = require('express-validator');

const userController = require('../controller/user.controller.js');
const authMiddleware = require('../middlewares/auth.middleware.js');

router.post('/register',[
    body('email').isEmail().withMessage('Please enter a valid email address'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], userController.loginUser)

router.get('/profile',authMiddleware.authUser, userController.getUserProfile);

router.get('/logout',authMiddleware.authUser,userController.logoutUser);

module.exports = router;// This code sets up an Express router for user-related routes in a Node.js application.
// It imports the Express library, creates a new router instance, and exports it for use in other parts of the application.