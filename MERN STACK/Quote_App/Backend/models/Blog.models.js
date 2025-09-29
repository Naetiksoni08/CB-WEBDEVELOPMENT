const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Types.ObjectId, // simply we will get to know who created this which user created the blog
    ref: "User"
  }
});

const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;