const express=require('express');
const registerUser=require.resolve("../controller/userController");
const router=express.Router();
console.log(`registerUser${registerUser}`)
router.post(registerUser);
//router.post('/login',authUser)
module.exports=router