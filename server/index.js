import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose';

const app=express();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(3000,()=>{
        console.log("Server running on port "+3000);
    })
})
.catch((err)=>{
    console.log(err);
})

// middleware
app.use(express.json());
