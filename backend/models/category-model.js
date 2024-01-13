const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;