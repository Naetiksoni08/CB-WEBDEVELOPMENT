const router = require("express").Router()
const authroutes = require("./auth.routes");
// const userRoutes = require("./user.routes");



router.use("/auth", authroutes);
// router.use("/user", userRoutes);

module.exports = router;