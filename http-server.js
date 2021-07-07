const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});
const listener = require('./src/sockets')

class HttpServer {
    /**
     * Constructor
     * @param {Object} router Express router
     * @param {Number} port Port number
     */
    constructor(router, port, port_socket) {
      this.app = express();
      this.port = port || 3000;
      this.port_socket = port_socket || 4200;
      this.router = router;
      this.server = server;
      this.io = io;
      this.listener = listener(io);
      this.initConfig();
    }
  
  
    /**
     * Run the server
     * @returns {Object} Express instance
     */
    listen() {
      if (process.env.NODE_ENV !== 'test') {
        const server = this.app.listen(this.port, () => {
          console.log(`API running in port: ${this.port}`)
        });
        return server;
      }
      return this.app;
    }

    listenSocket() {
      const server = this.server.listen(this.port_socket, () => {
        console.log(`Socket running in port: ${this.port_socket}`)
      });
    }
}

/**
 * Initialize the middleware.
 */
 function initializeMiddlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json({ limit: '5mb' }));
    this.app.use(cors({
        origin: '*',
        methods: [
            'GET',
            'POST',
            'PUT',
            'DELETE',
            'PATCH',
            ], allowedHeaders: ['Content-Type', 'Authorization', 'timezone'],
        }),
    );
  }

  /**
 * Set the route files.
 */
function initializeRouter() {
    const routes = this.router;
    for (const route in routes) {
      if (Object.prototype.hasOwnProperty.call(routes, route)) {
        const element = routes[route];
        this.app.use(element);
      }
    }
  }

  HttpServer.prototype.initConfig = function() {
    initializeMiddlewares.call(this);
    initializeRouter.call(this);
  };
  
  
  module.exports = HttpServer;