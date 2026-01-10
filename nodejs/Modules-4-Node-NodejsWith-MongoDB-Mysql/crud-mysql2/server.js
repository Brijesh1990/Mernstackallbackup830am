const express=require('express');
const app=express();
const port=3000;
// load a path ...
const path=require("path");
// load a title ..
const { title }=require("process");

// create mysql2 connection
const mysql2=require('mysql2');
const db=mysql2.createConnection({
host:'localhost',
user:'root',
password:'admin',
database:'taskmanager_app'
});
// check connection is stablished or not
db.connect((err)=>{
if(err){
console.error('Error connecting to database:',err);
return;
}
console.log('Connected to database');
});

// create a task manager app routing 

// load or set a directory or static path in templates..
app.set('views',path.join(__dirname,'views'));
// used a static path load in templates 
app.use(express.static(path.join(__dirname,'public')));

// set a default engine ejs 
app.set('view engine','ejs');

// create a routing of home page ....
app.get('/',((req,res)=>{
res.render('index',{title:'Node js Task Manager APP Home Page(MYSQL2)'});
}))

// create a routing of add dashboard ....
app.get('/dashboard',((req,res)=>{
res.render('dashboard',{title:'Node js Task Manager APP :: Dashboard'});
}))

// create a routing of add manage task ....
app.get('/managetask',((req,res)=>{
res.render('managetask',{title:'Node js Task Manager APP :: Dashboard'});
}))


// The 404 catch-all route handler (MUST BE LAST)
app.use((req, res, next) => {
// Set the HTTP status code to 404
res.status(404);
// Render your custom 404 EJS page
res.render('pagenotfound', { title: 'Page Not Found' });
});

// create a server using listen method
app.listen(port,()=>{
console.log(`Server is running on http://localhost:${port}`);
});

// connection end 
db.end();