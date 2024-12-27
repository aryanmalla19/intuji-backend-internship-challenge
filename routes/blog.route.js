const express = require('express');
const router = express.Router();
const {  
    handleGetAllBlogs, 
    handleGetBlogById, 
    handleCreateBlog, 
    handleUpdateBlog, 
    handleDeleteBlog 
} = require('../controllers/blog.controller');

// Route to get all blogs
router.get('/', handleGetAllBlogs);

// Route to get a blog by ID
router.get('/:id', handleGetBlogById);

// Route to create a new blog
router.post('/', handleCreateBlog);

// Route to update a blog by ID
router.put('/:id', handleUpdateBlog);

// Route to delete a blog by ID
router.delete('/:id', handleDeleteBlog);

module.exports = router;
