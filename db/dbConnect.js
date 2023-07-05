const mongoose=require("mongoose");


mongoose.connect("mongodb://localhost:27017/NewsApp").then(()=>{
    console.log("Connected to DataBase...");
}).catch((err)=>{
    console.log(err);
})