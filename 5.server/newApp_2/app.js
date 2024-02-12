const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 5200;

http.createServer((req,res) => {
    const url = req.url;
    res.setHeader('Content-Type', 'text/html, charse=utf8');
    switch(url) {
        case '/':
            break;
        case '/contacts':
            const data = fs.readFileSync("./public/contacts.html", {encoding: "utf8", flag: "r"})
            res.write(data);
            break;
        default:
            if (url.includes("/images")) {
                res.setHeader('Content-Type', 'image/' + path.extname(url))
                const data = fs.readFileSync('./public' + url);

                res.write(data);
            } else {
                res.write("404");
            }
            break;
    };

    res.end();
}).listen(PORT);