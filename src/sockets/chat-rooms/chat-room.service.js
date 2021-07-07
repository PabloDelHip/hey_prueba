class chatRoomService {

    constructor(chatRoomRepository, participantsRepository) {
        this.chatRoomRepository = chatRoomRepository;
        this.participantsRepository = participantsRepository
    }

    addParticipant(userData, room) {
        return new Promise((resolve, reject) => {
            this.participantsRepository
                .addParticipant(userData, room)
                .then(() => this.participantsRepository.findAllParticipants())
                .then((participantsData) => resolve(participantsData))
                .catch((error) => { return reject(error); });
        });
    }

    removeParticipant(socket_id) {
        return new Promise((resolve, reject) => {
            this.participantsRepository
                .removeParticipant(socket_id)
                .then(() => this.participantsRepository.findAllParticipants())
                .then((participantsData) => resolve(participantsData))
                .catch((error) => { return reject(error); });
        });
    }

    saveMessage(dataMessage) {
        return new Promise((resolve, reject) => {
            this.chatRoomRepository
                .saveMessage(dataMessage)
                .then((messageData) => resolve(messageData))
                .catch((error) => { return reject(error); });
        });
    }


}

module.exports = chatRoomService;