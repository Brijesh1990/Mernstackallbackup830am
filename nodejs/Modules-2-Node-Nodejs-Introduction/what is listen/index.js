const http=require("http")
// create a server of node js 
const server=http.createServer((req,res)=>{

    // request to server to load an header content
    // res.writeHead(200,{"Content-Type":"text/html"});
    // // res.end("<h1>Hi i am Brijesh</h1>");
    // res.end("<h1 align='center'>Hi i am Brijesh</h1>");


    //  res.writeHead(200,{"Content-Type":"text/text"});
    // // res.end("<h1>Hi i am Brijesh</h1>");
    // res.end("<h1 align='center'>Hi i am Brijesh</h1>");


    

     res.writeHead(200,{"Content-Type":"text/html"});
    // res.end("<h1>Hi i am Brijesh</h1>");
    res.end("<h1 align='center'>Hi i am Krunal</h1>");

})

// create a server port 
server.listen(3000,()=>{
    console.log("server is starting on : http://localhost:3000")
})