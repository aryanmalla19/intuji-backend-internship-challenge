const Blog = require("../models/blog.model");

const handleGetAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find(); 
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleGetBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await Blog.findById(blogId);
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json(blog);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleCreateBlog = async (req, res) => {
  try {
    const newBlog = await Blog.create(req.body); 
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleUpdateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, req.body, {
      new: true,
    }); // Use Blog model
    if (!updatedBlog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json(updatedBlog);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const handleDeleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deletedBlog = await Blog.findByIdAndDelete(blogId); // Use Blog model
    if (!deletedBlog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json({ message: "Blog deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  handleGetAllBlogs,
  handleGetBlogById,
  handleCreateBlog,
  handleUpdateBlog,
  handleDeleteBlog,
};
