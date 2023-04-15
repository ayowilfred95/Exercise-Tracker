require("dotenv").config();

const express = require("express");

// express app
const app = express();

//route
app.get("/", (req, res) => {
    res.send("Welome to the app");
})

//Listening for request
app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT}`)
})


