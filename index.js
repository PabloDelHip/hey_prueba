require('dotenv').config();
const express = require('express');
const appSocket = express();
const App = require('./http-server.js');
const router = require('./src/routes');
const port = process.env.PORT;
const port_socket = process.env.PORT_SOCKET;
const app = new App(router, port, port_socket);
 
const http = require('http');
const server = http.createServer(appSocket);
const { Server } = require("socket.io");
const io = new Server(server);

const listener = require('./src/sockets')
appSocket.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.listen();
//app.listenSocket()
listener(io)

server.listen(4200, () => {
  console.log('listening on *:4200');
});