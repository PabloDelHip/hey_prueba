const { Database } = require('../../support');
const { ParticipantsSchema  } = require('./participants.schema');

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