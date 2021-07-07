const { ObjectParser } = require('../../support');

class chatRoomController {

    constructor(chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    addParticipant(userData, room) {
        return new Promise((resolve, reject) => {
            this.chatRoomService
                .addParticipant(userData, room)
                .then((participantsData) => resolve(participantsData))
                .catch((error) => { return reject(error); });
        });
    }

    removeParticipant(socket_id) {
        return new Promise((resolve, reject) => {
            this.chatRoomService
                .removeParticipant(socket_id)
                .then((participantsData) => resolve(participantsData))
                .catch((error) => { return reject(error); });
        });
    }

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