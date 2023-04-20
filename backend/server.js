require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

// express app 
const app = express();
 
// Middleware
app.use(express.json());

//create a route that will be used
app.use('/api/workouts',workoutRoutes);

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // listen to request
        app.listen(process.env.PORT, ()=>{
            console.log(`connected to db & listening on ${process.env.PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })
