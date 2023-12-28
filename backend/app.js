import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import cors from 'cors';
dotenv.config();
const app= express();
app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter); 
const key = process.env.SECRET_KEY;
mongoose
    .connect(
    'mongodb+srv://dgoyal6be22:'+key+'@cluster0.m8lzqna.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(()=>app.listen(5000))
    .then(()=>
    console.log("connected to database and listening at 5000")
    )
    .catch((err)=>console.log("error"));
