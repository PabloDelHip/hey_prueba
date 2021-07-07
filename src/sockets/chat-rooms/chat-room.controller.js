const { ObjectParser } = require('../../support');

class chatRoomController {

    /**
     * Rooms service
     * @Injectable
     * @param {Object} chatRoomService Chat rooms service
     */
    constructor(chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

     /**
   * Add participant
   * @param {Object} userData user Data
   * @param {String} room room
   * @returns {Promise} participants
   */
    addParticipant(userData) {
        return new Promise((resolve, reject) => {
            this.chatRoomService
                .addParticipant(userData)
                .then((participantsData) => resolve(participantsData))
                .catch((error) => { return reject(error); });
        });
    }

    /**
   * Remove participant
   * @param {String} socket_id socket_id
   * @returns {Promise} participants
   */
    removeParticipant(socket_id) {
        return new Promise((resolve, reject) => {
            this.chatRoomService
                .removeParticipant(socket_id)
                .then((participantsData) => resolve(participantsData))
                .catch((error) => { return reject(error); });
        });
    }

    /**
   * Save messages
   * @param {Object} dataMessage Data Message
   * @returns {Promise} Messages
   */
    saveMessage(dataMessage) {
        return new Promise((resolve, reject) => {
            this.chatRoomService
                .saveMessage(dataMessage)
                .then((messageData) => resolve(messageData))
                .catch((error) => { return reject(error); });
        });
    }

}

module.exports = chatRoomController;