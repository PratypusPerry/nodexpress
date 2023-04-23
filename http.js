const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url == '/')
    res.end(`<h1>Welcome to home page</h1>`);
    else if(req.url == '/about')
    res.end(`<h1>Welcome to about page</h1>`);
    else
    res.end(`<h1>Oops! Page not found</h1>`);
});
server.listen(5000);