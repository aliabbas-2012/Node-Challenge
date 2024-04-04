// src/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
const profileController = require('../controllers/profileController');

router.post('/profile', profileController.createProfile);
router.put('/profile',  profileController.updateProfile);

module.exports = router;
