const jwt = require("jsonwebtoken");
const generateToken=(id)=>{
return jwt.sign({id},"Iamprogrammer",{
    expiresIn:"30d",
})
}
module.exports=generateToken()