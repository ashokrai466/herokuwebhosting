const express = require("express");
const app= express();
 let port =process.env.PORT||3000;
 const importData =require("./data.json")
 app.get("/",(req,res)=>{
 res.send("hello from home page ");



 })
app.get("/Players",(req,res)=>{
res.send(importData);


})


 app.listen(port,()=>{
 console.log(`example app is running at port http://localhost:${port}`);

 })