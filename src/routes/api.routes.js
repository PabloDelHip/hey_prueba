const router = require('express').Router();
const RoomsResource = require('../modules/rooms/rooms.resource');

// ---------- Rooms modules----------
router.use('/rooms', RoomsResource);

module.exports = router;