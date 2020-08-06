"use strict";
const http = require('http');
const port = 3000; 
const getQuote = require('./quotes');

http.createServer((req, res) => { //this is a callback function
    res.writeHead(200, {"Content-type": "text/plain"}); 
    res.write(getQuote.randomQuotes()) 
    res.end(); 
}).listen(3000), () => console.log(`server is listening on ${port}`);