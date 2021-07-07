class chatRoomService {

    /**
       * Repositories
       * @Injectable
       * @param {Object} chatRoomRepository Chat repository
       * @param {Object} participantsRepository participant repository
       */
    constructor(chatRoomRepository, participantsRepository) {
        this.chatRoomRepository = chatRoomRepository;
        this.participantsRepository = participantsRepository
    }

     /**
   * Add participant
   * @param {Object} userData user Data
   * @param {String} room room
   * @returns {Promise} participants
   */
    addParticipant(userData) {
        return new Promise((resolve, reject) => {
            this.participantsRepository
                .addParticipant(userData)
                .then(() => this.participantsRepository.findAllParticipants())
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
            this.participantsRepository
                .removeParticipant(socket_id)
                .then(() => this.participantsRepository.findAllParticipants())
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
            this.chatRoomRepository
                .saveMessage(dataMessage)
                .then((messageData) => resolve(messageData))
                .catch((error) => { return reject(error); });
        });
    }


}

module.exports = chatRoomService;