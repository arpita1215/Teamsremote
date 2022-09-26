const mongoose = require("mongoose");

const databaseconnection = async()=>{
    try {
       await mongoose.connect("mongodb://localhost:27017/Teamsremote");
       console.log("Data base connected");

    } catch (error) {
        console.log(error)
        
    }
}

module.exports= databaseconnection;