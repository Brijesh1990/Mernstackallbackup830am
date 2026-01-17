const express=require('express');
const app=express();
const session=require("express-session");
const port=3000;
// load a path ...
const path=require("path");
// load a title ..
const { title }=require("process");
// body-parser (body-parser is used to read a form data)
const bodyParser=require("body-parser");
// connect-flash (is a library i.e used to pass a flash messages in UI)
const flash=require("connect-flash");
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

// create a table in mysql2 using create tables query
// const createTableQuery=`CREATE TABLE IF NOT EXISTS addtask (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     tasktype VARCHAR(255) NOT NULL,
//     added_date varchar(255) NOT NULL,
//     start_time varchar(255) NOT NULL,
//     end_time varchar(255) NOT NULL, 
//     description TEXT,
//     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
// )`; 
// db.query(createTableQuery,(err,result)=>{
//     if(err){
//         console.error('Error creating table:',err);
//         return;
//     }
//     console.log('Table created or already exists');

// });

// load or set a directory or static path in templates..
app.set('views',path.join(__dirname,'views'));
// used a static path load in templates 
app.use(express.static(path.join(__dirname,'public')));

// set a default engine ejs 
app.set('view engine','ejs');

// middleware (middleware is an immidiator that can be pass data from ui in mysql in encoded formate)
app.use(bodyParser.urlencoded({extended:false}));
// used session for flash 
app.use(session({

secret:'crud_secret',
resave:false, 
saveUninitialized:true 

}))

// set globally connect-flash as success and error
app.use(flash());
app.use((req,res,next)=>{

    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    next();
})

// create a routing of home page ....
app.get('/',((req,res)=>{
res.render('index',{title:'Node js Task Manager APP Home Page(MYSQL2)'});
}))


// create a routing of add dashboard ....
app.get('/dashboard',((req,res)=>{
res.render('dashboard',{title:'Node js Task Manager APP :: Dashboard'});
}))

// used mysql2 to insert data via post method (create a insert)
app.post('/dashboard',(req,res)=>{
    // stored all data in a variables 
    const {title,tasktype,added_date,start_time,end_time,description} =req.body;
    // insert a data into addtask tables 
    const sql = `INSERT INTO addtask(title, tasktype, added_date, start_time, end_time, description)VALUES (?, ?, ?, ?, ?, ?)`;
   
    db.query(
        sql,
        [title, tasktype, added_date, start_time, end_time, description],

       (err, result) => {
            if (err) {
                console.error(err);
                req.flash("error", "Task cannot be added, try again");
                return res.redirect("/dashboard");
            }

            req.flash("success", "Task added successfully");
            res.redirect("/dashboard");
        }
    );

});


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

// connection end  (don't used this )
// db.end();