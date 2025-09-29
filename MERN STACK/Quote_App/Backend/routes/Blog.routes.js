const router = require("express").Router()
const {auth : authMiddleware } = require("../middleware/auth");
const Blogcontoller = require("../controllers/Blog.controller");


router.get("/", authMiddleware, Blogcontoller.getAllBlogs); //bulk get blogs
router.get("/:id", authMiddleware, Blogcontoller.getBlogByid); // show specific blogs
router.post("/", authMiddleware, Blogcontoller.createBlog); // create a blog
router.put("/:id", authMiddleware, Blogcontoller.UpdateBlog); // update a blog
router.delete("/:id", authMiddleware, Blogcontoller.DeleteBlog); // delete a blog 




module.exports = router