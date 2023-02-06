const mongoose=require("mongoose");
const connectDb= async ()=>{
try {
    const conn=await  mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useFindAndModify:true,
    });
    console.log(`Monogo Db Connceted: ${conn.connection.host}`.cyan.bold);
}
catch (error) {
    console.log(`Error:${error.message}`.red.bold);
    process.exit();
}
};
module.exports=connectDb;