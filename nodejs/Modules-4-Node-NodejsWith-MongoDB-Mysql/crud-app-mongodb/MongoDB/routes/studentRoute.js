const express=require("express");
const title="Home Page";
// student schema
const Student=require("../models/Student.js");
const router=express.Router();
// create student routing 
// create a Home page routing
router.get("/",(req,res)=>{
    
    res.render("index",{title:title});
})
module.exports=router;