const { request } = require("express")
const asyncHandler = require('express-async-handler');
const User=require("../models/UserModel");
const generateToken=require("../config/generateToken");
const registerUser=asyncHandler( async (req,res)=>{
    const{username,email,password,confirmpassword}= req.body
    if (!username||!email||!password||!confirmpassword) {
        res.status(400);
        throw new Error("Please provide Error Field")
    }
    const userExists= await User.findOne({email});
    if (userExists) {
        res.status(400)
        throw new Error("User already Exists");
    }
    const user= User.create(
        {
            username,
            email,
            password,
            confirmpassword,
        }
    )
    if(user){
        res.status(201).json({
            _id:user._id,
            username:user.username,
            password:user.password,
            confirmpassword:user.confirmpassword,
            token:generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Failed to register")
    }
    })
  module.exports={registerUser}