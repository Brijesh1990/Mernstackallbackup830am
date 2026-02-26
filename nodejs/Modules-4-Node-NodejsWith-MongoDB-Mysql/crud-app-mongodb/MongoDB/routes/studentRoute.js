const express=require("express");
const title="Home Page";
// student schema
const Student=require("../models/Student.js");
const Country=require("../models/Country.js");
const Contact=require("../models/Contact.js");
const Feedback=require("../models/Feedback.js");
const router=express.Router();
// create student routing 
// create a Home page routing
router.get("/",(req,res)=>{
    res.render("index",{title:title});
});
// add students form
router.get("/add-students",(req,res)=>{
    res.render("addstudent",{title:title});
});
// manage students 
router.get("/manage-students",(req,res)=>{
    res.render("managestudent",{title:title});
})

// create an admin Routing
router.get("/admin-login",(req,res)=>{
    res.render("admin/adminlogin",{title:title});
});
// dashboard of admin
router.get("/admin-login/dashboard",(req,res)=>{
    res.render("admin/dashboard",{title:title});
});
module.exports=router;