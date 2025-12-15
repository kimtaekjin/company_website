require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT=3000;


app.get("/",(req,res)=>{
    app.send("Hello world");
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB연결이 성공하였습니다");
}).catch((error)=>{
    console.log("MongoDB연결이 실패하였습니다",error);
})


app.listen(PORT,()=>{
    console.log("server is running");
})