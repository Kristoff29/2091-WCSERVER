// Name: Kristoffer C. Lacson
// Module 3
// Week 2 and 3: Basics of NodeJS

//first program
console.log("Welcome to WCServer!");

//Creating my first function
function Display(x) {
    console.log(x);
}

Display(200);

var http = require('http');

var server = http.createServer(function(req, res){
    //write code here
});

server.listen(5000);