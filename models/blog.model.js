const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: ['Technology', 'Health', 'Lifestyle', 'Education', 'Finance'], // Example categories
        message: 'Category is not valid'
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('Blog', blogSchema);
