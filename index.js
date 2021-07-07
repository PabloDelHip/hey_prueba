require('dotenv').config();
const express = require('express');
const appSocket = express();
const App = require('./http-server.js');
const router = require('./src/routes');
const port = process.env.PORT;
const port_socket = process.env.PORT_SOCKET;
const app = new App(router, port, port_socket);
 
app.listen();
app.listenSocket();

