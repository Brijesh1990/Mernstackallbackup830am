const http=require("http")
// create a server of node js 
const server=http.createServer((req,res)=>{
   //create a routing  
   if(req.url==="/")
   {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Welcome to Our Home Page</h1>")
   }
   else if(req.url==="/about-us")
   {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Welcome to Our About Us Page</h1>")
   }
   else if(req.url==="/services")
   {
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end("<h1>Welcome to Our services Page</h1>")
   }
   else if(req.url==="/contact-us")
   {
      res.writeHead(200,{"Content-Type":"text/html"});
      res.end("<h1>Welcome to Our Contact Us Page</h1>")
   }
   else 
   {
    res.writeHead(404,{"Content-Type":"text/html"});
    res.end("<h1>Page is Not found</h1>")
   }

})

// create a server port 
server.listen(3000,()=>{
    console.log("server is starting on : http://localhost:3000")
})