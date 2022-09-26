const mongoose = require("mongoose");

const userModel =  new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const savemodel= mongoose.model("user", userModel);

module.exports=savemodel;
