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
app.set('views',path.join(__dirname,'views'));
// app.set('views',path.join(__dirname,'views/admin'));
// used a static path load in templates 
app.use(express.static(path.join(__dirname,'public')));
// set a default engine ejs 
app.set('view engine','ejs');
// create a routing of home page ....
app.get('/',((req,res)=>{
    // res.send('index',{title:'Online provides kitchy with all city'});
     res.render('customers/index',{title:'Online provides kitchy with all city'});
}))

// about us of kitchy  app
app.get('/about-us',((req,res)=>{
res.render('customers/about',{title:'Online provides kitchy with all city :: about us'});
}))
// contact us kitchy app
app.get('/contact-us',((req,res)=>{
res.render('customers/contact',{title:'Online provides kitchy with all city :: contact us'});
}))
 
// admin routing login page ...
app.get('/admin-login',((req,res)=>{
res.render('admin/login',{title:'Kitchy app Admin :: Login Page'});
}))

// admin routing dashboard page ...
app.get('/admin-login/dashboard',((req,res)=>{
res.render('admin/content',{title:'Kitchy app Admin :: dashboard'});
}))
// admin routing add category page ...
app.get('/admin-login/add-category',((req,res)=>{
res.render('admin/addcategory',{title:'Kitchy app Admin :: add category'});
}))

// admin routing add category page ...
app.get('/admin-login/manage-category',((req,res)=>{
res.render('admin/managecategory',{title:'Kitchy app Admin :: manage category'});
}))

// The 404 catch-all route handler (MUST BE LAST)
app.use((req, res, next) => {
    // Set the HTTP status code to 404
    res.status(404);
    // Render your custom 404 EJS page
    res.render('customers/pagenotfound', { title: 'Page Not Found' });
});


// create a server 
const port=3000;
app.listen(port,()=>{
    console.log(`server running on  http://localhost:${port}`)
})
