class RoomsService {

    /**
       * Repositories
       * @Injectable
       * @param {Object} RoomsRepository Rooms repository
       */
    constructor(RoomsRepository) {
        this.RoomsRepository = RoomsRepository;
    }
    
    /**
   * Get all messages
   * @returns {Promise} messages
   */
    getAllMessages() {
        return new Promise((resolve, reject) => {
          this.RoomsRepository
              .getAllMessages()
              .then((messages) => resolve(messages))
              .catch((error) => reject(error));
        });
    }
}

module.exports = RoomsService;