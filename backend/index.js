require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors=require("cors");
const app = express();
const PORT=3000;

const userRoutes = require("./routes/user");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

app.use(express.json())       
app.use(express.urlencoded())   
/* 'username' of 'req.body' as it is undefined. 에러 수정 <-뜰 시 사용
    json 파일을 익스프레스 서버에서 해석하는 기능
*/
app.use(cookieParser()); //express에서 cookie를 읽게 함.



app.use("/api/auth",userRoutes);


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