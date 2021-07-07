const { Database } = require('../../support');
const { ParticipantsSchema  } = require('./participants.schema');
 /**
   * Add participant
   * @param {Object} userData user Data
   * @param {String} room room
   * @returns {Promise} participants
   */
 function addParticipant(userData) {
   return new Promise((resolve, reject) => {
     const participantsSchema = Database.getModel('participants', ParticipantsSchema);
     participantsSchema.create(userData)
       .then((participants) => resolve(participants))
       .catch((err) => {
         return reject({error: {
             error: err.message
         }})
       });
   });
 }

 /**
   * Find all participant
   * @returns {Promise} participants
   */
 function findAllParticipants() {
   return new Promise((resolve, reject) => {
     const participantsSchema = Database.getModel('participants', ParticipantsSchema);
     participantsSchema.find({ status: true})
       .then((participants) => resolve(participants))
       .catch((err) => {
         return reject({error: {
             error: err.message
         }})
       });
   });
 }

 /**
   * Remove participant
   * @param {String} socket_id socket_id
   * @returns {Promise} participants
   */
 function removeParticipant(id_socket) {
  return new Promise((resolve, reject) => {
    const participantsSchema = Database.getModel('participants', ParticipantsSchema);
    participantsSchema.findOneAndUpdate(
           { id_socket: id_socket},
          { $set: { status: false } },
          { new: true },
      )
      .then((chat) => resolve(chat))
      .catch((err) => {
        return reject({error: {
            error: err.message
        }})
      });
  });
}

module.exports = { addParticipant, removeParticipant, findAllParticipants }