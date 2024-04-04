// src/controllers/profileController.js
const User = require('../models/user');

exports.createProfile = async (req, res) => {
    try {
        const userId = req.userData.userId;
        const { name, email, avatar } = req.body;
        await User.update({ name, email, avatar }, { where: { id: userId } });
        res.status(200).json({ message: 'Profile created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateProfile = async (req, res) => {
    try {
        const userId = req.userData.userId;
        const { name, email, avatar } = req.body;
        await User.update({ name, email, avatar }, { where: { id: userId } });
        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
