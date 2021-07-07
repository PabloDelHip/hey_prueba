const mongoose = require('mongoose');

const RoomsSchema = new mongoose.Schema({
    user_name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['image', 'text'],
    },
    text: { type: String },
    url: { type: String }
  }, { timestamps: true });
  
  module.exports = { RoomsSchema };