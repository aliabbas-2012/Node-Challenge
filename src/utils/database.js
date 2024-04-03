// src/utils/database.js
const { Sequelize } = require('sequelize');
require('dotenv').config();

// Extract database connection parameters from environment variables
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// Define database connection
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    // Additional options
});

module.exports = sequelize;
