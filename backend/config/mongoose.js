const mongoose = require('mongoose');
const URI = process.env.DB_URI;

const db = async () => {
    await mongoose.connect(URI);
}

module.exports = db;