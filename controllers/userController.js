const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

//@desc register a user
//@route Post /api/users/register
//@access public

const registerUser = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory!");
    }
    const userAvailable = await 
    res.json({
        message:"Registered"
    });
});

//@desc loginuser
//@route Post /api/users/login
//@access public

const loginUser = asyncHandler(async (req,res) => {
    res.json({
        message:"logged in"
    });
});

//@desc current user
//@route Post /api/users/current
//@access private

const currentUser = asyncHandler(async (req,res) => {
    res.json({
        message:"I am current user"
    });
});


module.exports = {registerUser,loginUser,currentUser}