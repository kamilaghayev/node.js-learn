const http = require('http');

const PORT = 5200;

http.createServer((req,res)=>{
    const url = req.url;
    res.setHeader('Content-Type', 'text/html, charset=UTF-8');
    switch (url) {
        case '/':
            res.write('<h1>main page</h1>')
            break;
        case '/about': 
            res.write('<h1>about page</h1>')
            break;
        default:
            res.write('<h1>error 404</h1>')
            break;
    };
    res.end();
}).listen(PORT)
