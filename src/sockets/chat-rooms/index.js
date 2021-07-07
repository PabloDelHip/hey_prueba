const { RoomsRepository, ParticipantsRepository } = require('../../schemas');
const RoomsController = require('./chat-room.controller');
const RoomsService = require('./chat-room.service');

const roomsService = new RoomsService(RoomsRepository, ParticipantsRepository);

module.exports = { RoomsController: new RoomsController(roomsService) };