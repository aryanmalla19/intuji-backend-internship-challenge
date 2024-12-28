const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');
const { urlencoded } = require('body-parser');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware for parsing JSON data
app.use(express.json());
app.use(urlencoded({ extended: true }));

// Blog routes
app.use('/blog', require('./routes/blog.route'));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
