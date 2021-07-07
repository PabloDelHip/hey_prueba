const { Database } = require('../../support');
const { RoomsSchema  } = require('./chat-rooms.schema');

   /**
   * Save messages
   * @param {Object} dataMessage Data Message
   * @returns {Promise} Messages
   */
 function saveMessage(messageData) {
  return new Promise((resolve, reject) => {
    const roomsSchema = Database.getModel('chat-rooms', RoomsSchema);
    roomsSchema.create(messageData)
        .then((chat) => resolve(chat))
        .catch((err) => {
          return reject({error: {
              error: err.message
          }})
        });
  });
}

 /**
   * Get all messages
   * @returns {Promise} messages
   */
function getAllMessages() {
  return new Promise((resolve, reject) => {
    const roomsSchema = Database.getModel('chat-rooms', RoomsSchema);
    roomsSchema.find({})
        .then((messages) => resolve(messages))
        .catch((err) => {
          return reject({error: {
              error: err.message
          }})
        });
  });
}

 

  module.exports = { saveMessage, getAllMessages }