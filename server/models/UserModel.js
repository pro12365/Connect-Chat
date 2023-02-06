const mongoose=require('mongoose')
const userschema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
        required:true,
        default:  "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false,
        },
},
    {
        timestamps:true
    })
const  User= mongoose.model("User",userschema)
module.exports=User