const router = require('express').Router();
const RoomsResource = require('../modules/rooms/rooms.resource');

router.use('/rooms', RoomsResource);

module.exports = router;