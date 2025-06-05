const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req, res, next) => {
    const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }   

    const isBlacklisted = await userModel.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Token is blacklisted' });
    }




    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        
        req.user = user; // Attach user to request object
        return next(); // Proceed to the next middleware or route handler
    } catch (error) {

        return res.status(401).json({ message: 'Invalid authentication token' });
        }       



    }

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authentication token is missing' });
    }   

    const isBlacklisted = await blacklistTokenModel.findOne({ token: token });
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Token is blacklisted' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain; // Attach captain to request object
        return next(); // Proceed to the next middleware or route handler
    } catch (error) {
        return res.status(401).json({ message: 'Invalid authentication token' });
    }
}