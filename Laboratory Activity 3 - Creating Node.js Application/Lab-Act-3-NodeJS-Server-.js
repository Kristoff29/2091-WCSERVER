var http = require('http');

var server = http.createServer(function(req,res){
    function root(name){
        name = "John Smith";
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`<html><head><style>#name{position: fixed;bottom: 0;width: 100%;height: 120px;}</style></head><body><h2>Welcome to my Node.js Application</h2><p>Welcome ${name}. This is an activity about basics of Node.js</p><div id="name"><h2>Lacson, Kristoffer C. <br> WD-201 <br> January 30, 2023</h2></div></body></html>`);
        res.end();
        return name;
    }
    function about(name){
        name = "John Smith";
        res.writeHead(200, {'Content.Type': 'text/html'});
        res.write(`<html><head><style>#name{position: fixed;bottom: 0;width: 100%;height: 120px;}</style></head><body><h2>This is the About Page</h2><p>Hello ${name}. This activity will teach on how to deal with a simple server and local modules in Node.js</p><div id="name"><h2>Lacson, Kristoffer C. <br> WD-201 <br> January 30, 2023</h2></div></body></html>`);
        res.end();
        return name;
    }
    function contact(name){
        name = "John Smith";
        res.writeHead(200, {'Content.Type': 'text/html'});
        res.write(`<html><head><style>#name{position: fixed;bottom: 0;width: 100%;height: 120px;}</style></head><body><h2>This is the Contact Page</h2><p>${name}, if you want additional details about this activity go to this site: https://www.tutorialsteacher.com/nodejs/nodejs-tutorials.</p><div id="name"><h2>Lacson, Kristoffer C. <br> WD-201 <br> January 30, 2023</h2></div></body></html>`);
        res.end();
        return name;
    }
    if(req.url == '/'){
        root();
    }

    else if (req.url == '/about'){
        about();
    }
    else if (req.url == '/contact'){
        contact();
    }
    else if (req.url == '/gallery'){
        res.writeHead(200, {'Content.Type': 'text/html'});
        res.write('<html><head><style>#name{position: fixed;bottom: 0;width: 100%;height: 120px;}</style></head><body><h2>This is the Gallery Page</h2></p><div id="name"><h2>Lacson, Kristoffer C. <br> WD-201 <br> January 30, 2023</h2></div></body></html>');
        res.end();
    }
    
    else
        res.end('Invalid Request!');

})

server.listen(2000);
console.log('Node.js web server at port 2000 is running..')