const router = require("express").Router()
const authroutes = require("./auth.routes");
// const userRoutes = require("./user.routes");
const BlogRoutes = require("./Blog.routes");



router.use("/auth", authroutes);
router.use("/Blog",BlogRoutes);

module.exports = router;