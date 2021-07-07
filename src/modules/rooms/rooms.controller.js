const { ObjectParser } = require('../../support');
class RoomsController { 

    constructor(RoomsService) {
        this.RoomsService = RoomsService;
    }

    getAllMessages() {
        return new Promise((resolve, reject) => {
            this.RoomsService
                .getAllMessages()
                .then((user) => { return resolve(ObjectParser.responseOf(201, user)); })
                .catch((error) => { return reject(error); });
        });
    }
}

module.exports = RoomsController;