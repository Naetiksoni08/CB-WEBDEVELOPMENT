const UserModel = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const JWT_SECRET = process.env.JWT_SECRET;


module.exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username)
            res.status(400).json({ success: false, message: "username required" });
        if (!password)
            res.status(400).json({ success: false, message: "password required" });

        const user = await UserModel.findOne({ username });

        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Username or password not correct"
            })
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(400).json({
                success: false,
                message: "Username or password not correct"
            })
        }
        //now both username and password exists now we we will make a jwt token
        // id: user._id, username this is our payload.. like the data passed is payload or frontend sai hum body mai data send karte hai that is payload
        const token = jwt.sign({ id: user._id, username }, JWT_SECRET, { // firstly we will sign the user id and username then we pass our secret and then in options we generally pass the algo we want to use and expiry
            expiresIn: "7d"
        })

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            data: { // now we will get the data
                token,
                user: { 
                    _id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
        })




    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error",
            error: error
          })
        }
      };



/**
 *
 * {
 *  success: true | false,
 *  message: "Success",
 *  data: [] either data we'll get or error 
 * }
 *
 */


module.exports.register = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username)
            res.status(400).json({ success: false, message: "username required" });
        if (!email)
            res.status(400).json({ success: false, message: "email required" });
        if (!password)
            res.status(400).json({ success: false, message: "password required" });

        const user = await UserModel.findOne({ username });

        if (user) {
            return res.status(200).json({
                success: true,
                message: "User already exists!",
                // data: null
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User created successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
            error: error
        });
    }
};
