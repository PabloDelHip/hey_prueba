class RoomsService {

    constructor(RoomsRepository) {
        this.RoomsRepository = RoomsRepository;
    }
    

    getAllMessages() {
        return new Promise((resolve, reject) => {
          this.RoomsRepository
              .getAllMessages()
              .then((user) => resolve(user))
              .catch((error) => reject(error));
        });
    }
}

module.exports = RoomsService;