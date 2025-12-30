// http provides request
const http=require("http");
// express 
const express=require("express");
// express stored in app
const app=express();
// load a path ...
const path=require("path");
// load a title ..
const { title }=require("process");
// load or set a directory or static path in templates..
app.set('views',path.join(__dirname,'views/customers'));
// used a static path load in templates 
app.use(express.static(path.join(__dirname,'public')));
// set a default engine ejs 
app.set('view engine','ejs');
// create a routing of home page ....
app.get('/',((req,res)=>{
    // res.send('index',{title:'Online provides groccessory with all city'});
     res.render('index',{title:'Online provides groccessory with all city'});
}))

// create a server 
const port=3000;
app.listen(port,()=>{
    console.log(`server running on  http://localhost:${port}`)
})
