const chatRoom = require('./chat-rooms/chat-room.listener')
module.exports = function listeners(io) {
  io.on('connection', (socket) => {
    chatRoom.connect(io, socket);
  });
};