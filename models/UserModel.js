const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:[true,"name is requires"]
        },
        email:{
            type:String,
            required:[true,"email required"],
            unique:[true,"Email alreday exists"],
            lowercase:true,
            trim:true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
                },
                message: "Please enter a valid email"
            }
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            default:"user",
        },
        createdAt:{
            type:Date,
            default:Date.now()
        }
    }
);

const User= new mongoose.model("user",userSchema);

module.exports=User;