import express from "express";
import mongoose from "mongoose";
import axios from "axios"; //we calling python API here

const app = express()

//middleware
app.use(express.json())

//database connect
mongoose.connect("mongodb://localhost:27017/task_management")
.then(() => {
    console.log("Database connected successfully");
}).catch((err) => {
    console.log("Database connection failed: ", err);    
})













const port = 4000
app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
    
})
