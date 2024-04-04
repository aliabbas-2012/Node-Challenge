// src/middleware/authMiddleware.js
require('dotenv').config()
const jwt = require('jsonwebtoken');
const config = process.env.SECRET_KEY;

module.exports = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    try {
        const decodedToken = jwt.verify(token, config);
        req.userData = { userId: decodedToken.userId };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};
