const router = require("express").Router()
const authcontroller = require("../controllers/auth.controller");


router.post("/login", authcontroller.login)

router.post("/register",authcontroller.register);



module.exports = router;

