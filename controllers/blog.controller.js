const blog = require("../models/blog.model");

const handleGetAllBlogs = async (req, res) => {
  try {
    const blogs = await blog.find().select("-publishedAt");
    res.json(blogs);
  } catch (error) {
    const message = error.message;
    res.status(500).json({ message });
  }
};

const handleGetBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blog.findById(blogId).select("-publishedAt");
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json(blog);
    }
  } catch (error) {
    const message = error.message;
    res.status(500).json({ message });
  }
};


const handleCreateBlog = async (req, res) => {
  try {
    const blog = await blog.create(req.body);
    res.json(blog);
  } catch (error) {
    const message = error.message;
    res.status(500).json({ message });
  }
};


const handleUpdateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blog.findByIdAndUpdate(blogId, req.body, { new: true });
    if (!blog) {
      res.status(404).json({ message: "Blog not found" });
    } else {
      res.json(blog);
    }
  } catch (error) {
    const message = error.message;
    res.status(500).json({ message });
  }
};


const handleDeleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    await blog.findByIdAndDelete(blogId);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    const message = error.message;
    res.status(500).json({ message });
  }
};
module.exports = {
  handleGetAllBlogs,
  handleGetBlogById,
  handleCreateBlog,
  handleUpdateBlog,
  handleDeleteBlog,
};
