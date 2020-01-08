const http = require('http');  //import 'http' package
const app = require('./app');

const port = process.env.PORT || 3000; // set port number

const server = http.createServer(app); // creates the server

server.listen(port);
