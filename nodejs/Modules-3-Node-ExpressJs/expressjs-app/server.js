const express=require("express");
const app=express();
// create a req and response via express
// app.get("/",(req,res)=>{
//     res.send("Hello world")
// })

// Home page routing 

app.get("/",(req,res)=>{
    res.send("Hello world")
})

// about page routing 

app.get("/about-us",(req,res)=>{
    res.send("about us page")
})

// services page

app.get("/our-services",(req,res)=>{
    res.send("Load our services pages 🔧")
})

// response error
app.get("/404",(req,res)=>{
    res.send("page not found")
})

app.post("/login",(req,res)=>{
    res.send("You are Logged in successfully")
})

// update something
app.get("/update-data",(req,res)=>{
    res.send("update the data")
})

// delete something
app.get("/delete",(req,res)=>{
    res.send("deleted successfully")
})
//get json formate

app.get('/json-data',(req,res)=>{

     res.send({
        name:"brijesh",
        age:34,
        department:"IT",
        salary:89500
     })

})
// create a server using listen
// app.listen(3000,()=>{
//     console.log("server is running on http://localhost:3000")
// })

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`)
})
