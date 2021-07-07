const mongoose = require('mongoose');

const ParticipantsSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true
    },
    id_socket: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    }
  }, { timestamps: true });
  
  module.exports = { ParticipantsSchema };