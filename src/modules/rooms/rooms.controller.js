const { ObjectParser } = require('../../support');
class RoomsController { 
    /**
     * Rooms service
     * @Injectable
     * @param {Object} RoomsService Rooms service
     */
    constructor(RoomsService) {
        this.RoomsService = RoomsService;
    }

    /**
   * Get all messages
   * @returns {Promise} messages
   */
    getAllMessages() {
        return new Promise((resolve, reject) => {
            this.RoomsService
                .getAllMessages()
                .then((messages) => { return resolve(ObjectParser.responseOf(201, messages)); })
                .catch((error) => { return reject(error); });
        });
    }
}

module.exports = RoomsController;