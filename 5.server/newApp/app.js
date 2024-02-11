const http = require('http');
const fs = require('fs');

const PORT = 5200;

http.createServer((req,res) => {
    const url = req.url;

    switch (url) {
        case "/":
            res.write("Home")
            break;
        case "/contacts":
            res.write("Contacts");
            break;
        default:
            res.write("404")
            break;
    }
}).listen(PORT);