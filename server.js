import axios from "axios"; //we calling python API here
import express from "express";
import mongoose from "mongoose";

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


//user route
app.post('/api/users/register', async(req, res) => {
    const {username, email, password} = req.body;
    res.json({message: "User registered successfully"})
})

//task analytics (calling python api)
app.post('/api/tacks/analyze', async(req, res) => {
    try {
        const response = await axios.post('http://localhost:6000/analyze_tacks', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500),json({error: "Failed to task analytics"})
    }
})


const port = 4000
app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
    
})
