const express=require("express");
// connect app with mongoDB 
const connectDB=require('./config/db.js');
const session=require("express-session");
const flash=require("connect-flash");
require("dotenv").config();
const app=express();
// database used here
connectDB();
// used ejs templates engine
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// load public folder
app.use(express.static("public"));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

//used flash for showing messages
app.use(flash());
// used global variables for flash messages
app.use((req,res,next)=>{
    res.locals.success_msg=req.flash("success_msg");
    res.locals.error_msg=req.flash("error_msg");
    next();
})

// used student route
const studentRoute=require("./routes/studentRoute.js");
app.use("/",studentRoute);
// start server
app.listen(3000,()=>{
    console.log("server is running on port http://localhost:3000");
})


