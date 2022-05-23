const fs = require('fs');
const http = require('http');
const port = process.env.port;
const hostName = '127.0.0.1';

const myServer = http.createServer((req, res) =>{

    const handleReadFile = (statusCode, fileLocation, req) => {
        fs.readFile(fileLocation, (err, data) => {
            console.log(req.url);
            res.writeHead(statusCode, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        });
    }
    if(req.url === '/'){
        handleReadFile(200, "./views/index.html", req);
    }
    else if(req.url === '/about'){
        handleReadFile(200, "./views/about.html", req);
    }
    else if(req.url === '/contact'){
        handleReadFile(200, "./views/contact.html", req)
    }
    else{
        handleReadFile(400, "./views/error.html", req);
    }
});

myServer.listen(port, hostName, () =>{
    console.log(`Server is running at http://${hostName}:${port}`);
});