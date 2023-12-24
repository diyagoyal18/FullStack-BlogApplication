import express from "express";

const app= express();

app.use("/",(req,res, next)=>{
    res.send("helo");
});

app.listen(5000);