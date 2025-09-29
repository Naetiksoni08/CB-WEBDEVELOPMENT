const BlogModel = require("../models/Blog.models");
const api = require("../Utils/api");



module.exports.createBlog = async (req, res) => {
    try {

        const { title, content } = req.body;
        if (!title) throw new Error("Title is Required !!");
        if (!content) throw new Error("Content is Required !!");
        const userid = req.user.id;
        const Blog = await BlogModel.create({ title, content, createdBy: userid });
        api.success(res, Blog);

    } catch (error) {
        api.error(res, error);
    }

}


module.exports.getBlogByid = async (req, res) => {
    try {

        const Blogid = req.params.id;
        if (!Blogid) throw new Error("Blog id Required !!");
        const blog = await BlogModel.findById(Blogid).populate("createdBy","_id email username Fullname");
        // populate({path:"createdBy",select:"Fullname"});
        api.success(res, blog);

    } catch (error) {
        api.error(res, error);

    }

}


module.exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.find({}).populate("createdBy","-password"); // get all  
        api.success(res, blogs);

    } catch (error) {
        api.error(res, error);
    }
}


module.exports.UpdateBlog = async (req, res) => {
    try {
        const Blogid = req.params.id;
        const { title, content } = req.body;
        if (!Blogid) throw new Error("Blog id Required !!");
        const data = {};

        if (title) data.title = title;
        if (content) data.content = content;

        // if (!title && content) { // basically we can check like that if usse title nai milega then voh aage hi nai jayega basically and aise kaam hi nai karta 

        if (Object.keys(data).length == 0) {
            throw new Error("Content or Title is Required !!"); // object is a class and usske andar .keys aur .values hai aur uske andar data pass karna hota hai fir uski length nikal lo agar equal to 0 hai that means ki bhai data is empty this is validation wala part backend level ka use joi or zod
        }

        const UpdatedBlog = await BlogModel.findByIdAndUpdate(Blogid, data, { new: true });
        api.success(res, UpdatedBlog);

    } catch (error) {
        api.error(res, error);
    }
}


module.exports.DeleteBlog = async (req, res) => {
    try {
        const Blogid = req.params.id;
        if (!Blogid) throw new Error("Blog id Required !!");
        const deletedBlog = await BlogModel.findByIdAndDelete(Blogid);
        api.success(res, deletedBlog);

    } catch (error) {
        api.error(res, error);
    }
}


// populate("createdBy","_id email username Fullname") this and this ("-password ") mtlb password ko chodh kar sabkuch both works