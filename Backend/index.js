const express = require("express");
const app = express();
const mongoose=require("mongoose");
app.use(express.json());
const databaseconnection = require("./database/dbconnection");
const USER_MODEL=require("./models/User");


app.post("/users", async(req,res)=>{
    try {
        const {name, email,mobile,password}= req.body;

        const newuser = new USER_MODEL({name, email,mobile,password});
        await newuser.save();
        res.json({success:true, data:"user's details saved"});
    } catch (error) {
        res.json({success:false, error:error.message}); 
        
    }
});

app.get("/allusers", async(req,res)=>{
    try {
        const user = await  USER_MODEL.find();
        res.json({success:true, data: user});
    } catch (error) {
        res.json({success:false, error:error.message}); 
        
    }
});





























databaseconnection();

let port =8000;
app.listen(port,()=> console.log(`Server is running at ${port}`))