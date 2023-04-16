const express = require("express");

const router = express.Router();

//Get all workouts
router.get("/", (req,res)=>{
   res.json({msg: "GET all workouts"});
})

//GET a single workout
router.get("/:id", (req,res)=>{
    res.json({msg: "GET a single workouts"});
 })

 // POST  a new workout
 router.post("/", (req,res)=>{
    res.json({msg: "POST a new workout workouts"});
 })
module.exports = router
