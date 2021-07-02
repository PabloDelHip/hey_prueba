const router = require('express').Router();
const UsersResource = require('../modules/users/users.resource');

router.use('/users', UsersResource);

module.exports = router;