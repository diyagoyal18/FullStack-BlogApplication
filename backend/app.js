import express from "express";
import mongoose from 'mongoose';
const app= express();

mongoose.connect(
    'mongodb+srv://dgoyal6be22:dK7hPyLKwbn69nP7@cluster0.m8lzqna.mongodb.net/Blog?retryWrites=true&w=majority'
    ).then(()=>app.listen(5000)).then(()=>console.log("connected to database and listening to 5000")).catch((err)=>console.log("error"));
