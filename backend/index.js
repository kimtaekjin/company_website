const express = require("express");
const app = express();
const PORT = 3000;

app.get("/",(req,res)=>{
    app.send("Hello world");
})

app.listen(PORT,()=>{
    console.log("server is running");  
})
