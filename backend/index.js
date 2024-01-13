require('dotenv').config();
const express = require('express'); // importing express.js
const app = express();
const PORT = process.env.PORT;
const db = require('./config/mongoose'); // Database

// Checking whether database is connected or not
db().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is Running on PORT:${PORT}`)
    })
}).catch((error) => {
    console.log(`Database not connected:${error}`);
})
