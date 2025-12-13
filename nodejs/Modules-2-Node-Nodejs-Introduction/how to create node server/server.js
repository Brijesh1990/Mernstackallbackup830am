const http=require("http");
// create a node server
const server=http.createServer((req,res)=>{
    // req and res
    res.writeHead(200,{"Content-Type":"text/html"}); //writeHead accept request from client and response to browser in form of text | html | json and response code 200 | 201 | 404  
    // res.end("hello brijesh");
    // res.end("hello world");
    // res.end("hello divesh");
    // res.end("hello kishan");
     res.end("hello milan");
    // res.end() its send request to server and print data on browser

})

// create a sever port 
// server.listen(3000)
// print message in formate 

const port=3000;
server.listen(port,()=>{
    console.log(`server is running on : http://localhost:${port}`)
})