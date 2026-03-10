const express=require("express");
const title="Home Page";
// student schema
const Student=require("../models/Student.js");
const Country=require("../models/Country.js");
const Contact=require("../models/Contact.js");
const Feedback=require("../models/Feedback.js");
const router=express.Router();
const app=express();
// used flash
const flash=require("connect-flash");
//used flash for showing messages
app.use(flash());
// used global variables for flash messages
app.use((req,res,next)=>{
res.locals.success_msg=req.flash("success_msg");
res.locals.error_msg=req.flash("error_msg");
next();
})
// create student routing 
// create a Home page routing
router.get("/",(req,res)=>{
res.render("index",{title:title});
});
// add students form
router.get("/add-students",(req,res)=>{
res.render("addstudent",{title:title});
});
// add students data in student collection 
router.post("/add-students",async(req,res)=>{
// add data in student collection
const{name,email,age}=req.body;
const insertStudents=new Student({name,email,age});
// insert data in mongoDB collection using mongoose 
// check condition
try 
{
await insertStudents.save();
req.flash("success_msg", "Student added successfully");
res.redirect('/manage-students');
}
catch(err){

req.flash("error_msg", "Something went wrong check again");
res.redirect('/add-students');

}
})
// manage students 
router.get("/manage-students",async(req,res)=>{
// display all students here
const stdItems=await Student.find();
res.render("managestudent",{title:title,stdItems});
})

// delete student data 
router.get("/delete/:id",async(req,res)=>{
 try 
{   
 await Student.findByIdAndDelete(req.params.id);
 req.flash("success_msg", "Student deleted successfully");
 res.redirect('/manage-students');
}
catch(err){

req.flash("error_msg", "Something went wrong check again");
res.redirect('/manage-students');

}
})

// edit students data 
router.get("/edit/:id",async(req,res)=>{
 const stdItem=await Student.findById(req.params.id);
 res.render('editstudent',{stdItem});
})


// update students data 
router.post("/edit/:id",async(req,res)=>{
try
{
const{name,email,age}=req.body;
await Student.findByIdAndUpdate(req.params.id,{name,email,age});    
req.flash("success_msg", "Student updated successfully");
res.redirect('/manage-students');
}
catch(err)
{
req.flash("error_msg", "Something went wrong check again");
res.redirect('/manage-students');
}
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