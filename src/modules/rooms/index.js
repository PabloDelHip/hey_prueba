const { RoomsRepository } = require('../../schemas');
const RoomsController = require('./rooms.controller');
const RoomsService = require('./rooms.service');

const roomsService = new RoomsService(RoomsRepository);

module.exports = { RoomsController: new RoomsController(roomsService) };