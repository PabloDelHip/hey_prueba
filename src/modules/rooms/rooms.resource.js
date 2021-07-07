const router = require('express').Router();
const { RoomsController } = require('./index');

router.get('/messages', (req, res) => {
    RoomsController
        .getAllMessages()
        .then(({ status = 200, data = {} }) => { return res.status(status).json(data); })
        .catch(({ status = 500, error = {} }) => res.status(status).json(error));
});

module.exports = router;