const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 3110;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.json': 'application/json',
    '.mp3': 'audio/mpeg',
    '.mp4': 'video/mp4',
    '.txt': 'text/plain',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'woff': 'application/font-woff',
    'woff2': 'application/font-woff2',
    'ttf': 'application/font-ttf',
    'eot': 'application/vnd.ms-fontobject',
    'otf': 'application/font-otf',
    'swf': 'application/x-shockwave-flash',
    'wasm': 'application/wasm'    
};

const staticFile = (res, filePath, ext) => {
    res.setHeader('Content-Type', mimeTypes[ext]);
    let fileFullPath = './public' + filePath;
    if (path.extname(filePath) === '') {
        fileFullPath += ext;
    }
    fs.readFile(fileFullPath, (error, data) => {
        if (error) {
            res.statusCode = 404;
            res.end();
        };
        res.end(data);
    })
};

http.createServer((req,res) => {
    const url = req.url;

    switch(url) {
        case "/":

            break;
        case "/contacts":
            staticFile(res, '/pages/contacts.html', '.html');
            break;
        default:
            const extname = String(path.extname(url)).toLocaleLowerCase();
            if (!(extname in mimeTypes)) {
                res.statusCode = 404;
                res.end();
            };
            staticFile(res, url, extname);
            break;
    }
}).listen(PORT);