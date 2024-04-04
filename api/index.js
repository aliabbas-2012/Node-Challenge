// index.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./src/utils/database');
const authRoutes = require('./src/routes/authRoutes');
profileRoutes = require('./src/routes/profileRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Routes
app.use('/', authRoutes);
app.use('/', profileRoutes);


// Sync Sequelize models with the database
sequelize.sync()
    .then(() => {
        console.log('Connected to MySQL database and synchronized Sequelize models');
        // Start the server
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });
