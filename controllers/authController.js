const User=require("../models/UserModel");
const brypt=require("bcrypt")

const registerUser=async(req,res)=>{
    
    const isAlredayExists=await User.findOne({email:req.body.email});
    if(isAlredayExists)
    {
        return res.status(500).send({
            message:"User alreday exists"
        })
    }
    
    const newUser=await User.create({...req.body,password:await brypt.hash(req.body.password,8)});
    if(newUser)
    {
        return res.status(200).send({
            message:"User created successfully",
            newUser:newUser
        })
    }
}

// const loginUser=async (req,res)=>{
//     const user=req.body;

// }

module.exports={
    registerUser,
}